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
return (function (tabset){return cljs.core.vec.call(null,(function (){var iter__7092__auto__ = ((function (tabsets){
return (function iter__8118(s__8119){return (new cljs.core.LazySeq(null,((function (tabsets){
return (function (){var s__8119__$1 = s__8119;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8119__$1);if(temp__4092__auto__)
{var s__8119__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8119__$2))
{var c__7090__auto__ = cljs.core.chunk_first.call(null,s__8119__$2);var size__7091__auto__ = cljs.core.count.call(null,c__7090__auto__);var b__8121 = cljs.core.chunk_buffer.call(null,size__7091__auto__);if((function (){var i__8120 = 0;while(true){
if((i__8120 < size__7091__auto__))
{var tab = cljs.core._nth.call(null,c__7090__auto__,i__8120);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{cljs.core.chunk_append.call(null,b__8121,path);
{
var G__8184 = (i__8120 + 1);
i__8120 = G__8184;
continue;
}
} else
{{
var G__8185 = (i__8120 + 1);
i__8120 = G__8185;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8121),iter__8118.call(null,cljs.core.chunk_rest.call(null,s__8119__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8121),null);
}
} else
{var tab = cljs.core.first.call(null,s__8119__$2);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{return cljs.core.cons.call(null,path,iter__8118.call(null,cljs.core.rest.call(null,s__8119__$2)));
} else
{{
var G__8186 = cljs.core.rest.call(null,s__8119__$2);
s__8119__$1 = G__8186;
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
;return iter__7092__auto__.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabset)));
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
{var iter__7092__auto__ = (function iter__8126(s__8127){return (new cljs.core.LazySeq(null,(function (){var s__8127__$1 = s__8127;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8127__$1);if(temp__4092__auto__)
{var s__8127__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8127__$2))
{var c__7090__auto__ = cljs.core.chunk_first.call(null,s__8127__$2);var size__7091__auto__ = cljs.core.count.call(null,c__7090__auto__);var b__8129 = cljs.core.chunk_buffer.call(null,size__7091__auto__);if((function (){var i__8128 = 0;while(true){
if((i__8128 < size__7091__auto__))
{var path = cljs.core._nth.call(null,c__7090__auto__,i__8128);if(cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,path),"edn"))
{cljs.core.chunk_append.call(null,b__8129,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"path","path",1017337751)],[lt.plugins.ltinator.path__GT_project_name.call(null,path),path]));
{
var G__8187 = (i__8128 + 1);
i__8128 = G__8187;
continue;
}
} else
{{
var G__8188 = (i__8128 + 1);
i__8128 = G__8188;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8129),iter__8126.call(null,cljs.core.chunk_rest.call(null,s__8127__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8129),null);
}
} else
{var path = cljs.core.first.call(null,s__8127__$2);if(cljs.core._EQ_.call(null,lt.objs.files.ext.call(null,path),"edn"))
{return cljs.core.cons.call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"path","path",1017337751)],[lt.plugins.ltinator.path__GT_project_name.call(null,path),path]),iter__8126.call(null,cljs.core.rest.call(null,s__8127__$2)));
} else
{{
var G__8189 = cljs.core.rest.call(null,s__8127__$2);
s__8127__$1 = G__8189;
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
});return iter__7092__auto__.call(null,lt.objs.files.full_path_ls.call(null,cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)));
} else
{return null;
}
});
lt.plugins.ltinator.selector = (function selector(opts){var G__8131 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__8131,new cljs.core.Keyword("lt.plugins.ltinator","set-projects","lt.plugins.ltinator/set-projects",1815778453));
return G__8131;
});
lt.plugins.ltinator.add_selector = lt.plugins.ltinator.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.ltinator.add_items,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8134_SHARP_,p2__8135_SHARP_,p3__8132_SHARP_,p4__8133_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(p3__8132_SHARP_),cljs.core.str("</p><p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(p4__8133_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.ltinator.open_tabs = (function open_tabs(paths){var seq__8140 = cljs.core.seq.call(null,paths);var chunk__8141 = null;var count__8142 = 0;var i__8143 = 0;while(true){
if((i__8143 < count__8142))
{var path = cljs.core._nth.call(null,chunk__8141,i__8143);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__8190 = seq__8140;
var G__8191 = chunk__8141;
var G__8192 = count__8142;
var G__8193 = (i__8143 + 1);
seq__8140 = G__8190;
chunk__8141 = G__8191;
count__8142 = G__8192;
i__8143 = G__8193;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8140);if(temp__4092__auto__)
{var seq__8140__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8140__$1))
{var c__7123__auto__ = cljs.core.chunk_first.call(null,seq__8140__$1);{
var G__8194 = cljs.core.chunk_rest.call(null,seq__8140__$1);
var G__8195 = c__7123__auto__;
var G__8196 = cljs.core.count.call(null,c__7123__auto__);
var G__8197 = 0;
seq__8140 = G__8194;
chunk__8141 = G__8195;
count__8142 = G__8196;
i__8143 = G__8197;
continue;
}
} else
{var path = cljs.core.first.call(null,seq__8140__$1);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__8198 = cljs.core.next.call(null,seq__8140__$1);
var G__8199 = null;
var G__8200 = 0;
var G__8201 = 0;
seq__8140 = G__8198;
chunk__8141 = G__8199;
count__8142 = G__8200;
i__8143 = G__8201;
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
lt.plugins.ltinator.open_tabsets = (function open_tabsets(project){var tabset = new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project);var cur_ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8150_8202 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,tabset));var chunk__8151_8203 = null;var count__8152_8204 = 0;var i__8153_8205 = 0;while(true){
if((i__8153_8205 < count__8152_8204))
{var vec__8154_8206 = cljs.core._nth.call(null,chunk__8151_8203,i__8153_8205);var idx_8207 = cljs.core.nth.call(null,vec__8154_8206,0,null);var paths_8208 = cljs.core.nth.call(null,vec__8154_8206,1,null);var ts_8209 = ((cljs.core._EQ_.call(null,idx_8207,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_8209);
lt.plugins.ltinator.open_tabs.call(null,paths_8208);
{
var G__8210 = seq__8150_8202;
var G__8211 = chunk__8151_8203;
var G__8212 = count__8152_8204;
var G__8213 = (i__8153_8205 + 1);
seq__8150_8202 = G__8210;
chunk__8151_8203 = G__8211;
count__8152_8204 = G__8212;
i__8153_8205 = G__8213;
continue;
}
} else
{var temp__4092__auto___8214 = cljs.core.seq.call(null,seq__8150_8202);if(temp__4092__auto___8214)
{var seq__8150_8215__$1 = temp__4092__auto___8214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8150_8215__$1))
{var c__7123__auto___8216 = cljs.core.chunk_first.call(null,seq__8150_8215__$1);{
var G__8217 = cljs.core.chunk_rest.call(null,seq__8150_8215__$1);
var G__8218 = c__7123__auto___8216;
var G__8219 = cljs.core.count.call(null,c__7123__auto___8216);
var G__8220 = 0;
seq__8150_8202 = G__8217;
chunk__8151_8203 = G__8218;
count__8152_8204 = G__8219;
i__8153_8205 = G__8220;
continue;
}
} else
{var vec__8155_8221 = cljs.core.first.call(null,seq__8150_8215__$1);var idx_8222 = cljs.core.nth.call(null,vec__8155_8221,0,null);var paths_8223 = cljs.core.nth.call(null,vec__8155_8221,1,null);var ts_8224 = ((cljs.core._EQ_.call(null,idx_8222,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_8224);
lt.plugins.ltinator.open_tabs.call(null,paths_8223);
{
var G__8225 = cljs.core.next.call(null,seq__8150_8215__$1);
var G__8226 = null;
var G__8227 = 0;
var G__8228 = 0;
seq__8150_8202 = G__8225;
chunk__8151_8203 = G__8226;
count__8152_8204 = G__8227;
i__8153_8205 = G__8228;
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
lt.plugins.ltinator.change_to_only_one_tabset = (function change_to_only_one_tabset(){var current_tabset_num = cljs.core.count.call(null,cljs.core.deref.call(null,lt.objs.tabs.multi).call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576)));var n__7223__auto__ = (current_tabset_num - 1);var n = 0;while(true){
if((n < n__7223__auto__))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close","tabset.close",2327781609));
{
var G__8229 = (n + 1);
n = G__8229;
continue;
}
} else
{return null;
}
break;
}
});
lt.plugins.ltinator.open_project = (function open_project(project){var ws = lt.objs.workspace.current_ws;var tabset_num = cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project));var seq__8164_8230 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.workspace.tree)));var chunk__8165_8231 = null;var count__8166_8232 = 0;var i__8167_8233 = 0;while(true){
if((i__8167_8233 < count__8166_8232))
{var folder_8234 = cljs.core._nth.call(null,chunk__8165_8231,i__8167_8233);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"remove.folder!","remove.folder!",1531423099),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,folder_8234)));
{
var G__8235 = seq__8164_8230;
var G__8236 = chunk__8165_8231;
var G__8237 = count__8166_8232;
var G__8238 = (i__8167_8233 + 1);
seq__8164_8230 = G__8235;
chunk__8165_8231 = G__8236;
count__8166_8232 = G__8237;
i__8167_8233 = G__8238;
continue;
}
} else
{var temp__4092__auto___8239 = cljs.core.seq.call(null,seq__8164_8230);if(temp__4092__auto___8239)
{var seq__8164_8240__$1 = temp__4092__auto___8239;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8164_8240__$1))
{var c__7123__auto___8241 = cljs.core.chunk_first.call(null,seq__8164_8240__$1);{
var G__8242 = cljs.core.chunk_rest.call(null,seq__8164_8240__$1);
var G__8243 = c__7123__auto___8241;
var G__8244 = cljs.core.count.call(null,c__7123__auto___8241);
var G__8245 = 0;
seq__8164_8230 = G__8242;
chunk__8165_8231 = G__8243;
count__8166_8232 = G__8244;
i__8167_8233 = G__8245;
continue;
}
} else
{var folder_8246 = cljs.core.first.call(null,seq__8164_8240__$1);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"remove.folder!","remove.folder!",1531423099),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,folder_8246)));
{
var G__8247 = cljs.core.next.call(null,seq__8164_8240__$1);
var G__8248 = null;
var G__8249 = 0;
var G__8250 = 0;
seq__8164_8230 = G__8247;
chunk__8165_8231 = G__8248;
count__8166_8232 = G__8249;
i__8167_8233 = G__8250;
continue;
}
}
} else
{}
}
break;
}
var seq__8168_8251 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"workspace","workspace",2122768391).cljs$core$IFn$_invoke$arity$1(project));var chunk__8169_8252 = null;var count__8170_8253 = 0;var i__8171_8254 = 0;while(true){
if((i__8171_8254 < count__8170_8253))
{var f_8255 = cljs.core._nth.call(null,chunk__8169_8252,i__8171_8254);lt.object.raise.call(null,lt.objs.sidebar.workspace.tree,new cljs.core.Keyword(null,"workspace.add.folder!","workspace.add.folder!",1443047615),f_8255);
{
var G__8256 = seq__8168_8251;
var G__8257 = chunk__8169_8252;
var G__8258 = count__8170_8253;
var G__8259 = (i__8171_8254 + 1);
seq__8168_8251 = G__8256;
chunk__8169_8252 = G__8257;
count__8170_8253 = G__8258;
i__8171_8254 = G__8259;
continue;
}
} else
{var temp__4092__auto___8260 = cljs.core.seq.call(null,seq__8168_8251);if(temp__4092__auto___8260)
{var seq__8168_8261__$1 = temp__4092__auto___8260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8168_8261__$1))
{var c__7123__auto___8262 = cljs.core.chunk_first.call(null,seq__8168_8261__$1);{
var G__8263 = cljs.core.chunk_rest.call(null,seq__8168_8261__$1);
var G__8264 = c__7123__auto___8262;
var G__8265 = cljs.core.count.call(null,c__7123__auto___8262);
var G__8266 = 0;
seq__8168_8251 = G__8263;
chunk__8169_8252 = G__8264;
count__8170_8253 = G__8265;
i__8171_8254 = G__8266;
continue;
}
} else
{var f_8267 = cljs.core.first.call(null,seq__8168_8261__$1);lt.object.raise.call(null,lt.objs.sidebar.workspace.tree,new cljs.core.Keyword(null,"workspace.add.folder!","workspace.add.folder!",1443047615),f_8267);
{
var G__8268 = cljs.core.next.call(null,seq__8168_8261__$1);
var G__8269 = null;
var G__8270 = 0;
var G__8271 = 0;
seq__8168_8251 = G__8268;
chunk__8169_8252 = G__8269;
count__8170_8253 = G__8270;
i__8171_8254 = G__8271;
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
lt.plugins.ltinator.save = (function save(path,project){lt.objs.files.save.call(null,path,[cljs.core.str(project)].join(''));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Saved: "),cljs.core.str(path)].join(''));
});
lt.plugins.ltinator.save_config = (function save_config(){var path = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/.ltinator")].join('');var project_path = ((lt.plugins.ltinator.project_opened_QMARK_.call(null))?cljs.core.deref.call(null,lt.plugins.ltinator.opened_project_path):[cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join(''));var config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-saved-project-path","last-saved-project-path",4003592168),project_path], null);return lt.objs.files.save.call(null,path,[cljs.core.str(config)].join(''));
});
lt.plugins.ltinator.change_title = (function change_title(title){return lt.objs.titlebar.win.title = title;
});
lt.plugins.ltinator.add_project_name_to_title = (function add_project_name_to_title(path){var name = lt.plugins.ltinator.path__GT_project_name.call(null,path);var title = [cljs.core.str("Light Table ["),cljs.core.str(name),cljs.core.str("]")].join('');return lt.plugins.ltinator.change_title.call(null,title);
});
lt.plugins.ltinator.change_opened_project_path = (function change_opened_project_path(path){cljs.core.reset_BANG_.call(null,lt.plugins.ltinator.opened_project_path,path);
return lt.plugins.ltinator.add_project_name_to_title.call(null,path);
});
lt.plugins.ltinator.clear_opened_project = (function clear_opened_project(){cljs.core.reset_BANG_.call(null,lt.plugins.ltinator.opened_project_path,null);
return lt.plugins.ltinator.change_title.call(null,"Light Table");
});
lt.plugins.ltinator.save_project = (function save_project(path,project){var e__7766__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"file",new cljs.core.Keyword(null,"nwsaveas","nwsaveas",1073817834),(function (){var or__6375__auto__ = path;if(cljs.core.truth_(or__6375__auto__))
{return or__6375__auto__;
} else
{return true;
}
})()], null)], null));var seq__8178_8272 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),((function (e__7766__auto__){
return (function (){var me = this;var path__$1 = lt.plugins.ltinator.add_ext.call(null,lt.util.dom.val.call(null,me),".edn");lt.plugins.ltinator.save.call(null,path__$1,project);
return lt.plugins.ltinator.change_opened_project_path.call(null,path__$1);
});})(e__7766__auto__))
], null)));var chunk__8179_8273 = null;var count__8180_8274 = 0;var i__8181_8275 = 0;while(true){
if((i__8181_8275 < count__8180_8274))
{var vec__8182_8276 = cljs.core._nth.call(null,chunk__8179_8273,i__8181_8275);var ev__7767__auto___8277 = cljs.core.nth.call(null,vec__8182_8276,0,null);var func__7768__auto___8278 = cljs.core.nth.call(null,vec__8182_8276,1,null);lt.util.dom.on.call(null,e__7766__auto__,ev__7767__auto___8277,func__7768__auto___8278);
{
var G__8279 = seq__8178_8272;
var G__8280 = chunk__8179_8273;
var G__8281 = count__8180_8274;
var G__8282 = (i__8181_8275 + 1);
seq__8178_8272 = G__8279;
chunk__8179_8273 = G__8280;
count__8180_8274 = G__8281;
i__8181_8275 = G__8282;
continue;
}
} else
{var temp__4092__auto___8283 = cljs.core.seq.call(null,seq__8178_8272);if(temp__4092__auto___8283)
{var seq__8178_8284__$1 = temp__4092__auto___8283;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8178_8284__$1))
{var c__7123__auto___8285 = cljs.core.chunk_first.call(null,seq__8178_8284__$1);{
var G__8286 = cljs.core.chunk_rest.call(null,seq__8178_8284__$1);
var G__8287 = c__7123__auto___8285;
var G__8288 = cljs.core.count.call(null,c__7123__auto___8285);
var G__8289 = 0;
seq__8178_8272 = G__8286;
chunk__8179_8273 = G__8287;
count__8180_8274 = G__8288;
i__8181_8275 = G__8289;
continue;
}
} else
{var vec__8183_8290 = cljs.core.first.call(null,seq__8178_8284__$1);var ev__7767__auto___8291 = cljs.core.nth.call(null,vec__8183_8290,0,null);var func__7768__auto___8292 = cljs.core.nth.call(null,vec__8183_8290,1,null);lt.util.dom.on.call(null,e__7766__auto__,ev__7767__auto___8291,func__7768__auto___8292);
{
var G__8293 = cljs.core.next.call(null,seq__8178_8284__$1);
var G__8294 = null;
var G__8295 = 0;
var G__8296 = 0;
seq__8178_8272 = G__8293;
chunk__8179_8273 = G__8294;
count__8180_8274 = G__8295;
i__8181_8275 = G__8296;
continue;
}
}
} else
{}
}
break;
}
return e__7766__auto__;
});
lt.plugins.ltinator.__BEH__set_directory = (function __BEH__set_directory(this$,dir){return cljs.core.reset_BANG_.call(null,lt.plugins.ltinator.project_directory,dir);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltinator","set-directory","lt.plugins.ltinator/set-directory",1219433176),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltinator.__BEH__set_directory,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Set directory to search project's configurations",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.plugins.ltinator.__BEH__set_projects = (function __BEH__set_projects(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltinator","set-projects","lt.plugins.ltinator/set-projects",1815778453),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltinator.__BEH__set_projects,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.ltinator.__BEH__auto_save = (function __BEH__auto_save(this$,save_QMARK_){lt.objs.app.prevent_close.call(null);
if(cljs.core.truth_((function (){var and__6363__auto__ = save_QMARK_;if(cljs.core.truth_(and__6363__auto__))
{return lt.plugins.ltinator.check_project_dir.call(null);
} else
{return and__6363__auto__;
}
})()))
{if(lt.plugins.ltinator.project_opened_QMARK_.call(null))
{lt.plugins.ltinator.save.call(null,cljs.core.deref.call(null,lt.plugins.ltinator.opened_project_path),lt.plugins.ltinator.current_project.call(null));
} else
{var path_8297 = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join('');lt.plugins.ltinator.save.call(null,path_8297,lt.plugins.ltinator.current_project.call(null));
}
lt.plugins.ltinator.save_config.call(null);
} else
{}
return lt.objs.app.close.call(null,true);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.ltinator","auto-save","lt.plugins.ltinator/auto-save",1204224815),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.ltinator.__BEH__auto_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Set auto save or not",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.ltinator.__BEH__auto_load = (function __BEH__auto_load(this$,load_QMARK_){if(cljs.core.truth_((function (){var and__6363__auto__ = load_QMARK_;if(cljs.core.truth_(and__6363__auto__))
{return lt.plugins.ltinator.check_project_dir.call(null);
} else
{return and__6363__auto__;
}
})()))
{var config = lt.plugins.ltinator.load_config.call(null);var path = (function (){var or__6375__auto__ = new cljs.core.Keyword(null,"last-saved-project-path","last-saved-project-path",4003592168).cljs$core$IFn$_invoke$arity$1(config);if(cljs.core.truth_(or__6375__auto__))
{return or__6375__auto__;
} else
{return [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join('');
}
})();var temp__4092__auto__ = lt.plugins.ltinator.load_project.call(null,path);if(cljs.core.truth_(temp__4092__auto__))
{var project = temp__4092__auto__;lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Loaded: "),cljs.core.str(path)].join(''));
lt.plugins.ltinator.open_project.call(null,project);
if(lt.plugins.ltinator.auto_saved_project_QMARK_.call(null,path))
{return null;
} else
{return lt.plugins.ltinator.change_opened_project_path.call(null,path);
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
return lt.plugins.ltinator.change_opened_project_path.call(null,path);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Failed to read project file: "),cljs.core.str(path)].join(''));
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltinator.save-project-as","ltinator.save-project-as",4456624317),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Save project as..",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){if(cljs.core.truth_(lt.plugins.ltinator.check_project_dir.call(null)))
{var path = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/new-project.edn")].join('');var s = lt.plugins.ltinator.save_project.call(null,path,lt.plugins.ltinator.current_project.call(null));lt.objs.opener.active_dialog = s;
return lt.util.dom.trigger.call(null,s,new cljs.core.Keyword(null,"click","click",1108654330));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltinator.save-project","ltinator.save-project",2839067334),new cljs.core.Keyword(null,"desc","desc",1016984067),"Ltinator: Save project",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){if(cljs.core.truth_(lt.plugins.ltinator.check_project_dir.call(null)))
{if(lt.plugins.ltinator.project_opened_QMARK_.call(null))
{return lt.plugins.ltinator.save.call(null,cljs.core.deref.call(null,lt.plugins.ltinator.opened_project_path),lt.plugins.ltinator.current_project.call(null));
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