(ns lt.plugins.ltinator
  (:require [lt.object :as object]
            [lt.objs.app :as app]
            [lt.objs.tabs :as tabs]
            [lt.objs.workspace :as workspace]
            [lt.objs.command :as cmd]
            [lt.objs.sidebar.command :as scmd]
            [lt.objs.files :as files]
            [lt.objs.notifos :as notifos]
            [lt.objs.opener :as opener]
            [lt.objs.context :as ctx]
            [lt.objs.sidebar.workspace :as sworkspace]
            [lt.objs.titlebar :as titlebar]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defonce project-directory (atom nil))

(defonce opened-project-path (atom nil))

(defn- project-opened?
  []
  (if @opened-project-path
    true
    false))

(defn- check-project-dir
  []
  (if (files/dir? @project-directory)
    true
    (let [msg (if (nil? @project-directory)
                "Behavior of `:lt.plugins.ltinator/set-directory` has not been set."
                (str @project-directory " is not correct directory path."))]
      (notifos/set-msg! msg)
      nil)))

(defn- current-folders
  []
  (vec (:folders @workspace/current-ws)))

(defn- current-tab-paths
  []
  (let [tabsets (:tabsets @tabs/multi)]
    (mapv (fn [tabset]
            (vec
             (for [tab (:objs @tabset)
                   :let [path (-> @tab :info :path)]
                   :when path]
               path)))
          tabsets)))

(defn- current-project
  []
  {:workspace (current-folders)
   :tabsets (current-tab-paths)})

(defn- path->project-name
  [path]
  (-> path files/basename files/without-ext))

(defn- add-ext
  [path extname]
  (if (empty? (files/ext path))
    (str path extname)
    path))

(defn- load-project
  [path]
  (when (files/file? path)
    (let [s (files/bomless-read path)]
      (when-not (empty? s)
        (cljs.reader/read-string s)))))

(defn- item->project
  [item]
  (load-project (:path item)))

(defn- add-items
  []
  (when (check-project-dir)
    (for [path (files/full-path-ls @project-directory)
          :when (= (files/ext path) "edn")]
      (hash-map :name (path->project-name path) :path path))))

(defn- selector
  [opts]
  (doto (scmd/filter-list opts)
    (object/add-behavior! ::set-projects)))

(def add-selector
  (selector {:items add-items
             :key :name
             :transform #(str "<p>" %3 "</p><p class='binding'>" (:path %4) "</p>")}))

(defn- open-tabs
  [paths]
  (doseq [path paths]
    (object/raise opener/opener :open! path)))

(defn- open-tabsets
  [project]
  (let [tabset (:tabsets project)
        cur-ts (ctx/->obj :tabset)]
    (doseq [[idx paths] (map-indexed vector tabset)]
      (let [ts (if (= idx 0)
                 cur-ts
                 (cmd/exec! :tabset.new))]
        (tabs/activate-tabset ts)
        (open-tabs paths)))
    (tabs/active! (get-in @cur-ts [:objs 0]))))

(defn- change-to-only-one-tabset
  []
  (let [current-tabset-num (count (@tabs/multi :tabsets))]
    (dotimes [n (- current-tabset-num 1)]
      (cmd/exec! :tabset.close))))

(defn- open-project
  [project]
  (let [ws workspace/current-ws
        tabset-num (count (:tabsets project))]
    (doseq [folder (:folders @sworkspace/tree)]
      (object/raise ws :remove.folder! (:path @folder)))
    (doseq [f (:workspace project)]
      (object/raise sworkspace/tree :workspace.add.folder! f))
    (cmd/exec! :tabs.close-all)
    (change-to-only-one-tabset)
    (open-tabsets project)))

(defn- save
  [path project]
  (files/save path (str project))
  (notifos/set-msg! (str "Saved: " path)))

(defn- change-title
  [title]
  (set! (.-title titlebar/win) title))

(defn- add-project-name-to-title
  [path]
  (let [name (path->project-name path)
        title (str "Light Table [" name "]")]
    (change-title title)))

(defn- change-opened-project-path
  [path]
  (reset! opened-project-path path)
  (add-project-name-to-title path))

(defn- clear-opened-project
  []
  (reset! opened-project-path nil)
  (change-title "Light Table"))


;;;
;;; UIs
;;;

(defui save-project [path project]
  [:input {:type "file" :nwsaveas (or path true)}]
  :change (fn []
            (this-as me
                     (let [path (-> me dom/val (add-ext ".edn"))]
                       (save path project)
                       (change-opened-project-path path)))))


;;;
;;; Behaviors
;;;

(behavior ::set-directory
          :triggers #{:object.instant}
          :type :user
          :exclusive true
          :desc "Ltinator: Set directory to search project's configurations"
          :reaction (fn [this dir]
                      (reset! project-directory dir)))

(behavior ::set-projects
          :triggers #{:select}
          :reaction (fn [this v]
                      (scmd/exec-active! v)))

(behavior ::auto-save
          :triggers #{:close}
          :type :user
          :desc "Ltinator: Set auto save or not"
          :reaction (fn [this save?]
                      (app/prevent-close)
                      (when (and save? (check-project-dir))
                        (let [path (str @project-directory "/auto-saved.edn")]
                          (save path (current-project))))
                      (app/close true)))

(behavior ::auto-load
          :triggers #{:post-init}
          :type :user
          :desc "Ltinator: Set auto load or not"
          :reaction (fn [this load?]
                      (when (and load? (check-project-dir))
                        (let [path (str @project-directory "/auto-saved.edn")]
                          (when-let [project (load-project path)]
                            (notifos/set-msg! (str "Loaded: " path))
                            (open-project project))))))


;;;
;;; Commands
;;;

(cmd/command {:command :ltinator.open-project
              :desc "Ltinator: Select project to open"
              :options add-selector
              :exec (fn [item]
                      (let [path (:path item)]
                        (if-let [project (item->project item)]
                          (do
                            (open-project project)
                            (change-opened-project-path path))
                          (notifos/set-msg! (str "Failed to read project file: " path)))))})

(cmd/command {:command :ltinator.save-project-as
              :desc "Ltinator: Save project as.."
              :exec (fn []
                      (when (check-project-dir)
                        (let [path (str @project-directory "/new-project.edn")
                              s (save-project path (current-project))]
                          (set! opener/active-dialog s)
                          (dom/trigger s :click))))})

(cmd/command {:command :ltinator.save-project
              :desc "Ltinator: Save project"
              :exec (fn []
                      (when (check-project-dir)
                        (if (project-opened?)
                          (save @opened-project-path (current-project))
                          (cmd/exec! :ltinator.save-project-as))))})

(cmd/command {:command :ltinator.clear-project
              :desc "Ltinator: Clear opened project"
              :exec (fn []
                      (clear-opened-project))})
