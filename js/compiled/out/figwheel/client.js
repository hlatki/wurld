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
var G__25357__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25358__i = 0, G__25358__a = new Array(arguments.length -  0);
while (G__25358__i < G__25358__a.length) {G__25358__a[G__25358__i] = arguments[G__25358__i + 0]; ++G__25358__i;}
  args = new cljs.core.IndexedSeq(G__25358__a,0);
} 
return G__25357__delegate.call(this,args);};
G__25357.cljs$lang$maxFixedArity = 0;
G__25357.cljs$lang$applyTo = (function (arglist__25359){
var args = cljs.core.seq(arglist__25359);
return G__25357__delegate(args);
});
G__25357.cljs$core$IFn$_invoke$arity$variadic = G__25357__delegate;
return G__25357;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25360){
var map__25362 = p__25360;
var map__25362__$1 = ((cljs.core.seq_QMARK_.call(null,map__25362))?cljs.core.apply.call(null,cljs.core.hash_map,map__25362):map__25362);
var class$ = cljs.core.get.call(null,map__25362__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25362__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__21439__auto___25491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___25491,ch){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___25491,ch){
return (function (state_25465){
var state_val_25466 = (state_25465[(1)]);
if((state_val_25466 === (7))){
var inst_25461 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
var statearr_25467_25492 = state_25465__$1;
(statearr_25467_25492[(2)] = inst_25461);

(statearr_25467_25492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (1))){
var state_25465__$1 = state_25465;
var statearr_25468_25493 = state_25465__$1;
(statearr_25468_25493[(2)] = null);

(statearr_25468_25493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (4))){
var inst_25429 = (state_25465[(7)]);
var inst_25429__$1 = (state_25465[(2)]);
var state_25465__$1 = (function (){var statearr_25469 = state_25465;
(statearr_25469[(7)] = inst_25429__$1);

return statearr_25469;
})();
if(cljs.core.truth_(inst_25429__$1)){
var statearr_25470_25494 = state_25465__$1;
(statearr_25470_25494[(1)] = (5));

} else {
var statearr_25471_25495 = state_25465__$1;
(statearr_25471_25495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (13))){
var state_25465__$1 = state_25465;
var statearr_25472_25496 = state_25465__$1;
(statearr_25472_25496[(2)] = null);

(statearr_25472_25496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (6))){
var state_25465__$1 = state_25465;
var statearr_25473_25497 = state_25465__$1;
(statearr_25473_25497[(2)] = null);

(statearr_25473_25497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (3))){
var inst_25463 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25465__$1,inst_25463);
} else {
if((state_val_25466 === (12))){
var inst_25436 = (state_25465[(8)]);
var inst_25449 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25436);
var inst_25450 = cljs.core.first.call(null,inst_25449);
var inst_25451 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25450);
var inst_25452 = console.warn("Figwheel: Not loading code with warnings - ",inst_25451);
var state_25465__$1 = state_25465;
var statearr_25474_25498 = state_25465__$1;
(statearr_25474_25498[(2)] = inst_25452);

(statearr_25474_25498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (2))){
var state_25465__$1 = state_25465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25465__$1,(4),ch);
} else {
if((state_val_25466 === (11))){
var inst_25445 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
var statearr_25475_25499 = state_25465__$1;
(statearr_25475_25499[(2)] = inst_25445);

(statearr_25475_25499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (9))){
var inst_25435 = (state_25465[(9)]);
var inst_25447 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25435,opts);
var state_25465__$1 = state_25465;
if(cljs.core.truth_(inst_25447)){
var statearr_25476_25500 = state_25465__$1;
(statearr_25476_25500[(1)] = (12));

} else {
var statearr_25477_25501 = state_25465__$1;
(statearr_25477_25501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (5))){
var inst_25429 = (state_25465[(7)]);
var inst_25435 = (state_25465[(9)]);
var inst_25431 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25432 = (new cljs.core.PersistentArrayMap(null,2,inst_25431,null));
var inst_25433 = (new cljs.core.PersistentHashSet(null,inst_25432,null));
var inst_25434 = figwheel.client.focus_msgs.call(null,inst_25433,inst_25429);
var inst_25435__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25434);
var inst_25436 = cljs.core.first.call(null,inst_25434);
var inst_25437 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25435__$1,opts);
var state_25465__$1 = (function (){var statearr_25478 = state_25465;
(statearr_25478[(8)] = inst_25436);

(statearr_25478[(9)] = inst_25435__$1);

return statearr_25478;
})();
if(cljs.core.truth_(inst_25437)){
var statearr_25479_25502 = state_25465__$1;
(statearr_25479_25502[(1)] = (8));

} else {
var statearr_25480_25503 = state_25465__$1;
(statearr_25480_25503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (14))){
var inst_25455 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
var statearr_25481_25504 = state_25465__$1;
(statearr_25481_25504[(2)] = inst_25455);

(statearr_25481_25504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (10))){
var inst_25457 = (state_25465[(2)]);
var state_25465__$1 = (function (){var statearr_25482 = state_25465;
(statearr_25482[(10)] = inst_25457);

return statearr_25482;
})();
var statearr_25483_25505 = state_25465__$1;
(statearr_25483_25505[(2)] = null);

(statearr_25483_25505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (8))){
var inst_25436 = (state_25465[(8)]);
var inst_25439 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25440 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25436);
var inst_25441 = cljs.core.async.timeout.call(null,(1000));
var inst_25442 = [inst_25440,inst_25441];
var inst_25443 = (new cljs.core.PersistentVector(null,2,(5),inst_25439,inst_25442,null));
var state_25465__$1 = state_25465;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25465__$1,(11),inst_25443);
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
});})(c__21439__auto___25491,ch))
;
return ((function (switch__21377__auto__,c__21439__auto___25491,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21378__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21378__auto____0 = (function (){
var statearr_25487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25487[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21378__auto__);

(statearr_25487[(1)] = (1));

return statearr_25487;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21378__auto____1 = (function (state_25465){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_25465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e25488){if((e25488 instanceof Object)){
var ex__21381__auto__ = e25488;
var statearr_25489_25506 = state_25465;
(statearr_25489_25506[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25507 = state_25465;
state_25465 = G__25507;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21378__auto__ = function(state_25465){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21378__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21378__auto____1.call(this,state_25465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21378__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21378__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___25491,ch))
})();
var state__21441__auto__ = (function (){var statearr_25490 = f__21440__auto__.call(null);
(statearr_25490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___25491);

return statearr_25490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___25491,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25508_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25508_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25515 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25515){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_25513 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25514 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25513,_STAR_print_newline_STAR_25514,base_path_25515){
return (function() { 
var G__25516__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25517__i = 0, G__25517__a = new Array(arguments.length -  0);
while (G__25517__i < G__25517__a.length) {G__25517__a[G__25517__i] = arguments[G__25517__i + 0]; ++G__25517__i;}
  args = new cljs.core.IndexedSeq(G__25517__a,0);
} 
return G__25516__delegate.call(this,args);};
G__25516.cljs$lang$maxFixedArity = 0;
G__25516.cljs$lang$applyTo = (function (arglist__25518){
var args = cljs.core.seq(arglist__25518);
return G__25516__delegate(args);
});
G__25516.cljs$core$IFn$_invoke$arity$variadic = G__25516__delegate;
return G__25516;
})()
;})(_STAR_print_fn_STAR_25513,_STAR_print_newline_STAR_25514,base_path_25515))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25514;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25513;
}}catch (e25512){if((e25512 instanceof Error)){
var e = e25512;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25515], null));
} else {
var e = e25512;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25515))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25519){
var map__25524 = p__25519;
var map__25524__$1 = ((cljs.core.seq_QMARK_.call(null,map__25524))?cljs.core.apply.call(null,cljs.core.hash_map,map__25524):map__25524);
var opts = map__25524__$1;
var build_id = cljs.core.get.call(null,map__25524__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25524,map__25524__$1,opts,build_id){
return (function (p__25525){
var vec__25526 = p__25525;
var map__25527 = cljs.core.nth.call(null,vec__25526,(0),null);
var map__25527__$1 = ((cljs.core.seq_QMARK_.call(null,map__25527))?cljs.core.apply.call(null,cljs.core.hash_map,map__25527):map__25527);
var msg = map__25527__$1;
var msg_name = cljs.core.get.call(null,map__25527__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25526,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__25526,map__25527,map__25527__$1,msg,msg_name,_,map__25524,map__25524__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25526,map__25527,map__25527__$1,msg,msg_name,_,map__25524,map__25524__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25524,map__25524__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25531){
var vec__25532 = p__25531;
var map__25533 = cljs.core.nth.call(null,vec__25532,(0),null);
var map__25533__$1 = ((cljs.core.seq_QMARK_.call(null,map__25533))?cljs.core.apply.call(null,cljs.core.hash_map,map__25533):map__25533);
var msg = map__25533__$1;
var msg_name = cljs.core.get.call(null,map__25533__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25532,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25534){
var map__25542 = p__25534;
var map__25542__$1 = ((cljs.core.seq_QMARK_.call(null,map__25542))?cljs.core.apply.call(null,cljs.core.hash_map,map__25542):map__25542);
var on_compile_fail = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__25542,map__25542__$1,on_compile_fail,on_compile_warning){
return (function (p__25543){
var vec__25544 = p__25543;
var map__25545 = cljs.core.nth.call(null,vec__25544,(0),null);
var map__25545__$1 = ((cljs.core.seq_QMARK_.call(null,map__25545))?cljs.core.apply.call(null,cljs.core.hash_map,map__25545):map__25545);
var msg = map__25545__$1;
var msg_name = cljs.core.get.call(null,map__25545__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25544,(1));
var pred__25546 = cljs.core._EQ_;
var expr__25547 = msg_name;
if(cljs.core.truth_(pred__25546.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25547))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25546.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25547))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25542,map__25542__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__,msg_hist,msg_names,msg){
return (function (state_25748){
var state_val_25749 = (state_25748[(1)]);
if((state_val_25749 === (7))){
var inst_25682 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25750_25791 = state_25748__$1;
(statearr_25750_25791[(2)] = inst_25682);

(statearr_25750_25791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (20))){
var inst_25710 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25748__$1 = state_25748;
if(cljs.core.truth_(inst_25710)){
var statearr_25751_25792 = state_25748__$1;
(statearr_25751_25792[(1)] = (22));

} else {
var statearr_25752_25793 = state_25748__$1;
(statearr_25752_25793[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (27))){
var inst_25722 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25723 = figwheel.client.heads_up.display_warning.call(null,inst_25722);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(30),inst_25723);
} else {
if((state_val_25749 === (1))){
var inst_25670 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25748__$1 = state_25748;
if(cljs.core.truth_(inst_25670)){
var statearr_25753_25794 = state_25748__$1;
(statearr_25753_25794[(1)] = (2));

} else {
var statearr_25754_25795 = state_25748__$1;
(statearr_25754_25795[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (24))){
var inst_25738 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25755_25796 = state_25748__$1;
(statearr_25755_25796[(2)] = inst_25738);

(statearr_25755_25796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (4))){
var inst_25746 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25748__$1,inst_25746);
} else {
if((state_val_25749 === (15))){
var inst_25698 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25699 = figwheel.client.format_messages.call(null,inst_25698);
var inst_25700 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25701 = figwheel.client.heads_up.display_error.call(null,inst_25699,inst_25700);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(18),inst_25701);
} else {
if((state_val_25749 === (21))){
var inst_25740 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25756_25797 = state_25748__$1;
(statearr_25756_25797[(2)] = inst_25740);

(statearr_25756_25797[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (31))){
var inst_25729 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(34),inst_25729);
} else {
if((state_val_25749 === (32))){
var state_25748__$1 = state_25748;
var statearr_25757_25798 = state_25748__$1;
(statearr_25757_25798[(2)] = null);

(statearr_25757_25798[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (33))){
var inst_25734 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25758_25799 = state_25748__$1;
(statearr_25758_25799[(2)] = inst_25734);

(statearr_25758_25799[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (13))){
var inst_25688 = (state_25748[(2)]);
var inst_25689 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25690 = figwheel.client.format_messages.call(null,inst_25689);
var inst_25691 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25692 = figwheel.client.heads_up.display_error.call(null,inst_25690,inst_25691);
var state_25748__$1 = (function (){var statearr_25759 = state_25748;
(statearr_25759[(7)] = inst_25688);

return statearr_25759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(14),inst_25692);
} else {
if((state_val_25749 === (22))){
var inst_25712 = figwheel.client.heads_up.clear.call(null);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(25),inst_25712);
} else {
if((state_val_25749 === (29))){
var inst_25736 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25760_25800 = state_25748__$1;
(statearr_25760_25800[(2)] = inst_25736);

(statearr_25760_25800[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (6))){
var inst_25678 = figwheel.client.heads_up.clear.call(null);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(9),inst_25678);
} else {
if((state_val_25749 === (28))){
var inst_25727 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25748__$1 = state_25748;
if(cljs.core.truth_(inst_25727)){
var statearr_25761_25801 = state_25748__$1;
(statearr_25761_25801[(1)] = (31));

} else {
var statearr_25762_25802 = state_25748__$1;
(statearr_25762_25802[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (25))){
var inst_25714 = (state_25748[(2)]);
var inst_25715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25716 = figwheel.client.heads_up.display_warning.call(null,inst_25715);
var state_25748__$1 = (function (){var statearr_25763 = state_25748;
(statearr_25763[(8)] = inst_25714);

return statearr_25763;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(26),inst_25716);
} else {
if((state_val_25749 === (34))){
var inst_25731 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25764_25803 = state_25748__$1;
(statearr_25764_25803[(2)] = inst_25731);

(statearr_25764_25803[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (17))){
var inst_25742 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25765_25804 = state_25748__$1;
(statearr_25765_25804[(2)] = inst_25742);

(statearr_25765_25804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (3))){
var inst_25684 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25748__$1 = state_25748;
if(cljs.core.truth_(inst_25684)){
var statearr_25766_25805 = state_25748__$1;
(statearr_25766_25805[(1)] = (10));

} else {
var statearr_25767_25806 = state_25748__$1;
(statearr_25767_25806[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (12))){
var inst_25744 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25768_25807 = state_25748__$1;
(statearr_25768_25807[(2)] = inst_25744);

(statearr_25768_25807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (2))){
var inst_25672 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25748__$1 = state_25748;
if(cljs.core.truth_(inst_25672)){
var statearr_25769_25808 = state_25748__$1;
(statearr_25769_25808[(1)] = (5));

} else {
var statearr_25770_25809 = state_25748__$1;
(statearr_25770_25809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (23))){
var inst_25720 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25748__$1 = state_25748;
if(cljs.core.truth_(inst_25720)){
var statearr_25771_25810 = state_25748__$1;
(statearr_25771_25810[(1)] = (27));

} else {
var statearr_25772_25811 = state_25748__$1;
(statearr_25772_25811[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (19))){
var inst_25707 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25708 = figwheel.client.heads_up.append_message.call(null,inst_25707);
var state_25748__$1 = state_25748;
var statearr_25773_25812 = state_25748__$1;
(statearr_25773_25812[(2)] = inst_25708);

(statearr_25773_25812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (11))){
var inst_25696 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25748__$1 = state_25748;
if(cljs.core.truth_(inst_25696)){
var statearr_25774_25813 = state_25748__$1;
(statearr_25774_25813[(1)] = (15));

} else {
var statearr_25775_25814 = state_25748__$1;
(statearr_25775_25814[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (9))){
var inst_25680 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25776_25815 = state_25748__$1;
(statearr_25776_25815[(2)] = inst_25680);

(statearr_25776_25815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (5))){
var inst_25674 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(8),inst_25674);
} else {
if((state_val_25749 === (14))){
var inst_25694 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25777_25816 = state_25748__$1;
(statearr_25777_25816[(2)] = inst_25694);

(statearr_25777_25816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (26))){
var inst_25718 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25778_25817 = state_25748__$1;
(statearr_25778_25817[(2)] = inst_25718);

(statearr_25778_25817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (16))){
var inst_25705 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25748__$1 = state_25748;
if(cljs.core.truth_(inst_25705)){
var statearr_25779_25818 = state_25748__$1;
(statearr_25779_25818[(1)] = (19));

} else {
var statearr_25780_25819 = state_25748__$1;
(statearr_25780_25819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (30))){
var inst_25725 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25781_25820 = state_25748__$1;
(statearr_25781_25820[(2)] = inst_25725);

(statearr_25781_25820[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (10))){
var inst_25686 = figwheel.client.heads_up.clear.call(null);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(13),inst_25686);
} else {
if((state_val_25749 === (18))){
var inst_25703 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25782_25821 = state_25748__$1;
(statearr_25782_25821[(2)] = inst_25703);

(statearr_25782_25821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (8))){
var inst_25676 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25783_25822 = state_25748__$1;
(statearr_25783_25822[(2)] = inst_25676);

(statearr_25783_25822[(1)] = (7));


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
});})(c__21439__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21377__auto__,c__21439__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto____0 = (function (){
var statearr_25787 = [null,null,null,null,null,null,null,null,null];
(statearr_25787[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto__);

(statearr_25787[(1)] = (1));

return statearr_25787;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto____1 = (function (state_25748){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_25748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e25788){if((e25788 instanceof Object)){
var ex__21381__auto__ = e25788;
var statearr_25789_25823 = state_25748;
(statearr_25789_25823[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25824 = state_25748;
state_25748 = G__25824;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto__ = function(state_25748){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto____1.call(this,state_25748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__,msg_hist,msg_names,msg))
})();
var state__21441__auto__ = (function (){var statearr_25790 = f__21440__auto__.call(null);
(statearr_25790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_25790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__,msg_hist,msg_names,msg))
);

return c__21439__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21439__auto___25887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___25887,ch){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___25887,ch){
return (function (state_25870){
var state_val_25871 = (state_25870[(1)]);
if((state_val_25871 === (8))){
var inst_25862 = (state_25870[(2)]);
var state_25870__$1 = (function (){var statearr_25872 = state_25870;
(statearr_25872[(7)] = inst_25862);

return statearr_25872;
})();
var statearr_25873_25888 = state_25870__$1;
(statearr_25873_25888[(2)] = null);

(statearr_25873_25888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (7))){
var inst_25866 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25874_25889 = state_25870__$1;
(statearr_25874_25889[(2)] = inst_25866);

(statearr_25874_25889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (6))){
var state_25870__$1 = state_25870;
var statearr_25875_25890 = state_25870__$1;
(statearr_25875_25890[(2)] = null);

(statearr_25875_25890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (5))){
var inst_25858 = (state_25870[(8)]);
var inst_25860 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25858);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(8),inst_25860);
} else {
if((state_val_25871 === (4))){
var inst_25858 = (state_25870[(8)]);
var inst_25858__$1 = (state_25870[(2)]);
var state_25870__$1 = (function (){var statearr_25876 = state_25870;
(statearr_25876[(8)] = inst_25858__$1);

return statearr_25876;
})();
if(cljs.core.truth_(inst_25858__$1)){
var statearr_25877_25891 = state_25870__$1;
(statearr_25877_25891[(1)] = (5));

} else {
var statearr_25878_25892 = state_25870__$1;
(statearr_25878_25892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (3))){
var inst_25868 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25870__$1,inst_25868);
} else {
if((state_val_25871 === (2))){
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(4),ch);
} else {
if((state_val_25871 === (1))){
var state_25870__$1 = state_25870;
var statearr_25879_25893 = state_25870__$1;
(statearr_25879_25893[(2)] = null);

(statearr_25879_25893[(1)] = (2));


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
});})(c__21439__auto___25887,ch))
;
return ((function (switch__21377__auto__,c__21439__auto___25887,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21378__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21378__auto____0 = (function (){
var statearr_25883 = [null,null,null,null,null,null,null,null,null];
(statearr_25883[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21378__auto__);

(statearr_25883[(1)] = (1));

return statearr_25883;
});
var figwheel$client$heads_up_plugin_$_state_machine__21378__auto____1 = (function (state_25870){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_25870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e25884){if((e25884 instanceof Object)){
var ex__21381__auto__ = e25884;
var statearr_25885_25894 = state_25870;
(statearr_25885_25894[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25895 = state_25870;
state_25870 = G__25895;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21378__auto__ = function(state_25870){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21378__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21378__auto____1.call(this,state_25870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21378__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21378__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___25887,ch))
})();
var state__21441__auto__ = (function (){var statearr_25886 = f__21440__auto__.call(null);
(statearr_25886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___25887);

return statearr_25886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___25887,ch))
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
var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__){
return (function (state_25916){
var state_val_25917 = (state_25916[(1)]);
if((state_val_25917 === (2))){
var inst_25913 = (state_25916[(2)]);
var inst_25914 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25916__$1 = (function (){var statearr_25918 = state_25916;
(statearr_25918[(7)] = inst_25913);

return statearr_25918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25916__$1,inst_25914);
} else {
if((state_val_25917 === (1))){
var inst_25911 = cljs.core.async.timeout.call(null,(3000));
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25916__$1,(2),inst_25911);
} else {
return null;
}
}
});})(c__21439__auto__))
;
return ((function (switch__21377__auto__,c__21439__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21378__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21378__auto____0 = (function (){
var statearr_25922 = [null,null,null,null,null,null,null,null];
(statearr_25922[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21378__auto__);

(statearr_25922[(1)] = (1));

return statearr_25922;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21378__auto____1 = (function (state_25916){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_25916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e25923){if((e25923 instanceof Object)){
var ex__21381__auto__ = e25923;
var statearr_25924_25926 = state_25916;
(statearr_25924_25926[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25927 = state_25916;
state_25916 = G__25927;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21378__auto__ = function(state_25916){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21378__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21378__auto____1.call(this,state_25916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21378__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21378__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__))
})();
var state__21441__auto__ = (function (){var statearr_25925 = f__21440__auto__.call(null);
(statearr_25925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_25925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__))
);

return c__21439__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25928){
var map__25934 = p__25928;
var map__25934__$1 = ((cljs.core.seq_QMARK_.call(null,map__25934))?cljs.core.apply.call(null,cljs.core.hash_map,map__25934):map__25934);
var ed = map__25934__$1;
var cause = cljs.core.get.call(null,map__25934__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__25934__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__25934__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25935_25939 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25936_25940 = null;
var count__25937_25941 = (0);
var i__25938_25942 = (0);
while(true){
if((i__25938_25942 < count__25937_25941)){
var msg_25943 = cljs.core._nth.call(null,chunk__25936_25940,i__25938_25942);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25943);

var G__25944 = seq__25935_25939;
var G__25945 = chunk__25936_25940;
var G__25946 = count__25937_25941;
var G__25947 = (i__25938_25942 + (1));
seq__25935_25939 = G__25944;
chunk__25936_25940 = G__25945;
count__25937_25941 = G__25946;
i__25938_25942 = G__25947;
continue;
} else {
var temp__4126__auto___25948 = cljs.core.seq.call(null,seq__25935_25939);
if(temp__4126__auto___25948){
var seq__25935_25949__$1 = temp__4126__auto___25948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25935_25949__$1)){
var c__18980__auto___25950 = cljs.core.chunk_first.call(null,seq__25935_25949__$1);
var G__25951 = cljs.core.chunk_rest.call(null,seq__25935_25949__$1);
var G__25952 = c__18980__auto___25950;
var G__25953 = cljs.core.count.call(null,c__18980__auto___25950);
var G__25954 = (0);
seq__25935_25939 = G__25951;
chunk__25936_25940 = G__25952;
count__25937_25941 = G__25953;
i__25938_25942 = G__25954;
continue;
} else {
var msg_25955 = cljs.core.first.call(null,seq__25935_25949__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25955);

var G__25956 = cljs.core.next.call(null,seq__25935_25949__$1);
var G__25957 = null;
var G__25958 = (0);
var G__25959 = (0);
seq__25935_25939 = G__25956;
chunk__25936_25940 = G__25957;
count__25937_25941 = G__25958;
i__25938_25942 = G__25959;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25960){
var map__25962 = p__25960;
var map__25962__$1 = ((cljs.core.seq_QMARK_.call(null,map__25962))?cljs.core.apply.call(null,cljs.core.hash_map,map__25962):map__25962);
var w = map__25962__$1;
var message = cljs.core.get.call(null,map__25962__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__25969 = cljs.core.seq.call(null,plugins);
var chunk__25970 = null;
var count__25971 = (0);
var i__25972 = (0);
while(true){
if((i__25972 < count__25971)){
var vec__25973 = cljs.core._nth.call(null,chunk__25970,i__25972);
var k = cljs.core.nth.call(null,vec__25973,(0),null);
var plugin = cljs.core.nth.call(null,vec__25973,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25975 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25969,chunk__25970,count__25971,i__25972,pl_25975,vec__25973,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25975.call(null,msg_hist);
});})(seq__25969,chunk__25970,count__25971,i__25972,pl_25975,vec__25973,k,plugin))
);
} else {
}

var G__25976 = seq__25969;
var G__25977 = chunk__25970;
var G__25978 = count__25971;
var G__25979 = (i__25972 + (1));
seq__25969 = G__25976;
chunk__25970 = G__25977;
count__25971 = G__25978;
i__25972 = G__25979;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25969);
if(temp__4126__auto__){
var seq__25969__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25969__$1)){
var c__18980__auto__ = cljs.core.chunk_first.call(null,seq__25969__$1);
var G__25980 = cljs.core.chunk_rest.call(null,seq__25969__$1);
var G__25981 = c__18980__auto__;
var G__25982 = cljs.core.count.call(null,c__18980__auto__);
var G__25983 = (0);
seq__25969 = G__25980;
chunk__25970 = G__25981;
count__25971 = G__25982;
i__25972 = G__25983;
continue;
} else {
var vec__25974 = cljs.core.first.call(null,seq__25969__$1);
var k = cljs.core.nth.call(null,vec__25974,(0),null);
var plugin = cljs.core.nth.call(null,vec__25974,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25984 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25969,chunk__25970,count__25971,i__25972,pl_25984,vec__25974,k,plugin,seq__25969__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25984.call(null,msg_hist);
});})(seq__25969,chunk__25970,count__25971,i__25972,pl_25984,vec__25974,k,plugin,seq__25969__$1,temp__4126__auto__))
);
} else {
}

var G__25985 = cljs.core.next.call(null,seq__25969__$1);
var G__25986 = null;
var G__25987 = (0);
var G__25988 = (0);
seq__25969 = G__25985;
chunk__25970 = G__25986;
count__25971 = G__25987;
i__25972 = G__25988;
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
var G__25990 = arguments.length;
switch (G__25990) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25993){
var map__25994 = p__25993;
var map__25994__$1 = ((cljs.core.seq_QMARK_.call(null,map__25994))?cljs.core.apply.call(null,cljs.core.hash_map,map__25994):map__25994);
var opts = map__25994__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25992){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25992));
});

//# sourceMappingURL=client.js.map?rel=1436069130879