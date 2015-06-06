// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25339__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25340__i = 0, G__25340__a = new Array(arguments.length -  0);
while (G__25340__i < G__25340__a.length) {G__25340__a[G__25340__i] = arguments[G__25340__i + 0]; ++G__25340__i;}
  args = new cljs.core.IndexedSeq(G__25340__a,0);
} 
return G__25339__delegate.call(this,args);};
G__25339.cljs$lang$maxFixedArity = 0;
G__25339.cljs$lang$applyTo = (function (arglist__25341){
var args = cljs.core.seq(arglist__25341);
return G__25339__delegate(args);
});
G__25339.cljs$core$IFn$_invoke$arity$variadic = G__25339__delegate;
return G__25339;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25342){
var map__25344 = p__25342;
var map__25344__$1 = ((cljs.core.seq_QMARK_.call(null,map__25344))?cljs.core.apply.call(null,cljs.core.hash_map,map__25344):map__25344);
var class$ = cljs.core.get.call(null,map__25344__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25344__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18195__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18183__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18183__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18183__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21421__auto___25473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___25473,ch){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___25473,ch){
return (function (state_25447){
var state_val_25448 = (state_25447[(1)]);
if((state_val_25448 === (7))){
var inst_25443 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25449_25474 = state_25447__$1;
(statearr_25449_25474[(2)] = inst_25443);

(statearr_25449_25474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (1))){
var state_25447__$1 = state_25447;
var statearr_25450_25475 = state_25447__$1;
(statearr_25450_25475[(2)] = null);

(statearr_25450_25475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (4))){
var inst_25411 = (state_25447[(7)]);
var inst_25411__$1 = (state_25447[(2)]);
var state_25447__$1 = (function (){var statearr_25451 = state_25447;
(statearr_25451[(7)] = inst_25411__$1);

return statearr_25451;
})();
if(cljs.core.truth_(inst_25411__$1)){
var statearr_25452_25476 = state_25447__$1;
(statearr_25452_25476[(1)] = (5));

} else {
var statearr_25453_25477 = state_25447__$1;
(statearr_25453_25477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (13))){
var state_25447__$1 = state_25447;
var statearr_25454_25478 = state_25447__$1;
(statearr_25454_25478[(2)] = null);

(statearr_25454_25478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (6))){
var state_25447__$1 = state_25447;
var statearr_25455_25479 = state_25447__$1;
(statearr_25455_25479[(2)] = null);

(statearr_25455_25479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (3))){
var inst_25445 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25447__$1,inst_25445);
} else {
if((state_val_25448 === (12))){
var inst_25418 = (state_25447[(8)]);
var inst_25431 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25418);
var inst_25432 = cljs.core.first.call(null,inst_25431);
var inst_25433 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25432);
var inst_25434 = console.warn("Figwheel: Not loading code with warnings - ",inst_25433);
var state_25447__$1 = state_25447;
var statearr_25456_25480 = state_25447__$1;
(statearr_25456_25480[(2)] = inst_25434);

(statearr_25456_25480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (2))){
var state_25447__$1 = state_25447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25447__$1,(4),ch);
} else {
if((state_val_25448 === (11))){
var inst_25427 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25457_25481 = state_25447__$1;
(statearr_25457_25481[(2)] = inst_25427);

(statearr_25457_25481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (9))){
var inst_25417 = (state_25447[(9)]);
var inst_25429 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25417,opts);
var state_25447__$1 = state_25447;
if(cljs.core.truth_(inst_25429)){
var statearr_25458_25482 = state_25447__$1;
(statearr_25458_25482[(1)] = (12));

} else {
var statearr_25459_25483 = state_25447__$1;
(statearr_25459_25483[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (5))){
var inst_25411 = (state_25447[(7)]);
var inst_25417 = (state_25447[(9)]);
var inst_25413 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25414 = (new cljs.core.PersistentArrayMap(null,2,inst_25413,null));
var inst_25415 = (new cljs.core.PersistentHashSet(null,inst_25414,null));
var inst_25416 = figwheel.client.focus_msgs.call(null,inst_25415,inst_25411);
var inst_25417__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25416);
var inst_25418 = cljs.core.first.call(null,inst_25416);
var inst_25419 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25417__$1,opts);
var state_25447__$1 = (function (){var statearr_25460 = state_25447;
(statearr_25460[(8)] = inst_25418);

(statearr_25460[(9)] = inst_25417__$1);

return statearr_25460;
})();
if(cljs.core.truth_(inst_25419)){
var statearr_25461_25484 = state_25447__$1;
(statearr_25461_25484[(1)] = (8));

} else {
var statearr_25462_25485 = state_25447__$1;
(statearr_25462_25485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (14))){
var inst_25437 = (state_25447[(2)]);
var state_25447__$1 = state_25447;
var statearr_25463_25486 = state_25447__$1;
(statearr_25463_25486[(2)] = inst_25437);

(statearr_25463_25486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (10))){
var inst_25439 = (state_25447[(2)]);
var state_25447__$1 = (function (){var statearr_25464 = state_25447;
(statearr_25464[(10)] = inst_25439);

return statearr_25464;
})();
var statearr_25465_25487 = state_25447__$1;
(statearr_25465_25487[(2)] = null);

(statearr_25465_25487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25448 === (8))){
var inst_25418 = (state_25447[(8)]);
var inst_25421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25422 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25418);
var inst_25423 = cljs.core.async.timeout.call(null,(1000));
var inst_25424 = [inst_25422,inst_25423];
var inst_25425 = (new cljs.core.PersistentVector(null,2,(5),inst_25421,inst_25424,null));
var state_25447__$1 = state_25447;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25447__$1,(11),inst_25425);
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
});})(c__21421__auto___25473,ch))
;
return ((function (switch__21359__auto__,c__21421__auto___25473,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21360__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21360__auto____0 = (function (){
var statearr_25469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25469[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21360__auto__);

(statearr_25469[(1)] = (1));

return statearr_25469;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21360__auto____1 = (function (state_25447){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_25447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e25470){if((e25470 instanceof Object)){
var ex__21363__auto__ = e25470;
var statearr_25471_25488 = state_25447;
(statearr_25471_25488[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25489 = state_25447;
state_25447 = G__25489;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21360__auto__ = function(state_25447){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21360__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21360__auto____1.call(this,state_25447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21360__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21360__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___25473,ch))
})();
var state__21423__auto__ = (function (){var statearr_25472 = f__21422__auto__.call(null);
(statearr_25472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___25473);

return statearr_25472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___25473,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25490_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25490_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25497 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25497){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25495 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25496 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25495,_STAR_print_newline_STAR_25496,base_path_25497){
return (function() { 
var G__25498__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25499__i = 0, G__25499__a = new Array(arguments.length -  0);
while (G__25499__i < G__25499__a.length) {G__25499__a[G__25499__i] = arguments[G__25499__i + 0]; ++G__25499__i;}
  args = new cljs.core.IndexedSeq(G__25499__a,0);
} 
return G__25498__delegate.call(this,args);};
G__25498.cljs$lang$maxFixedArity = 0;
G__25498.cljs$lang$applyTo = (function (arglist__25500){
var args = cljs.core.seq(arglist__25500);
return G__25498__delegate(args);
});
G__25498.cljs$core$IFn$_invoke$arity$variadic = G__25498__delegate;
return G__25498;
})()
;})(_STAR_print_fn_STAR_25495,_STAR_print_newline_STAR_25496,base_path_25497))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25496;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25495;
}}catch (e25494){if((e25494 instanceof Error)){
var e = e25494;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25497], null));
} else {
var e = e25494;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25497))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25501){
var map__25506 = p__25501;
var map__25506__$1 = ((cljs.core.seq_QMARK_.call(null,map__25506))?cljs.core.apply.call(null,cljs.core.hash_map,map__25506):map__25506);
var opts = map__25506__$1;
var build_id = cljs.core.get.call(null,map__25506__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25506,map__25506__$1,opts,build_id){
return (function (p__25507){
var vec__25508 = p__25507;
var map__25509 = cljs.core.nth.call(null,vec__25508,(0),null);
var map__25509__$1 = ((cljs.core.seq_QMARK_.call(null,map__25509))?cljs.core.apply.call(null,cljs.core.hash_map,map__25509):map__25509);
var msg = map__25509__$1;
var msg_name = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25508,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25508,map__25509,map__25509__$1,msg,msg_name,_,map__25506,map__25506__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25508,map__25509,map__25509__$1,msg,msg_name,_,map__25506,map__25506__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25506,map__25506__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25513){
var vec__25514 = p__25513;
var map__25515 = cljs.core.nth.call(null,vec__25514,(0),null);
var map__25515__$1 = ((cljs.core.seq_QMARK_.call(null,map__25515))?cljs.core.apply.call(null,cljs.core.hash_map,map__25515):map__25515);
var msg = map__25515__$1;
var msg_name = cljs.core.get.call(null,map__25515__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25514,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25516){
var map__25524 = p__25516;
var map__25524__$1 = ((cljs.core.seq_QMARK_.call(null,map__25524))?cljs.core.apply.call(null,cljs.core.hash_map,map__25524):map__25524);
var on_compile_fail = cljs.core.get.call(null,map__25524__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25524__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25524,map__25524__$1,on_compile_fail,on_compile_warning){
return (function (p__25525){
var vec__25526 = p__25525;
var map__25527 = cljs.core.nth.call(null,vec__25526,(0),null);
var map__25527__$1 = ((cljs.core.seq_QMARK_.call(null,map__25527))?cljs.core.apply.call(null,cljs.core.hash_map,map__25527):map__25527);
var msg = map__25527__$1;
var msg_name = cljs.core.get.call(null,map__25527__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25526,(1));
var pred__25528 = cljs.core._EQ_;
var expr__25529 = msg_name;
if(cljs.core.truth_(pred__25528.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25529))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25528.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25529))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25524,map__25524__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto__,msg_hist,msg_names,msg){
return (function (state_25730){
var state_val_25731 = (state_25730[(1)]);
if((state_val_25731 === (7))){
var inst_25664 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25732_25773 = state_25730__$1;
(statearr_25732_25773[(2)] = inst_25664);

(statearr_25732_25773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (20))){
var inst_25692 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25692)){
var statearr_25733_25774 = state_25730__$1;
(statearr_25733_25774[(1)] = (22));

} else {
var statearr_25734_25775 = state_25730__$1;
(statearr_25734_25775[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (27))){
var inst_25704 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25705 = figwheel.client.heads_up.display_warning.call(null,inst_25704);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(30),inst_25705);
} else {
if((state_val_25731 === (1))){
var inst_25652 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25652)){
var statearr_25735_25776 = state_25730__$1;
(statearr_25735_25776[(1)] = (2));

} else {
var statearr_25736_25777 = state_25730__$1;
(statearr_25736_25777[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (24))){
var inst_25720 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25737_25778 = state_25730__$1;
(statearr_25737_25778[(2)] = inst_25720);

(statearr_25737_25778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (4))){
var inst_25728 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25730__$1,inst_25728);
} else {
if((state_val_25731 === (15))){
var inst_25680 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25681 = figwheel.client.format_messages.call(null,inst_25680);
var inst_25682 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25683 = figwheel.client.heads_up.display_error.call(null,inst_25681,inst_25682);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(18),inst_25683);
} else {
if((state_val_25731 === (21))){
var inst_25722 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25738_25779 = state_25730__$1;
(statearr_25738_25779[(2)] = inst_25722);

(statearr_25738_25779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (31))){
var inst_25711 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(34),inst_25711);
} else {
if((state_val_25731 === (32))){
var state_25730__$1 = state_25730;
var statearr_25739_25780 = state_25730__$1;
(statearr_25739_25780[(2)] = null);

(statearr_25739_25780[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (33))){
var inst_25716 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25740_25781 = state_25730__$1;
(statearr_25740_25781[(2)] = inst_25716);

(statearr_25740_25781[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (13))){
var inst_25670 = (state_25730[(2)]);
var inst_25671 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25672 = figwheel.client.format_messages.call(null,inst_25671);
var inst_25673 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25674 = figwheel.client.heads_up.display_error.call(null,inst_25672,inst_25673);
var state_25730__$1 = (function (){var statearr_25741 = state_25730;
(statearr_25741[(7)] = inst_25670);

return statearr_25741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(14),inst_25674);
} else {
if((state_val_25731 === (22))){
var inst_25694 = figwheel.client.heads_up.clear.call(null);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(25),inst_25694);
} else {
if((state_val_25731 === (29))){
var inst_25718 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25742_25782 = state_25730__$1;
(statearr_25742_25782[(2)] = inst_25718);

(statearr_25742_25782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (6))){
var inst_25660 = figwheel.client.heads_up.clear.call(null);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(9),inst_25660);
} else {
if((state_val_25731 === (28))){
var inst_25709 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25709)){
var statearr_25743_25783 = state_25730__$1;
(statearr_25743_25783[(1)] = (31));

} else {
var statearr_25744_25784 = state_25730__$1;
(statearr_25744_25784[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (25))){
var inst_25696 = (state_25730[(2)]);
var inst_25697 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25698 = figwheel.client.heads_up.display_warning.call(null,inst_25697);
var state_25730__$1 = (function (){var statearr_25745 = state_25730;
(statearr_25745[(8)] = inst_25696);

return statearr_25745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(26),inst_25698);
} else {
if((state_val_25731 === (34))){
var inst_25713 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25746_25785 = state_25730__$1;
(statearr_25746_25785[(2)] = inst_25713);

(statearr_25746_25785[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (17))){
var inst_25724 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25747_25786 = state_25730__$1;
(statearr_25747_25786[(2)] = inst_25724);

(statearr_25747_25786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (3))){
var inst_25666 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25666)){
var statearr_25748_25787 = state_25730__$1;
(statearr_25748_25787[(1)] = (10));

} else {
var statearr_25749_25788 = state_25730__$1;
(statearr_25749_25788[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (12))){
var inst_25726 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25750_25789 = state_25730__$1;
(statearr_25750_25789[(2)] = inst_25726);

(statearr_25750_25789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (2))){
var inst_25654 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25654)){
var statearr_25751_25790 = state_25730__$1;
(statearr_25751_25790[(1)] = (5));

} else {
var statearr_25752_25791 = state_25730__$1;
(statearr_25752_25791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (23))){
var inst_25702 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25702)){
var statearr_25753_25792 = state_25730__$1;
(statearr_25753_25792[(1)] = (27));

} else {
var statearr_25754_25793 = state_25730__$1;
(statearr_25754_25793[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (19))){
var inst_25689 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25690 = figwheel.client.heads_up.append_message.call(null,inst_25689);
var state_25730__$1 = state_25730;
var statearr_25755_25794 = state_25730__$1;
(statearr_25755_25794[(2)] = inst_25690);

(statearr_25755_25794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (11))){
var inst_25678 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25678)){
var statearr_25756_25795 = state_25730__$1;
(statearr_25756_25795[(1)] = (15));

} else {
var statearr_25757_25796 = state_25730__$1;
(statearr_25757_25796[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (9))){
var inst_25662 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25758_25797 = state_25730__$1;
(statearr_25758_25797[(2)] = inst_25662);

(statearr_25758_25797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (5))){
var inst_25656 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(8),inst_25656);
} else {
if((state_val_25731 === (14))){
var inst_25676 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25759_25798 = state_25730__$1;
(statearr_25759_25798[(2)] = inst_25676);

(statearr_25759_25798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (26))){
var inst_25700 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25760_25799 = state_25730__$1;
(statearr_25760_25799[(2)] = inst_25700);

(statearr_25760_25799[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (16))){
var inst_25687 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25687)){
var statearr_25761_25800 = state_25730__$1;
(statearr_25761_25800[(1)] = (19));

} else {
var statearr_25762_25801 = state_25730__$1;
(statearr_25762_25801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (30))){
var inst_25707 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25763_25802 = state_25730__$1;
(statearr_25763_25802[(2)] = inst_25707);

(statearr_25763_25802[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (10))){
var inst_25668 = figwheel.client.heads_up.clear.call(null);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(13),inst_25668);
} else {
if((state_val_25731 === (18))){
var inst_25685 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25764_25803 = state_25730__$1;
(statearr_25764_25803[(2)] = inst_25685);

(statearr_25764_25803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (8))){
var inst_25658 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25765_25804 = state_25730__$1;
(statearr_25765_25804[(2)] = inst_25658);

(statearr_25765_25804[(1)] = (7));


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
});})(c__21421__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21359__auto__,c__21421__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto____0 = (function (){
var statearr_25769 = [null,null,null,null,null,null,null,null,null];
(statearr_25769[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto__);

(statearr_25769[(1)] = (1));

return statearr_25769;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto____1 = (function (state_25730){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_25730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e25770){if((e25770 instanceof Object)){
var ex__21363__auto__ = e25770;
var statearr_25771_25805 = state_25730;
(statearr_25771_25805[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25806 = state_25730;
state_25730 = G__25806;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto__ = function(state_25730){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto____1.call(this,state_25730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto__,msg_hist,msg_names,msg))
})();
var state__21423__auto__ = (function (){var statearr_25772 = f__21422__auto__.call(null);
(statearr_25772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto__);

return statearr_25772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto__,msg_hist,msg_names,msg))
);

return c__21421__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21421__auto___25869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___25869,ch){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___25869,ch){
return (function (state_25852){
var state_val_25853 = (state_25852[(1)]);
if((state_val_25853 === (8))){
var inst_25844 = (state_25852[(2)]);
var state_25852__$1 = (function (){var statearr_25854 = state_25852;
(statearr_25854[(7)] = inst_25844);

return statearr_25854;
})();
var statearr_25855_25870 = state_25852__$1;
(statearr_25855_25870[(2)] = null);

(statearr_25855_25870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25853 === (7))){
var inst_25848 = (state_25852[(2)]);
var state_25852__$1 = state_25852;
var statearr_25856_25871 = state_25852__$1;
(statearr_25856_25871[(2)] = inst_25848);

(statearr_25856_25871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25853 === (6))){
var state_25852__$1 = state_25852;
var statearr_25857_25872 = state_25852__$1;
(statearr_25857_25872[(2)] = null);

(statearr_25857_25872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25853 === (5))){
var inst_25840 = (state_25852[(8)]);
var inst_25842 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25840);
var state_25852__$1 = state_25852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25852__$1,(8),inst_25842);
} else {
if((state_val_25853 === (4))){
var inst_25840 = (state_25852[(8)]);
var inst_25840__$1 = (state_25852[(2)]);
var state_25852__$1 = (function (){var statearr_25858 = state_25852;
(statearr_25858[(8)] = inst_25840__$1);

return statearr_25858;
})();
if(cljs.core.truth_(inst_25840__$1)){
var statearr_25859_25873 = state_25852__$1;
(statearr_25859_25873[(1)] = (5));

} else {
var statearr_25860_25874 = state_25852__$1;
(statearr_25860_25874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25853 === (3))){
var inst_25850 = (state_25852[(2)]);
var state_25852__$1 = state_25852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25852__$1,inst_25850);
} else {
if((state_val_25853 === (2))){
var state_25852__$1 = state_25852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25852__$1,(4),ch);
} else {
if((state_val_25853 === (1))){
var state_25852__$1 = state_25852;
var statearr_25861_25875 = state_25852__$1;
(statearr_25861_25875[(2)] = null);

(statearr_25861_25875[(1)] = (2));


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
});})(c__21421__auto___25869,ch))
;
return ((function (switch__21359__auto__,c__21421__auto___25869,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21360__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21360__auto____0 = (function (){
var statearr_25865 = [null,null,null,null,null,null,null,null,null];
(statearr_25865[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21360__auto__);

(statearr_25865[(1)] = (1));

return statearr_25865;
});
var figwheel$client$heads_up_plugin_$_state_machine__21360__auto____1 = (function (state_25852){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_25852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e25866){if((e25866 instanceof Object)){
var ex__21363__auto__ = e25866;
var statearr_25867_25876 = state_25852;
(statearr_25867_25876[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25877 = state_25852;
state_25852 = G__25877;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21360__auto__ = function(state_25852){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21360__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21360__auto____1.call(this,state_25852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21360__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21360__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___25869,ch))
})();
var state__21423__auto__ = (function (){var statearr_25868 = f__21422__auto__.call(null);
(statearr_25868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___25869);

return statearr_25868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___25869,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto__){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto__){
return (function (state_25898){
var state_val_25899 = (state_25898[(1)]);
if((state_val_25899 === (2))){
var inst_25895 = (state_25898[(2)]);
var inst_25896 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25898__$1 = (function (){var statearr_25900 = state_25898;
(statearr_25900[(7)] = inst_25895);

return statearr_25900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25898__$1,inst_25896);
} else {
if((state_val_25899 === (1))){
var inst_25893 = cljs.core.async.timeout.call(null,(3000));
var state_25898__$1 = state_25898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25898__$1,(2),inst_25893);
} else {
return null;
}
}
});})(c__21421__auto__))
;
return ((function (switch__21359__auto__,c__21421__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21360__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21360__auto____0 = (function (){
var statearr_25904 = [null,null,null,null,null,null,null,null];
(statearr_25904[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21360__auto__);

(statearr_25904[(1)] = (1));

return statearr_25904;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21360__auto____1 = (function (state_25898){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_25898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e25905){if((e25905 instanceof Object)){
var ex__21363__auto__ = e25905;
var statearr_25906_25908 = state_25898;
(statearr_25906_25908[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25909 = state_25898;
state_25898 = G__25909;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21360__auto__ = function(state_25898){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21360__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21360__auto____1.call(this,state_25898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21360__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21360__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto__))
})();
var state__21423__auto__ = (function (){var statearr_25907 = f__21422__auto__.call(null);
(statearr_25907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto__);

return statearr_25907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto__))
);

return c__21421__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25910){
var map__25916 = p__25910;
var map__25916__$1 = ((cljs.core.seq_QMARK_.call(null,map__25916))?cljs.core.apply.call(null,cljs.core.hash_map,map__25916):map__25916);
var ed = map__25916__$1;
var cause = cljs.core.get.call(null,map__25916__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__25916__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__25916__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25917_25921 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25918_25922 = null;
var count__25919_25923 = (0);
var i__25920_25924 = (0);
while(true){
if((i__25920_25924 < count__25919_25923)){
var msg_25925 = cljs.core._nth.call(null,chunk__25918_25922,i__25920_25924);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25925);

var G__25926 = seq__25917_25921;
var G__25927 = chunk__25918_25922;
var G__25928 = count__25919_25923;
var G__25929 = (i__25920_25924 + (1));
seq__25917_25921 = G__25926;
chunk__25918_25922 = G__25927;
count__25919_25923 = G__25928;
i__25920_25924 = G__25929;
continue;
} else {
var temp__4126__auto___25930 = cljs.core.seq.call(null,seq__25917_25921);
if(temp__4126__auto___25930){
var seq__25917_25931__$1 = temp__4126__auto___25930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25917_25931__$1)){
var c__18980__auto___25932 = cljs.core.chunk_first.call(null,seq__25917_25931__$1);
var G__25933 = cljs.core.chunk_rest.call(null,seq__25917_25931__$1);
var G__25934 = c__18980__auto___25932;
var G__25935 = cljs.core.count.call(null,c__18980__auto___25932);
var G__25936 = (0);
seq__25917_25921 = G__25933;
chunk__25918_25922 = G__25934;
count__25919_25923 = G__25935;
i__25920_25924 = G__25936;
continue;
} else {
var msg_25937 = cljs.core.first.call(null,seq__25917_25931__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25937);

var G__25938 = cljs.core.next.call(null,seq__25917_25931__$1);
var G__25939 = null;
var G__25940 = (0);
var G__25941 = (0);
seq__25917_25921 = G__25938;
chunk__25918_25922 = G__25939;
count__25919_25923 = G__25940;
i__25920_25924 = G__25941;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25942){
var map__25944 = p__25942;
var map__25944__$1 = ((cljs.core.seq_QMARK_.call(null,map__25944))?cljs.core.apply.call(null,cljs.core.hash_map,map__25944):map__25944);
var w = map__25944__$1;
var message = cljs.core.get.call(null,map__25944__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18183__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18183__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18183__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25951 = cljs.core.seq.call(null,plugins);
var chunk__25952 = null;
var count__25953 = (0);
var i__25954 = (0);
while(true){
if((i__25954 < count__25953)){
var vec__25955 = cljs.core._nth.call(null,chunk__25952,i__25954);
var k = cljs.core.nth.call(null,vec__25955,(0),null);
var plugin = cljs.core.nth.call(null,vec__25955,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25957 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25951,chunk__25952,count__25953,i__25954,pl_25957,vec__25955,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25957.call(null,msg_hist);
});})(seq__25951,chunk__25952,count__25953,i__25954,pl_25957,vec__25955,k,plugin))
);
} else {
}

var G__25958 = seq__25951;
var G__25959 = chunk__25952;
var G__25960 = count__25953;
var G__25961 = (i__25954 + (1));
seq__25951 = G__25958;
chunk__25952 = G__25959;
count__25953 = G__25960;
i__25954 = G__25961;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25951);
if(temp__4126__auto__){
var seq__25951__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25951__$1)){
var c__18980__auto__ = cljs.core.chunk_first.call(null,seq__25951__$1);
var G__25962 = cljs.core.chunk_rest.call(null,seq__25951__$1);
var G__25963 = c__18980__auto__;
var G__25964 = cljs.core.count.call(null,c__18980__auto__);
var G__25965 = (0);
seq__25951 = G__25962;
chunk__25952 = G__25963;
count__25953 = G__25964;
i__25954 = G__25965;
continue;
} else {
var vec__25956 = cljs.core.first.call(null,seq__25951__$1);
var k = cljs.core.nth.call(null,vec__25956,(0),null);
var plugin = cljs.core.nth.call(null,vec__25956,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25966 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25951,chunk__25952,count__25953,i__25954,pl_25966,vec__25956,k,plugin,seq__25951__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25966.call(null,msg_hist);
});})(seq__25951,chunk__25952,count__25953,i__25954,pl_25966,vec__25956,k,plugin,seq__25951__$1,temp__4126__auto__))
);
} else {
}

var G__25967 = cljs.core.next.call(null,seq__25951__$1);
var G__25968 = null;
var G__25969 = (0);
var G__25970 = (0);
seq__25951 = G__25967;
chunk__25952 = G__25968;
count__25953 = G__25969;
i__25954 = G__25970;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__25972 = arguments.length;
switch (G__25972) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19235__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19235__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25975){
var map__25976 = p__25975;
var map__25976__$1 = ((cljs.core.seq_QMARK_.call(null,map__25976))?cljs.core.apply.call(null,cljs.core.hash_map,map__25976):map__25976);
var opts = map__25976__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25974){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25974));
});

//# sourceMappingURL=client.js.map?rel=1433624453460