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
return (function iter__8034(s__8035){return (new cljs.core.LazySeq(null,((function (tabsets){
return (function (){var s__8035__$1 = s__8035;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8035__$1);if(temp__4092__auto__)
{var s__8035__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8035__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__8035__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__8037 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__8036 = 0;while(true){
if((i__8036 < size__7087__auto__))
{var tab = cljs.core._nth.call(null,c__7086__auto__,i__8036);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{cljs.core.chunk_append.call(null,b__8037,path);
{
var G__8093 = (i__8036 + 1);
i__8036 = G__8093;
continue;
}
} else
{{
var G__8094 = (i__8036 + 1);
i__8036 = G__8094;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8037),iter__8034.call(null,cljs.core.chunk_rest.call(null,s__8035__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8037),null);
}
} else
{var tab = cljs.core.first.call(null,s__8035__$2);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{return cljs.core.cons.call(null,path,iter__8034.call(null,cljs.core.rest.call(null,s__8035__$2)));
} else
{{
var G__8095 = cljs.core.rest.call(null,s__8035__$2);
s__8035__$1 = G__8095;
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
{return cljs.core.map.call(null,(function (p1__8038_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"path","path",1017337751)],[lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,p1__8038_SHARP_)),p1__8038_SHARP_]);
}),lt.objs.files.full_path_ls.call(null,cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)));
} else
{return null;
}
});
lt.plugins.ltinator.selector = (function selector(opts){var G__8040 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__8040,new cljs.core.Keyword("lt.plugins.ltinator","set-projects","lt.plugins.ltinator/set-projects",1815778453));
return G__8040;
});
lt.plugins.ltinator.add_selector = lt.plugins.ltinator.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.ltinator.add_items,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8043_SHARP_,p2__8044_SHARP_,p3__8041_SHARP_,p4__8042_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(p3__8041_SHARP_),cljs.core.str("</p><p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(p4__8042_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.ltinator.open_tabs = (function open_tabs(paths){var seq__8049 = cljs.core.seq.call(null,paths);var chunk__8050 = null;var count__8051 = 0;var i__8052 = 0;while(true){
if((i__8052 < count__8051))
{var path = cljs.core._nth.call(null,chunk__8050,i__8052);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__8096 = seq__8049;
var G__8097 = chunk__8050;
var G__8098 = count__8051;
var G__8099 = (i__8052 + 1);
seq__8049 = G__8096;
chunk__8050 = G__8097;
count__8051 = G__8098;
i__8052 = G__8099;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8049);if(temp__4092__auto__)
{var seq__8049__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8049__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8049__$1);{
var G__8100 = cljs.core.chunk_rest.call(null,seq__8049__$1);
var G__8101 = c__7119__auto__;
var G__8102 = cljs.core.count.call(null,c__7119__auto__);
var G__8103 = 0;
seq__8049 = G__8100;
chunk__8050 = G__8101;
count__8051 = G__8102;
i__8052 = G__8103;
continue;
}
} else
{var path = cljs.core.first.call(null,seq__8049__$1);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__8104 = cljs.core.next.call(null,seq__8049__$1);
var G__8105 = null;
var G__8106 = 0;
var G__8107 = 0;
seq__8049 = G__8104;
chunk__8050 = G__8105;
count__8051 = G__8106;
i__8052 = G__8107;
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
lt.plugins.ltinator.open_tabsets = (function open_tabsets(project){var tabset = new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project);var cur_ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8059_8108 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,tabset));var chunk__8060_8109 = null;var count__8061_8110 = 0;var i__8062_8111 = 0;while(true){
if((i__8062_8111 < count__8061_8110))
{var vec__8063_8112 = cljs.core._nth.call(null,chunk__8060_8109,i__8062_8111);var idx_8113 = cljs.core.nth.call(null,vec__8063_8112,0,null);var paths_8114 = cljs.core.nth.call(null,vec__8063_8112,1,null);var ts_8115 = ((cljs.core._EQ_.call(null,idx_8113,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_8115);
lt.plugins.ltinator.open_tabs.call(null,paths_8114);
{
var G__8116 = seq__8059_8108;
var G__8117 = chunk__8060_8109;
var G__8118 = count__8061_8110;
var G__8119 = (i__8062_8111 + 1);
seq__8059_8108 = G__8116;
chunk__8060_8109 = G__8117;
count__8061_8110 = G__8118;
i__8062_8111 = G__8119;
continue;
}
} else
{var temp__4092__auto___8120 = cljs.core.seq.call(null,seq__8059_8108);if(temp__4092__auto___8120)
{var seq__8059_8121__$1 = temp__4092__auto___8120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8059_8121__$1))
{var c__7119__auto___8122 = cljs.core.chunk_first.call(null,seq__8059_8121__$1);{
var G__8123 = cljs.core.chunk_rest.call(null,seq__8059_8121__$1);
var G__8124 = c__7119__auto___8122;
var G__8125 = cljs.core.count.call(null,c__7119__auto___8122);
var G__8126 = 0;
seq__8059_8108 = G__8123;
chunk__8060_8109 = G__8124;
count__8061_8110 = G__8125;
i__8062_8111 = G__8126;
continue;
}
} else
{var vec__8064_8127 = cljs.core.first.call(null,seq__8059_8121__$1);var idx_8128 = cljs.core.nth.call(null,vec__8064_8127,0,null);var paths_8129 = cljs.core.nth.call(null,vec__8064_8127,1,null);var ts_8130 = ((cljs.core._EQ_.call(null,idx_8128,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_8130);
lt.plugins.ltinator.open_tabs.call(null,paths_8129);
{
var G__8131 = cljs.core.next.call(null,seq__8059_8121__$1);
var G__8132 = null;
var G__8133 = 0;
var G__8134 = 0;
seq__8059_8108 = G__8131;
chunk__8060_8109 = G__8132;
count__8061_8110 = G__8133;
i__8062_8111 = G__8134;
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
var G__8135 = (n + 1);
n = G__8135;
continue;
}
} else
{return null;
}
break;
}
});
lt.plugins.ltinator.open_working_environment = (function open_working_environment(project){var ws = lt.objs.workspace.current_ws;var tabset_num = cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project));var seq__8073_8136 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.workspace.tree)));var chunk__8074_8137 = null;var count__8075_8138 = 0;var i__8076_8139 = 0;while(true){
if((i__8076_8139 < count__8075_8138))
{var folder_8140 = cljs.core._nth.call(null,chunk__8074_8137,i__8076_8139);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"remove.folder!","remove.folder!",1531423099),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,folder_8140)));
{
var G__8141 = seq__8073_8136;
var G__8142 = chunk__8074_8137;
var G__8143 = count__8075_8138;
var G__8144 = (i__8076_8139 + 1);
seq__8073_8136 = G__8141;
chunk__8074_8137 = G__8142;
count__8075_8138 = G__8143;
i__8076_8139 = G__8144;
continue;
}
} else
{var temp__4092__auto___8145 = cljs.core.seq.call(null,seq__8073_8136);if(temp__4092__auto___8145)
{var seq__8073_8146__$1 = temp__4092__auto___8145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8073_8146__$1))
{var c__7119__auto___8147 = cljs.core.chunk_first.call(null,seq__8073_8146__$1);{
var G__8148 = cljs.core.chunk_rest.call(null,seq__8073_8146__$1);
var G__8149 = c__7119__auto___8147;
var G__8150 = cljs.core.count.call(null,c__7119__auto___8147);
var G__8151 = 0;
seq__8073_8136 = G__8148;
chunk__8074_8137 = G__8149;
count__8075_8138 = G__8150;
i__8076_8139 = G__8151;
continue;
}
} else
{var folder_8152 = cljs.core.first.call(null,seq__8073_8146__$1);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"remove.folder!","remove.folder!",1531423099),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,folder_8152)));
{
var G__8153 = cljs.core.next.call(null,seq__8073_8146__$1);
var G__8154 = null;
var G__8155 = 0;
var G__8156 = 0;
seq__8073_8136 = G__8153;
chunk__8074_8137 = G__8154;
count__8075_8138 = G__8155;
i__8076_8139 = G__8156;
continue;
}
}
} else
{}
}
break;
}
var seq__8077_8157 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"workspace","workspace",2122768391).cljs$core$IFn$_invoke$arity$1(project));var chunk__8078_8158 = null;var count__8079_8159 = 0;var i__8080_8160 = 0;while(true){
if((i__8080_8160 < count__8079_8159))
{var f_8161 = cljs.core._nth.call(null,chunk__8078_8158,i__8080_8160);lt.object.raise.call(null,lt.objs.sidebar.workspace.tree,new cljs.core.Keyword(null,"workspace.add.folder!","workspace.add.folder!",1443047615),f_8161);
{
var G__8162 = seq__8077_8157;
var G__8163 = chunk__8078_8158;
var G__8164 = count__8079_8159;
var G__8165 = (i__8080_8160 + 1);
seq__8077_8157 = G__8162;
chunk__8078_8158 = G__8163;
count__8079_8159 = G__8164;
i__8080_8160 = G__8165;
continue;
}
} else
{var temp__4092__auto___8166 = cljs.core.seq.call(null,seq__8077_8157);if(temp__4092__auto___8166)
{var seq__8077_8167__$1 = temp__4092__auto___8166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8077_8167__$1))
{var c__7119__auto___8168 = cljs.core.chunk_first.call(null,seq__8077_8167__$1);{
var G__8169 = cljs.core.chunk_rest.call(null,seq__8077_8167__$1);
var G__8170 = c__7119__auto___8168;
var G__8171 = cljs.core.count.call(null,c__7119__auto___8168);
var G__8172 = 0;
seq__8077_8157 = G__8169;
chunk__8078_8158 = G__8170;
count__8079_8159 = G__8171;
i__8080_8160 = G__8172;
continue;
}
} else
{var f_8173 = cljs.core.first.call(null,seq__8077_8167__$1);lt.object.raise.call(null,lt.objs.sidebar.workspace.tree,new cljs.core.Keyword(null,"workspace.add.folder!","workspace.add.folder!",1443047615),f_8173);
{
var G__8174 = cljs.core.next.call(null,seq__8077_8167__$1);
var G__8175 = null;
var G__8176 = 0;
var G__8177 = 0;
seq__8077_8157 = G__8174;
chunk__8078_8158 = G__8175;
count__8079_8159 = G__8176;
i__8080_8160 = G__8177;
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
})()], null)], null));var seq__8087_8178 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),((function (e__7762__auto__){
return (function (){var me = this;if(cljs.core.empty_QMARK_.call(null,lt.util.dom.val.call(null,me)))
{return null;
} else
{var path__$1 = ((cljs.core.empty_QMARK_.call(null,lt.objs.files.ext.call(null,lt.util.dom.val.call(null,me))))?[cljs.core.str(lt.util.dom.val.call(null,me)),cljs.core.str(".edn")].join(''):lt.util.dom.val.call(null,me));lt.plugins.ltinator.save.call(null,path__$1,project);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Saved: "),cljs.core.str(path__$1)].join(''));
}
});})(e__7762__auto__))
], null)));var chunk__8088_8179 = null;var count__8089_8180 = 0;var i__8090_8181 = 0;while(true){
if((i__8090_8181 < count__8089_8180))
{var vec__8091_8182 = cljs.core._nth.call(null,chunk__8088_8179,i__8090_8181);var ev__7763__auto___8183 = cljs.core.nth.call(null,vec__8091_8182,0,null);var func__7764__auto___8184 = cljs.core.nth.call(null,vec__8091_8182,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___8183,func__7764__auto___8184);
{
var G__8185 = seq__8087_8178;
var G__8186 = chunk__8088_8179;
var G__8187 = count__8089_8180;
var G__8188 = (i__8090_8181 + 1);
seq__8087_8178 = G__8185;
chunk__8088_8179 = G__8186;
count__8089_8180 = G__8187;
i__8090_8181 = G__8188;
continue;
}
} else
{var temp__4092__auto___8189 = cljs.core.seq.call(null,seq__8087_8178);if(temp__4092__auto___8189)
{var seq__8087_8190__$1 = temp__4092__auto___8189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8087_8190__$1))
{var c__7119__auto___8191 = cljs.core.chunk_first.call(null,seq__8087_8190__$1);{
var G__8192 = cljs.core.chunk_rest.call(null,seq__8087_8190__$1);
var G__8193 = c__7119__auto___8191;
var G__8194 = cljs.core.count.call(null,c__7119__auto___8191);
var G__8195 = 0;
seq__8087_8178 = G__8192;
chunk__8088_8179 = G__8193;
count__8089_8180 = G__8194;
i__8090_8181 = G__8195;
continue;
}
} else
{var vec__8092_8196 = cljs.core.first.call(null,seq__8087_8190__$1);var ev__7763__auto___8197 = cljs.core.nth.call(null,vec__8092_8196,0,null);var func__7764__auto___8198 = cljs.core.nth.call(null,vec__8092_8196,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___8197,func__7764__auto___8198);
{
var G__8199 = cljs.core.next.call(null,seq__8087_8190__$1);
var G__8200 = null;
var G__8201 = 0;
var G__8202 = 0;
seq__8087_8178 = G__8199;
chunk__8088_8179 = G__8200;
count__8089_8180 = G__8201;
i__8090_8181 = G__8202;
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
{var path_8203 = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join('');lt.plugins.ltinator.save.call(null,path_8203,lt.plugins.ltinator.current_project.call(null));
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
return lt.plugins.ltinator.open_working_environment.call(null,project);
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltinator","auto-load","lt.plugins.ltinator/auto-load",1204291414),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltinator.__BEH__auto_load,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Set auto load or not",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltinator.open-working-environment","ltinator.open-working-environment",1175525617),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Select project to open",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.ltinator.add_selector,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){var temp__4090__auto__ = lt.plugins.ltinator.item__GT_project.call(null,item);if(cljs.core.truth_(temp__4090__auto__))
{var project = temp__4090__auto__;return lt.plugins.ltinator.open_working_environment.call(null,project);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Failed to read project file: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(item))].join(''));
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltinator.save-project-file-from-current","ltinator.save-project-file-from-current",1886991424),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Save project file from current working environment",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){if(cljs.core.truth_(lt.plugins.ltinator.check_project_dir.call(null)))
{var path = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/new-project.edn")].join('');var s = lt.plugins.ltinator.save_project.call(null,path,lt.plugins.ltinator.current_project.call(null));lt.objs.opener.active_dialog = s;
return lt.util.dom.trigger.call(null,s,new cljs.core.Keyword(null,"click","click",1108654330));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=ltinator_compiled.js.map