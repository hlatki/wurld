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
return cljs.core.reduce.call(null,(function (p1__26411_SHARP_,p2__26412_SHARP_){
var and__18183__auto__ = p1__26411_SHARP_;
if(cljs.core.truth_(and__18183__auto__)){
return p2__26412_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26413){
var map__26414 = p__26413;
var map__26414__$1 = ((cljs.core.seq_QMARK_.call(null,map__26414))?cljs.core.apply.call(null,cljs.core.hash_map,map__26414):map__26414);
var file = cljs.core.get.call(null,map__26414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26415){
var map__26416 = p__26415;
var map__26416__$1 = ((cljs.core.seq_QMARK_.call(null,map__26416))?cljs.core.apply.call(null,cljs.core.hash_map,map__26416):map__26416);
var namespace = cljs.core.get.call(null,map__26416__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e26417){if((e26417 instanceof Error)){
var e = e26417;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26417;

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
var G__26419 = arguments.length;
switch (G__26419) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26421,callback){
var map__26423 = p__26421;
var map__26423__$1 = ((cljs.core.seq_QMARK_.call(null,map__26423))?cljs.core.apply.call(null,cljs.core.hash_map,map__26423):map__26423);
var file_msg = map__26423__$1;
var request_url = cljs.core.get.call(null,map__26423__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26423,map__26423__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26423,map__26423__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26424){
var map__26426 = p__26424;
var map__26426__$1 = ((cljs.core.seq_QMARK_.call(null,map__26426))?cljs.core.apply.call(null,cljs.core.hash_map,map__26426):map__26426);
var file_msg = map__26426__$1;
var meta_data = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26427,callback){
var map__26429 = p__26427;
var map__26429__$1 = ((cljs.core.seq_QMARK_.call(null,map__26429))?cljs.core.apply.call(null,cljs.core.hash_map,map__26429):map__26429);
var file_msg = map__26429__$1;
var namespace = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__21439__auto___26516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___26516,out){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___26516,out){
return (function (state_26498){
var state_val_26499 = (state_26498[(1)]);
if((state_val_26499 === (7))){
var inst_26482 = (state_26498[(7)]);
var inst_26488 = (state_26498[(2)]);
var inst_26489 = cljs.core.async.put_BANG_.call(null,out,inst_26488);
var inst_26478 = inst_26482;
var state_26498__$1 = (function (){var statearr_26500 = state_26498;
(statearr_26500[(8)] = inst_26478);

(statearr_26500[(9)] = inst_26489);

return statearr_26500;
})();
var statearr_26501_26517 = state_26498__$1;
(statearr_26501_26517[(2)] = null);

(statearr_26501_26517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (6))){
var inst_26494 = (state_26498[(2)]);
var state_26498__$1 = state_26498;
var statearr_26502_26518 = state_26498__$1;
(statearr_26502_26518[(2)] = inst_26494);

(statearr_26502_26518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (5))){
var inst_26492 = cljs.core.async.close_BANG_.call(null,out);
var state_26498__$1 = state_26498;
var statearr_26503_26519 = state_26498__$1;
(statearr_26503_26519[(2)] = inst_26492);

(statearr_26503_26519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (4))){
var inst_26481 = (state_26498[(10)]);
var inst_26486 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26481);
var state_26498__$1 = state_26498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26498__$1,(7),inst_26486);
} else {
if((state_val_26499 === (3))){
var inst_26496 = (state_26498[(2)]);
var state_26498__$1 = state_26498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26498__$1,inst_26496);
} else {
if((state_val_26499 === (2))){
var inst_26481 = (state_26498[(10)]);
var inst_26478 = (state_26498[(8)]);
var inst_26481__$1 = cljs.core.nth.call(null,inst_26478,(0),null);
var inst_26482 = cljs.core.nthnext.call(null,inst_26478,(1));
var inst_26483 = (inst_26481__$1 == null);
var inst_26484 = cljs.core.not.call(null,inst_26483);
var state_26498__$1 = (function (){var statearr_26504 = state_26498;
(statearr_26504[(10)] = inst_26481__$1);

(statearr_26504[(7)] = inst_26482);

return statearr_26504;
})();
if(inst_26484){
var statearr_26505_26520 = state_26498__$1;
(statearr_26505_26520[(1)] = (4));

} else {
var statearr_26506_26521 = state_26498__$1;
(statearr_26506_26521[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26499 === (1))){
var inst_26476 = cljs.core.nth.call(null,files,(0),null);
var inst_26477 = cljs.core.nthnext.call(null,files,(1));
var inst_26478 = files;
var state_26498__$1 = (function (){var statearr_26507 = state_26498;
(statearr_26507[(11)] = inst_26477);

(statearr_26507[(8)] = inst_26478);

(statearr_26507[(12)] = inst_26476);

return statearr_26507;
})();
var statearr_26508_26522 = state_26498__$1;
(statearr_26508_26522[(2)] = null);

(statearr_26508_26522[(1)] = (2));


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
});})(c__21439__auto___26516,out))
;
return ((function (switch__21377__auto__,c__21439__auto___26516,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto____0 = (function (){
var statearr_26512 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26512[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto__);

(statearr_26512[(1)] = (1));

return statearr_26512;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto____1 = (function (state_26498){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_26498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e26513){if((e26513 instanceof Object)){
var ex__21381__auto__ = e26513;
var statearr_26514_26523 = state_26498;
(statearr_26514_26523[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26524 = state_26498;
state_26498 = G__26524;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto__ = function(state_26498){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto____1.call(this,state_26498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___26516,out))
})();
var state__21441__auto__ = (function (){var statearr_26515 = f__21440__auto__.call(null);
(statearr_26515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___26516);

return statearr_26515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___26516,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26525,p__26526){
var map__26529 = p__26525;
var map__26529__$1 = ((cljs.core.seq_QMARK_.call(null,map__26529))?cljs.core.apply.call(null,cljs.core.hash_map,map__26529):map__26529);
var opts = map__26529__$1;
var url_rewriter = cljs.core.get.call(null,map__26529__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26530 = p__26526;
var map__26530__$1 = ((cljs.core.seq_QMARK_.call(null,map__26530))?cljs.core.apply.call(null,cljs.core.hash_map,map__26530):map__26530);
var file_msg = map__26530__$1;
var file = cljs.core.get.call(null,map__26530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26531){
var map__26534 = p__26531;
var map__26534__$1 = ((cljs.core.seq_QMARK_.call(null,map__26534))?cljs.core.apply.call(null,cljs.core.hash_map,map__26534):map__26534);
var file = cljs.core.get.call(null,map__26534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26534__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e26535){var e = e26535;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26540,p__26541){
var map__26743 = p__26540;
var map__26743__$1 = ((cljs.core.seq_QMARK_.call(null,map__26743))?cljs.core.apply.call(null,cljs.core.hash_map,map__26743):map__26743);
var opts = map__26743__$1;
var load_unchanged_files = cljs.core.get.call(null,map__26743__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__26743__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26743__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26744 = p__26541;
var map__26744__$1 = ((cljs.core.seq_QMARK_.call(null,map__26744))?cljs.core.apply.call(null,cljs.core.hash_map,map__26744):map__26744);
var msg = map__26744__$1;
var files = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files){
return (function (state_26869){
var state_val_26870 = (state_26869[(1)]);
if((state_val_26870 === (7))){
var inst_26759 = (state_26869[(7)]);
var inst_26756 = (state_26869[(8)]);
var inst_26757 = (state_26869[(9)]);
var inst_26758 = (state_26869[(10)]);
var inst_26764 = cljs.core._nth.call(null,inst_26757,inst_26759);
var inst_26765 = figwheel.client.file_reloading.eval_body.call(null,inst_26764);
var inst_26766 = (inst_26759 + (1));
var tmp26871 = inst_26756;
var tmp26872 = inst_26757;
var tmp26873 = inst_26758;
var inst_26756__$1 = tmp26871;
var inst_26757__$1 = tmp26872;
var inst_26758__$1 = tmp26873;
var inst_26759__$1 = inst_26766;
var state_26869__$1 = (function (){var statearr_26874 = state_26869;
(statearr_26874[(7)] = inst_26759__$1);

(statearr_26874[(8)] = inst_26756__$1);

(statearr_26874[(9)] = inst_26757__$1);

(statearr_26874[(10)] = inst_26758__$1);

(statearr_26874[(11)] = inst_26765);

return statearr_26874;
})();
var statearr_26875_26944 = state_26869__$1;
(statearr_26875_26944[(2)] = null);

(statearr_26875_26944[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (20))){
var inst_26802 = (state_26869[(12)]);
var inst_26805 = (state_26869[(13)]);
var inst_26806 = (state_26869[(14)]);
var inst_26808 = (state_26869[(15)]);
var inst_26801 = (state_26869[(16)]);
var inst_26811 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26813 = (function (){var files_not_loaded = inst_26808;
var res = inst_26806;
var res_SINGLEQUOTE_ = inst_26805;
var files_SINGLEQUOTE_ = inst_26802;
var all_files = inst_26801;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26802,inst_26805,inst_26806,inst_26808,inst_26801,inst_26811,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files){
return (function (p__26812){
var map__26876 = p__26812;
var map__26876__$1 = ((cljs.core.seq_QMARK_.call(null,map__26876))?cljs.core.apply.call(null,cljs.core.hash_map,map__26876):map__26876);
var file = cljs.core.get.call(null,map__26876__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__26876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26802,inst_26805,inst_26806,inst_26808,inst_26801,inst_26811,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files))
})();
var inst_26814 = cljs.core.map.call(null,inst_26813,inst_26806);
var inst_26815 = cljs.core.pr_str.call(null,inst_26814);
var inst_26816 = figwheel.client.utils.log.call(null,inst_26815);
var inst_26817 = (function (){var files_not_loaded = inst_26808;
var res = inst_26806;
var res_SINGLEQUOTE_ = inst_26805;
var files_SINGLEQUOTE_ = inst_26802;
var all_files = inst_26801;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26802,inst_26805,inst_26806,inst_26808,inst_26801,inst_26811,inst_26813,inst_26814,inst_26815,inst_26816,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26802,inst_26805,inst_26806,inst_26808,inst_26801,inst_26811,inst_26813,inst_26814,inst_26815,inst_26816,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files))
})();
var inst_26818 = setTimeout(inst_26817,(10));
var state_26869__$1 = (function (){var statearr_26877 = state_26869;
(statearr_26877[(17)] = inst_26816);

(statearr_26877[(18)] = inst_26811);

return statearr_26877;
})();
var statearr_26878_26945 = state_26869__$1;
(statearr_26878_26945[(2)] = inst_26818);

(statearr_26878_26945[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (27))){
var inst_26828 = (state_26869[(19)]);
var state_26869__$1 = state_26869;
var statearr_26879_26946 = state_26869__$1;
(statearr_26879_26946[(2)] = inst_26828);

(statearr_26879_26946[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (1))){
var inst_26748 = (state_26869[(20)]);
var inst_26745 = before_jsload.call(null,files);
var inst_26746 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26747 = (function (){return ((function (inst_26748,inst_26745,inst_26746,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files){
return (function (p1__26536_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26536_SHARP_);
});
;})(inst_26748,inst_26745,inst_26746,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files))
})();
var inst_26748__$1 = cljs.core.filter.call(null,inst_26747,files);
var inst_26749 = cljs.core.not_empty.call(null,inst_26748__$1);
var state_26869__$1 = (function (){var statearr_26880 = state_26869;
(statearr_26880[(21)] = inst_26745);

(statearr_26880[(20)] = inst_26748__$1);

(statearr_26880[(22)] = inst_26746);

return statearr_26880;
})();
if(cljs.core.truth_(inst_26749)){
var statearr_26881_26947 = state_26869__$1;
(statearr_26881_26947[(1)] = (2));

} else {
var statearr_26882_26948 = state_26869__$1;
(statearr_26882_26948[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (24))){
var state_26869__$1 = state_26869;
var statearr_26883_26949 = state_26869__$1;
(statearr_26883_26949[(2)] = null);

(statearr_26883_26949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (4))){
var inst_26793 = (state_26869[(2)]);
var inst_26794 = (function (){return ((function (inst_26793,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files){
return (function (p1__26537_SHARP_){
var and__18183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26537_SHARP_);
if(cljs.core.truth_(and__18183__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26537_SHARP_));
} else {
return and__18183__auto__;
}
});
;})(inst_26793,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files))
})();
var inst_26795 = cljs.core.filter.call(null,inst_26794,files);
var state_26869__$1 = (function (){var statearr_26884 = state_26869;
(statearr_26884[(23)] = inst_26795);

(statearr_26884[(24)] = inst_26793);

return statearr_26884;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26885_26950 = state_26869__$1;
(statearr_26885_26950[(1)] = (16));

} else {
var statearr_26886_26951 = state_26869__$1;
(statearr_26886_26951[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (15))){
var inst_26783 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
var statearr_26887_26952 = state_26869__$1;
(statearr_26887_26952[(2)] = inst_26783);

(statearr_26887_26952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (21))){
var state_26869__$1 = state_26869;
var statearr_26888_26953 = state_26869__$1;
(statearr_26888_26953[(2)] = null);

(statearr_26888_26953[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (31))){
var inst_26836 = (state_26869[(25)]);
var inst_26846 = (state_26869[(2)]);
var inst_26847 = cljs.core.not_empty.call(null,inst_26836);
var state_26869__$1 = (function (){var statearr_26889 = state_26869;
(statearr_26889[(26)] = inst_26846);

return statearr_26889;
})();
if(cljs.core.truth_(inst_26847)){
var statearr_26890_26954 = state_26869__$1;
(statearr_26890_26954[(1)] = (32));

} else {
var statearr_26891_26955 = state_26869__$1;
(statearr_26891_26955[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (32))){
var inst_26836 = (state_26869[(25)]);
var inst_26849 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26836);
var inst_26850 = cljs.core.pr_str.call(null,inst_26849);
var inst_26851 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26850)].join('');
var inst_26852 = figwheel.client.utils.log.call(null,inst_26851);
var state_26869__$1 = state_26869;
var statearr_26892_26956 = state_26869__$1;
(statearr_26892_26956[(2)] = inst_26852);

(statearr_26892_26956[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (33))){
var state_26869__$1 = state_26869;
var statearr_26893_26957 = state_26869__$1;
(statearr_26893_26957[(2)] = null);

(statearr_26893_26957[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (13))){
var inst_26769 = (state_26869[(27)]);
var inst_26773 = cljs.core.chunk_first.call(null,inst_26769);
var inst_26774 = cljs.core.chunk_rest.call(null,inst_26769);
var inst_26775 = cljs.core.count.call(null,inst_26773);
var inst_26756 = inst_26774;
var inst_26757 = inst_26773;
var inst_26758 = inst_26775;
var inst_26759 = (0);
var state_26869__$1 = (function (){var statearr_26894 = state_26869;
(statearr_26894[(7)] = inst_26759);

(statearr_26894[(8)] = inst_26756);

(statearr_26894[(9)] = inst_26757);

(statearr_26894[(10)] = inst_26758);

return statearr_26894;
})();
var statearr_26895_26958 = state_26869__$1;
(statearr_26895_26958[(2)] = null);

(statearr_26895_26958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (22))){
var inst_26808 = (state_26869[(15)]);
var inst_26821 = (state_26869[(2)]);
var inst_26822 = cljs.core.not_empty.call(null,inst_26808);
var state_26869__$1 = (function (){var statearr_26896 = state_26869;
(statearr_26896[(28)] = inst_26821);

return statearr_26896;
})();
if(cljs.core.truth_(inst_26822)){
var statearr_26897_26959 = state_26869__$1;
(statearr_26897_26959[(1)] = (23));

} else {
var statearr_26898_26960 = state_26869__$1;
(statearr_26898_26960[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (36))){
var state_26869__$1 = state_26869;
var statearr_26899_26961 = state_26869__$1;
(statearr_26899_26961[(2)] = null);

(statearr_26899_26961[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (29))){
var inst_26837 = (state_26869[(29)]);
var inst_26840 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26837);
var inst_26841 = cljs.core.pr_str.call(null,inst_26840);
var inst_26842 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26841)].join('');
var inst_26843 = figwheel.client.utils.log.call(null,inst_26842);
var state_26869__$1 = state_26869;
var statearr_26900_26962 = state_26869__$1;
(statearr_26900_26962[(2)] = inst_26843);

(statearr_26900_26962[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (6))){
var inst_26790 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
var statearr_26901_26963 = state_26869__$1;
(statearr_26901_26963[(2)] = inst_26790);

(statearr_26901_26963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (28))){
var inst_26837 = (state_26869[(29)]);
var inst_26834 = (state_26869[(2)]);
var inst_26835 = cljs.core.get.call(null,inst_26834,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26836 = cljs.core.get.call(null,inst_26834,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26837__$1 = cljs.core.get.call(null,inst_26834,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26838 = cljs.core.not_empty.call(null,inst_26837__$1);
var state_26869__$1 = (function (){var statearr_26902 = state_26869;
(statearr_26902[(25)] = inst_26836);

(statearr_26902[(30)] = inst_26835);

(statearr_26902[(29)] = inst_26837__$1);

return statearr_26902;
})();
if(cljs.core.truth_(inst_26838)){
var statearr_26903_26964 = state_26869__$1;
(statearr_26903_26964[(1)] = (29));

} else {
var statearr_26904_26965 = state_26869__$1;
(statearr_26904_26965[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (25))){
var inst_26867 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26869__$1,inst_26867);
} else {
if((state_val_26870 === (34))){
var inst_26835 = (state_26869[(30)]);
var inst_26855 = (state_26869[(2)]);
var inst_26856 = cljs.core.not_empty.call(null,inst_26835);
var state_26869__$1 = (function (){var statearr_26905 = state_26869;
(statearr_26905[(31)] = inst_26855);

return statearr_26905;
})();
if(cljs.core.truth_(inst_26856)){
var statearr_26906_26966 = state_26869__$1;
(statearr_26906_26966[(1)] = (35));

} else {
var statearr_26907_26967 = state_26869__$1;
(statearr_26907_26967[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (17))){
var inst_26795 = (state_26869[(23)]);
var state_26869__$1 = state_26869;
var statearr_26908_26968 = state_26869__$1;
(statearr_26908_26968[(2)] = inst_26795);

(statearr_26908_26968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (3))){
var state_26869__$1 = state_26869;
var statearr_26909_26969 = state_26869__$1;
(statearr_26909_26969[(2)] = null);

(statearr_26909_26969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (12))){
var inst_26786 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
var statearr_26910_26970 = state_26869__$1;
(statearr_26910_26970[(2)] = inst_26786);

(statearr_26910_26970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (2))){
var inst_26748 = (state_26869[(20)]);
var inst_26755 = cljs.core.seq.call(null,inst_26748);
var inst_26756 = inst_26755;
var inst_26757 = null;
var inst_26758 = (0);
var inst_26759 = (0);
var state_26869__$1 = (function (){var statearr_26911 = state_26869;
(statearr_26911[(7)] = inst_26759);

(statearr_26911[(8)] = inst_26756);

(statearr_26911[(9)] = inst_26757);

(statearr_26911[(10)] = inst_26758);

return statearr_26911;
})();
var statearr_26912_26971 = state_26869__$1;
(statearr_26912_26971[(2)] = null);

(statearr_26912_26971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (23))){
var inst_26802 = (state_26869[(12)]);
var inst_26828 = (state_26869[(19)]);
var inst_26805 = (state_26869[(13)]);
var inst_26806 = (state_26869[(14)]);
var inst_26808 = (state_26869[(15)]);
var inst_26801 = (state_26869[(16)]);
var inst_26824 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26827 = (function (){var files_not_loaded = inst_26808;
var res = inst_26806;
var res_SINGLEQUOTE_ = inst_26805;
var files_SINGLEQUOTE_ = inst_26802;
var all_files = inst_26801;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26802,inst_26828,inst_26805,inst_26806,inst_26808,inst_26801,inst_26824,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files){
return (function (p__26826){
var map__26913 = p__26826;
var map__26913__$1 = ((cljs.core.seq_QMARK_.call(null,map__26913))?cljs.core.apply.call(null,cljs.core.hash_map,map__26913):map__26913);
var meta_data = cljs.core.get.call(null,map__26913__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26802,inst_26828,inst_26805,inst_26806,inst_26808,inst_26801,inst_26824,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files))
})();
var inst_26828__$1 = cljs.core.group_by.call(null,inst_26827,inst_26808);
var inst_26829 = cljs.core.seq_QMARK_.call(null,inst_26828__$1);
var state_26869__$1 = (function (){var statearr_26914 = state_26869;
(statearr_26914[(19)] = inst_26828__$1);

(statearr_26914[(32)] = inst_26824);

return statearr_26914;
})();
if(inst_26829){
var statearr_26915_26972 = state_26869__$1;
(statearr_26915_26972[(1)] = (26));

} else {
var statearr_26916_26973 = state_26869__$1;
(statearr_26916_26973[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (35))){
var inst_26835 = (state_26869[(30)]);
var inst_26858 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26835);
var inst_26859 = cljs.core.pr_str.call(null,inst_26858);
var inst_26860 = [cljs.core.str("not required: "),cljs.core.str(inst_26859)].join('');
var inst_26861 = figwheel.client.utils.log.call(null,inst_26860);
var state_26869__$1 = state_26869;
var statearr_26917_26974 = state_26869__$1;
(statearr_26917_26974[(2)] = inst_26861);

(statearr_26917_26974[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (19))){
var inst_26802 = (state_26869[(12)]);
var inst_26805 = (state_26869[(13)]);
var inst_26806 = (state_26869[(14)]);
var inst_26801 = (state_26869[(16)]);
var inst_26805__$1 = (state_26869[(2)]);
var inst_26806__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26805__$1);
var inst_26807 = (function (){var res = inst_26806__$1;
var res_SINGLEQUOTE_ = inst_26805__$1;
var files_SINGLEQUOTE_ = inst_26802;
var all_files = inst_26801;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26802,inst_26805,inst_26806,inst_26801,inst_26805__$1,inst_26806__$1,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files){
return (function (p1__26539_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26539_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_26802,inst_26805,inst_26806,inst_26801,inst_26805__$1,inst_26806__$1,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files))
})();
var inst_26808 = cljs.core.filter.call(null,inst_26807,inst_26805__$1);
var inst_26809 = cljs.core.not_empty.call(null,inst_26806__$1);
var state_26869__$1 = (function (){var statearr_26918 = state_26869;
(statearr_26918[(13)] = inst_26805__$1);

(statearr_26918[(14)] = inst_26806__$1);

(statearr_26918[(15)] = inst_26808);

return statearr_26918;
})();
if(cljs.core.truth_(inst_26809)){
var statearr_26919_26975 = state_26869__$1;
(statearr_26919_26975[(1)] = (20));

} else {
var statearr_26920_26976 = state_26869__$1;
(statearr_26920_26976[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (11))){
var state_26869__$1 = state_26869;
var statearr_26921_26977 = state_26869__$1;
(statearr_26921_26977[(2)] = null);

(statearr_26921_26977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (9))){
var inst_26788 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
var statearr_26922_26978 = state_26869__$1;
(statearr_26922_26978[(2)] = inst_26788);

(statearr_26922_26978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (5))){
var inst_26759 = (state_26869[(7)]);
var inst_26758 = (state_26869[(10)]);
var inst_26761 = (inst_26759 < inst_26758);
var inst_26762 = inst_26761;
var state_26869__$1 = state_26869;
if(cljs.core.truth_(inst_26762)){
var statearr_26923_26979 = state_26869__$1;
(statearr_26923_26979[(1)] = (7));

} else {
var statearr_26924_26980 = state_26869__$1;
(statearr_26924_26980[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (14))){
var inst_26769 = (state_26869[(27)]);
var inst_26778 = cljs.core.first.call(null,inst_26769);
var inst_26779 = figwheel.client.file_reloading.eval_body.call(null,inst_26778);
var inst_26780 = cljs.core.next.call(null,inst_26769);
var inst_26756 = inst_26780;
var inst_26757 = null;
var inst_26758 = (0);
var inst_26759 = (0);
var state_26869__$1 = (function (){var statearr_26925 = state_26869;
(statearr_26925[(7)] = inst_26759);

(statearr_26925[(8)] = inst_26756);

(statearr_26925[(9)] = inst_26757);

(statearr_26925[(10)] = inst_26758);

(statearr_26925[(33)] = inst_26779);

return statearr_26925;
})();
var statearr_26926_26981 = state_26869__$1;
(statearr_26926_26981[(2)] = null);

(statearr_26926_26981[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (26))){
var inst_26828 = (state_26869[(19)]);
var inst_26831 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26828);
var state_26869__$1 = state_26869;
var statearr_26927_26982 = state_26869__$1;
(statearr_26927_26982[(2)] = inst_26831);

(statearr_26927_26982[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (16))){
var inst_26795 = (state_26869[(23)]);
var inst_26797 = (function (){var all_files = inst_26795;
return ((function (all_files,inst_26795,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files){
return (function (p1__26538_SHARP_){
return cljs.core.update_in.call(null,p1__26538_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26795,state_val_26870,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files))
})();
var inst_26798 = cljs.core.map.call(null,inst_26797,inst_26795);
var state_26869__$1 = state_26869;
var statearr_26928_26983 = state_26869__$1;
(statearr_26928_26983[(2)] = inst_26798);

(statearr_26928_26983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (30))){
var state_26869__$1 = state_26869;
var statearr_26929_26984 = state_26869__$1;
(statearr_26929_26984[(2)] = null);

(statearr_26929_26984[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (10))){
var inst_26769 = (state_26869[(27)]);
var inst_26771 = cljs.core.chunked_seq_QMARK_.call(null,inst_26769);
var state_26869__$1 = state_26869;
if(inst_26771){
var statearr_26930_26985 = state_26869__$1;
(statearr_26930_26985[(1)] = (13));

} else {
var statearr_26931_26986 = state_26869__$1;
(statearr_26931_26986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (18))){
var inst_26802 = (state_26869[(12)]);
var inst_26801 = (state_26869[(16)]);
var inst_26801__$1 = (state_26869[(2)]);
var inst_26802__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26801__$1);
var inst_26803 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26802__$1);
var state_26869__$1 = (function (){var statearr_26932 = state_26869;
(statearr_26932[(12)] = inst_26802__$1);

(statearr_26932[(16)] = inst_26801__$1);

return statearr_26932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26869__$1,(19),inst_26803);
} else {
if((state_val_26870 === (37))){
var inst_26864 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
var statearr_26933_26987 = state_26869__$1;
(statearr_26933_26987[(2)] = inst_26864);

(statearr_26933_26987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (8))){
var inst_26769 = (state_26869[(27)]);
var inst_26756 = (state_26869[(8)]);
var inst_26769__$1 = cljs.core.seq.call(null,inst_26756);
var state_26869__$1 = (function (){var statearr_26934 = state_26869;
(statearr_26934[(27)] = inst_26769__$1);

return statearr_26934;
})();
if(inst_26769__$1){
var statearr_26935_26988 = state_26869__$1;
(statearr_26935_26988[(1)] = (10));

} else {
var statearr_26936_26989 = state_26869__$1;
(statearr_26936_26989[(1)] = (11));

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
});})(c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files))
;
return ((function (switch__21377__auto__,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto____0 = (function (){
var statearr_26940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26940[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto__);

(statearr_26940[(1)] = (1));

return statearr_26940;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto____1 = (function (state_26869){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_26869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e26941){if((e26941 instanceof Object)){
var ex__21381__auto__ = e26941;
var statearr_26942_26990 = state_26869;
(statearr_26942_26990[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26991 = state_26869;
state_26869 = G__26991;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto__ = function(state_26869){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto____1.call(this,state_26869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files))
})();
var state__21441__auto__ = (function (){var statearr_26943 = f__21440__auto__.call(null);
(statearr_26943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_26943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__,map__26743,map__26743__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__26744,map__26744__$1,msg,files))
);

return c__21439__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26994,link){
var map__26996 = p__26994;
var map__26996__$1 = ((cljs.core.seq_QMARK_.call(null,map__26996))?cljs.core.apply.call(null,cljs.core.hash_map,map__26996):map__26996);
var file = cljs.core.get.call(null,map__26996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__26996,map__26996__$1,file){
return (function (p1__26992_SHARP_,p2__26993_SHARP_){
if(cljs.core._EQ_.call(null,p1__26992_SHARP_,p2__26993_SHARP_)){
return p1__26992_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__26996,map__26996__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27000){
var map__27001 = p__27000;
var map__27001__$1 = ((cljs.core.seq_QMARK_.call(null,map__27001))?cljs.core.apply.call(null,cljs.core.hash_map,map__27001):map__27001);
var current_url_length = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26997_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26997_SHARP_);
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
var G__27003 = arguments.length;
switch (G__27003) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27005){
var map__27007 = p__27005;
var map__27007__$1 = ((cljs.core.seq_QMARK_.call(null,map__27007))?cljs.core.apply.call(null,cljs.core.hash_map,map__27007):map__27007);
var f_data = map__27007__$1;
var request_url = cljs.core.get.call(null,map__27007__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__27007__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27008,files_msg){
var map__27030 = p__27008;
var map__27030__$1 = ((cljs.core.seq_QMARK_.call(null,map__27030))?cljs.core.apply.call(null,cljs.core.hash_map,map__27030):map__27030);
var opts = map__27030__$1;
var on_cssload = cljs.core.get.call(null,map__27030__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27031_27051 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27032_27052 = null;
var count__27033_27053 = (0);
var i__27034_27054 = (0);
while(true){
if((i__27034_27054 < count__27033_27053)){
var f_27055 = cljs.core._nth.call(null,chunk__27032_27052,i__27034_27054);
figwheel.client.file_reloading.reload_css_file.call(null,f_27055);

var G__27056 = seq__27031_27051;
var G__27057 = chunk__27032_27052;
var G__27058 = count__27033_27053;
var G__27059 = (i__27034_27054 + (1));
seq__27031_27051 = G__27056;
chunk__27032_27052 = G__27057;
count__27033_27053 = G__27058;
i__27034_27054 = G__27059;
continue;
} else {
var temp__4126__auto___27060 = cljs.core.seq.call(null,seq__27031_27051);
if(temp__4126__auto___27060){
var seq__27031_27061__$1 = temp__4126__auto___27060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27031_27061__$1)){
var c__18980__auto___27062 = cljs.core.chunk_first.call(null,seq__27031_27061__$1);
var G__27063 = cljs.core.chunk_rest.call(null,seq__27031_27061__$1);
var G__27064 = c__18980__auto___27062;
var G__27065 = cljs.core.count.call(null,c__18980__auto___27062);
var G__27066 = (0);
seq__27031_27051 = G__27063;
chunk__27032_27052 = G__27064;
count__27033_27053 = G__27065;
i__27034_27054 = G__27066;
continue;
} else {
var f_27067 = cljs.core.first.call(null,seq__27031_27061__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27067);

var G__27068 = cljs.core.next.call(null,seq__27031_27061__$1);
var G__27069 = null;
var G__27070 = (0);
var G__27071 = (0);
seq__27031_27051 = G__27068;
chunk__27032_27052 = G__27069;
count__27033_27053 = G__27070;
i__27034_27054 = G__27071;
continue;
}
} else {
}
}
break;
}

var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__,map__27030,map__27030__$1,opts,on_cssload){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__,map__27030,map__27030__$1,opts,on_cssload){
return (function (state_27041){
var state_val_27042 = (state_27041[(1)]);
if((state_val_27042 === (2))){
var inst_27037 = (state_27041[(2)]);
var inst_27038 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27039 = on_cssload.call(null,inst_27038);
var state_27041__$1 = (function (){var statearr_27043 = state_27041;
(statearr_27043[(7)] = inst_27037);

return statearr_27043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27041__$1,inst_27039);
} else {
if((state_val_27042 === (1))){
var inst_27035 = cljs.core.async.timeout.call(null,(100));
var state_27041__$1 = state_27041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27041__$1,(2),inst_27035);
} else {
return null;
}
}
});})(c__21439__auto__,map__27030,map__27030__$1,opts,on_cssload))
;
return ((function (switch__21377__auto__,c__21439__auto__,map__27030,map__27030__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto____0 = (function (){
var statearr_27047 = [null,null,null,null,null,null,null,null];
(statearr_27047[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto__);

(statearr_27047[(1)] = (1));

return statearr_27047;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto____1 = (function (state_27041){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_27041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e27048){if((e27048 instanceof Object)){
var ex__21381__auto__ = e27048;
var statearr_27049_27072 = state_27041;
(statearr_27049_27072[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27073 = state_27041;
state_27041 = G__27073;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto__ = function(state_27041){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto____1.call(this,state_27041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__,map__27030,map__27030__$1,opts,on_cssload))
})();
var state__21441__auto__ = (function (){var statearr_27050 = f__21440__auto__.call(null);
(statearr_27050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_27050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__,map__27030,map__27030__$1,opts,on_cssload))
);

return c__21439__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1436069133105