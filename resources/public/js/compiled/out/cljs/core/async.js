// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t27106 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27106 = (function (f,fn_handler,meta27107){
this.f = f;
this.fn_handler = fn_handler;
this.meta27107 = meta27107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27106.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27108){
var self__ = this;
var _27108__$1 = this;
return self__.meta27107;
});

cljs.core.async.t27106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27108,meta27107__$1){
var self__ = this;
var _27108__$1 = this;
return (new cljs.core.async.t27106(self__.f,self__.fn_handler,meta27107__$1));
});

cljs.core.async.t27106.cljs$lang$type = true;

cljs.core.async.t27106.cljs$lang$ctorStr = "cljs.core.async/t27106";

cljs.core.async.t27106.cljs$lang$ctorPrWriter = (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t27106");
});

cljs.core.async.__GT_t27106 = (function cljs$core$async$fn_handler_$___GT_t27106(f__$1,fn_handler__$1,meta27107){
return (new cljs.core.async.t27106(f__$1,fn_handler__$1,meta27107));
});

}

return (new cljs.core.async.t27106(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__27110 = buff;
if(G__27110){
var bit__18869__auto__ = null;
if(cljs.core.truth_((function (){var or__18195__auto__ = bit__18869__auto__;
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
return G__27110.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27110.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27110);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27110);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__27112 = arguments.length;
switch (G__27112) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__27115 = arguments.length;
switch (G__27115) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27117 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27117);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27117,ret){
return (function (){
return fn1.call(null,val_27117);
});})(val_27117,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__27119 = arguments.length;
switch (G__27119) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19080__auto___27121 = n;
var x_27122 = (0);
while(true){
if((x_27122 < n__19080__auto___27121)){
(a[x_27122] = (0));

var G__27123 = (x_27122 + (1));
x_27122 = G__27123;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27124 = (i + (1));
i = G__27124;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27128 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27128 = (function (flag,alt_flag,meta27129){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27129 = meta27129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27128.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27130){
var self__ = this;
var _27130__$1 = this;
return self__.meta27129;
});})(flag))
;

cljs.core.async.t27128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27130,meta27129__$1){
var self__ = this;
var _27130__$1 = this;
return (new cljs.core.async.t27128(self__.flag,self__.alt_flag,meta27129__$1));
});})(flag))
;

cljs.core.async.t27128.cljs$lang$type = true;

cljs.core.async.t27128.cljs$lang$ctorStr = "cljs.core.async/t27128";

cljs.core.async.t27128.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t27128");
});})(flag))
;

cljs.core.async.__GT_t27128 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27128(flag__$1,alt_flag__$1,meta27129){
return (new cljs.core.async.t27128(flag__$1,alt_flag__$1,meta27129));
});})(flag))
;

}

return (new cljs.core.async.t27128(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27134 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27134 = (function (cb,flag,alt_handler,meta27135){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27135 = meta27135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27134.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27136){
var self__ = this;
var _27136__$1 = this;
return self__.meta27135;
});

cljs.core.async.t27134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27136,meta27135__$1){
var self__ = this;
var _27136__$1 = this;
return (new cljs.core.async.t27134(self__.cb,self__.flag,self__.alt_handler,meta27135__$1));
});

cljs.core.async.t27134.cljs$lang$type = true;

cljs.core.async.t27134.cljs$lang$ctorStr = "cljs.core.async/t27134";

cljs.core.async.t27134.cljs$lang$ctorPrWriter = (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t27134");
});

cljs.core.async.__GT_t27134 = (function cljs$core$async$alt_handler_$___GT_t27134(cb__$1,flag__$1,alt_handler__$1,meta27135){
return (new cljs.core.async.t27134(cb__$1,flag__$1,alt_handler__$1,meta27135));
});

}

return (new cljs.core.async.t27134(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27137_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27137_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27138_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27138_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18195__auto__ = wport;
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27139 = (i + (1));
i = G__27139;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18195__auto__ = ret;
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18183__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18183__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18183__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19235__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19235__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27142){
var map__27143 = p__27142;
var map__27143__$1 = ((cljs.core.seq_QMARK_.call(null,map__27143))?cljs.core.apply.call(null,cljs.core.hash_map,map__27143):map__27143);
var opts = map__27143__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27140){
var G__27141 = cljs.core.first.call(null,seq27140);
var seq27140__$1 = cljs.core.next.call(null,seq27140);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27141,seq27140__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__27145 = arguments.length;
switch (G__27145) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21421__auto___27194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___27194){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___27194){
return (function (state_27169){
var state_val_27170 = (state_27169[(1)]);
if((state_val_27170 === (7))){
var inst_27165 = (state_27169[(2)]);
var state_27169__$1 = state_27169;
var statearr_27171_27195 = state_27169__$1;
(statearr_27171_27195[(2)] = inst_27165);

(statearr_27171_27195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27170 === (1))){
var state_27169__$1 = state_27169;
var statearr_27172_27196 = state_27169__$1;
(statearr_27172_27196[(2)] = null);

(statearr_27172_27196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27170 === (4))){
var inst_27148 = (state_27169[(7)]);
var inst_27148__$1 = (state_27169[(2)]);
var inst_27149 = (inst_27148__$1 == null);
var state_27169__$1 = (function (){var statearr_27173 = state_27169;
(statearr_27173[(7)] = inst_27148__$1);

return statearr_27173;
})();
if(cljs.core.truth_(inst_27149)){
var statearr_27174_27197 = state_27169__$1;
(statearr_27174_27197[(1)] = (5));

} else {
var statearr_27175_27198 = state_27169__$1;
(statearr_27175_27198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27170 === (13))){
var state_27169__$1 = state_27169;
var statearr_27176_27199 = state_27169__$1;
(statearr_27176_27199[(2)] = null);

(statearr_27176_27199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27170 === (6))){
var inst_27148 = (state_27169[(7)]);
var state_27169__$1 = state_27169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27169__$1,(11),to,inst_27148);
} else {
if((state_val_27170 === (3))){
var inst_27167 = (state_27169[(2)]);
var state_27169__$1 = state_27169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27169__$1,inst_27167);
} else {
if((state_val_27170 === (12))){
var state_27169__$1 = state_27169;
var statearr_27177_27200 = state_27169__$1;
(statearr_27177_27200[(2)] = null);

(statearr_27177_27200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27170 === (2))){
var state_27169__$1 = state_27169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27169__$1,(4),from);
} else {
if((state_val_27170 === (11))){
var inst_27158 = (state_27169[(2)]);
var state_27169__$1 = state_27169;
if(cljs.core.truth_(inst_27158)){
var statearr_27178_27201 = state_27169__$1;
(statearr_27178_27201[(1)] = (12));

} else {
var statearr_27179_27202 = state_27169__$1;
(statearr_27179_27202[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27170 === (9))){
var state_27169__$1 = state_27169;
var statearr_27180_27203 = state_27169__$1;
(statearr_27180_27203[(2)] = null);

(statearr_27180_27203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27170 === (5))){
var state_27169__$1 = state_27169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27181_27204 = state_27169__$1;
(statearr_27181_27204[(1)] = (8));

} else {
var statearr_27182_27205 = state_27169__$1;
(statearr_27182_27205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27170 === (14))){
var inst_27163 = (state_27169[(2)]);
var state_27169__$1 = state_27169;
var statearr_27183_27206 = state_27169__$1;
(statearr_27183_27206[(2)] = inst_27163);

(statearr_27183_27206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27170 === (10))){
var inst_27155 = (state_27169[(2)]);
var state_27169__$1 = state_27169;
var statearr_27184_27207 = state_27169__$1;
(statearr_27184_27207[(2)] = inst_27155);

(statearr_27184_27207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27170 === (8))){
var inst_27152 = cljs.core.async.close_BANG_.call(null,to);
var state_27169__$1 = state_27169;
var statearr_27185_27208 = state_27169__$1;
(statearr_27185_27208[(2)] = inst_27152);

(statearr_27185_27208[(1)] = (10));


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
});})(c__21421__auto___27194))
;
return ((function (switch__21359__auto__,c__21421__auto___27194){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_27189 = [null,null,null,null,null,null,null,null];
(statearr_27189[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_27189[(1)] = (1));

return statearr_27189;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_27169){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_27169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e27190){if((e27190 instanceof Object)){
var ex__21363__auto__ = e27190;
var statearr_27191_27209 = state_27169;
(statearr_27191_27209[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27210 = state_27169;
state_27169 = G__27210;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_27169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_27169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___27194))
})();
var state__21423__auto__ = (function (){var statearr_27192 = f__21422__auto__.call(null);
(statearr_27192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___27194);

return statearr_27192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___27194))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27394){
var vec__27395 = p__27394;
var v = cljs.core.nth.call(null,vec__27395,(0),null);
var p = cljs.core.nth.call(null,vec__27395,(1),null);
var job = vec__27395;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21421__auto___27577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___27577,res,vec__27395,v,p,job,jobs,results){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___27577,res,vec__27395,v,p,job,jobs,results){
return (function (state_27400){
var state_val_27401 = (state_27400[(1)]);
if((state_val_27401 === (2))){
var inst_27397 = (state_27400[(2)]);
var inst_27398 = cljs.core.async.close_BANG_.call(null,res);
var state_27400__$1 = (function (){var statearr_27402 = state_27400;
(statearr_27402[(7)] = inst_27397);

return statearr_27402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27400__$1,inst_27398);
} else {
if((state_val_27401 === (1))){
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27400__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21421__auto___27577,res,vec__27395,v,p,job,jobs,results))
;
return ((function (switch__21359__auto__,c__21421__auto___27577,res,vec__27395,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0 = (function (){
var statearr_27406 = [null,null,null,null,null,null,null,null];
(statearr_27406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__);

(statearr_27406[(1)] = (1));

return statearr_27406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1 = (function (state_27400){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_27400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e27407){if((e27407 instanceof Object)){
var ex__21363__auto__ = e27407;
var statearr_27408_27578 = state_27400;
(statearr_27408_27578[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27579 = state_27400;
state_27400 = G__27579;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__ = function(state_27400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1.call(this,state_27400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___27577,res,vec__27395,v,p,job,jobs,results))
})();
var state__21423__auto__ = (function (){var statearr_27409 = f__21422__auto__.call(null);
(statearr_27409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___27577);

return statearr_27409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___27577,res,vec__27395,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27410){
var vec__27411 = p__27410;
var v = cljs.core.nth.call(null,vec__27411,(0),null);
var p = cljs.core.nth.call(null,vec__27411,(1),null);
var job = vec__27411;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19080__auto___27580 = n;
var __27581 = (0);
while(true){
if((__27581 < n__19080__auto___27580)){
var G__27412_27582 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27412_27582) {
case "async":
var c__21421__auto___27584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27581,c__21421__auto___27584,G__27412_27582,n__19080__auto___27580,jobs,results,process,async){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (__27581,c__21421__auto___27584,G__27412_27582,n__19080__auto___27580,jobs,results,process,async){
return (function (state_27425){
var state_val_27426 = (state_27425[(1)]);
if((state_val_27426 === (7))){
var inst_27421 = (state_27425[(2)]);
var state_27425__$1 = state_27425;
var statearr_27427_27585 = state_27425__$1;
(statearr_27427_27585[(2)] = inst_27421);

(statearr_27427_27585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (6))){
var state_27425__$1 = state_27425;
var statearr_27428_27586 = state_27425__$1;
(statearr_27428_27586[(2)] = null);

(statearr_27428_27586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (5))){
var state_27425__$1 = state_27425;
var statearr_27429_27587 = state_27425__$1;
(statearr_27429_27587[(2)] = null);

(statearr_27429_27587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (4))){
var inst_27415 = (state_27425[(2)]);
var inst_27416 = async.call(null,inst_27415);
var state_27425__$1 = state_27425;
if(cljs.core.truth_(inst_27416)){
var statearr_27430_27588 = state_27425__$1;
(statearr_27430_27588[(1)] = (5));

} else {
var statearr_27431_27589 = state_27425__$1;
(statearr_27431_27589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (3))){
var inst_27423 = (state_27425[(2)]);
var state_27425__$1 = state_27425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27425__$1,inst_27423);
} else {
if((state_val_27426 === (2))){
var state_27425__$1 = state_27425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27425__$1,(4),jobs);
} else {
if((state_val_27426 === (1))){
var state_27425__$1 = state_27425;
var statearr_27432_27590 = state_27425__$1;
(statearr_27432_27590[(2)] = null);

(statearr_27432_27590[(1)] = (2));


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
});})(__27581,c__21421__auto___27584,G__27412_27582,n__19080__auto___27580,jobs,results,process,async))
;
return ((function (__27581,switch__21359__auto__,c__21421__auto___27584,G__27412_27582,n__19080__auto___27580,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0 = (function (){
var statearr_27436 = [null,null,null,null,null,null,null];
(statearr_27436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__);

(statearr_27436[(1)] = (1));

return statearr_27436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1 = (function (state_27425){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_27425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e27437){if((e27437 instanceof Object)){
var ex__21363__auto__ = e27437;
var statearr_27438_27591 = state_27425;
(statearr_27438_27591[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27592 = state_27425;
state_27425 = G__27592;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__ = function(state_27425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1.call(this,state_27425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__;
})()
;})(__27581,switch__21359__auto__,c__21421__auto___27584,G__27412_27582,n__19080__auto___27580,jobs,results,process,async))
})();
var state__21423__auto__ = (function (){var statearr_27439 = f__21422__auto__.call(null);
(statearr_27439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___27584);

return statearr_27439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(__27581,c__21421__auto___27584,G__27412_27582,n__19080__auto___27580,jobs,results,process,async))
);


break;
case "compute":
var c__21421__auto___27593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27581,c__21421__auto___27593,G__27412_27582,n__19080__auto___27580,jobs,results,process,async){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (__27581,c__21421__auto___27593,G__27412_27582,n__19080__auto___27580,jobs,results,process,async){
return (function (state_27452){
var state_val_27453 = (state_27452[(1)]);
if((state_val_27453 === (7))){
var inst_27448 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27454_27594 = state_27452__$1;
(statearr_27454_27594[(2)] = inst_27448);

(statearr_27454_27594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (6))){
var state_27452__$1 = state_27452;
var statearr_27455_27595 = state_27452__$1;
(statearr_27455_27595[(2)] = null);

(statearr_27455_27595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (5))){
var state_27452__$1 = state_27452;
var statearr_27456_27596 = state_27452__$1;
(statearr_27456_27596[(2)] = null);

(statearr_27456_27596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (4))){
var inst_27442 = (state_27452[(2)]);
var inst_27443 = process.call(null,inst_27442);
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27443)){
var statearr_27457_27597 = state_27452__$1;
(statearr_27457_27597[(1)] = (5));

} else {
var statearr_27458_27598 = state_27452__$1;
(statearr_27458_27598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (3))){
var inst_27450 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27452__$1,inst_27450);
} else {
if((state_val_27453 === (2))){
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27452__$1,(4),jobs);
} else {
if((state_val_27453 === (1))){
var state_27452__$1 = state_27452;
var statearr_27459_27599 = state_27452__$1;
(statearr_27459_27599[(2)] = null);

(statearr_27459_27599[(1)] = (2));


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
});})(__27581,c__21421__auto___27593,G__27412_27582,n__19080__auto___27580,jobs,results,process,async))
;
return ((function (__27581,switch__21359__auto__,c__21421__auto___27593,G__27412_27582,n__19080__auto___27580,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0 = (function (){
var statearr_27463 = [null,null,null,null,null,null,null];
(statearr_27463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__);

(statearr_27463[(1)] = (1));

return statearr_27463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1 = (function (state_27452){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_27452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e27464){if((e27464 instanceof Object)){
var ex__21363__auto__ = e27464;
var statearr_27465_27600 = state_27452;
(statearr_27465_27600[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27601 = state_27452;
state_27452 = G__27601;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__ = function(state_27452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1.call(this,state_27452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__;
})()
;})(__27581,switch__21359__auto__,c__21421__auto___27593,G__27412_27582,n__19080__auto___27580,jobs,results,process,async))
})();
var state__21423__auto__ = (function (){var statearr_27466 = f__21422__auto__.call(null);
(statearr_27466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___27593);

return statearr_27466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(__27581,c__21421__auto___27593,G__27412_27582,n__19080__auto___27580,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27602 = (__27581 + (1));
__27581 = G__27602;
continue;
} else {
}
break;
}

var c__21421__auto___27603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___27603,jobs,results,process,async){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___27603,jobs,results,process,async){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (9))){
var inst_27481 = (state_27488[(2)]);
var state_27488__$1 = (function (){var statearr_27490 = state_27488;
(statearr_27490[(7)] = inst_27481);

return statearr_27490;
})();
var statearr_27491_27604 = state_27488__$1;
(statearr_27491_27604[(2)] = null);

(statearr_27491_27604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (8))){
var inst_27474 = (state_27488[(8)]);
var inst_27479 = (state_27488[(2)]);
var state_27488__$1 = (function (){var statearr_27492 = state_27488;
(statearr_27492[(9)] = inst_27479);

return statearr_27492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27488__$1,(9),results,inst_27474);
} else {
if((state_val_27489 === (7))){
var inst_27484 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27493_27605 = state_27488__$1;
(statearr_27493_27605[(2)] = inst_27484);

(statearr_27493_27605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (6))){
var inst_27474 = (state_27488[(8)]);
var inst_27469 = (state_27488[(10)]);
var inst_27474__$1 = cljs.core.async.chan.call(null,(1));
var inst_27475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27476 = [inst_27469,inst_27474__$1];
var inst_27477 = (new cljs.core.PersistentVector(null,2,(5),inst_27475,inst_27476,null));
var state_27488__$1 = (function (){var statearr_27494 = state_27488;
(statearr_27494[(8)] = inst_27474__$1);

return statearr_27494;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27488__$1,(8),jobs,inst_27477);
} else {
if((state_val_27489 === (5))){
var inst_27472 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27488__$1 = state_27488;
var statearr_27495_27606 = state_27488__$1;
(statearr_27495_27606[(2)] = inst_27472);

(statearr_27495_27606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (4))){
var inst_27469 = (state_27488[(10)]);
var inst_27469__$1 = (state_27488[(2)]);
var inst_27470 = (inst_27469__$1 == null);
var state_27488__$1 = (function (){var statearr_27496 = state_27488;
(statearr_27496[(10)] = inst_27469__$1);

return statearr_27496;
})();
if(cljs.core.truth_(inst_27470)){
var statearr_27497_27607 = state_27488__$1;
(statearr_27497_27607[(1)] = (5));

} else {
var statearr_27498_27608 = state_27488__$1;
(statearr_27498_27608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (3))){
var inst_27486 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27488__$1,inst_27486);
} else {
if((state_val_27489 === (2))){
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(4),from);
} else {
if((state_val_27489 === (1))){
var state_27488__$1 = state_27488;
var statearr_27499_27609 = state_27488__$1;
(statearr_27499_27609[(2)] = null);

(statearr_27499_27609[(1)] = (2));


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
});})(c__21421__auto___27603,jobs,results,process,async))
;
return ((function (switch__21359__auto__,c__21421__auto___27603,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0 = (function (){
var statearr_27503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27503[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__);

(statearr_27503[(1)] = (1));

return statearr_27503;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1 = (function (state_27488){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_27488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e27504){if((e27504 instanceof Object)){
var ex__21363__auto__ = e27504;
var statearr_27505_27610 = state_27488;
(statearr_27505_27610[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27611 = state_27488;
state_27488 = G__27611;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___27603,jobs,results,process,async))
})();
var state__21423__auto__ = (function (){var statearr_27506 = f__21422__auto__.call(null);
(statearr_27506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___27603);

return statearr_27506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___27603,jobs,results,process,async))
);


var c__21421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto__,jobs,results,process,async){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto__,jobs,results,process,async){
return (function (state_27544){
var state_val_27545 = (state_27544[(1)]);
if((state_val_27545 === (7))){
var inst_27540 = (state_27544[(2)]);
var state_27544__$1 = state_27544;
var statearr_27546_27612 = state_27544__$1;
(statearr_27546_27612[(2)] = inst_27540);

(statearr_27546_27612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (20))){
var state_27544__$1 = state_27544;
var statearr_27547_27613 = state_27544__$1;
(statearr_27547_27613[(2)] = null);

(statearr_27547_27613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (1))){
var state_27544__$1 = state_27544;
var statearr_27548_27614 = state_27544__$1;
(statearr_27548_27614[(2)] = null);

(statearr_27548_27614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (4))){
var inst_27509 = (state_27544[(7)]);
var inst_27509__$1 = (state_27544[(2)]);
var inst_27510 = (inst_27509__$1 == null);
var state_27544__$1 = (function (){var statearr_27549 = state_27544;
(statearr_27549[(7)] = inst_27509__$1);

return statearr_27549;
})();
if(cljs.core.truth_(inst_27510)){
var statearr_27550_27615 = state_27544__$1;
(statearr_27550_27615[(1)] = (5));

} else {
var statearr_27551_27616 = state_27544__$1;
(statearr_27551_27616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (15))){
var inst_27522 = (state_27544[(8)]);
var state_27544__$1 = state_27544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27544__$1,(18),to,inst_27522);
} else {
if((state_val_27545 === (21))){
var inst_27535 = (state_27544[(2)]);
var state_27544__$1 = state_27544;
var statearr_27552_27617 = state_27544__$1;
(statearr_27552_27617[(2)] = inst_27535);

(statearr_27552_27617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (13))){
var inst_27537 = (state_27544[(2)]);
var state_27544__$1 = (function (){var statearr_27553 = state_27544;
(statearr_27553[(9)] = inst_27537);

return statearr_27553;
})();
var statearr_27554_27618 = state_27544__$1;
(statearr_27554_27618[(2)] = null);

(statearr_27554_27618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (6))){
var inst_27509 = (state_27544[(7)]);
var state_27544__$1 = state_27544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27544__$1,(11),inst_27509);
} else {
if((state_val_27545 === (17))){
var inst_27530 = (state_27544[(2)]);
var state_27544__$1 = state_27544;
if(cljs.core.truth_(inst_27530)){
var statearr_27555_27619 = state_27544__$1;
(statearr_27555_27619[(1)] = (19));

} else {
var statearr_27556_27620 = state_27544__$1;
(statearr_27556_27620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (3))){
var inst_27542 = (state_27544[(2)]);
var state_27544__$1 = state_27544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27544__$1,inst_27542);
} else {
if((state_val_27545 === (12))){
var inst_27519 = (state_27544[(10)]);
var state_27544__$1 = state_27544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27544__$1,(14),inst_27519);
} else {
if((state_val_27545 === (2))){
var state_27544__$1 = state_27544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27544__$1,(4),results);
} else {
if((state_val_27545 === (19))){
var state_27544__$1 = state_27544;
var statearr_27557_27621 = state_27544__$1;
(statearr_27557_27621[(2)] = null);

(statearr_27557_27621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (11))){
var inst_27519 = (state_27544[(2)]);
var state_27544__$1 = (function (){var statearr_27558 = state_27544;
(statearr_27558[(10)] = inst_27519);

return statearr_27558;
})();
var statearr_27559_27622 = state_27544__$1;
(statearr_27559_27622[(2)] = null);

(statearr_27559_27622[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (9))){
var state_27544__$1 = state_27544;
var statearr_27560_27623 = state_27544__$1;
(statearr_27560_27623[(2)] = null);

(statearr_27560_27623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (5))){
var state_27544__$1 = state_27544;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27561_27624 = state_27544__$1;
(statearr_27561_27624[(1)] = (8));

} else {
var statearr_27562_27625 = state_27544__$1;
(statearr_27562_27625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (14))){
var inst_27522 = (state_27544[(8)]);
var inst_27524 = (state_27544[(11)]);
var inst_27522__$1 = (state_27544[(2)]);
var inst_27523 = (inst_27522__$1 == null);
var inst_27524__$1 = cljs.core.not.call(null,inst_27523);
var state_27544__$1 = (function (){var statearr_27563 = state_27544;
(statearr_27563[(8)] = inst_27522__$1);

(statearr_27563[(11)] = inst_27524__$1);

return statearr_27563;
})();
if(inst_27524__$1){
var statearr_27564_27626 = state_27544__$1;
(statearr_27564_27626[(1)] = (15));

} else {
var statearr_27565_27627 = state_27544__$1;
(statearr_27565_27627[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (16))){
var inst_27524 = (state_27544[(11)]);
var state_27544__$1 = state_27544;
var statearr_27566_27628 = state_27544__$1;
(statearr_27566_27628[(2)] = inst_27524);

(statearr_27566_27628[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (10))){
var inst_27516 = (state_27544[(2)]);
var state_27544__$1 = state_27544;
var statearr_27567_27629 = state_27544__$1;
(statearr_27567_27629[(2)] = inst_27516);

(statearr_27567_27629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (18))){
var inst_27527 = (state_27544[(2)]);
var state_27544__$1 = state_27544;
var statearr_27568_27630 = state_27544__$1;
(statearr_27568_27630[(2)] = inst_27527);

(statearr_27568_27630[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (8))){
var inst_27513 = cljs.core.async.close_BANG_.call(null,to);
var state_27544__$1 = state_27544;
var statearr_27569_27631 = state_27544__$1;
(statearr_27569_27631[(2)] = inst_27513);

(statearr_27569_27631[(1)] = (10));


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
});})(c__21421__auto__,jobs,results,process,async))
;
return ((function (switch__21359__auto__,c__21421__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0 = (function (){
var statearr_27573 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__);

(statearr_27573[(1)] = (1));

return statearr_27573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1 = (function (state_27544){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_27544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e27574){if((e27574 instanceof Object)){
var ex__21363__auto__ = e27574;
var statearr_27575_27632 = state_27544;
(statearr_27575_27632[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27633 = state_27544;
state_27544 = G__27633;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__ = function(state_27544){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1.call(this,state_27544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21360__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto__,jobs,results,process,async))
})();
var state__21423__auto__ = (function (){var statearr_27576 = f__21422__auto__.call(null);
(statearr_27576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto__);

return statearr_27576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto__,jobs,results,process,async))
);

return c__21421__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27635 = arguments.length;
switch (G__27635) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27638 = arguments.length;
switch (G__27638) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27641 = arguments.length;
switch (G__27641) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21421__auto___27693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___27693,tc,fc){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___27693,tc,fc){
return (function (state_27667){
var state_val_27668 = (state_27667[(1)]);
if((state_val_27668 === (7))){
var inst_27663 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27669_27694 = state_27667__$1;
(statearr_27669_27694[(2)] = inst_27663);

(statearr_27669_27694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (1))){
var state_27667__$1 = state_27667;
var statearr_27670_27695 = state_27667__$1;
(statearr_27670_27695[(2)] = null);

(statearr_27670_27695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (4))){
var inst_27644 = (state_27667[(7)]);
var inst_27644__$1 = (state_27667[(2)]);
var inst_27645 = (inst_27644__$1 == null);
var state_27667__$1 = (function (){var statearr_27671 = state_27667;
(statearr_27671[(7)] = inst_27644__$1);

return statearr_27671;
})();
if(cljs.core.truth_(inst_27645)){
var statearr_27672_27696 = state_27667__$1;
(statearr_27672_27696[(1)] = (5));

} else {
var statearr_27673_27697 = state_27667__$1;
(statearr_27673_27697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (13))){
var state_27667__$1 = state_27667;
var statearr_27674_27698 = state_27667__$1;
(statearr_27674_27698[(2)] = null);

(statearr_27674_27698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (6))){
var inst_27644 = (state_27667[(7)]);
var inst_27650 = p.call(null,inst_27644);
var state_27667__$1 = state_27667;
if(cljs.core.truth_(inst_27650)){
var statearr_27675_27699 = state_27667__$1;
(statearr_27675_27699[(1)] = (9));

} else {
var statearr_27676_27700 = state_27667__$1;
(statearr_27676_27700[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (3))){
var inst_27665 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27667__$1,inst_27665);
} else {
if((state_val_27668 === (12))){
var state_27667__$1 = state_27667;
var statearr_27677_27701 = state_27667__$1;
(statearr_27677_27701[(2)] = null);

(statearr_27677_27701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (2))){
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27667__$1,(4),ch);
} else {
if((state_val_27668 === (11))){
var inst_27644 = (state_27667[(7)]);
var inst_27654 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27667__$1,(8),inst_27654,inst_27644);
} else {
if((state_val_27668 === (9))){
var state_27667__$1 = state_27667;
var statearr_27678_27702 = state_27667__$1;
(statearr_27678_27702[(2)] = tc);

(statearr_27678_27702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (5))){
var inst_27647 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27648 = cljs.core.async.close_BANG_.call(null,fc);
var state_27667__$1 = (function (){var statearr_27679 = state_27667;
(statearr_27679[(8)] = inst_27647);

return statearr_27679;
})();
var statearr_27680_27703 = state_27667__$1;
(statearr_27680_27703[(2)] = inst_27648);

(statearr_27680_27703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (14))){
var inst_27661 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27681_27704 = state_27667__$1;
(statearr_27681_27704[(2)] = inst_27661);

(statearr_27681_27704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (10))){
var state_27667__$1 = state_27667;
var statearr_27682_27705 = state_27667__$1;
(statearr_27682_27705[(2)] = fc);

(statearr_27682_27705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (8))){
var inst_27656 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
if(cljs.core.truth_(inst_27656)){
var statearr_27683_27706 = state_27667__$1;
(statearr_27683_27706[(1)] = (12));

} else {
var statearr_27684_27707 = state_27667__$1;
(statearr_27684_27707[(1)] = (13));

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
});})(c__21421__auto___27693,tc,fc))
;
return ((function (switch__21359__auto__,c__21421__auto___27693,tc,fc){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_27688 = [null,null,null,null,null,null,null,null,null];
(statearr_27688[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_27688[(1)] = (1));

return statearr_27688;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_27667){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_27667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e27689){if((e27689 instanceof Object)){
var ex__21363__auto__ = e27689;
var statearr_27690_27708 = state_27667;
(statearr_27690_27708[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27709 = state_27667;
state_27667 = G__27709;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_27667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_27667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___27693,tc,fc))
})();
var state__21423__auto__ = (function (){var statearr_27691 = f__21422__auto__.call(null);
(statearr_27691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___27693);

return statearr_27691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___27693,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto__){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto__){
return (function (state_27756){
var state_val_27757 = (state_27756[(1)]);
if((state_val_27757 === (7))){
var inst_27752 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
var statearr_27758_27774 = state_27756__$1;
(statearr_27758_27774[(2)] = inst_27752);

(statearr_27758_27774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (6))){
var inst_27745 = (state_27756[(7)]);
var inst_27742 = (state_27756[(8)]);
var inst_27749 = f.call(null,inst_27742,inst_27745);
var inst_27742__$1 = inst_27749;
var state_27756__$1 = (function (){var statearr_27759 = state_27756;
(statearr_27759[(8)] = inst_27742__$1);

return statearr_27759;
})();
var statearr_27760_27775 = state_27756__$1;
(statearr_27760_27775[(2)] = null);

(statearr_27760_27775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (5))){
var inst_27742 = (state_27756[(8)]);
var state_27756__$1 = state_27756;
var statearr_27761_27776 = state_27756__$1;
(statearr_27761_27776[(2)] = inst_27742);

(statearr_27761_27776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (4))){
var inst_27745 = (state_27756[(7)]);
var inst_27745__$1 = (state_27756[(2)]);
var inst_27746 = (inst_27745__$1 == null);
var state_27756__$1 = (function (){var statearr_27762 = state_27756;
(statearr_27762[(7)] = inst_27745__$1);

return statearr_27762;
})();
if(cljs.core.truth_(inst_27746)){
var statearr_27763_27777 = state_27756__$1;
(statearr_27763_27777[(1)] = (5));

} else {
var statearr_27764_27778 = state_27756__$1;
(statearr_27764_27778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27757 === (3))){
var inst_27754 = (state_27756[(2)]);
var state_27756__$1 = state_27756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27756__$1,inst_27754);
} else {
if((state_val_27757 === (2))){
var state_27756__$1 = state_27756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27756__$1,(4),ch);
} else {
if((state_val_27757 === (1))){
var inst_27742 = init;
var state_27756__$1 = (function (){var statearr_27765 = state_27756;
(statearr_27765[(8)] = inst_27742);

return statearr_27765;
})();
var statearr_27766_27779 = state_27756__$1;
(statearr_27766_27779[(2)] = null);

(statearr_27766_27779[(1)] = (2));


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
});})(c__21421__auto__))
;
return ((function (switch__21359__auto__,c__21421__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21360__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21360__auto____0 = (function (){
var statearr_27770 = [null,null,null,null,null,null,null,null,null];
(statearr_27770[(0)] = cljs$core$async$reduce_$_state_machine__21360__auto__);

(statearr_27770[(1)] = (1));

return statearr_27770;
});
var cljs$core$async$reduce_$_state_machine__21360__auto____1 = (function (state_27756){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_27756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e27771){if((e27771 instanceof Object)){
var ex__21363__auto__ = e27771;
var statearr_27772_27780 = state_27756;
(statearr_27772_27780[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27781 = state_27756;
state_27756 = G__27781;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21360__auto__ = function(state_27756){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21360__auto____1.call(this,state_27756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21360__auto____0;
cljs$core$async$reduce_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21360__auto____1;
return cljs$core$async$reduce_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto__))
})();
var state__21423__auto__ = (function (){var statearr_27773 = f__21422__auto__.call(null);
(statearr_27773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto__);

return statearr_27773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto__))
);

return c__21421__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27783 = arguments.length;
switch (G__27783) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto__){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto__){
return (function (state_27808){
var state_val_27809 = (state_27808[(1)]);
if((state_val_27809 === (7))){
var inst_27790 = (state_27808[(2)]);
var state_27808__$1 = state_27808;
var statearr_27810_27834 = state_27808__$1;
(statearr_27810_27834[(2)] = inst_27790);

(statearr_27810_27834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (1))){
var inst_27784 = cljs.core.seq.call(null,coll);
var inst_27785 = inst_27784;
var state_27808__$1 = (function (){var statearr_27811 = state_27808;
(statearr_27811[(7)] = inst_27785);

return statearr_27811;
})();
var statearr_27812_27835 = state_27808__$1;
(statearr_27812_27835[(2)] = null);

(statearr_27812_27835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (4))){
var inst_27785 = (state_27808[(7)]);
var inst_27788 = cljs.core.first.call(null,inst_27785);
var state_27808__$1 = state_27808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27808__$1,(7),ch,inst_27788);
} else {
if((state_val_27809 === (13))){
var inst_27802 = (state_27808[(2)]);
var state_27808__$1 = state_27808;
var statearr_27813_27836 = state_27808__$1;
(statearr_27813_27836[(2)] = inst_27802);

(statearr_27813_27836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (6))){
var inst_27793 = (state_27808[(2)]);
var state_27808__$1 = state_27808;
if(cljs.core.truth_(inst_27793)){
var statearr_27814_27837 = state_27808__$1;
(statearr_27814_27837[(1)] = (8));

} else {
var statearr_27815_27838 = state_27808__$1;
(statearr_27815_27838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (3))){
var inst_27806 = (state_27808[(2)]);
var state_27808__$1 = state_27808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27808__$1,inst_27806);
} else {
if((state_val_27809 === (12))){
var state_27808__$1 = state_27808;
var statearr_27816_27839 = state_27808__$1;
(statearr_27816_27839[(2)] = null);

(statearr_27816_27839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (2))){
var inst_27785 = (state_27808[(7)]);
var state_27808__$1 = state_27808;
if(cljs.core.truth_(inst_27785)){
var statearr_27817_27840 = state_27808__$1;
(statearr_27817_27840[(1)] = (4));

} else {
var statearr_27818_27841 = state_27808__$1;
(statearr_27818_27841[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (11))){
var inst_27799 = cljs.core.async.close_BANG_.call(null,ch);
var state_27808__$1 = state_27808;
var statearr_27819_27842 = state_27808__$1;
(statearr_27819_27842[(2)] = inst_27799);

(statearr_27819_27842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (9))){
var state_27808__$1 = state_27808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27820_27843 = state_27808__$1;
(statearr_27820_27843[(1)] = (11));

} else {
var statearr_27821_27844 = state_27808__$1;
(statearr_27821_27844[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (5))){
var inst_27785 = (state_27808[(7)]);
var state_27808__$1 = state_27808;
var statearr_27822_27845 = state_27808__$1;
(statearr_27822_27845[(2)] = inst_27785);

(statearr_27822_27845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (10))){
var inst_27804 = (state_27808[(2)]);
var state_27808__$1 = state_27808;
var statearr_27823_27846 = state_27808__$1;
(statearr_27823_27846[(2)] = inst_27804);

(statearr_27823_27846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27809 === (8))){
var inst_27785 = (state_27808[(7)]);
var inst_27795 = cljs.core.next.call(null,inst_27785);
var inst_27785__$1 = inst_27795;
var state_27808__$1 = (function (){var statearr_27824 = state_27808;
(statearr_27824[(7)] = inst_27785__$1);

return statearr_27824;
})();
var statearr_27825_27847 = state_27808__$1;
(statearr_27825_27847[(2)] = null);

(statearr_27825_27847[(1)] = (2));


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
});})(c__21421__auto__))
;
return ((function (switch__21359__auto__,c__21421__auto__){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_27829 = [null,null,null,null,null,null,null,null];
(statearr_27829[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_27829[(1)] = (1));

return statearr_27829;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_27808){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_27808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e27830){if((e27830 instanceof Object)){
var ex__21363__auto__ = e27830;
var statearr_27831_27848 = state_27808;
(statearr_27831_27848[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27849 = state_27808;
state_27808 = G__27849;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_27808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_27808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto__))
})();
var state__21423__auto__ = (function (){var statearr_27832 = f__21422__auto__.call(null);
(statearr_27832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto__);

return statearr_27832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto__))
);

return c__21421__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27851 = {};
return obj27851;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18183__auto__ = _;
if(and__18183__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18183__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18831__auto__ = (((_ == null))?null:_);
return (function (){var or__18195__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27853 = {};
return obj27853;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18183__auto__ = m;
if(and__18183__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18183__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18831__auto__ = (((m == null))?null:m);
return (function (){var or__18195__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18183__auto__ = m;
if(and__18183__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18183__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18831__auto__ = (((m == null))?null:m);
return (function (){var or__18195__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18183__auto__ = m;
if(and__18183__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18183__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18831__auto__ = (((m == null))?null:m);
return (function (){var or__18195__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28075 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28075 = (function (cs,ch,mult,meta28076){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28076 = meta28076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28075.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28075.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28075.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28075.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28075.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28075.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28077){
var self__ = this;
var _28077__$1 = this;
return self__.meta28076;
});})(cs))
;

cljs.core.async.t28075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28077,meta28076__$1){
var self__ = this;
var _28077__$1 = this;
return (new cljs.core.async.t28075(self__.cs,self__.ch,self__.mult,meta28076__$1));
});})(cs))
;

cljs.core.async.t28075.cljs$lang$type = true;

cljs.core.async.t28075.cljs$lang$ctorStr = "cljs.core.async/t28075";

cljs.core.async.t28075.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t28075");
});})(cs))
;

cljs.core.async.__GT_t28075 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28075(cs__$1,ch__$1,mult__$1,meta28076){
return (new cljs.core.async.t28075(cs__$1,ch__$1,mult__$1,meta28076));
});})(cs))
;

}

return (new cljs.core.async.t28075(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21421__auto___28296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___28296,cs,m,dchan,dctr,done){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___28296,cs,m,dchan,dctr,done){
return (function (state_28208){
var state_val_28209 = (state_28208[(1)]);
if((state_val_28209 === (7))){
var inst_28204 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28210_28297 = state_28208__$1;
(statearr_28210_28297[(2)] = inst_28204);

(statearr_28210_28297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (20))){
var inst_28109 = (state_28208[(7)]);
var inst_28119 = cljs.core.first.call(null,inst_28109);
var inst_28120 = cljs.core.nth.call(null,inst_28119,(0),null);
var inst_28121 = cljs.core.nth.call(null,inst_28119,(1),null);
var state_28208__$1 = (function (){var statearr_28211 = state_28208;
(statearr_28211[(8)] = inst_28120);

return statearr_28211;
})();
if(cljs.core.truth_(inst_28121)){
var statearr_28212_28298 = state_28208__$1;
(statearr_28212_28298[(1)] = (22));

} else {
var statearr_28213_28299 = state_28208__$1;
(statearr_28213_28299[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (27))){
var inst_28151 = (state_28208[(9)]);
var inst_28080 = (state_28208[(10)]);
var inst_28149 = (state_28208[(11)]);
var inst_28156 = (state_28208[(12)]);
var inst_28156__$1 = cljs.core._nth.call(null,inst_28149,inst_28151);
var inst_28157 = cljs.core.async.put_BANG_.call(null,inst_28156__$1,inst_28080,done);
var state_28208__$1 = (function (){var statearr_28214 = state_28208;
(statearr_28214[(12)] = inst_28156__$1);

return statearr_28214;
})();
if(cljs.core.truth_(inst_28157)){
var statearr_28215_28300 = state_28208__$1;
(statearr_28215_28300[(1)] = (30));

} else {
var statearr_28216_28301 = state_28208__$1;
(statearr_28216_28301[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (1))){
var state_28208__$1 = state_28208;
var statearr_28217_28302 = state_28208__$1;
(statearr_28217_28302[(2)] = null);

(statearr_28217_28302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (24))){
var inst_28109 = (state_28208[(7)]);
var inst_28126 = (state_28208[(2)]);
var inst_28127 = cljs.core.next.call(null,inst_28109);
var inst_28089 = inst_28127;
var inst_28090 = null;
var inst_28091 = (0);
var inst_28092 = (0);
var state_28208__$1 = (function (){var statearr_28218 = state_28208;
(statearr_28218[(13)] = inst_28089);

(statearr_28218[(14)] = inst_28090);

(statearr_28218[(15)] = inst_28126);

(statearr_28218[(16)] = inst_28092);

(statearr_28218[(17)] = inst_28091);

return statearr_28218;
})();
var statearr_28219_28303 = state_28208__$1;
(statearr_28219_28303[(2)] = null);

(statearr_28219_28303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (39))){
var state_28208__$1 = state_28208;
var statearr_28223_28304 = state_28208__$1;
(statearr_28223_28304[(2)] = null);

(statearr_28223_28304[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (4))){
var inst_28080 = (state_28208[(10)]);
var inst_28080__$1 = (state_28208[(2)]);
var inst_28081 = (inst_28080__$1 == null);
var state_28208__$1 = (function (){var statearr_28224 = state_28208;
(statearr_28224[(10)] = inst_28080__$1);

return statearr_28224;
})();
if(cljs.core.truth_(inst_28081)){
var statearr_28225_28305 = state_28208__$1;
(statearr_28225_28305[(1)] = (5));

} else {
var statearr_28226_28306 = state_28208__$1;
(statearr_28226_28306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (15))){
var inst_28089 = (state_28208[(13)]);
var inst_28090 = (state_28208[(14)]);
var inst_28092 = (state_28208[(16)]);
var inst_28091 = (state_28208[(17)]);
var inst_28105 = (state_28208[(2)]);
var inst_28106 = (inst_28092 + (1));
var tmp28220 = inst_28089;
var tmp28221 = inst_28090;
var tmp28222 = inst_28091;
var inst_28089__$1 = tmp28220;
var inst_28090__$1 = tmp28221;
var inst_28091__$1 = tmp28222;
var inst_28092__$1 = inst_28106;
var state_28208__$1 = (function (){var statearr_28227 = state_28208;
(statearr_28227[(13)] = inst_28089__$1);

(statearr_28227[(14)] = inst_28090__$1);

(statearr_28227[(16)] = inst_28092__$1);

(statearr_28227[(17)] = inst_28091__$1);

(statearr_28227[(18)] = inst_28105);

return statearr_28227;
})();
var statearr_28228_28307 = state_28208__$1;
(statearr_28228_28307[(2)] = null);

(statearr_28228_28307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (21))){
var inst_28130 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28232_28308 = state_28208__$1;
(statearr_28232_28308[(2)] = inst_28130);

(statearr_28232_28308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (31))){
var inst_28156 = (state_28208[(12)]);
var inst_28160 = done.call(null,null);
var inst_28161 = cljs.core.async.untap_STAR_.call(null,m,inst_28156);
var state_28208__$1 = (function (){var statearr_28233 = state_28208;
(statearr_28233[(19)] = inst_28160);

return statearr_28233;
})();
var statearr_28234_28309 = state_28208__$1;
(statearr_28234_28309[(2)] = inst_28161);

(statearr_28234_28309[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (32))){
var inst_28151 = (state_28208[(9)]);
var inst_28150 = (state_28208[(20)]);
var inst_28148 = (state_28208[(21)]);
var inst_28149 = (state_28208[(11)]);
var inst_28163 = (state_28208[(2)]);
var inst_28164 = (inst_28151 + (1));
var tmp28229 = inst_28150;
var tmp28230 = inst_28148;
var tmp28231 = inst_28149;
var inst_28148__$1 = tmp28230;
var inst_28149__$1 = tmp28231;
var inst_28150__$1 = tmp28229;
var inst_28151__$1 = inst_28164;
var state_28208__$1 = (function (){var statearr_28235 = state_28208;
(statearr_28235[(9)] = inst_28151__$1);

(statearr_28235[(20)] = inst_28150__$1);

(statearr_28235[(22)] = inst_28163);

(statearr_28235[(21)] = inst_28148__$1);

(statearr_28235[(11)] = inst_28149__$1);

return statearr_28235;
})();
var statearr_28236_28310 = state_28208__$1;
(statearr_28236_28310[(2)] = null);

(statearr_28236_28310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (40))){
var inst_28176 = (state_28208[(23)]);
var inst_28180 = done.call(null,null);
var inst_28181 = cljs.core.async.untap_STAR_.call(null,m,inst_28176);
var state_28208__$1 = (function (){var statearr_28237 = state_28208;
(statearr_28237[(24)] = inst_28180);

return statearr_28237;
})();
var statearr_28238_28311 = state_28208__$1;
(statearr_28238_28311[(2)] = inst_28181);

(statearr_28238_28311[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (33))){
var inst_28167 = (state_28208[(25)]);
var inst_28169 = cljs.core.chunked_seq_QMARK_.call(null,inst_28167);
var state_28208__$1 = state_28208;
if(inst_28169){
var statearr_28239_28312 = state_28208__$1;
(statearr_28239_28312[(1)] = (36));

} else {
var statearr_28240_28313 = state_28208__$1;
(statearr_28240_28313[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (13))){
var inst_28099 = (state_28208[(26)]);
var inst_28102 = cljs.core.async.close_BANG_.call(null,inst_28099);
var state_28208__$1 = state_28208;
var statearr_28241_28314 = state_28208__$1;
(statearr_28241_28314[(2)] = inst_28102);

(statearr_28241_28314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (22))){
var inst_28120 = (state_28208[(8)]);
var inst_28123 = cljs.core.async.close_BANG_.call(null,inst_28120);
var state_28208__$1 = state_28208;
var statearr_28242_28315 = state_28208__$1;
(statearr_28242_28315[(2)] = inst_28123);

(statearr_28242_28315[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (36))){
var inst_28167 = (state_28208[(25)]);
var inst_28171 = cljs.core.chunk_first.call(null,inst_28167);
var inst_28172 = cljs.core.chunk_rest.call(null,inst_28167);
var inst_28173 = cljs.core.count.call(null,inst_28171);
var inst_28148 = inst_28172;
var inst_28149 = inst_28171;
var inst_28150 = inst_28173;
var inst_28151 = (0);
var state_28208__$1 = (function (){var statearr_28243 = state_28208;
(statearr_28243[(9)] = inst_28151);

(statearr_28243[(20)] = inst_28150);

(statearr_28243[(21)] = inst_28148);

(statearr_28243[(11)] = inst_28149);

return statearr_28243;
})();
var statearr_28244_28316 = state_28208__$1;
(statearr_28244_28316[(2)] = null);

(statearr_28244_28316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (41))){
var inst_28167 = (state_28208[(25)]);
var inst_28183 = (state_28208[(2)]);
var inst_28184 = cljs.core.next.call(null,inst_28167);
var inst_28148 = inst_28184;
var inst_28149 = null;
var inst_28150 = (0);
var inst_28151 = (0);
var state_28208__$1 = (function (){var statearr_28245 = state_28208;
(statearr_28245[(9)] = inst_28151);

(statearr_28245[(20)] = inst_28150);

(statearr_28245[(21)] = inst_28148);

(statearr_28245[(27)] = inst_28183);

(statearr_28245[(11)] = inst_28149);

return statearr_28245;
})();
var statearr_28246_28317 = state_28208__$1;
(statearr_28246_28317[(2)] = null);

(statearr_28246_28317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (43))){
var state_28208__$1 = state_28208;
var statearr_28247_28318 = state_28208__$1;
(statearr_28247_28318[(2)] = null);

(statearr_28247_28318[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (29))){
var inst_28192 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28248_28319 = state_28208__$1;
(statearr_28248_28319[(2)] = inst_28192);

(statearr_28248_28319[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (44))){
var inst_28201 = (state_28208[(2)]);
var state_28208__$1 = (function (){var statearr_28249 = state_28208;
(statearr_28249[(28)] = inst_28201);

return statearr_28249;
})();
var statearr_28250_28320 = state_28208__$1;
(statearr_28250_28320[(2)] = null);

(statearr_28250_28320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (6))){
var inst_28140 = (state_28208[(29)]);
var inst_28139 = cljs.core.deref.call(null,cs);
var inst_28140__$1 = cljs.core.keys.call(null,inst_28139);
var inst_28141 = cljs.core.count.call(null,inst_28140__$1);
var inst_28142 = cljs.core.reset_BANG_.call(null,dctr,inst_28141);
var inst_28147 = cljs.core.seq.call(null,inst_28140__$1);
var inst_28148 = inst_28147;
var inst_28149 = null;
var inst_28150 = (0);
var inst_28151 = (0);
var state_28208__$1 = (function (){var statearr_28251 = state_28208;
(statearr_28251[(9)] = inst_28151);

(statearr_28251[(20)] = inst_28150);

(statearr_28251[(21)] = inst_28148);

(statearr_28251[(29)] = inst_28140__$1);

(statearr_28251[(11)] = inst_28149);

(statearr_28251[(30)] = inst_28142);

return statearr_28251;
})();
var statearr_28252_28321 = state_28208__$1;
(statearr_28252_28321[(2)] = null);

(statearr_28252_28321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (28))){
var inst_28148 = (state_28208[(21)]);
var inst_28167 = (state_28208[(25)]);
var inst_28167__$1 = cljs.core.seq.call(null,inst_28148);
var state_28208__$1 = (function (){var statearr_28253 = state_28208;
(statearr_28253[(25)] = inst_28167__$1);

return statearr_28253;
})();
if(inst_28167__$1){
var statearr_28254_28322 = state_28208__$1;
(statearr_28254_28322[(1)] = (33));

} else {
var statearr_28255_28323 = state_28208__$1;
(statearr_28255_28323[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (25))){
var inst_28151 = (state_28208[(9)]);
var inst_28150 = (state_28208[(20)]);
var inst_28153 = (inst_28151 < inst_28150);
var inst_28154 = inst_28153;
var state_28208__$1 = state_28208;
if(cljs.core.truth_(inst_28154)){
var statearr_28256_28324 = state_28208__$1;
(statearr_28256_28324[(1)] = (27));

} else {
var statearr_28257_28325 = state_28208__$1;
(statearr_28257_28325[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (34))){
var state_28208__$1 = state_28208;
var statearr_28258_28326 = state_28208__$1;
(statearr_28258_28326[(2)] = null);

(statearr_28258_28326[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (17))){
var state_28208__$1 = state_28208;
var statearr_28259_28327 = state_28208__$1;
(statearr_28259_28327[(2)] = null);

(statearr_28259_28327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (3))){
var inst_28206 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28208__$1,inst_28206);
} else {
if((state_val_28209 === (12))){
var inst_28135 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28260_28328 = state_28208__$1;
(statearr_28260_28328[(2)] = inst_28135);

(statearr_28260_28328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (2))){
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28208__$1,(4),ch);
} else {
if((state_val_28209 === (23))){
var state_28208__$1 = state_28208;
var statearr_28261_28329 = state_28208__$1;
(statearr_28261_28329[(2)] = null);

(statearr_28261_28329[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (35))){
var inst_28190 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28262_28330 = state_28208__$1;
(statearr_28262_28330[(2)] = inst_28190);

(statearr_28262_28330[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (19))){
var inst_28109 = (state_28208[(7)]);
var inst_28113 = cljs.core.chunk_first.call(null,inst_28109);
var inst_28114 = cljs.core.chunk_rest.call(null,inst_28109);
var inst_28115 = cljs.core.count.call(null,inst_28113);
var inst_28089 = inst_28114;
var inst_28090 = inst_28113;
var inst_28091 = inst_28115;
var inst_28092 = (0);
var state_28208__$1 = (function (){var statearr_28263 = state_28208;
(statearr_28263[(13)] = inst_28089);

(statearr_28263[(14)] = inst_28090);

(statearr_28263[(16)] = inst_28092);

(statearr_28263[(17)] = inst_28091);

return statearr_28263;
})();
var statearr_28264_28331 = state_28208__$1;
(statearr_28264_28331[(2)] = null);

(statearr_28264_28331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (11))){
var inst_28089 = (state_28208[(13)]);
var inst_28109 = (state_28208[(7)]);
var inst_28109__$1 = cljs.core.seq.call(null,inst_28089);
var state_28208__$1 = (function (){var statearr_28265 = state_28208;
(statearr_28265[(7)] = inst_28109__$1);

return statearr_28265;
})();
if(inst_28109__$1){
var statearr_28266_28332 = state_28208__$1;
(statearr_28266_28332[(1)] = (16));

} else {
var statearr_28267_28333 = state_28208__$1;
(statearr_28267_28333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (9))){
var inst_28137 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28268_28334 = state_28208__$1;
(statearr_28268_28334[(2)] = inst_28137);

(statearr_28268_28334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (5))){
var inst_28087 = cljs.core.deref.call(null,cs);
var inst_28088 = cljs.core.seq.call(null,inst_28087);
var inst_28089 = inst_28088;
var inst_28090 = null;
var inst_28091 = (0);
var inst_28092 = (0);
var state_28208__$1 = (function (){var statearr_28269 = state_28208;
(statearr_28269[(13)] = inst_28089);

(statearr_28269[(14)] = inst_28090);

(statearr_28269[(16)] = inst_28092);

(statearr_28269[(17)] = inst_28091);

return statearr_28269;
})();
var statearr_28270_28335 = state_28208__$1;
(statearr_28270_28335[(2)] = null);

(statearr_28270_28335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (14))){
var state_28208__$1 = state_28208;
var statearr_28271_28336 = state_28208__$1;
(statearr_28271_28336[(2)] = null);

(statearr_28271_28336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (45))){
var inst_28198 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28272_28337 = state_28208__$1;
(statearr_28272_28337[(2)] = inst_28198);

(statearr_28272_28337[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (26))){
var inst_28140 = (state_28208[(29)]);
var inst_28194 = (state_28208[(2)]);
var inst_28195 = cljs.core.seq.call(null,inst_28140);
var state_28208__$1 = (function (){var statearr_28273 = state_28208;
(statearr_28273[(31)] = inst_28194);

return statearr_28273;
})();
if(inst_28195){
var statearr_28274_28338 = state_28208__$1;
(statearr_28274_28338[(1)] = (42));

} else {
var statearr_28275_28339 = state_28208__$1;
(statearr_28275_28339[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (16))){
var inst_28109 = (state_28208[(7)]);
var inst_28111 = cljs.core.chunked_seq_QMARK_.call(null,inst_28109);
var state_28208__$1 = state_28208;
if(inst_28111){
var statearr_28276_28340 = state_28208__$1;
(statearr_28276_28340[(1)] = (19));

} else {
var statearr_28277_28341 = state_28208__$1;
(statearr_28277_28341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (38))){
var inst_28187 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28278_28342 = state_28208__$1;
(statearr_28278_28342[(2)] = inst_28187);

(statearr_28278_28342[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (30))){
var state_28208__$1 = state_28208;
var statearr_28279_28343 = state_28208__$1;
(statearr_28279_28343[(2)] = null);

(statearr_28279_28343[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (10))){
var inst_28090 = (state_28208[(14)]);
var inst_28092 = (state_28208[(16)]);
var inst_28098 = cljs.core._nth.call(null,inst_28090,inst_28092);
var inst_28099 = cljs.core.nth.call(null,inst_28098,(0),null);
var inst_28100 = cljs.core.nth.call(null,inst_28098,(1),null);
var state_28208__$1 = (function (){var statearr_28280 = state_28208;
(statearr_28280[(26)] = inst_28099);

return statearr_28280;
})();
if(cljs.core.truth_(inst_28100)){
var statearr_28281_28344 = state_28208__$1;
(statearr_28281_28344[(1)] = (13));

} else {
var statearr_28282_28345 = state_28208__$1;
(statearr_28282_28345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (18))){
var inst_28133 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28283_28346 = state_28208__$1;
(statearr_28283_28346[(2)] = inst_28133);

(statearr_28283_28346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (42))){
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28208__$1,(45),dchan);
} else {
if((state_val_28209 === (37))){
var inst_28080 = (state_28208[(10)]);
var inst_28176 = (state_28208[(23)]);
var inst_28167 = (state_28208[(25)]);
var inst_28176__$1 = cljs.core.first.call(null,inst_28167);
var inst_28177 = cljs.core.async.put_BANG_.call(null,inst_28176__$1,inst_28080,done);
var state_28208__$1 = (function (){var statearr_28284 = state_28208;
(statearr_28284[(23)] = inst_28176__$1);

return statearr_28284;
})();
if(cljs.core.truth_(inst_28177)){
var statearr_28285_28347 = state_28208__$1;
(statearr_28285_28347[(1)] = (39));

} else {
var statearr_28286_28348 = state_28208__$1;
(statearr_28286_28348[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (8))){
var inst_28092 = (state_28208[(16)]);
var inst_28091 = (state_28208[(17)]);
var inst_28094 = (inst_28092 < inst_28091);
var inst_28095 = inst_28094;
var state_28208__$1 = state_28208;
if(cljs.core.truth_(inst_28095)){
var statearr_28287_28349 = state_28208__$1;
(statearr_28287_28349[(1)] = (10));

} else {
var statearr_28288_28350 = state_28208__$1;
(statearr_28288_28350[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21421__auto___28296,cs,m,dchan,dctr,done))
;
return ((function (switch__21359__auto__,c__21421__auto___28296,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21360__auto__ = null;
var cljs$core$async$mult_$_state_machine__21360__auto____0 = (function (){
var statearr_28292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28292[(0)] = cljs$core$async$mult_$_state_machine__21360__auto__);

(statearr_28292[(1)] = (1));

return statearr_28292;
});
var cljs$core$async$mult_$_state_machine__21360__auto____1 = (function (state_28208){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_28208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e28293){if((e28293 instanceof Object)){
var ex__21363__auto__ = e28293;
var statearr_28294_28351 = state_28208;
(statearr_28294_28351[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28352 = state_28208;
state_28208 = G__28352;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21360__auto__ = function(state_28208){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21360__auto____1.call(this,state_28208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21360__auto____0;
cljs$core$async$mult_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21360__auto____1;
return cljs$core$async$mult_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___28296,cs,m,dchan,dctr,done))
})();
var state__21423__auto__ = (function (){var statearr_28295 = f__21422__auto__.call(null);
(statearr_28295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___28296);

return statearr_28295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___28296,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__28354 = arguments.length;
switch (G__28354) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28357 = {};
return obj28357;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18183__auto__ = m;
if(and__18183__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18183__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18831__auto__ = (((m == null))?null:m);
return (function (){var or__18195__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18183__auto__ = m;
if(and__18183__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18183__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18831__auto__ = (((m == null))?null:m);
return (function (){var or__18195__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18183__auto__ = m;
if(and__18183__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18183__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18831__auto__ = (((m == null))?null:m);
return (function (){var or__18195__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18183__auto__ = m;
if(and__18183__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18183__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18831__auto__ = (((m == null))?null:m);
return (function (){var or__18195__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18183__auto__ = m;
if(and__18183__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18183__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18831__auto__ = (((m == null))?null:m);
return (function (){var or__18195__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19235__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19235__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28362){
var map__28363 = p__28362;
var map__28363__$1 = ((cljs.core.seq_QMARK_.call(null,map__28363))?cljs.core.apply.call(null,cljs.core.hash_map,map__28363):map__28363);
var opts = map__28363__$1;
var statearr_28364_28367 = state;
(statearr_28364_28367[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28363,map__28363__$1,opts){
return (function (val){
var statearr_28365_28368 = state;
(statearr_28365_28368[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28363,map__28363__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28366_28369 = state;
(statearr_28366_28369[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28358){
var G__28359 = cljs.core.first.call(null,seq28358);
var seq28358__$1 = cljs.core.next.call(null,seq28358);
var G__28360 = cljs.core.first.call(null,seq28358__$1);
var seq28358__$2 = cljs.core.next.call(null,seq28358__$1);
var G__28361 = cljs.core.first.call(null,seq28358__$2);
var seq28358__$3 = cljs.core.next.call(null,seq28358__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28359,G__28360,G__28361,seq28358__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28489 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28489 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28490){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28490 = meta28490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28489.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28489.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28489.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28489.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28489.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28489.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28489.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28491){
var self__ = this;
var _28491__$1 = this;
return self__.meta28490;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28491,meta28490__$1){
var self__ = this;
var _28491__$1 = this;
return (new cljs.core.async.t28489(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28490__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28489.cljs$lang$type = true;

cljs.core.async.t28489.cljs$lang$ctorStr = "cljs.core.async/t28489";

cljs.core.async.t28489.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t28489");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28489 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28489(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28490){
return (new cljs.core.async.t28489(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28490));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28489(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21421__auto___28608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___28608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___28608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28561){
var state_val_28562 = (state_28561[(1)]);
if((state_val_28562 === (7))){
var inst_28505 = (state_28561[(7)]);
var inst_28510 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28505);
var state_28561__$1 = state_28561;
var statearr_28563_28609 = state_28561__$1;
(statearr_28563_28609[(2)] = inst_28510);

(statearr_28563_28609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (20))){
var inst_28520 = (state_28561[(8)]);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28561__$1,(23),out,inst_28520);
} else {
if((state_val_28562 === (1))){
var inst_28495 = (state_28561[(9)]);
var inst_28495__$1 = calc_state.call(null);
var inst_28496 = cljs.core.seq_QMARK_.call(null,inst_28495__$1);
var state_28561__$1 = (function (){var statearr_28564 = state_28561;
(statearr_28564[(9)] = inst_28495__$1);

return statearr_28564;
})();
if(inst_28496){
var statearr_28565_28610 = state_28561__$1;
(statearr_28565_28610[(1)] = (2));

} else {
var statearr_28566_28611 = state_28561__$1;
(statearr_28566_28611[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (24))){
var inst_28513 = (state_28561[(10)]);
var inst_28505 = inst_28513;
var state_28561__$1 = (function (){var statearr_28567 = state_28561;
(statearr_28567[(7)] = inst_28505);

return statearr_28567;
})();
var statearr_28568_28612 = state_28561__$1;
(statearr_28568_28612[(2)] = null);

(statearr_28568_28612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (4))){
var inst_28495 = (state_28561[(9)]);
var inst_28501 = (state_28561[(2)]);
var inst_28502 = cljs.core.get.call(null,inst_28501,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28503 = cljs.core.get.call(null,inst_28501,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28504 = cljs.core.get.call(null,inst_28501,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28505 = inst_28495;
var state_28561__$1 = (function (){var statearr_28569 = state_28561;
(statearr_28569[(7)] = inst_28505);

(statearr_28569[(11)] = inst_28504);

(statearr_28569[(12)] = inst_28502);

(statearr_28569[(13)] = inst_28503);

return statearr_28569;
})();
var statearr_28570_28613 = state_28561__$1;
(statearr_28570_28613[(2)] = null);

(statearr_28570_28613[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (15))){
var state_28561__$1 = state_28561;
var statearr_28571_28614 = state_28561__$1;
(statearr_28571_28614[(2)] = null);

(statearr_28571_28614[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (21))){
var inst_28513 = (state_28561[(10)]);
var inst_28505 = inst_28513;
var state_28561__$1 = (function (){var statearr_28572 = state_28561;
(statearr_28572[(7)] = inst_28505);

return statearr_28572;
})();
var statearr_28573_28615 = state_28561__$1;
(statearr_28573_28615[(2)] = null);

(statearr_28573_28615[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (13))){
var inst_28557 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28574_28616 = state_28561__$1;
(statearr_28574_28616[(2)] = inst_28557);

(statearr_28574_28616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (22))){
var inst_28555 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28575_28617 = state_28561__$1;
(statearr_28575_28617[(2)] = inst_28555);

(statearr_28575_28617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (6))){
var inst_28559 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28561__$1,inst_28559);
} else {
if((state_val_28562 === (25))){
var state_28561__$1 = state_28561;
var statearr_28576_28618 = state_28561__$1;
(statearr_28576_28618[(2)] = null);

(statearr_28576_28618[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (17))){
var inst_28535 = (state_28561[(14)]);
var state_28561__$1 = state_28561;
var statearr_28577_28619 = state_28561__$1;
(statearr_28577_28619[(2)] = inst_28535);

(statearr_28577_28619[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (3))){
var inst_28495 = (state_28561[(9)]);
var state_28561__$1 = state_28561;
var statearr_28578_28620 = state_28561__$1;
(statearr_28578_28620[(2)] = inst_28495);

(statearr_28578_28620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (12))){
var inst_28521 = (state_28561[(15)]);
var inst_28535 = (state_28561[(14)]);
var inst_28516 = (state_28561[(16)]);
var inst_28535__$1 = inst_28516.call(null,inst_28521);
var state_28561__$1 = (function (){var statearr_28579 = state_28561;
(statearr_28579[(14)] = inst_28535__$1);

return statearr_28579;
})();
if(cljs.core.truth_(inst_28535__$1)){
var statearr_28580_28621 = state_28561__$1;
(statearr_28580_28621[(1)] = (17));

} else {
var statearr_28581_28622 = state_28561__$1;
(statearr_28581_28622[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (2))){
var inst_28495 = (state_28561[(9)]);
var inst_28498 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28495);
var state_28561__$1 = state_28561;
var statearr_28582_28623 = state_28561__$1;
(statearr_28582_28623[(2)] = inst_28498);

(statearr_28582_28623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (23))){
var inst_28546 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
if(cljs.core.truth_(inst_28546)){
var statearr_28583_28624 = state_28561__$1;
(statearr_28583_28624[(1)] = (24));

} else {
var statearr_28584_28625 = state_28561__$1;
(statearr_28584_28625[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (19))){
var inst_28543 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
if(cljs.core.truth_(inst_28543)){
var statearr_28585_28626 = state_28561__$1;
(statearr_28585_28626[(1)] = (20));

} else {
var statearr_28586_28627 = state_28561__$1;
(statearr_28586_28627[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (11))){
var inst_28520 = (state_28561[(8)]);
var inst_28526 = (inst_28520 == null);
var state_28561__$1 = state_28561;
if(cljs.core.truth_(inst_28526)){
var statearr_28587_28628 = state_28561__$1;
(statearr_28587_28628[(1)] = (14));

} else {
var statearr_28588_28629 = state_28561__$1;
(statearr_28588_28629[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (9))){
var inst_28513 = (state_28561[(10)]);
var inst_28513__$1 = (state_28561[(2)]);
var inst_28514 = cljs.core.get.call(null,inst_28513__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28515 = cljs.core.get.call(null,inst_28513__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28516 = cljs.core.get.call(null,inst_28513__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28561__$1 = (function (){var statearr_28589 = state_28561;
(statearr_28589[(17)] = inst_28515);

(statearr_28589[(16)] = inst_28516);

(statearr_28589[(10)] = inst_28513__$1);

return statearr_28589;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28561__$1,(10),inst_28514);
} else {
if((state_val_28562 === (5))){
var inst_28505 = (state_28561[(7)]);
var inst_28508 = cljs.core.seq_QMARK_.call(null,inst_28505);
var state_28561__$1 = state_28561;
if(inst_28508){
var statearr_28590_28630 = state_28561__$1;
(statearr_28590_28630[(1)] = (7));

} else {
var statearr_28591_28631 = state_28561__$1;
(statearr_28591_28631[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (14))){
var inst_28521 = (state_28561[(15)]);
var inst_28528 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28521);
var state_28561__$1 = state_28561;
var statearr_28592_28632 = state_28561__$1;
(statearr_28592_28632[(2)] = inst_28528);

(statearr_28592_28632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (26))){
var inst_28551 = (state_28561[(2)]);
var state_28561__$1 = state_28561;
var statearr_28593_28633 = state_28561__$1;
(statearr_28593_28633[(2)] = inst_28551);

(statearr_28593_28633[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (16))){
var inst_28531 = (state_28561[(2)]);
var inst_28532 = calc_state.call(null);
var inst_28505 = inst_28532;
var state_28561__$1 = (function (){var statearr_28594 = state_28561;
(statearr_28594[(7)] = inst_28505);

(statearr_28594[(18)] = inst_28531);

return statearr_28594;
})();
var statearr_28595_28634 = state_28561__$1;
(statearr_28595_28634[(2)] = null);

(statearr_28595_28634[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (10))){
var inst_28521 = (state_28561[(15)]);
var inst_28520 = (state_28561[(8)]);
var inst_28519 = (state_28561[(2)]);
var inst_28520__$1 = cljs.core.nth.call(null,inst_28519,(0),null);
var inst_28521__$1 = cljs.core.nth.call(null,inst_28519,(1),null);
var inst_28522 = (inst_28520__$1 == null);
var inst_28523 = cljs.core._EQ_.call(null,inst_28521__$1,change);
var inst_28524 = (inst_28522) || (inst_28523);
var state_28561__$1 = (function (){var statearr_28596 = state_28561;
(statearr_28596[(15)] = inst_28521__$1);

(statearr_28596[(8)] = inst_28520__$1);

return statearr_28596;
})();
if(cljs.core.truth_(inst_28524)){
var statearr_28597_28635 = state_28561__$1;
(statearr_28597_28635[(1)] = (11));

} else {
var statearr_28598_28636 = state_28561__$1;
(statearr_28598_28636[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (18))){
var inst_28521 = (state_28561[(15)]);
var inst_28515 = (state_28561[(17)]);
var inst_28516 = (state_28561[(16)]);
var inst_28538 = cljs.core.empty_QMARK_.call(null,inst_28516);
var inst_28539 = inst_28515.call(null,inst_28521);
var inst_28540 = cljs.core.not.call(null,inst_28539);
var inst_28541 = (inst_28538) && (inst_28540);
var state_28561__$1 = state_28561;
var statearr_28599_28637 = state_28561__$1;
(statearr_28599_28637[(2)] = inst_28541);

(statearr_28599_28637[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28562 === (8))){
var inst_28505 = (state_28561[(7)]);
var state_28561__$1 = state_28561;
var statearr_28600_28638 = state_28561__$1;
(statearr_28600_28638[(2)] = inst_28505);

(statearr_28600_28638[(1)] = (9));


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
});})(c__21421__auto___28608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21359__auto__,c__21421__auto___28608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21360__auto__ = null;
var cljs$core$async$mix_$_state_machine__21360__auto____0 = (function (){
var statearr_28604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28604[(0)] = cljs$core$async$mix_$_state_machine__21360__auto__);

(statearr_28604[(1)] = (1));

return statearr_28604;
});
var cljs$core$async$mix_$_state_machine__21360__auto____1 = (function (state_28561){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_28561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e28605){if((e28605 instanceof Object)){
var ex__21363__auto__ = e28605;
var statearr_28606_28639 = state_28561;
(statearr_28606_28639[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28640 = state_28561;
state_28561 = G__28640;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21360__auto__ = function(state_28561){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21360__auto____1.call(this,state_28561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21360__auto____0;
cljs$core$async$mix_$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21360__auto____1;
return cljs$core$async$mix_$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___28608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21423__auto__ = (function (){var statearr_28607 = f__21422__auto__.call(null);
(statearr_28607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___28608);

return statearr_28607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___28608,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28642 = {};
return obj28642;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18183__auto__ = p;
if(and__18183__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18183__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18831__auto__ = (((p == null))?null:p);
return (function (){var or__18195__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18183__auto__ = p;
if(and__18183__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18183__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18831__auto__ = (((p == null))?null:p);
return (function (){var or__18195__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28644 = arguments.length;
switch (G__28644) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18183__auto__ = p;
if(and__18183__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18183__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18831__auto__ = (((p == null))?null:p);
return (function (){var or__18195__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18183__auto__ = p;
if(and__18183__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18183__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18831__auto__ = (((p == null))?null:p);
return (function (){var or__18195__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18831__auto__)]);
if(or__18195__auto__){
return or__18195__auto__;
} else {
var or__18195__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18195__auto____$1){
return or__18195__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28648 = arguments.length;
switch (G__28648) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18195__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18195__auto__,mults){
return (function (p1__28646_SHARP_){
if(cljs.core.truth_(p1__28646_SHARP_.call(null,topic))){
return p1__28646_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28646_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28649 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28649 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta28650){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta28650 = meta28650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28649.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28649.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28649.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28649.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28651){
var self__ = this;
var _28651__$1 = this;
return self__.meta28650;
});})(mults,ensure_mult))
;

cljs.core.async.t28649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28651,meta28650__$1){
var self__ = this;
var _28651__$1 = this;
return (new cljs.core.async.t28649(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta28650__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28649.cljs$lang$type = true;

cljs.core.async.t28649.cljs$lang$ctorStr = "cljs.core.async/t28649";

cljs.core.async.t28649.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t28649");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28649 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28649(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28650){
return (new cljs.core.async.t28649(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28650));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28649(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21421__auto___28772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___28772,mults,ensure_mult,p){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___28772,mults,ensure_mult,p){
return (function (state_28723){
var state_val_28724 = (state_28723[(1)]);
if((state_val_28724 === (7))){
var inst_28719 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
var statearr_28725_28773 = state_28723__$1;
(statearr_28725_28773[(2)] = inst_28719);

(statearr_28725_28773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (20))){
var state_28723__$1 = state_28723;
var statearr_28726_28774 = state_28723__$1;
(statearr_28726_28774[(2)] = null);

(statearr_28726_28774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (1))){
var state_28723__$1 = state_28723;
var statearr_28727_28775 = state_28723__$1;
(statearr_28727_28775[(2)] = null);

(statearr_28727_28775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (24))){
var inst_28702 = (state_28723[(7)]);
var inst_28711 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28702);
var state_28723__$1 = state_28723;
var statearr_28728_28776 = state_28723__$1;
(statearr_28728_28776[(2)] = inst_28711);

(statearr_28728_28776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (4))){
var inst_28654 = (state_28723[(8)]);
var inst_28654__$1 = (state_28723[(2)]);
var inst_28655 = (inst_28654__$1 == null);
var state_28723__$1 = (function (){var statearr_28729 = state_28723;
(statearr_28729[(8)] = inst_28654__$1);

return statearr_28729;
})();
if(cljs.core.truth_(inst_28655)){
var statearr_28730_28777 = state_28723__$1;
(statearr_28730_28777[(1)] = (5));

} else {
var statearr_28731_28778 = state_28723__$1;
(statearr_28731_28778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (15))){
var inst_28696 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
var statearr_28732_28779 = state_28723__$1;
(statearr_28732_28779[(2)] = inst_28696);

(statearr_28732_28779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (21))){
var inst_28716 = (state_28723[(2)]);
var state_28723__$1 = (function (){var statearr_28733 = state_28723;
(statearr_28733[(9)] = inst_28716);

return statearr_28733;
})();
var statearr_28734_28780 = state_28723__$1;
(statearr_28734_28780[(2)] = null);

(statearr_28734_28780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (13))){
var inst_28678 = (state_28723[(10)]);
var inst_28680 = cljs.core.chunked_seq_QMARK_.call(null,inst_28678);
var state_28723__$1 = state_28723;
if(inst_28680){
var statearr_28735_28781 = state_28723__$1;
(statearr_28735_28781[(1)] = (16));

} else {
var statearr_28736_28782 = state_28723__$1;
(statearr_28736_28782[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (22))){
var inst_28708 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
if(cljs.core.truth_(inst_28708)){
var statearr_28737_28783 = state_28723__$1;
(statearr_28737_28783[(1)] = (23));

} else {
var statearr_28738_28784 = state_28723__$1;
(statearr_28738_28784[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (6))){
var inst_28654 = (state_28723[(8)]);
var inst_28704 = (state_28723[(11)]);
var inst_28702 = (state_28723[(7)]);
var inst_28702__$1 = topic_fn.call(null,inst_28654);
var inst_28703 = cljs.core.deref.call(null,mults);
var inst_28704__$1 = cljs.core.get.call(null,inst_28703,inst_28702__$1);
var state_28723__$1 = (function (){var statearr_28739 = state_28723;
(statearr_28739[(11)] = inst_28704__$1);

(statearr_28739[(7)] = inst_28702__$1);

return statearr_28739;
})();
if(cljs.core.truth_(inst_28704__$1)){
var statearr_28740_28785 = state_28723__$1;
(statearr_28740_28785[(1)] = (19));

} else {
var statearr_28741_28786 = state_28723__$1;
(statearr_28741_28786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (25))){
var inst_28713 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
var statearr_28742_28787 = state_28723__$1;
(statearr_28742_28787[(2)] = inst_28713);

(statearr_28742_28787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (17))){
var inst_28678 = (state_28723[(10)]);
var inst_28687 = cljs.core.first.call(null,inst_28678);
var inst_28688 = cljs.core.async.muxch_STAR_.call(null,inst_28687);
var inst_28689 = cljs.core.async.close_BANG_.call(null,inst_28688);
var inst_28690 = cljs.core.next.call(null,inst_28678);
var inst_28664 = inst_28690;
var inst_28665 = null;
var inst_28666 = (0);
var inst_28667 = (0);
var state_28723__$1 = (function (){var statearr_28743 = state_28723;
(statearr_28743[(12)] = inst_28665);

(statearr_28743[(13)] = inst_28667);

(statearr_28743[(14)] = inst_28664);

(statearr_28743[(15)] = inst_28689);

(statearr_28743[(16)] = inst_28666);

return statearr_28743;
})();
var statearr_28744_28788 = state_28723__$1;
(statearr_28744_28788[(2)] = null);

(statearr_28744_28788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (3))){
var inst_28721 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28723__$1,inst_28721);
} else {
if((state_val_28724 === (12))){
var inst_28698 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
var statearr_28745_28789 = state_28723__$1;
(statearr_28745_28789[(2)] = inst_28698);

(statearr_28745_28789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (2))){
var state_28723__$1 = state_28723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28723__$1,(4),ch);
} else {
if((state_val_28724 === (23))){
var state_28723__$1 = state_28723;
var statearr_28746_28790 = state_28723__$1;
(statearr_28746_28790[(2)] = null);

(statearr_28746_28790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (19))){
var inst_28654 = (state_28723[(8)]);
var inst_28704 = (state_28723[(11)]);
var inst_28706 = cljs.core.async.muxch_STAR_.call(null,inst_28704);
var state_28723__$1 = state_28723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28723__$1,(22),inst_28706,inst_28654);
} else {
if((state_val_28724 === (11))){
var inst_28664 = (state_28723[(14)]);
var inst_28678 = (state_28723[(10)]);
var inst_28678__$1 = cljs.core.seq.call(null,inst_28664);
var state_28723__$1 = (function (){var statearr_28747 = state_28723;
(statearr_28747[(10)] = inst_28678__$1);

return statearr_28747;
})();
if(inst_28678__$1){
var statearr_28748_28791 = state_28723__$1;
(statearr_28748_28791[(1)] = (13));

} else {
var statearr_28749_28792 = state_28723__$1;
(statearr_28749_28792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (9))){
var inst_28700 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
var statearr_28750_28793 = state_28723__$1;
(statearr_28750_28793[(2)] = inst_28700);

(statearr_28750_28793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (5))){
var inst_28661 = cljs.core.deref.call(null,mults);
var inst_28662 = cljs.core.vals.call(null,inst_28661);
var inst_28663 = cljs.core.seq.call(null,inst_28662);
var inst_28664 = inst_28663;
var inst_28665 = null;
var inst_28666 = (0);
var inst_28667 = (0);
var state_28723__$1 = (function (){var statearr_28751 = state_28723;
(statearr_28751[(12)] = inst_28665);

(statearr_28751[(13)] = inst_28667);

(statearr_28751[(14)] = inst_28664);

(statearr_28751[(16)] = inst_28666);

return statearr_28751;
})();
var statearr_28752_28794 = state_28723__$1;
(statearr_28752_28794[(2)] = null);

(statearr_28752_28794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (14))){
var state_28723__$1 = state_28723;
var statearr_28756_28795 = state_28723__$1;
(statearr_28756_28795[(2)] = null);

(statearr_28756_28795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (16))){
var inst_28678 = (state_28723[(10)]);
var inst_28682 = cljs.core.chunk_first.call(null,inst_28678);
var inst_28683 = cljs.core.chunk_rest.call(null,inst_28678);
var inst_28684 = cljs.core.count.call(null,inst_28682);
var inst_28664 = inst_28683;
var inst_28665 = inst_28682;
var inst_28666 = inst_28684;
var inst_28667 = (0);
var state_28723__$1 = (function (){var statearr_28757 = state_28723;
(statearr_28757[(12)] = inst_28665);

(statearr_28757[(13)] = inst_28667);

(statearr_28757[(14)] = inst_28664);

(statearr_28757[(16)] = inst_28666);

return statearr_28757;
})();
var statearr_28758_28796 = state_28723__$1;
(statearr_28758_28796[(2)] = null);

(statearr_28758_28796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (10))){
var inst_28665 = (state_28723[(12)]);
var inst_28667 = (state_28723[(13)]);
var inst_28664 = (state_28723[(14)]);
var inst_28666 = (state_28723[(16)]);
var inst_28672 = cljs.core._nth.call(null,inst_28665,inst_28667);
var inst_28673 = cljs.core.async.muxch_STAR_.call(null,inst_28672);
var inst_28674 = cljs.core.async.close_BANG_.call(null,inst_28673);
var inst_28675 = (inst_28667 + (1));
var tmp28753 = inst_28665;
var tmp28754 = inst_28664;
var tmp28755 = inst_28666;
var inst_28664__$1 = tmp28754;
var inst_28665__$1 = tmp28753;
var inst_28666__$1 = tmp28755;
var inst_28667__$1 = inst_28675;
var state_28723__$1 = (function (){var statearr_28759 = state_28723;
(statearr_28759[(12)] = inst_28665__$1);

(statearr_28759[(13)] = inst_28667__$1);

(statearr_28759[(14)] = inst_28664__$1);

(statearr_28759[(17)] = inst_28674);

(statearr_28759[(16)] = inst_28666__$1);

return statearr_28759;
})();
var statearr_28760_28797 = state_28723__$1;
(statearr_28760_28797[(2)] = null);

(statearr_28760_28797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (18))){
var inst_28693 = (state_28723[(2)]);
var state_28723__$1 = state_28723;
var statearr_28761_28798 = state_28723__$1;
(statearr_28761_28798[(2)] = inst_28693);

(statearr_28761_28798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28724 === (8))){
var inst_28667 = (state_28723[(13)]);
var inst_28666 = (state_28723[(16)]);
var inst_28669 = (inst_28667 < inst_28666);
var inst_28670 = inst_28669;
var state_28723__$1 = state_28723;
if(cljs.core.truth_(inst_28670)){
var statearr_28762_28799 = state_28723__$1;
(statearr_28762_28799[(1)] = (10));

} else {
var statearr_28763_28800 = state_28723__$1;
(statearr_28763_28800[(1)] = (11));

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
});})(c__21421__auto___28772,mults,ensure_mult,p))
;
return ((function (switch__21359__auto__,c__21421__auto___28772,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_28767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28767[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_28767[(1)] = (1));

return statearr_28767;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_28723){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_28723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e28768){if((e28768 instanceof Object)){
var ex__21363__auto__ = e28768;
var statearr_28769_28801 = state_28723;
(statearr_28769_28801[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28802 = state_28723;
state_28723 = G__28802;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_28723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_28723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___28772,mults,ensure_mult,p))
})();
var state__21423__auto__ = (function (){var statearr_28770 = f__21422__auto__.call(null);
(statearr_28770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___28772);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___28772,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28804 = arguments.length;
switch (G__28804) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28807 = arguments.length;
switch (G__28807) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28810 = arguments.length;
switch (G__28810) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21421__auto___28880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___28880,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___28880,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28849){
var state_val_28850 = (state_28849[(1)]);
if((state_val_28850 === (7))){
var state_28849__$1 = state_28849;
var statearr_28851_28881 = state_28849__$1;
(statearr_28851_28881[(2)] = null);

(statearr_28851_28881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (1))){
var state_28849__$1 = state_28849;
var statearr_28852_28882 = state_28849__$1;
(statearr_28852_28882[(2)] = null);

(statearr_28852_28882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (4))){
var inst_28813 = (state_28849[(7)]);
var inst_28815 = (inst_28813 < cnt);
var state_28849__$1 = state_28849;
if(cljs.core.truth_(inst_28815)){
var statearr_28853_28883 = state_28849__$1;
(statearr_28853_28883[(1)] = (6));

} else {
var statearr_28854_28884 = state_28849__$1;
(statearr_28854_28884[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (15))){
var inst_28845 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
var statearr_28855_28885 = state_28849__$1;
(statearr_28855_28885[(2)] = inst_28845);

(statearr_28855_28885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (13))){
var inst_28838 = cljs.core.async.close_BANG_.call(null,out);
var state_28849__$1 = state_28849;
var statearr_28856_28886 = state_28849__$1;
(statearr_28856_28886[(2)] = inst_28838);

(statearr_28856_28886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (6))){
var state_28849__$1 = state_28849;
var statearr_28857_28887 = state_28849__$1;
(statearr_28857_28887[(2)] = null);

(statearr_28857_28887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (3))){
var inst_28847 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28849__$1,inst_28847);
} else {
if((state_val_28850 === (12))){
var inst_28835 = (state_28849[(8)]);
var inst_28835__$1 = (state_28849[(2)]);
var inst_28836 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28835__$1);
var state_28849__$1 = (function (){var statearr_28858 = state_28849;
(statearr_28858[(8)] = inst_28835__$1);

return statearr_28858;
})();
if(cljs.core.truth_(inst_28836)){
var statearr_28859_28888 = state_28849__$1;
(statearr_28859_28888[(1)] = (13));

} else {
var statearr_28860_28889 = state_28849__$1;
(statearr_28860_28889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (2))){
var inst_28812 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28813 = (0);
var state_28849__$1 = (function (){var statearr_28861 = state_28849;
(statearr_28861[(9)] = inst_28812);

(statearr_28861[(7)] = inst_28813);

return statearr_28861;
})();
var statearr_28862_28890 = state_28849__$1;
(statearr_28862_28890[(2)] = null);

(statearr_28862_28890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (11))){
var inst_28813 = (state_28849[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28849,(10),Object,null,(9));
var inst_28822 = chs__$1.call(null,inst_28813);
var inst_28823 = done.call(null,inst_28813);
var inst_28824 = cljs.core.async.take_BANG_.call(null,inst_28822,inst_28823);
var state_28849__$1 = state_28849;
var statearr_28863_28891 = state_28849__$1;
(statearr_28863_28891[(2)] = inst_28824);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28849__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (9))){
var inst_28813 = (state_28849[(7)]);
var inst_28826 = (state_28849[(2)]);
var inst_28827 = (inst_28813 + (1));
var inst_28813__$1 = inst_28827;
var state_28849__$1 = (function (){var statearr_28864 = state_28849;
(statearr_28864[(10)] = inst_28826);

(statearr_28864[(7)] = inst_28813__$1);

return statearr_28864;
})();
var statearr_28865_28892 = state_28849__$1;
(statearr_28865_28892[(2)] = null);

(statearr_28865_28892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (5))){
var inst_28833 = (state_28849[(2)]);
var state_28849__$1 = (function (){var statearr_28866 = state_28849;
(statearr_28866[(11)] = inst_28833);

return statearr_28866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28849__$1,(12),dchan);
} else {
if((state_val_28850 === (14))){
var inst_28835 = (state_28849[(8)]);
var inst_28840 = cljs.core.apply.call(null,f,inst_28835);
var state_28849__$1 = state_28849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28849__$1,(16),out,inst_28840);
} else {
if((state_val_28850 === (16))){
var inst_28842 = (state_28849[(2)]);
var state_28849__$1 = (function (){var statearr_28867 = state_28849;
(statearr_28867[(12)] = inst_28842);

return statearr_28867;
})();
var statearr_28868_28893 = state_28849__$1;
(statearr_28868_28893[(2)] = null);

(statearr_28868_28893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (10))){
var inst_28817 = (state_28849[(2)]);
var inst_28818 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28849__$1 = (function (){var statearr_28869 = state_28849;
(statearr_28869[(13)] = inst_28817);

return statearr_28869;
})();
var statearr_28870_28894 = state_28849__$1;
(statearr_28870_28894[(2)] = inst_28818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28849__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28850 === (8))){
var inst_28831 = (state_28849[(2)]);
var state_28849__$1 = state_28849;
var statearr_28871_28895 = state_28849__$1;
(statearr_28871_28895[(2)] = inst_28831);

(statearr_28871_28895[(1)] = (5));


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
});})(c__21421__auto___28880,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21359__auto__,c__21421__auto___28880,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_28875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28875[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_28875[(1)] = (1));

return statearr_28875;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_28849){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_28849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e28876){if((e28876 instanceof Object)){
var ex__21363__auto__ = e28876;
var statearr_28877_28896 = state_28849;
(statearr_28877_28896[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28897 = state_28849;
state_28849 = G__28897;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_28849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_28849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___28880,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21423__auto__ = (function (){var statearr_28878 = f__21422__auto__.call(null);
(statearr_28878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___28880);

return statearr_28878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___28880,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28900 = arguments.length;
switch (G__28900) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21421__auto___28955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___28955,out){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___28955,out){
return (function (state_28930){
var state_val_28931 = (state_28930[(1)]);
if((state_val_28931 === (7))){
var inst_28910 = (state_28930[(7)]);
var inst_28909 = (state_28930[(8)]);
var inst_28909__$1 = (state_28930[(2)]);
var inst_28910__$1 = cljs.core.nth.call(null,inst_28909__$1,(0),null);
var inst_28911 = cljs.core.nth.call(null,inst_28909__$1,(1),null);
var inst_28912 = (inst_28910__$1 == null);
var state_28930__$1 = (function (){var statearr_28932 = state_28930;
(statearr_28932[(9)] = inst_28911);

(statearr_28932[(7)] = inst_28910__$1);

(statearr_28932[(8)] = inst_28909__$1);

return statearr_28932;
})();
if(cljs.core.truth_(inst_28912)){
var statearr_28933_28956 = state_28930__$1;
(statearr_28933_28956[(1)] = (8));

} else {
var statearr_28934_28957 = state_28930__$1;
(statearr_28934_28957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (1))){
var inst_28901 = cljs.core.vec.call(null,chs);
var inst_28902 = inst_28901;
var state_28930__$1 = (function (){var statearr_28935 = state_28930;
(statearr_28935[(10)] = inst_28902);

return statearr_28935;
})();
var statearr_28936_28958 = state_28930__$1;
(statearr_28936_28958[(2)] = null);

(statearr_28936_28958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (4))){
var inst_28902 = (state_28930[(10)]);
var state_28930__$1 = state_28930;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28930__$1,(7),inst_28902);
} else {
if((state_val_28931 === (6))){
var inst_28926 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
var statearr_28937_28959 = state_28930__$1;
(statearr_28937_28959[(2)] = inst_28926);

(statearr_28937_28959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (3))){
var inst_28928 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28930__$1,inst_28928);
} else {
if((state_val_28931 === (2))){
var inst_28902 = (state_28930[(10)]);
var inst_28904 = cljs.core.count.call(null,inst_28902);
var inst_28905 = (inst_28904 > (0));
var state_28930__$1 = state_28930;
if(cljs.core.truth_(inst_28905)){
var statearr_28939_28960 = state_28930__$1;
(statearr_28939_28960[(1)] = (4));

} else {
var statearr_28940_28961 = state_28930__$1;
(statearr_28940_28961[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (11))){
var inst_28902 = (state_28930[(10)]);
var inst_28919 = (state_28930[(2)]);
var tmp28938 = inst_28902;
var inst_28902__$1 = tmp28938;
var state_28930__$1 = (function (){var statearr_28941 = state_28930;
(statearr_28941[(11)] = inst_28919);

(statearr_28941[(10)] = inst_28902__$1);

return statearr_28941;
})();
var statearr_28942_28962 = state_28930__$1;
(statearr_28942_28962[(2)] = null);

(statearr_28942_28962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (9))){
var inst_28910 = (state_28930[(7)]);
var state_28930__$1 = state_28930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28930__$1,(11),out,inst_28910);
} else {
if((state_val_28931 === (5))){
var inst_28924 = cljs.core.async.close_BANG_.call(null,out);
var state_28930__$1 = state_28930;
var statearr_28943_28963 = state_28930__$1;
(statearr_28943_28963[(2)] = inst_28924);

(statearr_28943_28963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (10))){
var inst_28922 = (state_28930[(2)]);
var state_28930__$1 = state_28930;
var statearr_28944_28964 = state_28930__$1;
(statearr_28944_28964[(2)] = inst_28922);

(statearr_28944_28964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28931 === (8))){
var inst_28911 = (state_28930[(9)]);
var inst_28902 = (state_28930[(10)]);
var inst_28910 = (state_28930[(7)]);
var inst_28909 = (state_28930[(8)]);
var inst_28914 = (function (){var c = inst_28911;
var v = inst_28910;
var vec__28907 = inst_28909;
var cs = inst_28902;
return ((function (c,v,vec__28907,cs,inst_28911,inst_28902,inst_28910,inst_28909,state_val_28931,c__21421__auto___28955,out){
return (function (p1__28898_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28898_SHARP_);
});
;})(c,v,vec__28907,cs,inst_28911,inst_28902,inst_28910,inst_28909,state_val_28931,c__21421__auto___28955,out))
})();
var inst_28915 = cljs.core.filterv.call(null,inst_28914,inst_28902);
var inst_28902__$1 = inst_28915;
var state_28930__$1 = (function (){var statearr_28945 = state_28930;
(statearr_28945[(10)] = inst_28902__$1);

return statearr_28945;
})();
var statearr_28946_28965 = state_28930__$1;
(statearr_28946_28965[(2)] = null);

(statearr_28946_28965[(1)] = (2));


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
});})(c__21421__auto___28955,out))
;
return ((function (switch__21359__auto__,c__21421__auto___28955,out){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_28950 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28950[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_28950[(1)] = (1));

return statearr_28950;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_28930){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_28930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e28951){if((e28951 instanceof Object)){
var ex__21363__auto__ = e28951;
var statearr_28952_28966 = state_28930;
(statearr_28952_28966[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28967 = state_28930;
state_28930 = G__28967;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_28930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_28930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___28955,out))
})();
var state__21423__auto__ = (function (){var statearr_28953 = f__21422__auto__.call(null);
(statearr_28953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___28955);

return statearr_28953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___28955,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28969 = arguments.length;
switch (G__28969) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21421__auto___29017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___29017,out){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___29017,out){
return (function (state_28993){
var state_val_28994 = (state_28993[(1)]);
if((state_val_28994 === (7))){
var inst_28975 = (state_28993[(7)]);
var inst_28975__$1 = (state_28993[(2)]);
var inst_28976 = (inst_28975__$1 == null);
var inst_28977 = cljs.core.not.call(null,inst_28976);
var state_28993__$1 = (function (){var statearr_28995 = state_28993;
(statearr_28995[(7)] = inst_28975__$1);

return statearr_28995;
})();
if(inst_28977){
var statearr_28996_29018 = state_28993__$1;
(statearr_28996_29018[(1)] = (8));

} else {
var statearr_28997_29019 = state_28993__$1;
(statearr_28997_29019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (1))){
var inst_28970 = (0);
var state_28993__$1 = (function (){var statearr_28998 = state_28993;
(statearr_28998[(8)] = inst_28970);

return statearr_28998;
})();
var statearr_28999_29020 = state_28993__$1;
(statearr_28999_29020[(2)] = null);

(statearr_28999_29020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (4))){
var state_28993__$1 = state_28993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28993__$1,(7),ch);
} else {
if((state_val_28994 === (6))){
var inst_28988 = (state_28993[(2)]);
var state_28993__$1 = state_28993;
var statearr_29000_29021 = state_28993__$1;
(statearr_29000_29021[(2)] = inst_28988);

(statearr_29000_29021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (3))){
var inst_28990 = (state_28993[(2)]);
var inst_28991 = cljs.core.async.close_BANG_.call(null,out);
var state_28993__$1 = (function (){var statearr_29001 = state_28993;
(statearr_29001[(9)] = inst_28990);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28993__$1,inst_28991);
} else {
if((state_val_28994 === (2))){
var inst_28970 = (state_28993[(8)]);
var inst_28972 = (inst_28970 < n);
var state_28993__$1 = state_28993;
if(cljs.core.truth_(inst_28972)){
var statearr_29002_29022 = state_28993__$1;
(statearr_29002_29022[(1)] = (4));

} else {
var statearr_29003_29023 = state_28993__$1;
(statearr_29003_29023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (11))){
var inst_28970 = (state_28993[(8)]);
var inst_28980 = (state_28993[(2)]);
var inst_28981 = (inst_28970 + (1));
var inst_28970__$1 = inst_28981;
var state_28993__$1 = (function (){var statearr_29004 = state_28993;
(statearr_29004[(8)] = inst_28970__$1);

(statearr_29004[(10)] = inst_28980);

return statearr_29004;
})();
var statearr_29005_29024 = state_28993__$1;
(statearr_29005_29024[(2)] = null);

(statearr_29005_29024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (9))){
var state_28993__$1 = state_28993;
var statearr_29006_29025 = state_28993__$1;
(statearr_29006_29025[(2)] = null);

(statearr_29006_29025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (5))){
var state_28993__$1 = state_28993;
var statearr_29007_29026 = state_28993__$1;
(statearr_29007_29026[(2)] = null);

(statearr_29007_29026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (10))){
var inst_28985 = (state_28993[(2)]);
var state_28993__$1 = state_28993;
var statearr_29008_29027 = state_28993__$1;
(statearr_29008_29027[(2)] = inst_28985);

(statearr_29008_29027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28994 === (8))){
var inst_28975 = (state_28993[(7)]);
var state_28993__$1 = state_28993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28993__$1,(11),out,inst_28975);
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
});})(c__21421__auto___29017,out))
;
return ((function (switch__21359__auto__,c__21421__auto___29017,out){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_29012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29012[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_29012[(1)] = (1));

return statearr_29012;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_28993){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_28993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e29013){if((e29013 instanceof Object)){
var ex__21363__auto__ = e29013;
var statearr_29014_29028 = state_28993;
(statearr_29014_29028[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29029 = state_28993;
state_28993 = G__29029;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_28993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_28993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___29017,out))
})();
var state__21423__auto__ = (function (){var statearr_29015 = f__21422__auto__.call(null);
(statearr_29015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___29017);

return statearr_29015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___29017,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29037 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29037 = (function (ch,f,map_LT_,meta29038){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29038 = meta29038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29037.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29037.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29040 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29040 = (function (fn1,_,meta29038,map_LT_,f,ch,meta29041){
this.fn1 = fn1;
this._ = _;
this.meta29038 = meta29038;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29041 = meta29041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29040.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29030_SHARP_){
return f1.call(null,(((p1__29030_SHARP_ == null))?null:self__.f.call(null,p1__29030_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29042){
var self__ = this;
var _29042__$1 = this;
return self__.meta29041;
});})(___$1))
;

cljs.core.async.t29040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29042,meta29041__$1){
var self__ = this;
var _29042__$1 = this;
return (new cljs.core.async.t29040(self__.fn1,self__._,self__.meta29038,self__.map_LT_,self__.f,self__.ch,meta29041__$1));
});})(___$1))
;

cljs.core.async.t29040.cljs$lang$type = true;

cljs.core.async.t29040.cljs$lang$ctorStr = "cljs.core.async/t29040";

cljs.core.async.t29040.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t29040");
});})(___$1))
;

cljs.core.async.__GT_t29040 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29040(fn1__$1,___$2,meta29038__$1,map_LT___$1,f__$1,ch__$1,meta29041){
return (new cljs.core.async.t29040(fn1__$1,___$2,meta29038__$1,map_LT___$1,f__$1,ch__$1,meta29041));
});})(___$1))
;

}

return (new cljs.core.async.t29040(fn1,___$1,self__.meta29038,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18183__auto__ = ret;
if(cljs.core.truth_(and__18183__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18183__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29037.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29037.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29039){
var self__ = this;
var _29039__$1 = this;
return self__.meta29038;
});

cljs.core.async.t29037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29039,meta29038__$1){
var self__ = this;
var _29039__$1 = this;
return (new cljs.core.async.t29037(self__.ch,self__.f,self__.map_LT_,meta29038__$1));
});

cljs.core.async.t29037.cljs$lang$type = true;

cljs.core.async.t29037.cljs$lang$ctorStr = "cljs.core.async/t29037";

cljs.core.async.t29037.cljs$lang$ctorPrWriter = (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t29037");
});

cljs.core.async.__GT_t29037 = (function cljs$core$async$map_LT__$___GT_t29037(ch__$1,f__$1,map_LT___$1,meta29038){
return (new cljs.core.async.t29037(ch__$1,f__$1,map_LT___$1,meta29038));
});

}

return (new cljs.core.async.t29037(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29046 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29046 = (function (ch,f,map_GT_,meta29047){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29047 = meta29047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29046.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29046.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29046.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29048){
var self__ = this;
var _29048__$1 = this;
return self__.meta29047;
});

cljs.core.async.t29046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29048,meta29047__$1){
var self__ = this;
var _29048__$1 = this;
return (new cljs.core.async.t29046(self__.ch,self__.f,self__.map_GT_,meta29047__$1));
});

cljs.core.async.t29046.cljs$lang$type = true;

cljs.core.async.t29046.cljs$lang$ctorStr = "cljs.core.async/t29046";

cljs.core.async.t29046.cljs$lang$ctorPrWriter = (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t29046");
});

cljs.core.async.__GT_t29046 = (function cljs$core$async$map_GT__$___GT_t29046(ch__$1,f__$1,map_GT___$1,meta29047){
return (new cljs.core.async.t29046(ch__$1,f__$1,map_GT___$1,meta29047));
});

}

return (new cljs.core.async.t29046(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29052 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29052 = (function (ch,p,filter_GT_,meta29053){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29053 = meta29053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29052.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29052.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29052.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29052.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29052.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29052.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29052.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29054){
var self__ = this;
var _29054__$1 = this;
return self__.meta29053;
});

cljs.core.async.t29052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29054,meta29053__$1){
var self__ = this;
var _29054__$1 = this;
return (new cljs.core.async.t29052(self__.ch,self__.p,self__.filter_GT_,meta29053__$1));
});

cljs.core.async.t29052.cljs$lang$type = true;

cljs.core.async.t29052.cljs$lang$ctorStr = "cljs.core.async/t29052";

cljs.core.async.t29052.cljs$lang$ctorPrWriter = (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t29052");
});

cljs.core.async.__GT_t29052 = (function cljs$core$async$filter_GT__$___GT_t29052(ch__$1,p__$1,filter_GT___$1,meta29053){
return (new cljs.core.async.t29052(ch__$1,p__$1,filter_GT___$1,meta29053));
});

}

return (new cljs.core.async.t29052(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__29056 = arguments.length;
switch (G__29056) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21421__auto___29099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___29099,out){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___29099,out){
return (function (state_29077){
var state_val_29078 = (state_29077[(1)]);
if((state_val_29078 === (7))){
var inst_29073 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
var statearr_29079_29100 = state_29077__$1;
(statearr_29079_29100[(2)] = inst_29073);

(statearr_29079_29100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (1))){
var state_29077__$1 = state_29077;
var statearr_29080_29101 = state_29077__$1;
(statearr_29080_29101[(2)] = null);

(statearr_29080_29101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (4))){
var inst_29059 = (state_29077[(7)]);
var inst_29059__$1 = (state_29077[(2)]);
var inst_29060 = (inst_29059__$1 == null);
var state_29077__$1 = (function (){var statearr_29081 = state_29077;
(statearr_29081[(7)] = inst_29059__$1);

return statearr_29081;
})();
if(cljs.core.truth_(inst_29060)){
var statearr_29082_29102 = state_29077__$1;
(statearr_29082_29102[(1)] = (5));

} else {
var statearr_29083_29103 = state_29077__$1;
(statearr_29083_29103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (6))){
var inst_29059 = (state_29077[(7)]);
var inst_29064 = p.call(null,inst_29059);
var state_29077__$1 = state_29077;
if(cljs.core.truth_(inst_29064)){
var statearr_29084_29104 = state_29077__$1;
(statearr_29084_29104[(1)] = (8));

} else {
var statearr_29085_29105 = state_29077__$1;
(statearr_29085_29105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (3))){
var inst_29075 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29077__$1,inst_29075);
} else {
if((state_val_29078 === (2))){
var state_29077__$1 = state_29077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29077__$1,(4),ch);
} else {
if((state_val_29078 === (11))){
var inst_29067 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
var statearr_29086_29106 = state_29077__$1;
(statearr_29086_29106[(2)] = inst_29067);

(statearr_29086_29106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (9))){
var state_29077__$1 = state_29077;
var statearr_29087_29107 = state_29077__$1;
(statearr_29087_29107[(2)] = null);

(statearr_29087_29107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (5))){
var inst_29062 = cljs.core.async.close_BANG_.call(null,out);
var state_29077__$1 = state_29077;
var statearr_29088_29108 = state_29077__$1;
(statearr_29088_29108[(2)] = inst_29062);

(statearr_29088_29108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (10))){
var inst_29070 = (state_29077[(2)]);
var state_29077__$1 = (function (){var statearr_29089 = state_29077;
(statearr_29089[(8)] = inst_29070);

return statearr_29089;
})();
var statearr_29090_29109 = state_29077__$1;
(statearr_29090_29109[(2)] = null);

(statearr_29090_29109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (8))){
var inst_29059 = (state_29077[(7)]);
var state_29077__$1 = state_29077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29077__$1,(11),out,inst_29059);
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
});})(c__21421__auto___29099,out))
;
return ((function (switch__21359__auto__,c__21421__auto___29099,out){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_29094 = [null,null,null,null,null,null,null,null,null];
(statearr_29094[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_29094[(1)] = (1));

return statearr_29094;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_29077){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_29077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e29095){if((e29095 instanceof Object)){
var ex__21363__auto__ = e29095;
var statearr_29096_29110 = state_29077;
(statearr_29096_29110[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29111 = state_29077;
state_29077 = G__29111;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_29077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_29077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___29099,out))
})();
var state__21423__auto__ = (function (){var statearr_29097 = f__21422__auto__.call(null);
(statearr_29097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___29099);

return statearr_29097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___29099,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__29113 = arguments.length;
switch (G__29113) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21421__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto__){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto__){
return (function (state_29280){
var state_val_29281 = (state_29280[(1)]);
if((state_val_29281 === (7))){
var inst_29276 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29282_29323 = state_29280__$1;
(statearr_29282_29323[(2)] = inst_29276);

(statearr_29282_29323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (20))){
var inst_29246 = (state_29280[(7)]);
var inst_29257 = (state_29280[(2)]);
var inst_29258 = cljs.core.next.call(null,inst_29246);
var inst_29232 = inst_29258;
var inst_29233 = null;
var inst_29234 = (0);
var inst_29235 = (0);
var state_29280__$1 = (function (){var statearr_29283 = state_29280;
(statearr_29283[(8)] = inst_29257);

(statearr_29283[(9)] = inst_29233);

(statearr_29283[(10)] = inst_29234);

(statearr_29283[(11)] = inst_29235);

(statearr_29283[(12)] = inst_29232);

return statearr_29283;
})();
var statearr_29284_29324 = state_29280__$1;
(statearr_29284_29324[(2)] = null);

(statearr_29284_29324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (1))){
var state_29280__$1 = state_29280;
var statearr_29285_29325 = state_29280__$1;
(statearr_29285_29325[(2)] = null);

(statearr_29285_29325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (4))){
var inst_29221 = (state_29280[(13)]);
var inst_29221__$1 = (state_29280[(2)]);
var inst_29222 = (inst_29221__$1 == null);
var state_29280__$1 = (function (){var statearr_29286 = state_29280;
(statearr_29286[(13)] = inst_29221__$1);

return statearr_29286;
})();
if(cljs.core.truth_(inst_29222)){
var statearr_29287_29326 = state_29280__$1;
(statearr_29287_29326[(1)] = (5));

} else {
var statearr_29288_29327 = state_29280__$1;
(statearr_29288_29327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (15))){
var state_29280__$1 = state_29280;
var statearr_29292_29328 = state_29280__$1;
(statearr_29292_29328[(2)] = null);

(statearr_29292_29328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (21))){
var state_29280__$1 = state_29280;
var statearr_29293_29329 = state_29280__$1;
(statearr_29293_29329[(2)] = null);

(statearr_29293_29329[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (13))){
var inst_29233 = (state_29280[(9)]);
var inst_29234 = (state_29280[(10)]);
var inst_29235 = (state_29280[(11)]);
var inst_29232 = (state_29280[(12)]);
var inst_29242 = (state_29280[(2)]);
var inst_29243 = (inst_29235 + (1));
var tmp29289 = inst_29233;
var tmp29290 = inst_29234;
var tmp29291 = inst_29232;
var inst_29232__$1 = tmp29291;
var inst_29233__$1 = tmp29289;
var inst_29234__$1 = tmp29290;
var inst_29235__$1 = inst_29243;
var state_29280__$1 = (function (){var statearr_29294 = state_29280;
(statearr_29294[(9)] = inst_29233__$1);

(statearr_29294[(14)] = inst_29242);

(statearr_29294[(10)] = inst_29234__$1);

(statearr_29294[(11)] = inst_29235__$1);

(statearr_29294[(12)] = inst_29232__$1);

return statearr_29294;
})();
var statearr_29295_29330 = state_29280__$1;
(statearr_29295_29330[(2)] = null);

(statearr_29295_29330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (22))){
var state_29280__$1 = state_29280;
var statearr_29296_29331 = state_29280__$1;
(statearr_29296_29331[(2)] = null);

(statearr_29296_29331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (6))){
var inst_29221 = (state_29280[(13)]);
var inst_29230 = f.call(null,inst_29221);
var inst_29231 = cljs.core.seq.call(null,inst_29230);
var inst_29232 = inst_29231;
var inst_29233 = null;
var inst_29234 = (0);
var inst_29235 = (0);
var state_29280__$1 = (function (){var statearr_29297 = state_29280;
(statearr_29297[(9)] = inst_29233);

(statearr_29297[(10)] = inst_29234);

(statearr_29297[(11)] = inst_29235);

(statearr_29297[(12)] = inst_29232);

return statearr_29297;
})();
var statearr_29298_29332 = state_29280__$1;
(statearr_29298_29332[(2)] = null);

(statearr_29298_29332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (17))){
var inst_29246 = (state_29280[(7)]);
var inst_29250 = cljs.core.chunk_first.call(null,inst_29246);
var inst_29251 = cljs.core.chunk_rest.call(null,inst_29246);
var inst_29252 = cljs.core.count.call(null,inst_29250);
var inst_29232 = inst_29251;
var inst_29233 = inst_29250;
var inst_29234 = inst_29252;
var inst_29235 = (0);
var state_29280__$1 = (function (){var statearr_29299 = state_29280;
(statearr_29299[(9)] = inst_29233);

(statearr_29299[(10)] = inst_29234);

(statearr_29299[(11)] = inst_29235);

(statearr_29299[(12)] = inst_29232);

return statearr_29299;
})();
var statearr_29300_29333 = state_29280__$1;
(statearr_29300_29333[(2)] = null);

(statearr_29300_29333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (3))){
var inst_29278 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29280__$1,inst_29278);
} else {
if((state_val_29281 === (12))){
var inst_29266 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29301_29334 = state_29280__$1;
(statearr_29301_29334[(2)] = inst_29266);

(statearr_29301_29334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (2))){
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(4),in$);
} else {
if((state_val_29281 === (23))){
var inst_29274 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29302_29335 = state_29280__$1;
(statearr_29302_29335[(2)] = inst_29274);

(statearr_29302_29335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (19))){
var inst_29261 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29303_29336 = state_29280__$1;
(statearr_29303_29336[(2)] = inst_29261);

(statearr_29303_29336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (11))){
var inst_29246 = (state_29280[(7)]);
var inst_29232 = (state_29280[(12)]);
var inst_29246__$1 = cljs.core.seq.call(null,inst_29232);
var state_29280__$1 = (function (){var statearr_29304 = state_29280;
(statearr_29304[(7)] = inst_29246__$1);

return statearr_29304;
})();
if(inst_29246__$1){
var statearr_29305_29337 = state_29280__$1;
(statearr_29305_29337[(1)] = (14));

} else {
var statearr_29306_29338 = state_29280__$1;
(statearr_29306_29338[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (9))){
var inst_29268 = (state_29280[(2)]);
var inst_29269 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29280__$1 = (function (){var statearr_29307 = state_29280;
(statearr_29307[(15)] = inst_29268);

return statearr_29307;
})();
if(cljs.core.truth_(inst_29269)){
var statearr_29308_29339 = state_29280__$1;
(statearr_29308_29339[(1)] = (21));

} else {
var statearr_29309_29340 = state_29280__$1;
(statearr_29309_29340[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (5))){
var inst_29224 = cljs.core.async.close_BANG_.call(null,out);
var state_29280__$1 = state_29280;
var statearr_29310_29341 = state_29280__$1;
(statearr_29310_29341[(2)] = inst_29224);

(statearr_29310_29341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (14))){
var inst_29246 = (state_29280[(7)]);
var inst_29248 = cljs.core.chunked_seq_QMARK_.call(null,inst_29246);
var state_29280__$1 = state_29280;
if(inst_29248){
var statearr_29311_29342 = state_29280__$1;
(statearr_29311_29342[(1)] = (17));

} else {
var statearr_29312_29343 = state_29280__$1;
(statearr_29312_29343[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (16))){
var inst_29264 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29313_29344 = state_29280__$1;
(statearr_29313_29344[(2)] = inst_29264);

(statearr_29313_29344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (10))){
var inst_29233 = (state_29280[(9)]);
var inst_29235 = (state_29280[(11)]);
var inst_29240 = cljs.core._nth.call(null,inst_29233,inst_29235);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29280__$1,(13),out,inst_29240);
} else {
if((state_val_29281 === (18))){
var inst_29246 = (state_29280[(7)]);
var inst_29255 = cljs.core.first.call(null,inst_29246);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29280__$1,(20),out,inst_29255);
} else {
if((state_val_29281 === (8))){
var inst_29234 = (state_29280[(10)]);
var inst_29235 = (state_29280[(11)]);
var inst_29237 = (inst_29235 < inst_29234);
var inst_29238 = inst_29237;
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29238)){
var statearr_29314_29345 = state_29280__$1;
(statearr_29314_29345[(1)] = (10));

} else {
var statearr_29315_29346 = state_29280__$1;
(statearr_29315_29346[(1)] = (11));

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
});})(c__21421__auto__))
;
return ((function (switch__21359__auto__,c__21421__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21360__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21360__auto____0 = (function (){
var statearr_29319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29319[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21360__auto__);

(statearr_29319[(1)] = (1));

return statearr_29319;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21360__auto____1 = (function (state_29280){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_29280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e29320){if((e29320 instanceof Object)){
var ex__21363__auto__ = e29320;
var statearr_29321_29347 = state_29280;
(statearr_29321_29347[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29348 = state_29280;
state_29280 = G__29348;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21360__auto__ = function(state_29280){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21360__auto____1.call(this,state_29280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21360__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21360__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto__))
})();
var state__21423__auto__ = (function (){var statearr_29322 = f__21422__auto__.call(null);
(statearr_29322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto__);

return statearr_29322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto__))
);

return c__21421__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__29350 = arguments.length;
switch (G__29350) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__29353 = arguments.length;
switch (G__29353) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__29356 = arguments.length;
switch (G__29356) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21421__auto___29406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___29406,out){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___29406,out){
return (function (state_29380){
var state_val_29381 = (state_29380[(1)]);
if((state_val_29381 === (7))){
var inst_29375 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29382_29407 = state_29380__$1;
(statearr_29382_29407[(2)] = inst_29375);

(statearr_29382_29407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (1))){
var inst_29357 = null;
var state_29380__$1 = (function (){var statearr_29383 = state_29380;
(statearr_29383[(7)] = inst_29357);

return statearr_29383;
})();
var statearr_29384_29408 = state_29380__$1;
(statearr_29384_29408[(2)] = null);

(statearr_29384_29408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (4))){
var inst_29360 = (state_29380[(8)]);
var inst_29360__$1 = (state_29380[(2)]);
var inst_29361 = (inst_29360__$1 == null);
var inst_29362 = cljs.core.not.call(null,inst_29361);
var state_29380__$1 = (function (){var statearr_29385 = state_29380;
(statearr_29385[(8)] = inst_29360__$1);

return statearr_29385;
})();
if(inst_29362){
var statearr_29386_29409 = state_29380__$1;
(statearr_29386_29409[(1)] = (5));

} else {
var statearr_29387_29410 = state_29380__$1;
(statearr_29387_29410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (6))){
var state_29380__$1 = state_29380;
var statearr_29388_29411 = state_29380__$1;
(statearr_29388_29411[(2)] = null);

(statearr_29388_29411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (3))){
var inst_29377 = (state_29380[(2)]);
var inst_29378 = cljs.core.async.close_BANG_.call(null,out);
var state_29380__$1 = (function (){var statearr_29389 = state_29380;
(statearr_29389[(9)] = inst_29377);

return statearr_29389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29380__$1,inst_29378);
} else {
if((state_val_29381 === (2))){
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29380__$1,(4),ch);
} else {
if((state_val_29381 === (11))){
var inst_29360 = (state_29380[(8)]);
var inst_29369 = (state_29380[(2)]);
var inst_29357 = inst_29360;
var state_29380__$1 = (function (){var statearr_29390 = state_29380;
(statearr_29390[(7)] = inst_29357);

(statearr_29390[(10)] = inst_29369);

return statearr_29390;
})();
var statearr_29391_29412 = state_29380__$1;
(statearr_29391_29412[(2)] = null);

(statearr_29391_29412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (9))){
var inst_29360 = (state_29380[(8)]);
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29380__$1,(11),out,inst_29360);
} else {
if((state_val_29381 === (5))){
var inst_29357 = (state_29380[(7)]);
var inst_29360 = (state_29380[(8)]);
var inst_29364 = cljs.core._EQ_.call(null,inst_29360,inst_29357);
var state_29380__$1 = state_29380;
if(inst_29364){
var statearr_29393_29413 = state_29380__$1;
(statearr_29393_29413[(1)] = (8));

} else {
var statearr_29394_29414 = state_29380__$1;
(statearr_29394_29414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (10))){
var inst_29372 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29395_29415 = state_29380__$1;
(statearr_29395_29415[(2)] = inst_29372);

(statearr_29395_29415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (8))){
var inst_29357 = (state_29380[(7)]);
var tmp29392 = inst_29357;
var inst_29357__$1 = tmp29392;
var state_29380__$1 = (function (){var statearr_29396 = state_29380;
(statearr_29396[(7)] = inst_29357__$1);

return statearr_29396;
})();
var statearr_29397_29416 = state_29380__$1;
(statearr_29397_29416[(2)] = null);

(statearr_29397_29416[(1)] = (2));


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
});})(c__21421__auto___29406,out))
;
return ((function (switch__21359__auto__,c__21421__auto___29406,out){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_29401 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29401[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_29401[(1)] = (1));

return statearr_29401;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_29380){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_29380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e29402){if((e29402 instanceof Object)){
var ex__21363__auto__ = e29402;
var statearr_29403_29417 = state_29380;
(statearr_29403_29417[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29418 = state_29380;
state_29380 = G__29418;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_29380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_29380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___29406,out))
})();
var state__21423__auto__ = (function (){var statearr_29404 = f__21422__auto__.call(null);
(statearr_29404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___29406);

return statearr_29404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___29406,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__29420 = arguments.length;
switch (G__29420) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21421__auto___29489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___29489,out){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___29489,out){
return (function (state_29458){
var state_val_29459 = (state_29458[(1)]);
if((state_val_29459 === (7))){
var inst_29454 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
var statearr_29460_29490 = state_29458__$1;
(statearr_29460_29490[(2)] = inst_29454);

(statearr_29460_29490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (1))){
var inst_29421 = (new Array(n));
var inst_29422 = inst_29421;
var inst_29423 = (0);
var state_29458__$1 = (function (){var statearr_29461 = state_29458;
(statearr_29461[(7)] = inst_29422);

(statearr_29461[(8)] = inst_29423);

return statearr_29461;
})();
var statearr_29462_29491 = state_29458__$1;
(statearr_29462_29491[(2)] = null);

(statearr_29462_29491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (4))){
var inst_29426 = (state_29458[(9)]);
var inst_29426__$1 = (state_29458[(2)]);
var inst_29427 = (inst_29426__$1 == null);
var inst_29428 = cljs.core.not.call(null,inst_29427);
var state_29458__$1 = (function (){var statearr_29463 = state_29458;
(statearr_29463[(9)] = inst_29426__$1);

return statearr_29463;
})();
if(inst_29428){
var statearr_29464_29492 = state_29458__$1;
(statearr_29464_29492[(1)] = (5));

} else {
var statearr_29465_29493 = state_29458__$1;
(statearr_29465_29493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (15))){
var inst_29448 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
var statearr_29466_29494 = state_29458__$1;
(statearr_29466_29494[(2)] = inst_29448);

(statearr_29466_29494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (13))){
var state_29458__$1 = state_29458;
var statearr_29467_29495 = state_29458__$1;
(statearr_29467_29495[(2)] = null);

(statearr_29467_29495[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (6))){
var inst_29423 = (state_29458[(8)]);
var inst_29444 = (inst_29423 > (0));
var state_29458__$1 = state_29458;
if(cljs.core.truth_(inst_29444)){
var statearr_29468_29496 = state_29458__$1;
(statearr_29468_29496[(1)] = (12));

} else {
var statearr_29469_29497 = state_29458__$1;
(statearr_29469_29497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (3))){
var inst_29456 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29458__$1,inst_29456);
} else {
if((state_val_29459 === (12))){
var inst_29422 = (state_29458[(7)]);
var inst_29446 = cljs.core.vec.call(null,inst_29422);
var state_29458__$1 = state_29458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29458__$1,(15),out,inst_29446);
} else {
if((state_val_29459 === (2))){
var state_29458__$1 = state_29458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29458__$1,(4),ch);
} else {
if((state_val_29459 === (11))){
var inst_29438 = (state_29458[(2)]);
var inst_29439 = (new Array(n));
var inst_29422 = inst_29439;
var inst_29423 = (0);
var state_29458__$1 = (function (){var statearr_29470 = state_29458;
(statearr_29470[(10)] = inst_29438);

(statearr_29470[(7)] = inst_29422);

(statearr_29470[(8)] = inst_29423);

return statearr_29470;
})();
var statearr_29471_29498 = state_29458__$1;
(statearr_29471_29498[(2)] = null);

(statearr_29471_29498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (9))){
var inst_29422 = (state_29458[(7)]);
var inst_29436 = cljs.core.vec.call(null,inst_29422);
var state_29458__$1 = state_29458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29458__$1,(11),out,inst_29436);
} else {
if((state_val_29459 === (5))){
var inst_29426 = (state_29458[(9)]);
var inst_29431 = (state_29458[(11)]);
var inst_29422 = (state_29458[(7)]);
var inst_29423 = (state_29458[(8)]);
var inst_29430 = (inst_29422[inst_29423] = inst_29426);
var inst_29431__$1 = (inst_29423 + (1));
var inst_29432 = (inst_29431__$1 < n);
var state_29458__$1 = (function (){var statearr_29472 = state_29458;
(statearr_29472[(11)] = inst_29431__$1);

(statearr_29472[(12)] = inst_29430);

return statearr_29472;
})();
if(cljs.core.truth_(inst_29432)){
var statearr_29473_29499 = state_29458__$1;
(statearr_29473_29499[(1)] = (8));

} else {
var statearr_29474_29500 = state_29458__$1;
(statearr_29474_29500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (14))){
var inst_29451 = (state_29458[(2)]);
var inst_29452 = cljs.core.async.close_BANG_.call(null,out);
var state_29458__$1 = (function (){var statearr_29476 = state_29458;
(statearr_29476[(13)] = inst_29451);

return statearr_29476;
})();
var statearr_29477_29501 = state_29458__$1;
(statearr_29477_29501[(2)] = inst_29452);

(statearr_29477_29501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (10))){
var inst_29442 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
var statearr_29478_29502 = state_29458__$1;
(statearr_29478_29502[(2)] = inst_29442);

(statearr_29478_29502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (8))){
var inst_29431 = (state_29458[(11)]);
var inst_29422 = (state_29458[(7)]);
var tmp29475 = inst_29422;
var inst_29422__$1 = tmp29475;
var inst_29423 = inst_29431;
var state_29458__$1 = (function (){var statearr_29479 = state_29458;
(statearr_29479[(7)] = inst_29422__$1);

(statearr_29479[(8)] = inst_29423);

return statearr_29479;
})();
var statearr_29480_29503 = state_29458__$1;
(statearr_29480_29503[(2)] = null);

(statearr_29480_29503[(1)] = (2));


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
});})(c__21421__auto___29489,out))
;
return ((function (switch__21359__auto__,c__21421__auto___29489,out){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_29484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29484[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_29484[(1)] = (1));

return statearr_29484;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_29458){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_29458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e29485){if((e29485 instanceof Object)){
var ex__21363__auto__ = e29485;
var statearr_29486_29504 = state_29458;
(statearr_29486_29504[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29505 = state_29458;
state_29458 = G__29505;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_29458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_29458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___29489,out))
})();
var state__21423__auto__ = (function (){var statearr_29487 = f__21422__auto__.call(null);
(statearr_29487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___29489);

return statearr_29487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___29489,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__29507 = arguments.length;
switch (G__29507) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21421__auto___29580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21421__auto___29580,out){
return (function (){
var f__21422__auto__ = (function (){var switch__21359__auto__ = ((function (c__21421__auto___29580,out){
return (function (state_29549){
var state_val_29550 = (state_29549[(1)]);
if((state_val_29550 === (7))){
var inst_29545 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29551_29581 = state_29549__$1;
(statearr_29551_29581[(2)] = inst_29545);

(statearr_29551_29581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (1))){
var inst_29508 = [];
var inst_29509 = inst_29508;
var inst_29510 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29549__$1 = (function (){var statearr_29552 = state_29549;
(statearr_29552[(7)] = inst_29509);

(statearr_29552[(8)] = inst_29510);

return statearr_29552;
})();
var statearr_29553_29582 = state_29549__$1;
(statearr_29553_29582[(2)] = null);

(statearr_29553_29582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (4))){
var inst_29513 = (state_29549[(9)]);
var inst_29513__$1 = (state_29549[(2)]);
var inst_29514 = (inst_29513__$1 == null);
var inst_29515 = cljs.core.not.call(null,inst_29514);
var state_29549__$1 = (function (){var statearr_29554 = state_29549;
(statearr_29554[(9)] = inst_29513__$1);

return statearr_29554;
})();
if(inst_29515){
var statearr_29555_29583 = state_29549__$1;
(statearr_29555_29583[(1)] = (5));

} else {
var statearr_29556_29584 = state_29549__$1;
(statearr_29556_29584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (15))){
var inst_29539 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29557_29585 = state_29549__$1;
(statearr_29557_29585[(2)] = inst_29539);

(statearr_29557_29585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (13))){
var state_29549__$1 = state_29549;
var statearr_29558_29586 = state_29549__$1;
(statearr_29558_29586[(2)] = null);

(statearr_29558_29586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (6))){
var inst_29509 = (state_29549[(7)]);
var inst_29534 = inst_29509.length;
var inst_29535 = (inst_29534 > (0));
var state_29549__$1 = state_29549;
if(cljs.core.truth_(inst_29535)){
var statearr_29559_29587 = state_29549__$1;
(statearr_29559_29587[(1)] = (12));

} else {
var statearr_29560_29588 = state_29549__$1;
(statearr_29560_29588[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (3))){
var inst_29547 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29549__$1,inst_29547);
} else {
if((state_val_29550 === (12))){
var inst_29509 = (state_29549[(7)]);
var inst_29537 = cljs.core.vec.call(null,inst_29509);
var state_29549__$1 = state_29549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29549__$1,(15),out,inst_29537);
} else {
if((state_val_29550 === (2))){
var state_29549__$1 = state_29549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29549__$1,(4),ch);
} else {
if((state_val_29550 === (11))){
var inst_29513 = (state_29549[(9)]);
var inst_29517 = (state_29549[(10)]);
var inst_29527 = (state_29549[(2)]);
var inst_29528 = [];
var inst_29529 = inst_29528.push(inst_29513);
var inst_29509 = inst_29528;
var inst_29510 = inst_29517;
var state_29549__$1 = (function (){var statearr_29561 = state_29549;
(statearr_29561[(11)] = inst_29529);

(statearr_29561[(7)] = inst_29509);

(statearr_29561[(12)] = inst_29527);

(statearr_29561[(8)] = inst_29510);

return statearr_29561;
})();
var statearr_29562_29589 = state_29549__$1;
(statearr_29562_29589[(2)] = null);

(statearr_29562_29589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (9))){
var inst_29509 = (state_29549[(7)]);
var inst_29525 = cljs.core.vec.call(null,inst_29509);
var state_29549__$1 = state_29549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29549__$1,(11),out,inst_29525);
} else {
if((state_val_29550 === (5))){
var inst_29513 = (state_29549[(9)]);
var inst_29517 = (state_29549[(10)]);
var inst_29510 = (state_29549[(8)]);
var inst_29517__$1 = f.call(null,inst_29513);
var inst_29518 = cljs.core._EQ_.call(null,inst_29517__$1,inst_29510);
var inst_29519 = cljs.core.keyword_identical_QMARK_.call(null,inst_29510,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29520 = (inst_29518) || (inst_29519);
var state_29549__$1 = (function (){var statearr_29563 = state_29549;
(statearr_29563[(10)] = inst_29517__$1);

return statearr_29563;
})();
if(cljs.core.truth_(inst_29520)){
var statearr_29564_29590 = state_29549__$1;
(statearr_29564_29590[(1)] = (8));

} else {
var statearr_29565_29591 = state_29549__$1;
(statearr_29565_29591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (14))){
var inst_29542 = (state_29549[(2)]);
var inst_29543 = cljs.core.async.close_BANG_.call(null,out);
var state_29549__$1 = (function (){var statearr_29567 = state_29549;
(statearr_29567[(13)] = inst_29542);

return statearr_29567;
})();
var statearr_29568_29592 = state_29549__$1;
(statearr_29568_29592[(2)] = inst_29543);

(statearr_29568_29592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (10))){
var inst_29532 = (state_29549[(2)]);
var state_29549__$1 = state_29549;
var statearr_29569_29593 = state_29549__$1;
(statearr_29569_29593[(2)] = inst_29532);

(statearr_29569_29593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29550 === (8))){
var inst_29513 = (state_29549[(9)]);
var inst_29509 = (state_29549[(7)]);
var inst_29517 = (state_29549[(10)]);
var inst_29522 = inst_29509.push(inst_29513);
var tmp29566 = inst_29509;
var inst_29509__$1 = tmp29566;
var inst_29510 = inst_29517;
var state_29549__$1 = (function (){var statearr_29570 = state_29549;
(statearr_29570[(14)] = inst_29522);

(statearr_29570[(7)] = inst_29509__$1);

(statearr_29570[(8)] = inst_29510);

return statearr_29570;
})();
var statearr_29571_29594 = state_29549__$1;
(statearr_29571_29594[(2)] = null);

(statearr_29571_29594[(1)] = (2));


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
});})(c__21421__auto___29580,out))
;
return ((function (switch__21359__auto__,c__21421__auto___29580,out){
return (function() {
var cljs$core$async$state_machine__21360__auto__ = null;
var cljs$core$async$state_machine__21360__auto____0 = (function (){
var statearr_29575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29575[(0)] = cljs$core$async$state_machine__21360__auto__);

(statearr_29575[(1)] = (1));

return statearr_29575;
});
var cljs$core$async$state_machine__21360__auto____1 = (function (state_29549){
while(true){
var ret_value__21361__auto__ = (function (){try{while(true){
var result__21362__auto__ = switch__21359__auto__.call(null,state_29549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21362__auto__;
}
break;
}
}catch (e29576){if((e29576 instanceof Object)){
var ex__21363__auto__ = e29576;
var statearr_29577_29595 = state_29549;
(statearr_29577_29595[(5)] = ex__21363__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29596 = state_29549;
state_29549 = G__29596;
continue;
} else {
return ret_value__21361__auto__;
}
break;
}
});
cljs$core$async$state_machine__21360__auto__ = function(state_29549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21360__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21360__auto____1.call(this,state_29549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21360__auto____0;
cljs$core$async$state_machine__21360__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21360__auto____1;
return cljs$core$async$state_machine__21360__auto__;
})()
;})(switch__21359__auto__,c__21421__auto___29580,out))
})();
var state__21423__auto__ = (function (){var statearr_29578 = f__21422__auto__.call(null);
(statearr_29578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21421__auto___29580);

return statearr_29578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21423__auto__);
});})(c__21421__auto___29580,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1433624460957