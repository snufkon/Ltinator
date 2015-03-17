if(!lt.util.load.provided_QMARK_('lt.plugins.ltinator')) {
goog.provide('lt.plugins.ltinator');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.titlebar');
goog.require('lt.objs.tabs');
goog.require('lt.objs.sidebar.workspace');
goog.require('lt.objs.workspace');
goog.require('lt.objs.context');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.workspace');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.app');
goog.require('lt.objs.sidebar.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.sidebar.workspace');
goog.require('lt.objs.titlebar');
goog.require('lt.objs.command');
if(typeof lt.plugins.ltinator.project_directory !== 'undefined')
{} else
{lt.plugins.ltinator.project_directory = cljs.core.atom.call(null,null);
}
if(typeof lt.plugins.ltinator.opened_project_path !== 'undefined')
{} else
{lt.plugins.ltinator.opened_project_path = cljs.core.atom.call(null,null);
}
lt.plugins.ltinator.project_opened_QMARK_ = (function project_opened_QMARK_(){if(cljs.core.truth_(cljs.core.deref.call(null,lt.plugins.ltinator.opened_project_path)))
{return true;
} else
{return false;
}
});
lt.plugins.ltinator.auto_saved_project_QMARK_ = (function auto_saved_project_QMARK_(path){return cljs.core._EQ_.call(null,lt.objs.files.basename.call(null,path),"auto-saved.edn");
});
lt.plugins.ltinator.check_project_dir = (function check_project_dir(){if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,cljs.core.deref.call(null,lt.plugins.ltinator.project_directory))))
{return true;
} else
{var msg = (((cljs.core.deref.call(null,lt.plugins.ltinator.project_directory) == null))?"Behavior of `:lt.plugins.ltinator/set-directory` has not been set.":[cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str(" is not correct directory path.")].join(''));lt.objs.notifos.set_msg_BANG_.call(null,msg);
return null;
}
});
lt.plugins.ltinator.current_folders = (function current_folders(){return cljs.core.vec.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
});
lt.plugins.ltinator.current_tab_paths = (function current_tab_paths(){var tabsets = new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.tabs.multi));return cljs.core.mapv.call(null,((function (tabsets){
return (function (tabset){return cljs.core.vec.call(null,(function (){var iter__7088__auto__ = ((function (tabsets){
return (function iter__8596(s__8597){return (new cljs.core.LazySeq(null,((function (tabsets){
return (function (){var s__8597__$1 = s__8597;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8597__$1);if(temp__4092__auto__)
{var s__8597__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8597__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__8597__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__8599 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__8598 = 0;while(true){
if((i__8598 < size__7087__auto__))
{var tab = cljs.core._nth.call(null,c__7086__auto__,i__8598);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{cljs.core.chunk_append.call(null,b__8599,path);
{
var G__8662 = (i__8598 + 1);
i__8598 = G__8662;
continue;
}
} else
{{
var G__8663 = (i__8598 + 1);
i__8598 = G__8663;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8599),iter__8596.call(null,cljs.core.chunk_rest.call(null,s__8597__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8599),null);
}
} else
{var tab = cljs.core.first.call(null,s__8597__$2);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{return cljs.core.cons.call(null,path,iter__8596.call(null,cljs.core.rest.call(null,s__8597__$2)));
} else
{{
var G__8664 = cljs.core.rest.call(null,s__8597__$2);
s__8597__$1 = G__8664;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(tabsets))
,null,null));
});})(tabsets))
;return iter__7088__auto__.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabset)));
})());
});})(tabsets))
,tabsets);
});
lt.plugins.ltinator.current_project = (function current_project(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workspace","workspace",2122768391),lt.plugins.ltinator.current_folders.call(null),new cljs.core.Keyword(null,"tabsets","tabsets",3756175576),lt.plugins.ltinator.current_tab_paths.call(null)], null);
});
lt.plugins.ltinator.path__GT_project_name = (function path__GT_project_name(path){return lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,path));
});
lt.plugins.ltinator.add_ext = (function add_ext(path,extname){if(cljs.core.empty_QMARK_.call(null,lt.objs.files.ext.call(null,path)))
{return [cljs.core.str(path),cljs.core.str(extname)].join('');
} else
{return path;
}
});
lt.plugins.ltinator.load_edn_file = (function load_edn_file(path){if(cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,path)))
{var s = lt.objs.files.bomless_read.call(null,path);if(cljs.core.empty_QMARK_.call(null,s))
{return null;
} else
{return cljs.reader.read_string.call(null,s);
}
} else
{return null;
}
});
lt.plugins.ltinator.load_project = (function load_project(path){return lt.plugins.ltinator.load_edn_file.call(null,path);
});
lt.plugins.ltinator.load_config = (function load_config(){var path = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/.ltinator")].join('');return lt.plugins.ltinator.load_edn_file.call(null,path);
});
lt.plugins.ltinator.save_project = (function save_project(path,project){lt.objs.files.save.call(null,path,[cljs.core.str(project)].join(''));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Saved: "),cljs.core.str(path)].join(''));
});
lt.plugins.ltinator.save_config = (function save_config(){var path = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/.ltinator")].join('');var project_path = ((lt.plugins.ltinator.project_opened_QMARK_.call(null))?cljs.core.deref.call(null,lt.plugins.ltinator.opened_project_path):[cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join(''));var config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-saved-project-path","last-saved-project-path",4003592168),project_path], null);return lt.objs.files.save.call(null,path,[cljs.core.str(config)].join(''));
});
lt.plugins.ltinator.item__GT_project = (function item__GT_project(item){return lt.plugins.ltinator.load_project.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(item));
});
lt.plugins.ltinator.add_items = (function add_items(){if(cljs.core.truth_(lt.plugins.ltinator.check_project_dir.call(null)))
{var iter__7088__auto__ = (function iter__8604(s__8605){return (new cljs.core.LazySeq(null,(function (){var s__8605__$1 = s__8605;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8605__$1);if(temp__4092__auto__)
{var s__8605__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8605__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__8605__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__8607 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__8606 = 0;while(true){
if((i__8606 < size__7087__auto__))
{var path = cljs.core._nth.call(null,c__7086__auto__,i__8606);if(cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,path),"edn"))
{cljs.core.chunk_append.call(null,b__8607,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"path","path",1017337751)],[lt.plugins.ltinator.path__GT_project_name.call(null,path),path]));
{
var G__8665 = (i__8606 + 1);
i__8606 = G__8665;
continue;
}
} else
{{
var G__8666 = (i__8606 + 1);
i__8606 = G__8666;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8607),iter__8604.call(null,cljs.core.chunk_rest.call(null,s__8605__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8607),null);
}
} else
{var path = cljs.core.first.call(null,s__8605__$2);if(cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,path),"edn"))
{return cljs.core.cons.call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"path","path",1017337751)],[lt.plugins.ltinator.path__GT_project_name.call(null,path),path]),iter__8604.call(null,cljs.core.rest.call(null,s__8605__$2)));
} else
{{
var G__8667 = cljs.core.rest.call(null,s__8605__$2);
s__8605__$1 = G__8667;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7088__auto__.call(null,lt.objs.files.full_path_ls.call(null,cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)));
} else
{return null;
}
});
lt.plugins.ltinator.selector = (function selector(opts){var G__8609 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__8609,new cljs.core.Keyword("lt.plugins.ltinator","set-projects","lt.plugins.ltinator/set-projects",1815778453));
return G__8609;
});
lt.plugins.ltinator.add_selector = lt.plugins.ltinator.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.ltinator.add_items,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8612_SHARP_,p2__8613_SHARP_,p3__8610_SHARP_,p4__8611_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(p3__8610_SHARP_),cljs.core.str("</p><p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(p4__8611_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.ltinator.open_tabs = (function open_tabs(paths){var seq__8618 = cljs.core.seq.call(null,paths);var chunk__8619 = null;var count__8620 = 0;var i__8621 = 0;while(true){
if((i__8621 < count__8620))
{var path = cljs.core._nth.call(null,chunk__8619,i__8621);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__8668 = seq__8618;
var G__8669 = chunk__8619;
var G__8670 = count__8620;
var G__8671 = (i__8621 + 1);
seq__8618 = G__8668;
chunk__8619 = G__8669;
count__8620 = G__8670;
i__8621 = G__8671;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8618);if(temp__4092__auto__)
{var seq__8618__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8618__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8618__$1);{
var G__8672 = cljs.core.chunk_rest.call(null,seq__8618__$1);
var G__8673 = c__7119__auto__;
var G__8674 = cljs.core.count.call(null,c__7119__auto__);
var G__8675 = 0;
seq__8618 = G__8672;
chunk__8619 = G__8673;
count__8620 = G__8674;
i__8621 = G__8675;
continue;
}
} else
{var path = cljs.core.first.call(null,seq__8618__$1);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__8676 = cljs.core.next.call(null,seq__8618__$1);
var G__8677 = null;
var G__8678 = 0;
var G__8679 = 0;
seq__8618 = G__8676;
chunk__8619 = G__8677;
count__8620 = G__8678;
i__8621 = G__8679;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.ltinator.open_tabsets = (function open_tabsets(project){var tabset = new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project);var cur_ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8628_8680 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,tabset));var chunk__8629_8681 = null;var count__8630_8682 = 0;var i__8631_8683 = 0;while(true){
if((i__8631_8683 < count__8630_8682))
{var vec__8632_8684 = cljs.core._nth.call(null,chunk__8629_8681,i__8631_8683);var idx_8685 = cljs.core.nth.call(null,vec__8632_8684,0,null);var paths_8686 = cljs.core.nth.call(null,vec__8632_8684,1,null);var ts_8687 = ((cljs.core._EQ_.call(null,idx_8685,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_8687);
lt.plugins.ltinator.open_tabs.call(null,paths_8686);
{
var G__8688 = seq__8628_8680;
var G__8689 = chunk__8629_8681;
var G__8690 = count__8630_8682;
var G__8691 = (i__8631_8683 + 1);
seq__8628_8680 = G__8688;
chunk__8629_8681 = G__8689;
count__8630_8682 = G__8690;
i__8631_8683 = G__8691;
continue;
}
} else
{var temp__4092__auto___8692 = cljs.core.seq.call(null,seq__8628_8680);if(temp__4092__auto___8692)
{var seq__8628_8693__$1 = temp__4092__auto___8692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8628_8693__$1))
{var c__7119__auto___8694 = cljs.core.chunk_first.call(null,seq__8628_8693__$1);{
var G__8695 = cljs.core.chunk_rest.call(null,seq__8628_8693__$1);
var G__8696 = c__7119__auto___8694;
var G__8697 = cljs.core.count.call(null,c__7119__auto___8694);
var G__8698 = 0;
seq__8628_8680 = G__8695;
chunk__8629_8681 = G__8696;
count__8630_8682 = G__8697;
i__8631_8683 = G__8698;
continue;
}
} else
{var vec__8633_8699 = cljs.core.first.call(null,seq__8628_8693__$1);var idx_8700 = cljs.core.nth.call(null,vec__8633_8699,0,null);var paths_8701 = cljs.core.nth.call(null,vec__8633_8699,1,null);var ts_8702 = ((cljs.core._EQ_.call(null,idx_8700,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_8702);
lt.plugins.ltinator.open_tabs.call(null,paths_8701);
{
var G__8703 = cljs.core.next.call(null,seq__8628_8693__$1);
var G__8704 = null;
var G__8705 = 0;
var G__8706 = 0;
seq__8628_8680 = G__8703;
chunk__8629_8681 = G__8704;
count__8630_8682 = G__8705;
i__8631_8683 = G__8706;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.tabs.active_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cur_ts),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objs","objs",1017308622),0], null)));
});
lt.plugins.ltinator.change_to_only_one_tabset = (function change_to_only_one_tabset(){var current_tabset_num = cljs.core.count.call(null,cljs.core.deref.call(null,lt.objs.tabs.multi).call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576)));var n__7219__auto__ = (current_tabset_num - 1);var n = 0;while(true){
if((n < n__7219__auto__))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close","tabset.close",2327781609));
{
var G__8707 = (n + 1);
n = G__8707;
continue;
}
} else
{return null;
}
break;
}
});
lt.plugins.ltinator.open_project = (function open_project(project){var ws = lt.objs.workspace.current_ws;var tabset_num = cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project));var seq__8642_8708 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.workspace.tree)));var chunk__8643_8709 = null;var count__8644_8710 = 0;var i__8645_8711 = 0;while(true){
if((i__8645_8711 < count__8644_8710))
{var folder_8712 = cljs.core._nth.call(null,chunk__8643_8709,i__8645_8711);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"remove.folder!","remove.folder!",1531423099),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,folder_8712)));
{
var G__8713 = seq__8642_8708;
var G__8714 = chunk__8643_8709;
var G__8715 = count__8644_8710;
var G__8716 = (i__8645_8711 + 1);
seq__8642_8708 = G__8713;
chunk__8643_8709 = G__8714;
count__8644_8710 = G__8715;
i__8645_8711 = G__8716;
continue;
}
} else
{var temp__4092__auto___8717 = cljs.core.seq.call(null,seq__8642_8708);if(temp__4092__auto___8717)
{var seq__8642_8718__$1 = temp__4092__auto___8717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8642_8718__$1))
{var c__7119__auto___8719 = cljs.core.chunk_first.call(null,seq__8642_8718__$1);{
var G__8720 = cljs.core.chunk_rest.call(null,seq__8642_8718__$1);
var G__8721 = c__7119__auto___8719;
var G__8722 = cljs.core.count.call(null,c__7119__auto___8719);
var G__8723 = 0;
seq__8642_8708 = G__8720;
chunk__8643_8709 = G__8721;
count__8644_8710 = G__8722;
i__8645_8711 = G__8723;
continue;
}
} else
{var folder_8724 = cljs.core.first.call(null,seq__8642_8718__$1);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"remove.folder!","remove.folder!",1531423099),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,folder_8724)));
{
var G__8725 = cljs.core.next.call(null,seq__8642_8718__$1);
var G__8726 = null;
var G__8727 = 0;
var G__8728 = 0;
seq__8642_8708 = G__8725;
chunk__8643_8709 = G__8726;
count__8644_8710 = G__8727;
i__8645_8711 = G__8728;
continue;
}
}
} else
{}
}
break;
}
var seq__8646_8729 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"workspace","workspace",2122768391).cljs$core$IFn$_invoke$arity$1(project));var chunk__8647_8730 = null;var count__8648_8731 = 0;var i__8649_8732 = 0;while(true){
if((i__8649_8732 < count__8648_8731))
{var f_8733 = cljs.core._nth.call(null,chunk__8647_8730,i__8649_8732);lt.object.raise.call(null,lt.objs.sidebar.workspace.tree,new cljs.core.Keyword(null,"workspace.add.folder!","workspace.add.folder!",1443047615),f_8733);
{
var G__8734 = seq__8646_8729;
var G__8735 = chunk__8647_8730;
var G__8736 = count__8648_8731;
var G__8737 = (i__8649_8732 + 1);
seq__8646_8729 = G__8734;
chunk__8647_8730 = G__8735;
count__8648_8731 = G__8736;
i__8649_8732 = G__8737;
continue;
}
} else
{var temp__4092__auto___8738 = cljs.core.seq.call(null,seq__8646_8729);if(temp__4092__auto___8738)
{var seq__8646_8739__$1 = temp__4092__auto___8738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8646_8739__$1))
{var c__7119__auto___8740 = cljs.core.chunk_first.call(null,seq__8646_8739__$1);{
var G__8741 = cljs.core.chunk_rest.call(null,seq__8646_8739__$1);
var G__8742 = c__7119__auto___8740;
var G__8743 = cljs.core.count.call(null,c__7119__auto___8740);
var G__8744 = 0;
seq__8646_8729 = G__8741;
chunk__8647_8730 = G__8742;
count__8648_8731 = G__8743;
i__8649_8732 = G__8744;
continue;
}
} else
{var f_8745 = cljs.core.first.call(null,seq__8646_8739__$1);lt.object.raise.call(null,lt.objs.sidebar.workspace.tree,new cljs.core.Keyword(null,"workspace.add.folder!","workspace.add.folder!",1443047615),f_8745);
{
var G__8746 = cljs.core.next.call(null,seq__8646_8739__$1);
var G__8747 = null;
var G__8748 = 0;
var G__8749 = 0;
seq__8646_8729 = G__8746;
chunk__8647_8730 = G__8747;
count__8648_8731 = G__8748;
i__8649_8732 = G__8749;
continue;
}
}
} else
{}
}
break;
}
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close-all","tabs.close-all",2444215630));
lt.plugins.ltinator.change_to_only_one_tabset.call(null);
return lt.plugins.ltinator.open_tabsets.call(null,project);
});
lt.plugins.ltinator.change_title = (function change_title(title){return lt.objs.titlebar.win.title = title;
});
lt.plugins.ltinator.add_project_name_to_title = (function add_project_name_to_title(path){var name = lt.plugins.ltinator.path__GT_project_name.call(null,path);var title = [cljs.core.str("Light Table ["),cljs.core.str(name),cljs.core.str("]")].join('');return lt.plugins.ltinator.change_title.call(null,title);
});
lt.plugins.ltinator.set_opened_project_path = (function set_opened_project_path(path){cljs.core.reset_BANG_.call(null,lt.plugins.ltinator.opened_project_path,path);
return lt.plugins.ltinator.add_project_name_to_title.call(null,path);
});
lt.plugins.ltinator.clear_opened_project = (function clear_opened_project(){cljs.core.reset_BANG_.call(null,lt.plugins.ltinator.opened_project_path,null);
return lt.plugins.ltinator.change_title.call(null,"Light Table");
});
lt.plugins.ltinator.save_project_input = (function save_project_input(path,project){var e__7762__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"file",new cljs.core.Keyword(null,"nwsaveas","nwsaveas",1073817834),(function (){var or__6371__auto__ = path;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return true;
}
})()], null)], null));var seq__8656_8750 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),((function (e__7762__auto__){
return (function (){var me = this;var path__$1 = lt.plugins.ltinator.add_ext.call(null,lt.util.dom.val.call(null,me),".edn");lt.plugins.ltinator.save_project.call(null,path__$1,project);
return lt.plugins.ltinator.set_opened_project_path.call(null,path__$1);
});})(e__7762__auto__))
], null)));var chunk__8657_8751 = null;var count__8658_8752 = 0;var i__8659_8753 = 0;while(true){
if((i__8659_8753 < count__8658_8752))
{var vec__8660_8754 = cljs.core._nth.call(null,chunk__8657_8751,i__8659_8753);var ev__7763__auto___8755 = cljs.core.nth.call(null,vec__8660_8754,0,null);var func__7764__auto___8756 = cljs.core.nth.call(null,vec__8660_8754,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___8755,func__7764__auto___8756);
{
var G__8757 = seq__8656_8750;
var G__8758 = chunk__8657_8751;
var G__8759 = count__8658_8752;
var G__8760 = (i__8659_8753 + 1);
seq__8656_8750 = G__8757;
chunk__8657_8751 = G__8758;
count__8658_8752 = G__8759;
i__8659_8753 = G__8760;
continue;
}
} else
{var temp__4092__auto___8761 = cljs.core.seq.call(null,seq__8656_8750);if(temp__4092__auto___8761)
{var seq__8656_8762__$1 = temp__4092__auto___8761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8656_8762__$1))
{var c__7119__auto___8763 = cljs.core.chunk_first.call(null,seq__8656_8762__$1);{
var G__8764 = cljs.core.chunk_rest.call(null,seq__8656_8762__$1);
var G__8765 = c__7119__auto___8763;
var G__8766 = cljs.core.count.call(null,c__7119__auto___8763);
var G__8767 = 0;
seq__8656_8750 = G__8764;
chunk__8657_8751 = G__8765;
count__8658_8752 = G__8766;
i__8659_8753 = G__8767;
continue;
}
} else
{var vec__8661_8768 = cljs.core.first.call(null,seq__8656_8762__$1);var ev__7763__auto___8769 = cljs.core.nth.call(null,vec__8661_8768,0,null);var func__7764__auto___8770 = cljs.core.nth.call(null,vec__8661_8768,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___8769,func__7764__auto___8770);
{
var G__8771 = cljs.core.next.call(null,seq__8656_8762__$1);
var G__8772 = null;
var G__8773 = 0;
var G__8774 = 0;
seq__8656_8750 = G__8771;
chunk__8657_8751 = G__8772;
count__8658_8752 = G__8773;
i__8659_8753 = G__8774;
continue;
}
}
} else
{}
}
break;
}
return e__7762__auto__;
});
lt.plugins.ltinator.__BEH__set_directory = (function __BEH__set_directory(this$,dir){return cljs.core.reset_BANG_.call(null,lt.plugins.ltinator.project_directory,dir);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltinator","set-directory","lt.plugins.ltinator/set-directory",1219433176),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltinator.__BEH__set_directory,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Set directory to search project's configurations",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.plugins.ltinator.__BEH__set_projects = (function __BEH__set_projects(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltinator","set-projects","lt.plugins.ltinator/set-projects",1815778453),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltinator.__BEH__set_projects,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.ltinator.__BEH__auto_save = (function __BEH__auto_save(this$,save_QMARK_){lt.objs.app.prevent_close.call(null);
if(cljs.core.truth_((function (){var and__6359__auto__ = save_QMARK_;if(cljs.core.truth_(and__6359__auto__))
{return lt.plugins.ltinator.check_project_dir.call(null);
} else
{return and__6359__auto__;
}
})()))
{if(lt.plugins.ltinator.project_opened_QMARK_.call(null))
{lt.plugins.ltinator.save_project.call(null,cljs.core.deref.call(null,lt.plugins.ltinator.opened_project_path),lt.plugins.ltinator.current_project.call(null));
} else
{var path_8775 = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join('');lt.plugins.ltinator.save_project.call(null,path_8775,lt.plugins.ltinator.current_project.call(null));
}
lt.plugins.ltinator.save_config.call(null);
} else
{}
return lt.objs.app.close.call(null,true);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltinator","auto-save","lt.plugins.ltinator/auto-save",1204224815),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltinator.__BEH__auto_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Set auto save or not",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.ltinator.__BEH__auto_load = (function __BEH__auto_load(this$,load_QMARK_){if(cljs.core.truth_((function (){var and__6359__auto__ = load_QMARK_;if(cljs.core.truth_(and__6359__auto__))
{return lt.plugins.ltinator.check_project_dir.call(null);
} else
{return and__6359__auto__;
}
})()))
{var config = lt.plugins.ltinator.load_config.call(null);var path = (function (){var or__6371__auto__ = new cljs.core.Keyword(null,"last-saved-project-path","last-saved-project-path",4003592168).cljs$core$IFn$_invoke$arity$1(config);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join('');
}
})();var temp__4092__auto__ = lt.plugins.ltinator.load_project.call(null,path);if(cljs.core.truth_(temp__4092__auto__))
{var project = temp__4092__auto__;lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Loaded: "),cljs.core.str(path)].join(''));
lt.plugins.ltinator.open_project.call(null,project);
if(lt.plugins.ltinator.auto_saved_project_QMARK_.call(null,path))
{return null;
} else
{return lt.plugins.ltinator.set_opened_project_path.call(null,path);
}
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltinator","auto-load","lt.plugins.ltinator/auto-load",1204291414),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltinator.__BEH__auto_load,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Set auto load or not",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltinator.open-project","ltinator.open-project",1096811155),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Select project to open",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltinator.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(item);var temp__4090__auto__ = lt.plugins.ltinator.item__GT_project.call(null,item);if(cljs.core.truth_(temp__4090__auto__))
{var project = temp__4090__auto__;lt.plugins.ltinator.open_project.call(null,project);
return lt.plugins.ltinator.set_opened_project_path.call(null,path);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Failed to read project file: "),cljs.core.str(path)].join(''));
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltinator.save-project-as","ltinator.save-project-as",4456624317),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Save project as..",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){if(cljs.core.truth_(lt.plugins.ltinator.check_project_dir.call(null)))
{var path = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/new-project.edn")].join('');var s = lt.plugins.ltinator.save_project_input.call(null,path,lt.plugins.ltinator.current_project.call(null));lt.objs.opener.active_dialog = s;
return lt.util.dom.trigger.call(null,s,new cljs.core.Keyword(null,"click","click",1108654330));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltinator.save-project","ltinator.save-project",2839067334),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Save project",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){if(cljs.core.truth_(lt.plugins.ltinator.check_project_dir.call(null)))
{if(lt.plugins.ltinator.project_opened_QMARK_.call(null))
{return lt.plugins.ltinator.save_project.call(null,cljs.core.deref.call(null,lt.plugins.ltinator.opened_project_path),lt.plugins.ltinator.current_project.call(null));
} else
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"ltinator.save-project-as","ltinator.save-project-as",4456624317));
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltinator.clear-project","ltinator.clear-project",2199398368),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Clear opened project",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.ltinator.clear_opened_project.call(null);
})], null));
}

//# sourceMappingURL=ltinator_compiled.js.map