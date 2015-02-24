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
return (function iter__8295(s__8296){return (new cljs.core.LazySeq(null,((function (tabsets){
return (function (){var s__8296__$1 = s__8296;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8296__$1);if(temp__4092__auto__)
{var s__8296__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8296__$2))
{var c__7086__auto__ = cljs.core.chunk_first.call(null,s__8296__$2);var size__7087__auto__ = cljs.core.count.call(null,c__7086__auto__);var b__8298 = cljs.core.chunk_buffer.call(null,size__7087__auto__);if((function (){var i__8297 = 0;while(true){
if((i__8297 < size__7087__auto__))
{var tab = cljs.core._nth.call(null,c__7086__auto__,i__8297);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{cljs.core.chunk_append.call(null,b__8298,path);
{
var G__8346 = (i__8297 + 1);
i__8297 = G__8346;
continue;
}
} else
{{
var G__8347 = (i__8297 + 1);
i__8297 = G__8347;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8298),iter__8295.call(null,cljs.core.chunk_rest.call(null,s__8296__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8298),null);
}
} else
{var tab = cljs.core.first.call(null,s__8296__$2);var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tab)));if(cljs.core.truth_(path))
{return cljs.core.cons.call(null,path,iter__8295.call(null,cljs.core.rest.call(null,s__8296__$2)));
} else
{{
var G__8348 = cljs.core.rest.call(null,s__8296__$2);
s__8296__$1 = G__8348;
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
{return cljs.core.map.call(null,(function (p1__8299_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"path","path",1017337751)],[lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,p1__8299_SHARP_)),p1__8299_SHARP_]);
}),lt.objs.files.full_path_ls.call(null,cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)));
} else
{return null;
}
});
lt.plugins.ltinator.selector = (function selector(opts){var G__8301 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__8301,new cljs.core.Keyword("lt.plugins.ltinator","set-projects","lt.plugins.ltinator/set-projects",1815778453));
return G__8301;
});
lt.plugins.ltinator.add_selector = lt.plugins.ltinator.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.ltinator.add_items,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8304_SHARP_,p2__8305_SHARP_,p3__8302_SHARP_,p4__8303_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(p3__8302_SHARP_),cljs.core.str("</p><p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(p4__8303_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
lt.plugins.ltinator.open_tabs = (function open_tabs(paths){var seq__8310 = cljs.core.seq.call(null,paths);var chunk__8311 = null;var count__8312 = 0;var i__8313 = 0;while(true){
if((i__8313 < count__8312))
{var path = cljs.core._nth.call(null,chunk__8311,i__8313);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__8349 = seq__8310;
var G__8350 = chunk__8311;
var G__8351 = count__8312;
var G__8352 = (i__8313 + 1);
seq__8310 = G__8349;
chunk__8311 = G__8350;
count__8312 = G__8351;
i__8313 = G__8352;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8310);if(temp__4092__auto__)
{var seq__8310__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8310__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8310__$1);{
var G__8353 = cljs.core.chunk_rest.call(null,seq__8310__$1);
var G__8354 = c__7119__auto__;
var G__8355 = cljs.core.count.call(null,c__7119__auto__);
var G__8356 = 0;
seq__8310 = G__8353;
chunk__8311 = G__8354;
count__8312 = G__8355;
i__8313 = G__8356;
continue;
}
} else
{var path = cljs.core.first.call(null,seq__8310__$1);lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open!","open!",1119852169),path);
{
var G__8357 = cljs.core.next.call(null,seq__8310__$1);
var G__8358 = null;
var G__8359 = 0;
var G__8360 = 0;
seq__8310 = G__8357;
chunk__8311 = G__8358;
count__8312 = G__8359;
i__8313 = G__8360;
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
lt.plugins.ltinator.open_tabsets = (function open_tabsets(project){var tabset = new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project);var cur_ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__8320_8361 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,tabset));var chunk__8321_8362 = null;var count__8322_8363 = 0;var i__8323_8364 = 0;while(true){
if((i__8323_8364 < count__8322_8363))
{var vec__8324_8365 = cljs.core._nth.call(null,chunk__8321_8362,i__8323_8364);var idx_8366 = cljs.core.nth.call(null,vec__8324_8365,0,null);var paths_8367 = cljs.core.nth.call(null,vec__8324_8365,1,null);var ts_8368 = ((cljs.core._EQ_.call(null,idx_8366,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_8368);
lt.plugins.ltinator.open_tabs.call(null,paths_8367);
{
var G__8369 = seq__8320_8361;
var G__8370 = chunk__8321_8362;
var G__8371 = count__8322_8363;
var G__8372 = (i__8323_8364 + 1);
seq__8320_8361 = G__8369;
chunk__8321_8362 = G__8370;
count__8322_8363 = G__8371;
i__8323_8364 = G__8372;
continue;
}
} else
{var temp__4092__auto___8373 = cljs.core.seq.call(null,seq__8320_8361);if(temp__4092__auto___8373)
{var seq__8320_8374__$1 = temp__4092__auto___8373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8320_8374__$1))
{var c__7119__auto___8375 = cljs.core.chunk_first.call(null,seq__8320_8374__$1);{
var G__8376 = cljs.core.chunk_rest.call(null,seq__8320_8374__$1);
var G__8377 = c__7119__auto___8375;
var G__8378 = cljs.core.count.call(null,c__7119__auto___8375);
var G__8379 = 0;
seq__8320_8361 = G__8376;
chunk__8321_8362 = G__8377;
count__8322_8363 = G__8378;
i__8323_8364 = G__8379;
continue;
}
} else
{var vec__8325_8380 = cljs.core.first.call(null,seq__8320_8374__$1);var idx_8381 = cljs.core.nth.call(null,vec__8325_8380,0,null);var paths_8382 = cljs.core.nth.call(null,vec__8325_8380,1,null);var ts_8383 = ((cljs.core._EQ_.call(null,idx_8381,0))?cur_ts:lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));lt.objs.tabs.activate_tabset.call(null,ts_8383);
lt.plugins.ltinator.open_tabs.call(null,paths_8382);
{
var G__8384 = cljs.core.next.call(null,seq__8320_8374__$1);
var G__8385 = null;
var G__8386 = 0;
var G__8387 = 0;
seq__8320_8361 = G__8384;
chunk__8321_8362 = G__8385;
count__8322_8363 = G__8386;
i__8323_8364 = G__8387;
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
var G__8388 = (n + 1);
n = G__8388;
continue;
}
} else
{return null;
}
break;
}
});
lt.plugins.ltinator.open_working_environment = (function open_working_environment(project){var ws = lt.objs.workspace.current_ws;var tabset_num = cljs.core.count.call(null,new cljs.core.Keyword(null,"tabsets","tabsets",3756175576).cljs$core$IFn$_invoke$arity$1(project));lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"clear!","clear!",3951036134));
var seq__8330_8389 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"workspace","workspace",2122768391).cljs$core$IFn$_invoke$arity$1(project));var chunk__8331_8390 = null;var count__8332_8391 = 0;var i__8333_8392 = 0;while(true){
if((i__8333_8392 < count__8332_8391))
{var f_8393 = cljs.core._nth.call(null,chunk__8331_8390,i__8333_8392);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),f_8393);
{
var G__8394 = seq__8330_8389;
var G__8395 = chunk__8331_8390;
var G__8396 = count__8332_8391;
var G__8397 = (i__8333_8392 + 1);
seq__8330_8389 = G__8394;
chunk__8331_8390 = G__8395;
count__8332_8391 = G__8396;
i__8333_8392 = G__8397;
continue;
}
} else
{var temp__4092__auto___8398 = cljs.core.seq.call(null,seq__8330_8389);if(temp__4092__auto___8398)
{var seq__8330_8399__$1 = temp__4092__auto___8398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8330_8399__$1))
{var c__7119__auto___8400 = cljs.core.chunk_first.call(null,seq__8330_8399__$1);{
var G__8401 = cljs.core.chunk_rest.call(null,seq__8330_8399__$1);
var G__8402 = c__7119__auto___8400;
var G__8403 = cljs.core.count.call(null,c__7119__auto___8400);
var G__8404 = 0;
seq__8330_8389 = G__8401;
chunk__8331_8390 = G__8402;
count__8332_8391 = G__8403;
i__8333_8392 = G__8404;
continue;
}
} else
{var f_8405 = cljs.core.first.call(null,seq__8330_8399__$1);lt.object.raise.call(null,ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),f_8405);
{
var G__8406 = cljs.core.next.call(null,seq__8330_8399__$1);
var G__8407 = null;
var G__8408 = 0;
var G__8409 = 0;
seq__8330_8389 = G__8406;
chunk__8331_8390 = G__8407;
count__8332_8391 = G__8408;
i__8333_8392 = G__8409;
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
})()], null)], null));var seq__8340_8410 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),((function (e__7762__auto__){
return (function (){var me = this;if(cljs.core.empty_QMARK_.call(null,lt.util.dom.val.call(null,me)))
{return null;
} else
{var path__$1 = ((cljs.core.empty_QMARK_.call(null,lt.objs.files.ext.call(null,lt.util.dom.val.call(null,me))))?[cljs.core.str(lt.util.dom.val.call(null,me)),cljs.core.str(".edn")].join(''):lt.util.dom.val.call(null,me));lt.plugins.ltinator.save.call(null,path__$1,project);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Saved: "),cljs.core.str(path__$1)].join(''));
}
});})(e__7762__auto__))
], null)));var chunk__8341_8411 = null;var count__8342_8412 = 0;var i__8343_8413 = 0;while(true){
if((i__8343_8413 < count__8342_8412))
{var vec__8344_8414 = cljs.core._nth.call(null,chunk__8341_8411,i__8343_8413);var ev__7763__auto___8415 = cljs.core.nth.call(null,vec__8344_8414,0,null);var func__7764__auto___8416 = cljs.core.nth.call(null,vec__8344_8414,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___8415,func__7764__auto___8416);
{
var G__8417 = seq__8340_8410;
var G__8418 = chunk__8341_8411;
var G__8419 = count__8342_8412;
var G__8420 = (i__8343_8413 + 1);
seq__8340_8410 = G__8417;
chunk__8341_8411 = G__8418;
count__8342_8412 = G__8419;
i__8343_8413 = G__8420;
continue;
}
} else
{var temp__4092__auto___8421 = cljs.core.seq.call(null,seq__8340_8410);if(temp__4092__auto___8421)
{var seq__8340_8422__$1 = temp__4092__auto___8421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8340_8422__$1))
{var c__7119__auto___8423 = cljs.core.chunk_first.call(null,seq__8340_8422__$1);{
var G__8424 = cljs.core.chunk_rest.call(null,seq__8340_8422__$1);
var G__8425 = c__7119__auto___8423;
var G__8426 = cljs.core.count.call(null,c__7119__auto___8423);
var G__8427 = 0;
seq__8340_8410 = G__8424;
chunk__8341_8411 = G__8425;
count__8342_8412 = G__8426;
i__8343_8413 = G__8427;
continue;
}
} else
{var vec__8345_8428 = cljs.core.first.call(null,seq__8340_8422__$1);var ev__7763__auto___8429 = cljs.core.nth.call(null,vec__8345_8428,0,null);var func__7764__auto___8430 = cljs.core.nth.call(null,vec__8345_8428,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___8429,func__7764__auto___8430);
{
var G__8431 = cljs.core.next.call(null,seq__8340_8422__$1);
var G__8432 = null;
var G__8433 = 0;
var G__8434 = 0;
seq__8340_8410 = G__8431;
chunk__8341_8411 = G__8432;
count__8342_8412 = G__8433;
i__8343_8413 = G__8434;
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
{var path_8435 = [cljs.core.str(cljs.core.deref.call(null,lt.plugins.ltinator.project_directory)),cljs.core.str("/auto-saved.edn")].join('');lt.plugins.ltinator.save.call(null,path_8435,lt.plugins.ltinator.current_project.call(null));
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