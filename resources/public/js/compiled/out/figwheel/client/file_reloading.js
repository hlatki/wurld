// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__26393_SHARP_,p2__26394_SHARP_){
var and__18183__auto__ = p1__26393_SHARP_;
if(cljs.core.truth_(and__18183__auto__)){
return p2__26394_SHARP_;
} else {
return and__18183__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18195__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18195__auto__){
return or__18195__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18195__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18195__auto__){
return or__18195__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18195__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19090__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19091__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19092__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19093__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19094__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19094__auto__,method_table__19090__auto__,prefer_table__19091__auto__,method_cache__19092__auto__,cached_hierarchy__19093__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26395){
var map__26396 = p__26395;
var map__26396__$1 = ((cljs.core.seq_QMARK_.call(null,map__26396))?cljs.core.apply.call(null,cljs.core.hash_map,map__26396):map__26396);
var file = cljs.core.get.call(null,map__26396__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26397){
var map__26398 = p__26397;
var map__26398__$1 = ((cljs.core.seq_QMARK_.call(null,map__26398))?cljs.core.apply.call(null,cljs.core.hash_map,map__26398):map__26398);
var namespace = cljs.core.get.call(null,map__26398__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19090__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19091__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19092__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19093__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19094__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19094__auto__,method_table__19090__auto__,prefer_table__19091__auto__,method_cache__19092__auto__,cached_hierarchy__19093__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e26399){if((e26399 instanceof Error)){
var e = e26399;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26399;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__26401 = arguments.length;
switch (G__26401) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26403,callback){
var map__26405 = p__26403;
var map__26405__$1 = ((cljs.core.seq_QMARK_.call(null,map__26405))?cljs.core.apply.call(null,cljs.core.hash_map,map__26405):map__26405);
var file_msg = map__26405__$1;
var request_url = cljs.core.get.call(null,map__26405__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26405,map__26405__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26405,map__26405__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26406){
var map__26408 = p__26406;
var map__26408__$1 = ((cljs.core.seq_QMARK_.call(null,map__26408))?cljs.core.apply.call(null,cljs.core.hash_map,map__26408):map__26408);
var file_msg = map__26408__$1;
var meta_data = cljs.core.get.call(null,map__26408__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__26408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18195__auto__ = meta_data;
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18183__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18183__auto__){
var or__18195__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18195__auto____$1)){
return or__18195__auto____$1;
} else {
var and__18183__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18183__auto____$1){
var or__18195__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18195__auto____$2){
return or__18195__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18183__auto____$1;
}
}
}
} else {
return and__18183__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26409,callback){
var map__26411 = p__26409;
var map__26411__$1 = ((cljs.core.seq_QMARK_.call(null,map__26411))?cljs.core.apply.call(null,cljs.core.hash_map,map__26411):map__26411);
var file_msg = map__26411__$1;
var namespace = cljs.core.get.call(null,map__26411__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26411__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21421__auto___26498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___26498,out){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___26498,out){
return (function (state_26480){
var state_val_26481 = (state_26480[(1)]);
if((state_val_26481 === (7))){
var inst_26464 = (state_26480[(7)]);
var inst_26470 = (state_26480[(2)]);
var inst_26471 = cljs.core.async.put_BANG_.call(null,out,inst_26470);
var inst_26460 = inst_26464;
var state_26480__$1 = (function (){var statearr_26482 = state_26480;
(statearr_26482[(8)] = inst_26460);

(statearr_26482[(9)] = inst_26471);

return statearr_26482;
})();
var statearr_26483_26499 = state_26480__$1;
(statearr_26483_26499[(2)] = null);

(statearr_26483_26499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (6))){
var inst_26476 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
var statearr_26484_26500 = state_26480__$1;
(statearr_26484_26500[(2)] = inst_26476);

(statearr_26484_26500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (5))){
var inst_26474 = cljs.core.async.close_BANG_.call(null,out);
var state_26480__$1 = state_26480;
var statearr_26485_26501 = state_26480__$1;
(statearr_26485_26501[(2)] = inst_26474);

(statearr_26485_26501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (4))){
var inst_26463 = (state_26480[(10)]);
var inst_26468 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26463);
var state_26480__$1 = state_26480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26480__$1,(7),inst_26468);
} else {
if((state_val_26481 === (3))){
var inst_26478 = (state_26480[(2)]);
var state_26480__$1 = state_26480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26480__$1,inst_26478);
} else {
if((state_val_26481 === (2))){
var inst_26460 = (state_26480[(8)]);
var inst_26463 = (state_26480[(10)]);
var inst_26463__$1 = cljs.core.nth.call(null,inst_26460,(0),null);
var inst_26464 = cljs.core.nthnext.call(null,inst_26460,(1));
var inst_26465 = (inst_26463__$1 == null);
var inst_26466 = cljs.core.not.call(null,inst_26465);
var state_26480__$1 = (function (){var statearr_26486 = state_26480;
(statearr_26486[(7)] = inst_26464);

(statearr_26486[(10)] = inst_26463__$1);

return statearr_26486;
})();
if(inst_26466){
var statearr_26487_26502 = state_26480__$1;
(statearr_26487_26502[(1)] = (4));

} else {
var statearr_26488_26503 = state_26480__$1;
(statearr_26488_26503[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26481 === (1))){
var inst_26458 = cljs.core.nth.call(null,files,(0),null);
var inst_26459 = cljs.core.nthnext.call(null,files,(1));
var inst_26460 = files;
var state_26480__$1 = (function (){var statearr_26489 = state_26480;
(statearr_26489[(8)] = inst_26460);

(statearr_26489[(11)] = inst_26458);

(statearr_26489[(12)] = inst_26459);

return statearr_26489;
})();
var statearr_26490_26504 = state_26480__$1;
(statearr_26490_26504[(2)] = null);

(statearr_26490_26504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21421__auto___26498,out))
;
return ((function (switch__21359__auto__,c__21421__auto___26498,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto____0 = (function (){
var statearr_26494 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26494[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto__);

(statearr_26494[(1)] = (1));

return statearr_26494;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto____1 = (function (state_26480){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_26480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e26495){if((e26495 instanceof Object)){
var ex__21363__auto__ = e26495;
var statearr_26496_26505 = state_26480;
(statearr_26496_26505[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26506 = state_26480;
state_26480 = G__26506;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto__ = function(state_26480){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto____1.call(this,state_26480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___26498,out))
})();
var state__21423__auto__ = (function (){var statearr_26497 = f__21422__auto__.call(null);
(statearr_26497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___26498);

return statearr_26497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___26498,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26507,p__26508){
var map__26511 = p__26507;
var map__26511__$1 = ((cljs.core.seq_QMARK_.call(null,map__26511))?cljs.core.apply.call(null,cljs.core.hash_map,map__26511):map__26511);
var opts = map__26511__$1;
var url_rewriter = cljs.core.get.call(null,map__26511__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26512 = p__26508;
var map__26512__$1 = ((cljs.core.seq_QMARK_.call(null,map__26512))?cljs.core.apply.call(null,cljs.core.hash_map,map__26512):map__26512);
var file_msg = map__26512__$1;
var file = cljs.core.get.call(null,map__26512__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26513){
var map__26516 = p__26513;
var map__26516__$1 = ((cljs.core.seq_QMARK_.call(null,map__26516))?cljs.core.apply.call(null,cljs.core.hash_map,map__26516):map__26516);
var file = cljs.core.get.call(null,map__26516__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26516__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18183__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18183__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18183__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e26517){var e = e26517;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26522,p__26523){
var map__26725 = p__26522;
var map__26725__$1 = ((cljs.core.seq_QMARK_.call(null,map__26725))?cljs.core.apply.call(null,cljs.core.hash_map,map__26725):map__26725);
var opts = map__26725__$1;
var load_unchanged_files = cljs.core.get.call(null,map__26725__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__26725__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26725__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26726 = p__26523;
var map__26726__$1 = ((cljs.core.seq_QMARK_.call(null,map__26726))?cljs.core.apply.call(null,cljs.core.hash_map,map__26726):map__26726);
var msg = map__26726__$1;
var files = cljs.core.get.call(null,map__26726__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files){
return (function (state_26851){
var state_val_26852 = (state_26851[(1)]);
if((state_val_26852 === (7))){
var inst_26738 = (state_26851[(7)]);
var inst_26741 = (state_26851[(8)]);
var inst_26740 = (state_26851[(9)]);
var inst_26739 = (state_26851[(10)]);
var inst_26746 = cljs.core._nth.call(null,inst_26739,inst_26741);
var inst_26747 = figwheel.client.file_reloading.eval_body.call(null,inst_26746);
var inst_26748 = (inst_26741 + (1));
var tmp26853 = inst_26738;
var tmp26854 = inst_26740;
var tmp26855 = inst_26739;
var inst_26738__$1 = tmp26853;
var inst_26739__$1 = tmp26855;
var inst_26740__$1 = tmp26854;
var inst_26741__$1 = inst_26748;
var state_26851__$1 = (function (){var statearr_26856 = state_26851;
(statearr_26856[(7)] = inst_26738__$1);

(statearr_26856[(8)] = inst_26741__$1);

(statearr_26856[(9)] = inst_26740__$1);

(statearr_26856[(10)] = inst_26739__$1);

(statearr_26856[(11)] = inst_26747);

return statearr_26856;
})();
var statearr_26857_26926 = state_26851__$1;
(statearr_26857_26926[(2)] = null);

(statearr_26857_26926[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (20))){
var inst_26787 = (state_26851[(12)]);
var inst_26783 = (state_26851[(13)]);
var inst_26784 = (state_26851[(14)]);
var inst_26790 = (state_26851[(15)]);
var inst_26788 = (state_26851[(16)]);
var inst_26793 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26795 = (function (){var files_not_loaded = inst_26790;
var res = inst_26788;
var res_SINGLEQUOTE_ = inst_26787;
var files_SINGLEQUOTE_ = inst_26784;
var all_files = inst_26783;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26787,inst_26783,inst_26784,inst_26790,inst_26788,inst_26793,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files){
return (function (p__26794){
var map__26858 = p__26794;
var map__26858__$1 = ((cljs.core.seq_QMARK_.call(null,map__26858))?cljs.core.apply.call(null,cljs.core.hash_map,map__26858):map__26858);
var file = cljs.core.get.call(null,map__26858__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__26858__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26787,inst_26783,inst_26784,inst_26790,inst_26788,inst_26793,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files))
})();
var inst_26796 = cljs.core.map.call(null,inst_26795,inst_26788);
var inst_26797 = cljs.core.pr_str.call(null,inst_26796);
var inst_26798 = figwheel.client.utils.log.call(null,inst_26797);
var inst_26799 = (function (){var files_not_loaded = inst_26790;
var res = inst_26788;
var res_SINGLEQUOTE_ = inst_26787;
var files_SINGLEQUOTE_ = inst_26784;
var all_files = inst_26783;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26787,inst_26783,inst_26784,inst_26790,inst_26788,inst_26793,inst_26795,inst_26796,inst_26797,inst_26798,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26787,inst_26783,inst_26784,inst_26790,inst_26788,inst_26793,inst_26795,inst_26796,inst_26797,inst_26798,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files))
})();
var inst_26800 = setTimeout(inst_26799,(10));
var state_26851__$1 = (function (){var statearr_26859 = state_26851;
(statearr_26859[(17)] = inst_26798);

(statearr_26859[(18)] = inst_26793);

return statearr_26859;
})();
var statearr_26860_26927 = state_26851__$1;
(statearr_26860_26927[(2)] = inst_26800);

(statearr_26860_26927[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (27))){
var inst_26810 = (state_26851[(19)]);
var state_26851__$1 = state_26851;
var statearr_26861_26928 = state_26851__$1;
(statearr_26861_26928[(2)] = inst_26810);

(statearr_26861_26928[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (1))){
var inst_26730 = (state_26851[(20)]);
var inst_26727 = before_jsload.call(null,files);
var inst_26728 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26729 = (function (){return ((function (inst_26730,inst_26727,inst_26728,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files){
return (function (p1__26518_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26518_SHARP_);
});
;})(inst_26730,inst_26727,inst_26728,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files))
})();
var inst_26730__$1 = cljs.core.filter.call(null,inst_26729,files);
var inst_26731 = cljs.core.not_empty.call(null,inst_26730__$1);
var state_26851__$1 = (function (){var statearr_26862 = state_26851;
(statearr_26862[(21)] = inst_26728);

(statearr_26862[(22)] = inst_26727);

(statearr_26862[(20)] = inst_26730__$1);

return statearr_26862;
})();
if(cljs.core.truth_(inst_26731)){
var statearr_26863_26929 = state_26851__$1;
(statearr_26863_26929[(1)] = (2));

} else {
var statearr_26864_26930 = state_26851__$1;
(statearr_26864_26930[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (24))){
var state_26851__$1 = state_26851;
var statearr_26865_26931 = state_26851__$1;
(statearr_26865_26931[(2)] = null);

(statearr_26865_26931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (4))){
var inst_26775 = (state_26851[(2)]);
var inst_26776 = (function (){return ((function (inst_26775,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files){
return (function (p1__26519_SHARP_){
var and__18183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26519_SHARP_);
if(cljs.core.truth_(and__18183__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26519_SHARP_));
} else {
return and__18183__auto__;
}
});
;})(inst_26775,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files))
})();
var inst_26777 = cljs.core.filter.call(null,inst_26776,files);
var state_26851__$1 = (function (){var statearr_26866 = state_26851;
(statearr_26866[(23)] = inst_26777);

(statearr_26866[(24)] = inst_26775);

return statearr_26866;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26867_26932 = state_26851__$1;
(statearr_26867_26932[(1)] = (16));

} else {
var statearr_26868_26933 = state_26851__$1;
(statearr_26868_26933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (15))){
var inst_26765 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26869_26934 = state_26851__$1;
(statearr_26869_26934[(2)] = inst_26765);

(statearr_26869_26934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (21))){
var state_26851__$1 = state_26851;
var statearr_26870_26935 = state_26851__$1;
(statearr_26870_26935[(2)] = null);

(statearr_26870_26935[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (31))){
var inst_26818 = (state_26851[(25)]);
var inst_26828 = (state_26851[(2)]);
var inst_26829 = cljs.core.not_empty.call(null,inst_26818);
var state_26851__$1 = (function (){var statearr_26871 = state_26851;
(statearr_26871[(26)] = inst_26828);

return statearr_26871;
})();
if(cljs.core.truth_(inst_26829)){
var statearr_26872_26936 = state_26851__$1;
(statearr_26872_26936[(1)] = (32));

} else {
var statearr_26873_26937 = state_26851__$1;
(statearr_26873_26937[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (32))){
var inst_26818 = (state_26851[(25)]);
var inst_26831 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26818);
var inst_26832 = cljs.core.pr_str.call(null,inst_26831);
var inst_26833 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26832)].join('');
var inst_26834 = figwheel.client.utils.log.call(null,inst_26833);
var state_26851__$1 = state_26851;
var statearr_26874_26938 = state_26851__$1;
(statearr_26874_26938[(2)] = inst_26834);

(statearr_26874_26938[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (33))){
var state_26851__$1 = state_26851;
var statearr_26875_26939 = state_26851__$1;
(statearr_26875_26939[(2)] = null);

(statearr_26875_26939[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (13))){
var inst_26751 = (state_26851[(27)]);
var inst_26755 = cljs.core.chunk_first.call(null,inst_26751);
var inst_26756 = cljs.core.chunk_rest.call(null,inst_26751);
var inst_26757 = cljs.core.count.call(null,inst_26755);
var inst_26738 = inst_26756;
var inst_26739 = inst_26755;
var inst_26740 = inst_26757;
var inst_26741 = (0);
var state_26851__$1 = (function (){var statearr_26876 = state_26851;
(statearr_26876[(7)] = inst_26738);

(statearr_26876[(8)] = inst_26741);

(statearr_26876[(9)] = inst_26740);

(statearr_26876[(10)] = inst_26739);

return statearr_26876;
})();
var statearr_26877_26940 = state_26851__$1;
(statearr_26877_26940[(2)] = null);

(statearr_26877_26940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (22))){
var inst_26790 = (state_26851[(15)]);
var inst_26803 = (state_26851[(2)]);
var inst_26804 = cljs.core.not_empty.call(null,inst_26790);
var state_26851__$1 = (function (){var statearr_26878 = state_26851;
(statearr_26878[(28)] = inst_26803);

return statearr_26878;
})();
if(cljs.core.truth_(inst_26804)){
var statearr_26879_26941 = state_26851__$1;
(statearr_26879_26941[(1)] = (23));

} else {
var statearr_26880_26942 = state_26851__$1;
(statearr_26880_26942[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (36))){
var state_26851__$1 = state_26851;
var statearr_26881_26943 = state_26851__$1;
(statearr_26881_26943[(2)] = null);

(statearr_26881_26943[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (29))){
var inst_26819 = (state_26851[(29)]);
var inst_26822 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26819);
var inst_26823 = cljs.core.pr_str.call(null,inst_26822);
var inst_26824 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26823)].join('');
var inst_26825 = figwheel.client.utils.log.call(null,inst_26824);
var state_26851__$1 = state_26851;
var statearr_26882_26944 = state_26851__$1;
(statearr_26882_26944[(2)] = inst_26825);

(statearr_26882_26944[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (6))){
var inst_26772 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26883_26945 = state_26851__$1;
(statearr_26883_26945[(2)] = inst_26772);

(statearr_26883_26945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (28))){
var inst_26819 = (state_26851[(29)]);
var inst_26816 = (state_26851[(2)]);
var inst_26817 = cljs.core.get.call(null,inst_26816,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26818 = cljs.core.get.call(null,inst_26816,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26819__$1 = cljs.core.get.call(null,inst_26816,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26820 = cljs.core.not_empty.call(null,inst_26819__$1);
var state_26851__$1 = (function (){var statearr_26884 = state_26851;
(statearr_26884[(25)] = inst_26818);

(statearr_26884[(29)] = inst_26819__$1);

(statearr_26884[(30)] = inst_26817);

return statearr_26884;
})();
if(cljs.core.truth_(inst_26820)){
var statearr_26885_26946 = state_26851__$1;
(statearr_26885_26946[(1)] = (29));

} else {
var statearr_26886_26947 = state_26851__$1;
(statearr_26886_26947[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (25))){
var inst_26849 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26851__$1,inst_26849);
} else {
if((state_val_26852 === (34))){
var inst_26817 = (state_26851[(30)]);
var inst_26837 = (state_26851[(2)]);
var inst_26838 = cljs.core.not_empty.call(null,inst_26817);
var state_26851__$1 = (function (){var statearr_26887 = state_26851;
(statearr_26887[(31)] = inst_26837);

return statearr_26887;
})();
if(cljs.core.truth_(inst_26838)){
var statearr_26888_26948 = state_26851__$1;
(statearr_26888_26948[(1)] = (35));

} else {
var statearr_26889_26949 = state_26851__$1;
(statearr_26889_26949[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (17))){
var inst_26777 = (state_26851[(23)]);
var state_26851__$1 = state_26851;
var statearr_26890_26950 = state_26851__$1;
(statearr_26890_26950[(2)] = inst_26777);

(statearr_26890_26950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (3))){
var state_26851__$1 = state_26851;
var statearr_26891_26951 = state_26851__$1;
(statearr_26891_26951[(2)] = null);

(statearr_26891_26951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (12))){
var inst_26768 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26892_26952 = state_26851__$1;
(statearr_26892_26952[(2)] = inst_26768);

(statearr_26892_26952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (2))){
var inst_26730 = (state_26851[(20)]);
var inst_26737 = cljs.core.seq.call(null,inst_26730);
var inst_26738 = inst_26737;
var inst_26739 = null;
var inst_26740 = (0);
var inst_26741 = (0);
var state_26851__$1 = (function (){var statearr_26893 = state_26851;
(statearr_26893[(7)] = inst_26738);

(statearr_26893[(8)] = inst_26741);

(statearr_26893[(9)] = inst_26740);

(statearr_26893[(10)] = inst_26739);

return statearr_26893;
})();
var statearr_26894_26953 = state_26851__$1;
(statearr_26894_26953[(2)] = null);

(statearr_26894_26953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (23))){
var inst_26787 = (state_26851[(12)]);
var inst_26810 = (state_26851[(19)]);
var inst_26783 = (state_26851[(13)]);
var inst_26784 = (state_26851[(14)]);
var inst_26790 = (state_26851[(15)]);
var inst_26788 = (state_26851[(16)]);
var inst_26806 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26809 = (function (){var files_not_loaded = inst_26790;
var res = inst_26788;
var res_SINGLEQUOTE_ = inst_26787;
var files_SINGLEQUOTE_ = inst_26784;
var all_files = inst_26783;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26787,inst_26810,inst_26783,inst_26784,inst_26790,inst_26788,inst_26806,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files){
return (function (p__26808){
var map__26895 = p__26808;
var map__26895__$1 = ((cljs.core.seq_QMARK_.call(null,map__26895))?cljs.core.apply.call(null,cljs.core.hash_map,map__26895):map__26895);
var meta_data = cljs.core.get.call(null,map__26895__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26787,inst_26810,inst_26783,inst_26784,inst_26790,inst_26788,inst_26806,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files))
})();
var inst_26810__$1 = cljs.core.group_by.call(null,inst_26809,inst_26790);
var inst_26811 = cljs.core.seq_QMARK_.call(null,inst_26810__$1);
var state_26851__$1 = (function (){var statearr_26896 = state_26851;
(statearr_26896[(19)] = inst_26810__$1);

(statearr_26896[(32)] = inst_26806);

return statearr_26896;
})();
if(inst_26811){
var statearr_26897_26954 = state_26851__$1;
(statearr_26897_26954[(1)] = (26));

} else {
var statearr_26898_26955 = state_26851__$1;
(statearr_26898_26955[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (35))){
var inst_26817 = (state_26851[(30)]);
var inst_26840 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26817);
var inst_26841 = cljs.core.pr_str.call(null,inst_26840);
var inst_26842 = [cljs.core.str("not required: "),cljs.core.str(inst_26841)].join('');
var inst_26843 = figwheel.client.utils.log.call(null,inst_26842);
var state_26851__$1 = state_26851;
var statearr_26899_26956 = state_26851__$1;
(statearr_26899_26956[(2)] = inst_26843);

(statearr_26899_26956[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (19))){
var inst_26787 = (state_26851[(12)]);
var inst_26783 = (state_26851[(13)]);
var inst_26784 = (state_26851[(14)]);
var inst_26788 = (state_26851[(16)]);
var inst_26787__$1 = (state_26851[(2)]);
var inst_26788__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26787__$1);
var inst_26789 = (function (){var res = inst_26788__$1;
var res_SINGLEQUOTE_ = inst_26787__$1;
var files_SINGLEQUOTE_ = inst_26784;
var all_files = inst_26783;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26787,inst_26783,inst_26784,inst_26788,inst_26787__$1,inst_26788__$1,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files){
return (function (p1__26521_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26521_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26787,inst_26783,inst_26784,inst_26788,inst_26787__$1,inst_26788__$1,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files))
})();
var inst_26790 = cljs.core.filter.call(null,inst_26789,inst_26787__$1);
var inst_26791 = cljs.core.not_empty.call(null,inst_26788__$1);
var state_26851__$1 = (function (){var statearr_26900 = state_26851;
(statearr_26900[(12)] = inst_26787__$1);

(statearr_26900[(15)] = inst_26790);

(statearr_26900[(16)] = inst_26788__$1);

return statearr_26900;
})();
if(cljs.core.truth_(inst_26791)){
var statearr_26901_26957 = state_26851__$1;
(statearr_26901_26957[(1)] = (20));

} else {
var statearr_26902_26958 = state_26851__$1;
(statearr_26902_26958[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (11))){
var state_26851__$1 = state_26851;
var statearr_26903_26959 = state_26851__$1;
(statearr_26903_26959[(2)] = null);

(statearr_26903_26959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (9))){
var inst_26770 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26904_26960 = state_26851__$1;
(statearr_26904_26960[(2)] = inst_26770);

(statearr_26904_26960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (5))){
var inst_26741 = (state_26851[(8)]);
var inst_26740 = (state_26851[(9)]);
var inst_26743 = (inst_26741 < inst_26740);
var inst_26744 = inst_26743;
var state_26851__$1 = state_26851;
if(cljs.core.truth_(inst_26744)){
var statearr_26905_26961 = state_26851__$1;
(statearr_26905_26961[(1)] = (7));

} else {
var statearr_26906_26962 = state_26851__$1;
(statearr_26906_26962[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (14))){
var inst_26751 = (state_26851[(27)]);
var inst_26760 = cljs.core.first.call(null,inst_26751);
var inst_26761 = figwheel.client.file_reloading.eval_body.call(null,inst_26760);
var inst_26762 = cljs.core.next.call(null,inst_26751);
var inst_26738 = inst_26762;
var inst_26739 = null;
var inst_26740 = (0);
var inst_26741 = (0);
var state_26851__$1 = (function (){var statearr_26907 = state_26851;
(statearr_26907[(33)] = inst_26761);

(statearr_26907[(7)] = inst_26738);

(statearr_26907[(8)] = inst_26741);

(statearr_26907[(9)] = inst_26740);

(statearr_26907[(10)] = inst_26739);

return statearr_26907;
})();
var statearr_26908_26963 = state_26851__$1;
(statearr_26908_26963[(2)] = null);

(statearr_26908_26963[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (26))){
var inst_26810 = (state_26851[(19)]);
var inst_26813 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26810);
var state_26851__$1 = state_26851;
var statearr_26909_26964 = state_26851__$1;
(statearr_26909_26964[(2)] = inst_26813);

(statearr_26909_26964[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (16))){
var inst_26777 = (state_26851[(23)]);
var inst_26779 = (function (){var all_files = inst_26777;
return ((function (all_files,inst_26777,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files){
return (function (p1__26520_SHARP_){
return cljs.core.update_in.call(null,p1__26520_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26777,state_val_26852,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files))
})();
var inst_26780 = cljs.core.map.call(null,inst_26779,inst_26777);
var state_26851__$1 = state_26851;
var statearr_26910_26965 = state_26851__$1;
(statearr_26910_26965[(2)] = inst_26780);

(statearr_26910_26965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (30))){
var state_26851__$1 = state_26851;
var statearr_26911_26966 = state_26851__$1;
(statearr_26911_26966[(2)] = null);

(statearr_26911_26966[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (10))){
var inst_26751 = (state_26851[(27)]);
var inst_26753 = cljs.core.chunked_seq_QMARK_.call(null,inst_26751);
var state_26851__$1 = state_26851;
if(inst_26753){
var statearr_26912_26967 = state_26851__$1;
(statearr_26912_26967[(1)] = (13));

} else {
var statearr_26913_26968 = state_26851__$1;
(statearr_26913_26968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (18))){
var inst_26783 = (state_26851[(13)]);
var inst_26784 = (state_26851[(14)]);
var inst_26783__$1 = (state_26851[(2)]);
var inst_26784__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26783__$1);
var inst_26785 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26784__$1);
var state_26851__$1 = (function (){var statearr_26914 = state_26851;
(statearr_26914[(13)] = inst_26783__$1);

(statearr_26914[(14)] = inst_26784__$1);

return statearr_26914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26851__$1,(19),inst_26785);
} else {
if((state_val_26852 === (37))){
var inst_26846 = (state_26851[(2)]);
var state_26851__$1 = state_26851;
var statearr_26915_26969 = state_26851__$1;
(statearr_26915_26969[(2)] = inst_26846);

(statearr_26915_26969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26852 === (8))){
var inst_26738 = (state_26851[(7)]);
var inst_26751 = (state_26851[(27)]);
var inst_26751__$1 = cljs.core.seq.call(null,inst_26738);
var state_26851__$1 = (function (){var statearr_26916 = state_26851;
(statearr_26916[(27)] = inst_26751__$1);

return statearr_26916;
})();
if(inst_26751__$1){
var statearr_26917_26970 = state_26851__$1;
(statearr_26917_26970[(1)] = (10));

} else {
var statearr_26918_26971 = state_26851__$1;
(statearr_26918_26971[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files))
;
return ((function (switch__21359__auto__,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto____0 = (function (){
var statearr_26922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26922[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto__);

(statearr_26922[(1)] = (1));

return statearr_26922;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto____1 = (function (state_26851){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_26851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e26923){if((e26923 instanceof Object)){
var ex__21363__auto__ = e26923;
var statearr_26924_26972 = state_26851;
(statearr_26924_26972[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26973 = state_26851;
state_26851 = G__26973;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto__ = function(state_26851){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto____1.call(this,state_26851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files))
})();
var state__21423__auto__ = (function (){var statearr_26925 = f__21422__auto__.call(null);
(statearr_26925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto__);

return statearr_26925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto__,map__26725,map__26725__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26726,map__26726__$1,msg,files))
);

return c__21421__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26976,link){
var map__26978 = p__26976;
var map__26978__$1 = ((cljs.core.seq_QMARK_.call(null,map__26978))?cljs.core.apply.call(null,cljs.core.hash_map,map__26978):map__26978);
var file = cljs.core.get.call(null,map__26978__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__26978,map__26978__$1,file){
return (function (p1__26974_SHARP_,p2__26975_SHARP_){
if(cljs.core._EQ_.call(null,p1__26974_SHARP_,p2__26975_SHARP_)){
return p1__26974_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__26978,map__26978__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26982){
var map__26983 = p__26982;
var map__26983__$1 = ((cljs.core.seq_QMARK_.call(null,map__26983))?cljs.core.apply.call(null,cljs.core.hash_map,map__26983):map__26983);
var current_url_length = cljs.core.get.call(null,map__26983__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__26983__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26979_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26979_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__26985 = arguments.length;
switch (G__26985) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26987){
var map__26989 = p__26987;
var map__26989__$1 = ((cljs.core.seq_QMARK_.call(null,map__26989))?cljs.core.apply.call(null,cljs.core.hash_map,map__26989):map__26989);
var f_data = map__26989__$1;
var request_url = cljs.core.get.call(null,map__26989__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26989__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18195__auto__ = request_url;
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26990,files_msg){
var map__27012 = p__26990;
var map__27012__$1 = ((cljs.core.seq_QMARK_.call(null,map__27012))?cljs.core.apply.call(null,cljs.core.hash_map,map__27012):map__27012);
var opts = map__27012__$1;
var on_cssload = cljs.core.get.call(null,map__27012__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27013_27033 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27014_27034 = null;
var count__27015_27035 = (0);
var i__27016_27036 = (0);
while(true){
if((i__27016_27036 < count__27015_27035)){
var f_27037 = cljs.core._nth.call(null,chunk__27014_27034,i__27016_27036);
figwheel.client.file_reloading.reload_css_file.call(null,f_27037);

var G__27038 = seq__27013_27033;
var G__27039 = chunk__27014_27034;
var G__27040 = count__27015_27035;
var G__27041 = (i__27016_27036 + (1));
seq__27013_27033 = G__27038;
chunk__27014_27034 = G__27039;
count__27015_27035 = G__27040;
i__27016_27036 = G__27041;
continue;
} else {
var temp__4126__auto___27042 = cljs.core.seq.call(null,seq__27013_27033);
if(temp__4126__auto___27042){
var seq__27013_27043__$1 = temp__4126__auto___27042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27013_27043__$1)){
var c__18980__auto___27044 = cljs.core.chunk_first.call(null,seq__27013_27043__$1);
var G__27045 = cljs.core.chunk_rest.call(null,seq__27013_27043__$1);
var G__27046 = c__18980__auto___27044;
var G__27047 = cljs.core.count.call(null,c__18980__auto___27044);
var G__27048 = (0);
seq__27013_27033 = G__27045;
chunk__27014_27034 = G__27046;
count__27015_27035 = G__27047;
i__27016_27036 = G__27048;
continue;
} else {
var f_27049 = cljs.core.first.call(null,seq__27013_27043__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27049);

var G__27050 = cljs.core.next.call(null,seq__27013_27043__$1);
var G__27051 = null;
var G__27052 = (0);
var G__27053 = (0);
seq__27013_27033 = G__27050;
chunk__27014_27034 = G__27051;
count__27015_27035 = G__27052;
i__27016_27036 = G__27053;
continue;
}
} else {
}
}
break;
}

var c__21421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto__,map__27012,map__27012__$1,opts,on_cssload){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto__,map__27012,map__27012__$1,opts,on_cssload){
return (function (state_27023){
var state_val_27024 = (state_27023[(1)]);
if((state_val_27024 === (2))){
var inst_27019 = (state_27023[(2)]);
var inst_27020 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27021 = on_cssload.call(null,inst_27020);
var state_27023__$1 = (function (){var statearr_27025 = state_27023;
(statearr_27025[(7)] = inst_27019);

return statearr_27025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27023__$1,inst_27021);
} else {
if((state_val_27024 === (1))){
var inst_27017 = cljs.core.async.timeout.call(null,(100));
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27023__$1,(2),inst_27017);
} else {
return null;
}
}
});})(c__21421__auto__,map__27012,map__27012__$1,opts,on_cssload))
;
return ((function (switch__21359__auto__,c__21421__auto__,map__27012,map__27012__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto____0 = (function (){
var statearr_27029 = [null,null,null,null,null,null,null,null];
(statearr_27029[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto__);

(statearr_27029[(1)] = (1));

return statearr_27029;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto____1 = (function (state_27023){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_27023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e27030){if((e27030 instanceof Object)){
var ex__21363__auto__ = e27030;
var statearr_27031_27054 = state_27023;
(statearr_27031_27054[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27055 = state_27023;
state_27023 = G__27055;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto__ = function(state_27023){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto____1.call(this,state_27023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto__,map__27012,map__27012__$1,opts,on_cssload))
})();
var state__21423__auto__ = (function (){var statearr_27032 = f__21422__auto__.call(null);
(statearr_27032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto__);

return statearr_27032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto__,map__27012,map__27012__$1,opts,on_cssload))
);

return c__21421__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1433624456881