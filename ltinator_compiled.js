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
return (function iter__7850(s__7851){return (new cljs.core.LazySeq(null,((function (tabsets){
return (function (){var s__7851__$1 = s__7851;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7851__$1);if(temp__4092__auto__)
{var s__7851__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7851__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__7851__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__7853 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__7852 = 0;while(true){
if((i__7852 < size__7087__auto__))
{var tab = cljs.core._nth.call(null,c__7086__auto__,i__7852);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{cljs.core.chunk_append.call(null,b__7853,path);
{
var G__7926 = (i__7852 + 1);
i__7852 = G__7926;
continue;
}
} else
{{
var G__7927 = (i__7852 + 1);
i__7852 = G__7927;
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
var G__7928 = cljs.core.rest.call(null,s__7851__$2);
s__7851__$1 = G__7928;
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
lt.plugins.ltinator.item__GT_project = (function item__GT_project(item){return lt.plugins.ltinator.load_project.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(item));
});
lt.plugins.ltinator.add_items = (function add_items(){if(cljs.core.truth_(lt.plugins.ltinator.check_project_dir.call(null)))
{var iter__7088__auto__ = (function iter__7858(s__7859){return (new cljs.core.LazySeq(null,(function (){var s__7859__$1 = s__7859;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7859__$1);if(temp__4092__auto__)
{var s__7859__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7859__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__7859__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__7861 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__7860 = 0;while(true){
if((i__7860 < size__7087__auto__))
{var path = cljs.core._nth.call(null,c__7086__auto__,i__7860);if(cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,path),"edn"))
{cljs.core.chunk_append.call(null,b__7861,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"path","path",1017337751)],[lt.plugins.ltinator.path__GT_project_name.call(null,path),path]));
{
var G__7929 = (i__7860 + 1);
i__7860 = G__7929;
continue;
}
} else
{{
var G__7930 = (i__7860 + 1);
i__7860 = G__7930;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7861),iter__7858.call(null,cljs.core.chunk_rest.call(null,s__7859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7861),null);
}
} else
{var path = cljs.core.first.call(null,s__7859__$2);if(cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,path),"edn"))
{return cljs.core.cons.call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"path","path",1017337751)],[lt.plugins.ltinator.path__GT_project_name.call(null,path),path]),iter__7858.call(null,cljs.core.rest.call(null,s__7859__$2)));
} else
{{
var G__7931 = cljs.core.rest.call(null,s__7859__$2);
s__7859__$1 = G__7931;
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
lt.plugins.ltinator.selector = (function selector(opts){var G__7863 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__7863,new cljs.core.Keyword("lt.plugins.ltinator","set-projects","lt.plugins.ltinator/set-projects",1815778453));
return G__7863;
});
lt.plugins.ltinator.add_selector = lt.plugins.ltinator.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.ltinator.add_items,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__7866_SHARP_,p2__7867_SHARP_,p3__7864_SHARP_,p4__7865_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(p3__7864_SHARP_),cljs.core.str("</p><p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(p4__7865_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.ltinator.open_tabs = (function open_tabs(paths){var seq__7872 = cljs.core.seq.call(null,paths);var chunk__7873 = null;var count__7874 = 0;var i__7875 = 0;while(true){
if((i__7875 < count__7874))
{var path = cljs.core._nth.call(null,chunk__7873,i__7875);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__7932 = seq__7872;
var G__7933 = chunk__7873;
var G__7934 = count__7874;
var G__7935 = (i__7875 + 1);
seq__7872 = G__7932;
chunk__7873 = G__7933;
count__7874 = G__7934;
i__7875 = G__7935;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7872);if(temp__4092__auto__)
{var seq__7872__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7872__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__7872__$1);{
var G__7936 = cljs.core.chunk_rest.call(null,seq__7872__$1);
var G__7937 = c__7119__auto__;
var G__7938 = cljs.core.count.call(null,c__7119__auto__);
var G__7939 = 0;
seq__7872 = G__7936;
chunk__7873 = G__7937;
count__7874 = G__7938;
i__7875 = G__7939;
continue;
}
} else
{var path = cljs.core.first.call(null,seq__7872__$1);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__7940 = cljs.core.next.call(null,seq__7872__$1);
var G__7941 = null;
var G__7942 = 0;
var G__7943 = 0;
seq__7872 = G__7940;
chunk__7873 = G__7941;
count__7874 = G__7942;
i__7875 = G__7943;
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
lt.plugins.ltinator.open_tabsets = (function open_tabsets(project){var tabset = new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project);var cur_ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__7882_7944 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,tabset));var chunk__7883_7945 = null;var count__7884_7946 = 0;var i__7885_7947 = 0;while(true){
if((i__7885_7947 < count__7884_7946))
{var vec__7886_7948 = cljs.core._nth.call(null,chunk__7883_7945,i__7885_7947);var idx_7949 = cljs.core.nth.call(null,vec__7886_7948,0,null);var paths_7950 = cljs.core.nth.call(null,vec__7886_7948,1,null);var ts_7951 = ((cljs.core._EQ_.call(null,idx_7949,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_7951);
lt.plugins.ltinator.open_tabs.call(null,paths_7950);
{
var G__7952 = seq__7882_7944;
var G__7953 = chunk__7883_7945;
var G__7954 = count__7884_7946;
var G__7955 = (i__7885_7947 + 1);
seq__7882_7944 = G__7952;
chunk__7883_7945 = G__7953;
count__7884_7946 = G__7954;
i__7885_7947 = G__7955;
continue;
}
} else
{var temp__4092__auto___7956 = cljs.core.seq.call(null,seq__7882_7944);if(temp__4092__auto___7956)
{var seq__7882_7957__$1 = temp__4092__auto___7956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7882_7957__$1))
{var c__7119__auto___7958 = cljs.core.chunk_first.call(null,seq__7882_7957__$1);{
var G__7959 = cljs.core.chunk_rest.call(null,seq__7882_7957__$1);
var G__7960 = c__7119__auto___7958;
var G__7961 = cljs.core.count.call(null,c__7119__auto___7958);
var G__7962 = 0;
seq__7882_7944 = G__7959;
chunk__7883_7945 = G__7960;
count__7884_7946 = G__7961;
i__7885_7947 = G__7962;
continue;
}
} else
{var vec__7887_7963 = cljs.core.first.call(null,seq__7882_7957__$1);var idx_7964 = cljs.core.nth.call(null,vec__7887_7963,0,null);var paths_7965 = cljs.core.nth.call(null,vec__7887_7963,1,null);var ts_7966 = ((cljs.core._EQ_.call(null,idx_7964,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_7966);
lt.plugins.ltinator.open_tabs.call(null,paths_7965);
{
var G__7967 = cljs.core.next.call(null,seq__7882_7957__$1);
var G__7968 = null;
var G__7969 = 0;
var G__7970 = 0;
seq__7882_7944 = G__7967;
chunk__7883_7945 = G__7968;
count__7884_7946 = G__7969;
i__7885_7947 = G__7970;
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
var G__7971 = (n + 1);
n = G__7971;
continue;
}
} else
{return null;
}
break;
}
});
lt.plugins.ltinator.open_project = (function open_project(project){var ws = lt.objs.workspace.current_ws;var tabset_num = cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project));var seq__7896_7972 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.workspace.tree)));var chunk__7897_7973 = null;var count__7898_7974 = 0;var i__7899_7975 = 0;while(true){
if((i__7899_7975 < count__7898_7974))
{var folder_7976 = cljs.core._nth.call(null,chunk__7897_7973,i__7899_7975);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"remove.folder!","remove.folder!",1531423099),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,folder_7976)));
{
var G__7977 = seq__7896_7972;
var G__7978 = chunk__7897_7973;
var G__7979 = count__7898_7974;
var G__7980 = (i__7899_7975 + 1);
seq__7896_7972 = G__7977;
chunk__7897_7973 = G__7978;
count__7898_7974 = G__7979;
i__7899_7975 = G__7980;
continue;
}
} else
{var temp__4092__auto___7981 = cljs.core.seq.call(null,seq__7896_7972);if(temp__4092__auto___7981)
{var seq__7896_7982__$1 = temp__4092__auto___7981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7896_7982__$1))
{var c__7119__auto___7983 = cljs.core.chunk_first.call(null,seq__7896_7982__$1);{
var G__7984 = cljs.core.chunk_rest.call(null,seq__7896_7982__$1);
var G__7985 = c__7119__auto___7983;
var G__7986 = cljs.core.count.call(null,c__7119__auto___7983);
var G__7987 = 0;
seq__7896_7972 = G__7984;
chunk__7897_7973 = G__7985;
count__7898_7974 = G__7986;
i__7899_7975 = G__7987;
continue;
}
} else
{var folder_7988 = cljs.core.first.call(null,seq__7896_7982__$1);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"remove.folder!","remove.folder!",1531423099),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,folder_7988)));
{
var G__7989 = cljs.core.next.call(null,seq__7896_7982__$1);
var G__7990 = null;
var G__7991 = 0;
var G__7992 = 0;
seq__7896_7972 = G__7989;
chunk__7897_7973 = G__7990;
count__7898_7974 = G__7991;
i__7899_7975 = G__7992;
continue;
}
}
} else
{}
}
break;
}
var seq__7900_7993 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"workspace","workspace",2122768391).cljs$core$IFn$_invoke$arity$1(project));var chunk__7901_7994 = null;var count__7902_7995 = 0;var i__7903_7996 = 0;while(true){
if((i__7903_7996 < count__7902_7995))
{var f_7997 = cljs.core._nth.call(null,chunk__7901_7994,i__7903_7996);lt.object.raise.call(null,lt.objs.sidebar.workspace.tree,new cljs.core.Keyword(null,"workspace.add.folder!","workspace.add.folder!",1443047615),f_7997);
{
var G__7998 = seq__7900_7993;
var G__7999 = chunk__7901_7994;
var G__8000 = count__7902_7995;
var G__8001 = (i__7903_7996 + 1);
seq__7900_7993 = G__7998;
chunk__7901_7994 = G__7999;
count__7902_7995 = G__8000;
i__7903_7996 = G__8001;
continue;
}
} else
{var temp__4092__auto___8002 = cljs.core.seq.call(null,seq__7900_7993);if(temp__4092__auto___8002)
{var seq__7900_8003__$1 = temp__4092__auto___8002;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7900_8003__$1))
{var c__7119__auto___8004 = cljs.core.chunk_first.call(null,seq__7900_8003__$1);{
var G__8005 = cljs.core.chunk_rest.call(null,seq__7900_8003__$1);
var G__8006 = c__7119__auto___8004;
var G__8007 = cljs.core.count.call(null,c__7119__auto___8004);
var G__8008 = 0;
seq__7900_7993 = G__8005;
chunk__7901_7994 = G__8006;
count__7902_7995 = G__8007;
i__7903_7996 = G__8008;
continue;
}
} else
{var f_8009 = cljs.core.first.call(null,seq__7900_8003__$1);lt.object.raise.call(null,lt.objs.sidebar.workspace.tree,new cljs.core.Keyword(null,"workspace.add.folder!","workspace.add.folder!",1443047615),f_8009);
{
var G__8010 = cljs.core.next.call(null,seq__7900_8003__$1);
var G__8011 = null;
var G__8012 = 0;
var G__8013 = 0;
seq__7900_7993 = G__8010;
chunk__7901_7994 = G__8011;
count__7902_7995 = G__8012;
i__7903_7996 = G__8013;
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
lt.plugins.ltinator.save_project = (function save_project(path,project){lt.objs.files.save.call(null,path,[cljs.core.str(project)].join(''));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Saved: "),cljs.core.str(path)].join(''));
});
lt.plugins.ltinator.save_config = (function save_config(){var path = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/.ltinator")].join('');var project_path = ((lt.plugins.ltinator.project_opened_QMARK_.call(null))?cljs.core.deref.call(null,lt.plugins.ltinator.opened_project_path):[cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join(''));var config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-saved-project-path","last-saved-project-path",4003592168),project_path], null);return lt.objs.files.save.call(null,path,[cljs.core.str(config)].join(''));
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
})()], null)], null));var seq__7910_8014 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),((function (e__7762__auto__){
return (function (){var me = this;var path__$1 = lt.plugins.ltinator.add_ext.call(null,lt.util.dom.val.call(null,me),".edn");lt.plugins.ltinator.save_project.call(null,path__$1,project);
return lt.plugins.ltinator.set_opened_project_path.call(null,path__$1);
});})(e__7762__auto__))
], null)));var chunk__7911_8015 = null;var count__7912_8016 = 0;var i__7913_8017 = 0;while(true){
if((i__7913_8017 < count__7912_8016))
{var vec__7914_8018 = cljs.core._nth.call(null,chunk__7911_8015,i__7913_8017);var ev__7763__auto___8019 = cljs.core.nth.call(null,vec__7914_8018,0,null);var func__7764__auto___8020 = cljs.core.nth.call(null,vec__7914_8018,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___8019,func__7764__auto___8020);
{
var G__8021 = seq__7910_8014;
var G__8022 = chunk__7911_8015;
var G__8023 = count__7912_8016;
var G__8024 = (i__7913_8017 + 1);
seq__7910_8014 = G__8021;
chunk__7911_8015 = G__8022;
count__7912_8016 = G__8023;
i__7913_8017 = G__8024;
continue;
}
} else
{var temp__4092__auto___8025 = cljs.core.seq.call(null,seq__7910_8014);if(temp__4092__auto___8025)
{var seq__7910_8026__$1 = temp__4092__auto___8025;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7910_8026__$1))
{var c__7119__auto___8027 = cljs.core.chunk_first.call(null,seq__7910_8026__$1);{
var G__8028 = cljs.core.chunk_rest.call(null,seq__7910_8026__$1);
var G__8029 = c__7119__auto___8027;
var G__8030 = cljs.core.count.call(null,c__7119__auto___8027);
var G__8031 = 0;
seq__7910_8014 = G__8028;
chunk__7911_8015 = G__8029;
count__7912_8016 = G__8030;
i__7913_8017 = G__8031;
continue;
}
} else
{var vec__7915_8032 = cljs.core.first.call(null,seq__7910_8026__$1);var ev__7763__auto___8033 = cljs.core.nth.call(null,vec__7915_8032,0,null);var func__7764__auto___8034 = cljs.core.nth.call(null,vec__7915_8032,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___8033,func__7764__auto___8034);
{
var G__8035 = cljs.core.next.call(null,seq__7910_8026__$1);
var G__8036 = null;
var G__8037 = 0;
var G__8038 = 0;
seq__7910_8014 = G__8035;
chunk__7911_8015 = G__8036;
count__7912_8016 = G__8037;
i__7913_8017 = G__8038;
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
{var path_8039 = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join('');lt.plugins.ltinator.save_project.call(null,path_8039,lt.plugins.ltinator.current_project.call(null));
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