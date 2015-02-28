if(!lt.util.load.provided_QMARK_('lt.plugins.ltinator')) {
goog.provide('lt.plugins.ltinator');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
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
goog.require('lt.objs.command');
if(typeof lt.plugins.ltinator.project_directory !== 'undefined')
{} else
{lt.plugins.ltinator.project_directory = cljs.core.atom.call(null,null);
}
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
return (function iter__7850(s__7851){return (new cljs.core.LazySeq(null,((function (tabsets){
return (function (){var s__7851__$1 = s__7851;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7851__$1);if(temp__4092__auto__)
{var s__7851__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7851__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__7851__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__7853 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__7852 = 0;while(true){
if((i__7852 < size__7087__auto__))
{var tab = cljs.core._nth.call(null,c__7086__auto__,i__7852);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{cljs.core.chunk_append.call(null,b__7853,path);
{
var G__7919 = (i__7852 + 1);
i__7852 = G__7919;
continue;
}
} else
{{
var G__7920 = (i__7852 + 1);
i__7852 = G__7920;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7853),iter__7850.call(null,cljs.core.chunk_rest.call(null,s__7851__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7853),null);
}
} else
{var tab = cljs.core.first.call(null,s__7851__$2);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{return cljs.core.cons.call(null,path,iter__7850.call(null,cljs.core.rest.call(null,s__7851__$2)));
} else
{{
var G__7921 = cljs.core.rest.call(null,s__7851__$2);
s__7851__$1 = G__7921;
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
lt.plugins.ltinator.load_project = (function load_project(path){if(cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,path)))
{var s = lt.objs.files.bomless_read.call(null,path);if(cljs.core.empty_QMARK_.call(null,s))
{return null;
} else
{return cljs.reader.read_string.call(null,s);
}
} else
{return null;
}
});
lt.plugins.ltinator.item__GT_project = (function item__GT_project(item){return lt.plugins.ltinator.load_project.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(item));
});
lt.plugins.ltinator.add_items = (function add_items(){if(cljs.core.truth_(lt.plugins.ltinator.check_project_dir.call(null)))
{return cljs.core.map.call(null,(function (p1__7854_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"path","path",1017337751)],[lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,p1__7854_SHARP_)),p1__7854_SHARP_]);
}),lt.objs.files.full_path_ls.call(null,cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)));
} else
{return null;
}
});
lt.plugins.ltinator.selector = (function selector(opts){var G__7856 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__7856,new cljs.core.Keyword("lt.plugins.ltinator","set-projects","lt.plugins.ltinator/set-projects",1815778453));
return G__7856;
});
lt.plugins.ltinator.add_selector = lt.plugins.ltinator.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.ltinator.add_items,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__7859_SHARP_,p2__7860_SHARP_,p3__7857_SHARP_,p4__7858_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(p3__7857_SHARP_),cljs.core.str("</p><p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(p4__7858_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.ltinator.open_tabs = (function open_tabs(paths){var seq__7865 = cljs.core.seq.call(null,paths);var chunk__7866 = null;var count__7867 = 0;var i__7868 = 0;while(true){
if((i__7868 < count__7867))
{var path = cljs.core._nth.call(null,chunk__7866,i__7868);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__7922 = seq__7865;
var G__7923 = chunk__7866;
var G__7924 = count__7867;
var G__7925 = (i__7868 + 1);
seq__7865 = G__7922;
chunk__7866 = G__7923;
count__7867 = G__7924;
i__7868 = G__7925;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7865);if(temp__4092__auto__)
{var seq__7865__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7865__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__7865__$1);{
var G__7926 = cljs.core.chunk_rest.call(null,seq__7865__$1);
var G__7927 = c__7119__auto__;
var G__7928 = cljs.core.count.call(null,c__7119__auto__);
var G__7929 = 0;
seq__7865 = G__7926;
chunk__7866 = G__7927;
count__7867 = G__7928;
i__7868 = G__7929;
continue;
}
} else
{var path = cljs.core.first.call(null,seq__7865__$1);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__7930 = cljs.core.next.call(null,seq__7865__$1);
var G__7931 = null;
var G__7932 = 0;
var G__7933 = 0;
seq__7865 = G__7930;
chunk__7866 = G__7931;
count__7867 = G__7932;
i__7868 = G__7933;
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
lt.plugins.ltinator.open_tabsets = (function open_tabsets(project){var tabset = new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project);var cur_ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__7875_7934 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,tabset));var chunk__7876_7935 = null;var count__7877_7936 = 0;var i__7878_7937 = 0;while(true){
if((i__7878_7937 < count__7877_7936))
{var vec__7879_7938 = cljs.core._nth.call(null,chunk__7876_7935,i__7878_7937);var idx_7939 = cljs.core.nth.call(null,vec__7879_7938,0,null);var paths_7940 = cljs.core.nth.call(null,vec__7879_7938,1,null);var ts_7941 = ((cljs.core._EQ_.call(null,idx_7939,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_7941);
lt.plugins.ltinator.open_tabs.call(null,paths_7940);
{
var G__7942 = seq__7875_7934;
var G__7943 = chunk__7876_7935;
var G__7944 = count__7877_7936;
var G__7945 = (i__7878_7937 + 1);
seq__7875_7934 = G__7942;
chunk__7876_7935 = G__7943;
count__7877_7936 = G__7944;
i__7878_7937 = G__7945;
continue;
}
} else
{var temp__4092__auto___7946 = cljs.core.seq.call(null,seq__7875_7934);if(temp__4092__auto___7946)
{var seq__7875_7947__$1 = temp__4092__auto___7946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7875_7947__$1))
{var c__7119__auto___7948 = cljs.core.chunk_first.call(null,seq__7875_7947__$1);{
var G__7949 = cljs.core.chunk_rest.call(null,seq__7875_7947__$1);
var G__7950 = c__7119__auto___7948;
var G__7951 = cljs.core.count.call(null,c__7119__auto___7948);
var G__7952 = 0;
seq__7875_7934 = G__7949;
chunk__7876_7935 = G__7950;
count__7877_7936 = G__7951;
i__7878_7937 = G__7952;
continue;
}
} else
{var vec__7880_7953 = cljs.core.first.call(null,seq__7875_7947__$1);var idx_7954 = cljs.core.nth.call(null,vec__7880_7953,0,null);var paths_7955 = cljs.core.nth.call(null,vec__7880_7953,1,null);var ts_7956 = ((cljs.core._EQ_.call(null,idx_7954,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_7956);
lt.plugins.ltinator.open_tabs.call(null,paths_7955);
{
var G__7957 = cljs.core.next.call(null,seq__7875_7947__$1);
var G__7958 = null;
var G__7959 = 0;
var G__7960 = 0;
seq__7875_7934 = G__7957;
chunk__7876_7935 = G__7958;
count__7877_7936 = G__7959;
i__7878_7937 = G__7960;
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
var G__7961 = (n + 1);
n = G__7961;
continue;
}
} else
{return null;
}
break;
}
});
lt.plugins.ltinator.open_project = (function open_project(project){var ws = lt.objs.workspace.current_ws;var tabset_num = cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project));var seq__7889_7962 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.workspace.tree)));var chunk__7890_7963 = null;var count__7891_7964 = 0;var i__7892_7965 = 0;while(true){
if((i__7892_7965 < count__7891_7964))
{var folder_7966 = cljs.core._nth.call(null,chunk__7890_7963,i__7892_7965);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"remove.folder!","remove.folder!",1531423099),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,folder_7966)));
{
var G__7967 = seq__7889_7962;
var G__7968 = chunk__7890_7963;
var G__7969 = count__7891_7964;
var G__7970 = (i__7892_7965 + 1);
seq__7889_7962 = G__7967;
chunk__7890_7963 = G__7968;
count__7891_7964 = G__7969;
i__7892_7965 = G__7970;
continue;
}
} else
{var temp__4092__auto___7971 = cljs.core.seq.call(null,seq__7889_7962);if(temp__4092__auto___7971)
{var seq__7889_7972__$1 = temp__4092__auto___7971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7889_7972__$1))
{var c__7119__auto___7973 = cljs.core.chunk_first.call(null,seq__7889_7972__$1);{
var G__7974 = cljs.core.chunk_rest.call(null,seq__7889_7972__$1);
var G__7975 = c__7119__auto___7973;
var G__7976 = cljs.core.count.call(null,c__7119__auto___7973);
var G__7977 = 0;
seq__7889_7962 = G__7974;
chunk__7890_7963 = G__7975;
count__7891_7964 = G__7976;
i__7892_7965 = G__7977;
continue;
}
} else
{var folder_7978 = cljs.core.first.call(null,seq__7889_7972__$1);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"remove.folder!","remove.folder!",1531423099),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,folder_7978)));
{
var G__7979 = cljs.core.next.call(null,seq__7889_7972__$1);
var G__7980 = null;
var G__7981 = 0;
var G__7982 = 0;
seq__7889_7962 = G__7979;
chunk__7890_7963 = G__7980;
count__7891_7964 = G__7981;
i__7892_7965 = G__7982;
continue;
}
}
} else
{}
}
break;
}
var seq__7893_7983 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"workspace","workspace",2122768391).cljs$core$IFn$_invoke$arity$1(project));var chunk__7894_7984 = null;var count__7895_7985 = 0;var i__7896_7986 = 0;while(true){
if((i__7896_7986 < count__7895_7985))
{var f_7987 = cljs.core._nth.call(null,chunk__7894_7984,i__7896_7986);lt.object.raise.call(null,lt.objs.sidebar.workspace.tree,new cljs.core.Keyword(null,"workspace.add.folder!","workspace.add.folder!",1443047615),f_7987);
{
var G__7988 = seq__7893_7983;
var G__7989 = chunk__7894_7984;
var G__7990 = count__7895_7985;
var G__7991 = (i__7896_7986 + 1);
seq__7893_7983 = G__7988;
chunk__7894_7984 = G__7989;
count__7895_7985 = G__7990;
i__7896_7986 = G__7991;
continue;
}
} else
{var temp__4092__auto___7992 = cljs.core.seq.call(null,seq__7893_7983);if(temp__4092__auto___7992)
{var seq__7893_7993__$1 = temp__4092__auto___7992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7893_7993__$1))
{var c__7119__auto___7994 = cljs.core.chunk_first.call(null,seq__7893_7993__$1);{
var G__7995 = cljs.core.chunk_rest.call(null,seq__7893_7993__$1);
var G__7996 = c__7119__auto___7994;
var G__7997 = cljs.core.count.call(null,c__7119__auto___7994);
var G__7998 = 0;
seq__7893_7983 = G__7995;
chunk__7894_7984 = G__7996;
count__7895_7985 = G__7997;
i__7896_7986 = G__7998;
continue;
}
} else
{var f_7999 = cljs.core.first.call(null,seq__7893_7993__$1);lt.object.raise.call(null,lt.objs.sidebar.workspace.tree,new cljs.core.Keyword(null,"workspace.add.folder!","workspace.add.folder!",1443047615),f_7999);
{
var G__8000 = cljs.core.next.call(null,seq__7893_7993__$1);
var G__8001 = null;
var G__8002 = 0;
var G__8003 = 0;
seq__7893_7983 = G__8000;
chunk__7894_7984 = G__8001;
count__7895_7985 = G__8002;
i__7896_7986 = G__8003;
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
lt.plugins.ltinator.save = (function save(path,project){return lt.objs.files.save.call(null,path,[cljs.core.str(project)].join(''));
});
lt.plugins.ltinator.save_project = (function save_project(path,project){var e__7762__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"file",new cljs.core.Keyword(null,"nwsaveas","nwsaveas",1073817834),(function (){var or__6371__auto__ = path;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return true;
}
})()], null)], null));var seq__7903_8004 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),((function (e__7762__auto__){
return (function (){var me = this;if(cljs.core.empty_QMARK_.call(null,lt.util.dom.val.call(null,me)))
{return null;
} else
{var path__$1 = ((cljs.core.empty_QMARK_.call(null,lt.objs.files.ext.call(null,lt.util.dom.val.call(null,me))))?[cljs.core.str(lt.util.dom.val.call(null,me)),cljs.core.str(".edn")].join(''):lt.util.dom.val.call(null,me));lt.plugins.ltinator.save.call(null,path__$1,project);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Saved: "),cljs.core.str(path__$1)].join(''));
}
});})(e__7762__auto__))
], null)));var chunk__7904_8005 = null;var count__7905_8006 = 0;var i__7906_8007 = 0;while(true){
if((i__7906_8007 < count__7905_8006))
{var vec__7907_8008 = cljs.core._nth.call(null,chunk__7904_8005,i__7906_8007);var ev__7763__auto___8009 = cljs.core.nth.call(null,vec__7907_8008,0,null);var func__7764__auto___8010 = cljs.core.nth.call(null,vec__7907_8008,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___8009,func__7764__auto___8010);
{
var G__8011 = seq__7903_8004;
var G__8012 = chunk__7904_8005;
var G__8013 = count__7905_8006;
var G__8014 = (i__7906_8007 + 1);
seq__7903_8004 = G__8011;
chunk__7904_8005 = G__8012;
count__7905_8006 = G__8013;
i__7906_8007 = G__8014;
continue;
}
} else
{var temp__4092__auto___8015 = cljs.core.seq.call(null,seq__7903_8004);if(temp__4092__auto___8015)
{var seq__7903_8016__$1 = temp__4092__auto___8015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7903_8016__$1))
{var c__7119__auto___8017 = cljs.core.chunk_first.call(null,seq__7903_8016__$1);{
var G__8018 = cljs.core.chunk_rest.call(null,seq__7903_8016__$1);
var G__8019 = c__7119__auto___8017;
var G__8020 = cljs.core.count.call(null,c__7119__auto___8017);
var G__8021 = 0;
seq__7903_8004 = G__8018;
chunk__7904_8005 = G__8019;
count__7905_8006 = G__8020;
i__7906_8007 = G__8021;
continue;
}
} else
{var vec__7908_8022 = cljs.core.first.call(null,seq__7903_8016__$1);var ev__7763__auto___8023 = cljs.core.nth.call(null,vec__7908_8022,0,null);var func__7764__auto___8024 = cljs.core.nth.call(null,vec__7908_8022,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___8023,func__7764__auto___8024);
{
var G__8025 = cljs.core.next.call(null,seq__7903_8016__$1);
var G__8026 = null;
var G__8027 = 0;
var G__8028 = 0;
seq__7903_8004 = G__8025;
chunk__7904_8005 = G__8026;
count__7905_8006 = G__8027;
i__7906_8007 = G__8028;
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
{var path_8029 = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join('');lt.plugins.ltinator.save.call(null,path_8029,lt.plugins.ltinator.current_project.call(null));
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
{var path = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join('');var temp__4092__auto__ = lt.plugins.ltinator.load_project.call(null,path);if(cljs.core.truth_(temp__4092__auto__))
{var project = temp__4092__auto__;lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Loaded: "),cljs.core.str(path)].join(''));
return lt.plugins.ltinator.open_project.call(null,project);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltinator","auto-load","lt.plugins.ltinator/auto-load",1204291414),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltinator.__BEH__auto_load,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Set auto load or not",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltinator.open-project","ltinator.open-project",1096811155),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Select project to open",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltinator.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){var temp__4090__auto__ = lt.plugins.ltinator.item__GT_project.call(null,item);if(cljs.core.truth_(temp__4090__auto__))
{var project = temp__4090__auto__;return lt.plugins.ltinator.open_project.call(null,project);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Failed to read project file: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(item))].join(''));
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltinator.save-project","ltinator.save-project",2839067334),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Save project from current working environment",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){if(cljs.core.truth_(lt.plugins.ltinator.check_project_dir.call(null)))
{var path = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/new-project.edn")].join('');var s = lt.plugins.ltinator.save_project.call(null,path,lt.plugins.ltinator.current_project.call(null));lt.objs.opener.active_dialog = s;
return lt.util.dom.trigger.call(null,s,new cljs.core.Keyword(null,"click","click",1108654330));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=ltinator_compiled.js.map