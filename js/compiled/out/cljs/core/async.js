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
if(typeof cljs.core.async.t27124 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27124 = (function (f,fn_handler,meta27125){
this.f = f;
this.fn_handler = fn_handler;
this.meta27125 = meta27125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27124.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27126){
var self__ = this;
var _27126__$1 = this;
return self__.meta27125;
});

cljs.core.async.t27124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27126,meta27125__$1){
var self__ = this;
var _27126__$1 = this;
return (new cljs.core.async.t27124(self__.f,self__.fn_handler,meta27125__$1));
});

cljs.core.async.t27124.cljs$lang$type = true;

cljs.core.async.t27124.cljs$lang$ctorStr = "cljs.core.async/t27124";

cljs.core.async.t27124.cljs$lang$ctorPrWriter = (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t27124");
});

cljs.core.async.__GT_t27124 = (function cljs$core$async$fn_handler_$___GT_t27124(f__$1,fn_handler__$1,meta27125){
return (new cljs.core.async.t27124(f__$1,fn_handler__$1,meta27125));
});

}

return (new cljs.core.async.t27124(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27128 = buff;
if(G__27128){
var bit__18869__auto__ = null;
if(cljs.core.truth_((function (){var or__18195__auto__ = bit__18869__auto__;
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
return G__27128.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27128.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27128);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27128);
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
var G__27130 = arguments.length;
switch (G__27130) {
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
var G__27133 = arguments.length;
switch (G__27133) {
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
var val_27135 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27135);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27135,ret){
return (function (){
return fn1.call(null,val_27135);
});})(val_27135,ret))
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
var G__27137 = arguments.length;
switch (G__27137) {
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
var n__19080__auto___27139 = n;
var x_27140 = (0);
while(true){
if((x_27140 < n__19080__auto___27139)){
(a[x_27140] = (0));

var G__27141 = (x_27140 + (1));
x_27140 = G__27141;
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

var G__27142 = (i + (1));
i = G__27142;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27146 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27146 = (function (flag,alt_flag,meta27147){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27147 = meta27147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27146.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27148){
var self__ = this;
var _27148__$1 = this;
return self__.meta27147;
});})(flag))
;

cljs.core.async.t27146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27148,meta27147__$1){
var self__ = this;
var _27148__$1 = this;
return (new cljs.core.async.t27146(self__.flag,self__.alt_flag,meta27147__$1));
});})(flag))
;

cljs.core.async.t27146.cljs$lang$type = true;

cljs.core.async.t27146.cljs$lang$ctorStr = "cljs.core.async/t27146";

cljs.core.async.t27146.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t27146");
});})(flag))
;

cljs.core.async.__GT_t27146 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27146(flag__$1,alt_flag__$1,meta27147){
return (new cljs.core.async.t27146(flag__$1,alt_flag__$1,meta27147));
});})(flag))
;

}

return (new cljs.core.async.t27146(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27152 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27152 = (function (cb,flag,alt_handler,meta27153){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27153 = meta27153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27152.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27154){
var self__ = this;
var _27154__$1 = this;
return self__.meta27153;
});

cljs.core.async.t27152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27154,meta27153__$1){
var self__ = this;
var _27154__$1 = this;
return (new cljs.core.async.t27152(self__.cb,self__.flag,self__.alt_handler,meta27153__$1));
});

cljs.core.async.t27152.cljs$lang$type = true;

cljs.core.async.t27152.cljs$lang$ctorStr = "cljs.core.async/t27152";

cljs.core.async.t27152.cljs$lang$ctorPrWriter = (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t27152");
});

cljs.core.async.__GT_t27152 = (function cljs$core$async$alt_handler_$___GT_t27152(cb__$1,flag__$1,alt_handler__$1,meta27153){
return (new cljs.core.async.t27152(cb__$1,flag__$1,alt_handler__$1,meta27153));
});

}

return (new cljs.core.async.t27152(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27155_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27155_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27156_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27156_SHARP_,port], null));
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
var G__27157 = (i + (1));
i = G__27157;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27160){
var map__27161 = p__27160;
var map__27161__$1 = ((cljs.core.seq_QMARK_.call(null,map__27161))?cljs.core.apply.call(null,cljs.core.hash_map,map__27161):map__27161);
var opts = map__27161__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27158){
var G__27159 = cljs.core.first.call(null,seq27158);
var seq27158__$1 = cljs.core.next.call(null,seq27158);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27159,seq27158__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__27163 = arguments.length;
switch (G__27163) {
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
var c__21439__auto___27212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___27212){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___27212){
return (function (state_27187){
var state_val_27188 = (state_27187[(1)]);
if((state_val_27188 === (7))){
var inst_27183 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27189_27213 = state_27187__$1;
(statearr_27189_27213[(2)] = inst_27183);

(statearr_27189_27213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (1))){
var state_27187__$1 = state_27187;
var statearr_27190_27214 = state_27187__$1;
(statearr_27190_27214[(2)] = null);

(statearr_27190_27214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (4))){
var inst_27166 = (state_27187[(7)]);
var inst_27166__$1 = (state_27187[(2)]);
var inst_27167 = (inst_27166__$1 == null);
var state_27187__$1 = (function (){var statearr_27191 = state_27187;
(statearr_27191[(7)] = inst_27166__$1);

return statearr_27191;
})();
if(cljs.core.truth_(inst_27167)){
var statearr_27192_27215 = state_27187__$1;
(statearr_27192_27215[(1)] = (5));

} else {
var statearr_27193_27216 = state_27187__$1;
(statearr_27193_27216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (13))){
var state_27187__$1 = state_27187;
var statearr_27194_27217 = state_27187__$1;
(statearr_27194_27217[(2)] = null);

(statearr_27194_27217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (6))){
var inst_27166 = (state_27187[(7)]);
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27187__$1,(11),to,inst_27166);
} else {
if((state_val_27188 === (3))){
var inst_27185 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27187__$1,inst_27185);
} else {
if((state_val_27188 === (12))){
var state_27187__$1 = state_27187;
var statearr_27195_27218 = state_27187__$1;
(statearr_27195_27218[(2)] = null);

(statearr_27195_27218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (2))){
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27187__$1,(4),from);
} else {
if((state_val_27188 === (11))){
var inst_27176 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
if(cljs.core.truth_(inst_27176)){
var statearr_27196_27219 = state_27187__$1;
(statearr_27196_27219[(1)] = (12));

} else {
var statearr_27197_27220 = state_27187__$1;
(statearr_27197_27220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (9))){
var state_27187__$1 = state_27187;
var statearr_27198_27221 = state_27187__$1;
(statearr_27198_27221[(2)] = null);

(statearr_27198_27221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (5))){
var state_27187__$1 = state_27187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27199_27222 = state_27187__$1;
(statearr_27199_27222[(1)] = (8));

} else {
var statearr_27200_27223 = state_27187__$1;
(statearr_27200_27223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (14))){
var inst_27181 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27201_27224 = state_27187__$1;
(statearr_27201_27224[(2)] = inst_27181);

(statearr_27201_27224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (10))){
var inst_27173 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27202_27225 = state_27187__$1;
(statearr_27202_27225[(2)] = inst_27173);

(statearr_27202_27225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (8))){
var inst_27170 = cljs.core.async.close_BANG_.call(null,to);
var state_27187__$1 = state_27187;
var statearr_27203_27226 = state_27187__$1;
(statearr_27203_27226[(2)] = inst_27170);

(statearr_27203_27226[(1)] = (10));


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
});})(c__21439__auto___27212))
;
return ((function (switch__21377__auto__,c__21439__auto___27212){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_27207 = [null,null,null,null,null,null,null,null];
(statearr_27207[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_27207[(1)] = (1));

return statearr_27207;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_27187){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_27187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e27208){if((e27208 instanceof Object)){
var ex__21381__auto__ = e27208;
var statearr_27209_27227 = state_27187;
(statearr_27209_27227[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27228 = state_27187;
state_27187 = G__27228;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_27187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_27187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___27212))
})();
var state__21441__auto__ = (function (){var statearr_27210 = f__21440__auto__.call(null);
(statearr_27210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___27212);

return statearr_27210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___27212))
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
return (function (p__27412){
var vec__27413 = p__27412;
var v = cljs.core.nth.call(null,vec__27413,(0),null);
var p = cljs.core.nth.call(null,vec__27413,(1),null);
var job = vec__27413;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21439__auto___27595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___27595,res,vec__27413,v,p,job,jobs,results){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___27595,res,vec__27413,v,p,job,jobs,results){
return (function (state_27418){
var state_val_27419 = (state_27418[(1)]);
if((state_val_27419 === (2))){
var inst_27415 = (state_27418[(2)]);
var inst_27416 = cljs.core.async.close_BANG_.call(null,res);
var state_27418__$1 = (function (){var statearr_27420 = state_27418;
(statearr_27420[(7)] = inst_27415);

return statearr_27420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27418__$1,inst_27416);
} else {
if((state_val_27419 === (1))){
var state_27418__$1 = state_27418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27418__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21439__auto___27595,res,vec__27413,v,p,job,jobs,results))
;
return ((function (switch__21377__auto__,c__21439__auto___27595,res,vec__27413,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0 = (function (){
var statearr_27424 = [null,null,null,null,null,null,null,null];
(statearr_27424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__);

(statearr_27424[(1)] = (1));

return statearr_27424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1 = (function (state_27418){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_27418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e27425){if((e27425 instanceof Object)){
var ex__21381__auto__ = e27425;
var statearr_27426_27596 = state_27418;
(statearr_27426_27596[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27597 = state_27418;
state_27418 = G__27597;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__ = function(state_27418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1.call(this,state_27418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___27595,res,vec__27413,v,p,job,jobs,results))
})();
var state__21441__auto__ = (function (){var statearr_27427 = f__21440__auto__.call(null);
(statearr_27427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___27595);

return statearr_27427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___27595,res,vec__27413,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27428){
var vec__27429 = p__27428;
var v = cljs.core.nth.call(null,vec__27429,(0),null);
var p = cljs.core.nth.call(null,vec__27429,(1),null);
var job = vec__27429;
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
var n__19080__auto___27598 = n;
var __27599 = (0);
while(true){
if((__27599 < n__19080__auto___27598)){
var G__27430_27600 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27430_27600) {
case "async":
var c__21439__auto___27602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27599,c__21439__auto___27602,G__27430_27600,n__19080__auto___27598,jobs,results,process,async){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (__27599,c__21439__auto___27602,G__27430_27600,n__19080__auto___27598,jobs,results,process,async){
return (function (state_27443){
var state_val_27444 = (state_27443[(1)]);
if((state_val_27444 === (7))){
var inst_27439 = (state_27443[(2)]);
var state_27443__$1 = state_27443;
var statearr_27445_27603 = state_27443__$1;
(statearr_27445_27603[(2)] = inst_27439);

(statearr_27445_27603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (6))){
var state_27443__$1 = state_27443;
var statearr_27446_27604 = state_27443__$1;
(statearr_27446_27604[(2)] = null);

(statearr_27446_27604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (5))){
var state_27443__$1 = state_27443;
var statearr_27447_27605 = state_27443__$1;
(statearr_27447_27605[(2)] = null);

(statearr_27447_27605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (4))){
var inst_27433 = (state_27443[(2)]);
var inst_27434 = async.call(null,inst_27433);
var state_27443__$1 = state_27443;
if(cljs.core.truth_(inst_27434)){
var statearr_27448_27606 = state_27443__$1;
(statearr_27448_27606[(1)] = (5));

} else {
var statearr_27449_27607 = state_27443__$1;
(statearr_27449_27607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (3))){
var inst_27441 = (state_27443[(2)]);
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27443__$1,inst_27441);
} else {
if((state_val_27444 === (2))){
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27443__$1,(4),jobs);
} else {
if((state_val_27444 === (1))){
var state_27443__$1 = state_27443;
var statearr_27450_27608 = state_27443__$1;
(statearr_27450_27608[(2)] = null);

(statearr_27450_27608[(1)] = (2));


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
});})(__27599,c__21439__auto___27602,G__27430_27600,n__19080__auto___27598,jobs,results,process,async))
;
return ((function (__27599,switch__21377__auto__,c__21439__auto___27602,G__27430_27600,n__19080__auto___27598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0 = (function (){
var statearr_27454 = [null,null,null,null,null,null,null];
(statearr_27454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__);

(statearr_27454[(1)] = (1));

return statearr_27454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1 = (function (state_27443){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_27443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e27455){if((e27455 instanceof Object)){
var ex__21381__auto__ = e27455;
var statearr_27456_27609 = state_27443;
(statearr_27456_27609[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27610 = state_27443;
state_27443 = G__27610;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__ = function(state_27443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1.call(this,state_27443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__;
})()
;})(__27599,switch__21377__auto__,c__21439__auto___27602,G__27430_27600,n__19080__auto___27598,jobs,results,process,async))
})();
var state__21441__auto__ = (function (){var statearr_27457 = f__21440__auto__.call(null);
(statearr_27457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___27602);

return statearr_27457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(__27599,c__21439__auto___27602,G__27430_27600,n__19080__auto___27598,jobs,results,process,async))
);


break;
case "compute":
var c__21439__auto___27611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27599,c__21439__auto___27611,G__27430_27600,n__19080__auto___27598,jobs,results,process,async){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (__27599,c__21439__auto___27611,G__27430_27600,n__19080__auto___27598,jobs,results,process,async){
return (function (state_27470){
var state_val_27471 = (state_27470[(1)]);
if((state_val_27471 === (7))){
var inst_27466 = (state_27470[(2)]);
var state_27470__$1 = state_27470;
var statearr_27472_27612 = state_27470__$1;
(statearr_27472_27612[(2)] = inst_27466);

(statearr_27472_27612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (6))){
var state_27470__$1 = state_27470;
var statearr_27473_27613 = state_27470__$1;
(statearr_27473_27613[(2)] = null);

(statearr_27473_27613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (5))){
var state_27470__$1 = state_27470;
var statearr_27474_27614 = state_27470__$1;
(statearr_27474_27614[(2)] = null);

(statearr_27474_27614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (4))){
var inst_27460 = (state_27470[(2)]);
var inst_27461 = process.call(null,inst_27460);
var state_27470__$1 = state_27470;
if(cljs.core.truth_(inst_27461)){
var statearr_27475_27615 = state_27470__$1;
(statearr_27475_27615[(1)] = (5));

} else {
var statearr_27476_27616 = state_27470__$1;
(statearr_27476_27616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (3))){
var inst_27468 = (state_27470[(2)]);
var state_27470__$1 = state_27470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27470__$1,inst_27468);
} else {
if((state_val_27471 === (2))){
var state_27470__$1 = state_27470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27470__$1,(4),jobs);
} else {
if((state_val_27471 === (1))){
var state_27470__$1 = state_27470;
var statearr_27477_27617 = state_27470__$1;
(statearr_27477_27617[(2)] = null);

(statearr_27477_27617[(1)] = (2));


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
});})(__27599,c__21439__auto___27611,G__27430_27600,n__19080__auto___27598,jobs,results,process,async))
;
return ((function (__27599,switch__21377__auto__,c__21439__auto___27611,G__27430_27600,n__19080__auto___27598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0 = (function (){
var statearr_27481 = [null,null,null,null,null,null,null];
(statearr_27481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__);

(statearr_27481[(1)] = (1));

return statearr_27481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1 = (function (state_27470){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_27470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e27482){if((e27482 instanceof Object)){
var ex__21381__auto__ = e27482;
var statearr_27483_27618 = state_27470;
(statearr_27483_27618[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27619 = state_27470;
state_27470 = G__27619;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__ = function(state_27470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1.call(this,state_27470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__;
})()
;})(__27599,switch__21377__auto__,c__21439__auto___27611,G__27430_27600,n__19080__auto___27598,jobs,results,process,async))
})();
var state__21441__auto__ = (function (){var statearr_27484 = f__21440__auto__.call(null);
(statearr_27484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___27611);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(__27599,c__21439__auto___27611,G__27430_27600,n__19080__auto___27598,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27620 = (__27599 + (1));
__27599 = G__27620;
continue;
} else {
}
break;
}

var c__21439__auto___27621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___27621,jobs,results,process,async){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___27621,jobs,results,process,async){
return (function (state_27506){
var state_val_27507 = (state_27506[(1)]);
if((state_val_27507 === (9))){
var inst_27499 = (state_27506[(2)]);
var state_27506__$1 = (function (){var statearr_27508 = state_27506;
(statearr_27508[(7)] = inst_27499);

return statearr_27508;
})();
var statearr_27509_27622 = state_27506__$1;
(statearr_27509_27622[(2)] = null);

(statearr_27509_27622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (8))){
var inst_27492 = (state_27506[(8)]);
var inst_27497 = (state_27506[(2)]);
var state_27506__$1 = (function (){var statearr_27510 = state_27506;
(statearr_27510[(9)] = inst_27497);

return statearr_27510;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27506__$1,(9),results,inst_27492);
} else {
if((state_val_27507 === (7))){
var inst_27502 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
var statearr_27511_27623 = state_27506__$1;
(statearr_27511_27623[(2)] = inst_27502);

(statearr_27511_27623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (6))){
var inst_27492 = (state_27506[(8)]);
var inst_27487 = (state_27506[(10)]);
var inst_27492__$1 = cljs.core.async.chan.call(null,(1));
var inst_27493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27494 = [inst_27487,inst_27492__$1];
var inst_27495 = (new cljs.core.PersistentVector(null,2,(5),inst_27493,inst_27494,null));
var state_27506__$1 = (function (){var statearr_27512 = state_27506;
(statearr_27512[(8)] = inst_27492__$1);

return statearr_27512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27506__$1,(8),jobs,inst_27495);
} else {
if((state_val_27507 === (5))){
var inst_27490 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27506__$1 = state_27506;
var statearr_27513_27624 = state_27506__$1;
(statearr_27513_27624[(2)] = inst_27490);

(statearr_27513_27624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (4))){
var inst_27487 = (state_27506[(10)]);
var inst_27487__$1 = (state_27506[(2)]);
var inst_27488 = (inst_27487__$1 == null);
var state_27506__$1 = (function (){var statearr_27514 = state_27506;
(statearr_27514[(10)] = inst_27487__$1);

return statearr_27514;
})();
if(cljs.core.truth_(inst_27488)){
var statearr_27515_27625 = state_27506__$1;
(statearr_27515_27625[(1)] = (5));

} else {
var statearr_27516_27626 = state_27506__$1;
(statearr_27516_27626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (3))){
var inst_27504 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27506__$1,inst_27504);
} else {
if((state_val_27507 === (2))){
var state_27506__$1 = state_27506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27506__$1,(4),from);
} else {
if((state_val_27507 === (1))){
var state_27506__$1 = state_27506;
var statearr_27517_27627 = state_27506__$1;
(statearr_27517_27627[(2)] = null);

(statearr_27517_27627[(1)] = (2));


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
});})(c__21439__auto___27621,jobs,results,process,async))
;
return ((function (switch__21377__auto__,c__21439__auto___27621,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0 = (function (){
var statearr_27521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__);

(statearr_27521[(1)] = (1));

return statearr_27521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1 = (function (state_27506){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_27506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e27522){if((e27522 instanceof Object)){
var ex__21381__auto__ = e27522;
var statearr_27523_27628 = state_27506;
(statearr_27523_27628[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27629 = state_27506;
state_27506 = G__27629;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__ = function(state_27506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1.call(this,state_27506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___27621,jobs,results,process,async))
})();
var state__21441__auto__ = (function (){var statearr_27524 = f__21440__auto__.call(null);
(statearr_27524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___27621);

return statearr_27524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___27621,jobs,results,process,async))
);


var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__,jobs,results,process,async){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__,jobs,results,process,async){
return (function (state_27562){
var state_val_27563 = (state_27562[(1)]);
if((state_val_27563 === (7))){
var inst_27558 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
var statearr_27564_27630 = state_27562__$1;
(statearr_27564_27630[(2)] = inst_27558);

(statearr_27564_27630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (20))){
var state_27562__$1 = state_27562;
var statearr_27565_27631 = state_27562__$1;
(statearr_27565_27631[(2)] = null);

(statearr_27565_27631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (1))){
var state_27562__$1 = state_27562;
var statearr_27566_27632 = state_27562__$1;
(statearr_27566_27632[(2)] = null);

(statearr_27566_27632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (4))){
var inst_27527 = (state_27562[(7)]);
var inst_27527__$1 = (state_27562[(2)]);
var inst_27528 = (inst_27527__$1 == null);
var state_27562__$1 = (function (){var statearr_27567 = state_27562;
(statearr_27567[(7)] = inst_27527__$1);

return statearr_27567;
})();
if(cljs.core.truth_(inst_27528)){
var statearr_27568_27633 = state_27562__$1;
(statearr_27568_27633[(1)] = (5));

} else {
var statearr_27569_27634 = state_27562__$1;
(statearr_27569_27634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (15))){
var inst_27540 = (state_27562[(8)]);
var state_27562__$1 = state_27562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27562__$1,(18),to,inst_27540);
} else {
if((state_val_27563 === (21))){
var inst_27553 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
var statearr_27570_27635 = state_27562__$1;
(statearr_27570_27635[(2)] = inst_27553);

(statearr_27570_27635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (13))){
var inst_27555 = (state_27562[(2)]);
var state_27562__$1 = (function (){var statearr_27571 = state_27562;
(statearr_27571[(9)] = inst_27555);

return statearr_27571;
})();
var statearr_27572_27636 = state_27562__$1;
(statearr_27572_27636[(2)] = null);

(statearr_27572_27636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (6))){
var inst_27527 = (state_27562[(7)]);
var state_27562__$1 = state_27562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27562__$1,(11),inst_27527);
} else {
if((state_val_27563 === (17))){
var inst_27548 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
if(cljs.core.truth_(inst_27548)){
var statearr_27573_27637 = state_27562__$1;
(statearr_27573_27637[(1)] = (19));

} else {
var statearr_27574_27638 = state_27562__$1;
(statearr_27574_27638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (3))){
var inst_27560 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27562__$1,inst_27560);
} else {
if((state_val_27563 === (12))){
var inst_27537 = (state_27562[(10)]);
var state_27562__$1 = state_27562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27562__$1,(14),inst_27537);
} else {
if((state_val_27563 === (2))){
var state_27562__$1 = state_27562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27562__$1,(4),results);
} else {
if((state_val_27563 === (19))){
var state_27562__$1 = state_27562;
var statearr_27575_27639 = state_27562__$1;
(statearr_27575_27639[(2)] = null);

(statearr_27575_27639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (11))){
var inst_27537 = (state_27562[(2)]);
var state_27562__$1 = (function (){var statearr_27576 = state_27562;
(statearr_27576[(10)] = inst_27537);

return statearr_27576;
})();
var statearr_27577_27640 = state_27562__$1;
(statearr_27577_27640[(2)] = null);

(statearr_27577_27640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (9))){
var state_27562__$1 = state_27562;
var statearr_27578_27641 = state_27562__$1;
(statearr_27578_27641[(2)] = null);

(statearr_27578_27641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (5))){
var state_27562__$1 = state_27562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27579_27642 = state_27562__$1;
(statearr_27579_27642[(1)] = (8));

} else {
var statearr_27580_27643 = state_27562__$1;
(statearr_27580_27643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (14))){
var inst_27542 = (state_27562[(11)]);
var inst_27540 = (state_27562[(8)]);
var inst_27540__$1 = (state_27562[(2)]);
var inst_27541 = (inst_27540__$1 == null);
var inst_27542__$1 = cljs.core.not.call(null,inst_27541);
var state_27562__$1 = (function (){var statearr_27581 = state_27562;
(statearr_27581[(11)] = inst_27542__$1);

(statearr_27581[(8)] = inst_27540__$1);

return statearr_27581;
})();
if(inst_27542__$1){
var statearr_27582_27644 = state_27562__$1;
(statearr_27582_27644[(1)] = (15));

} else {
var statearr_27583_27645 = state_27562__$1;
(statearr_27583_27645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (16))){
var inst_27542 = (state_27562[(11)]);
var state_27562__$1 = state_27562;
var statearr_27584_27646 = state_27562__$1;
(statearr_27584_27646[(2)] = inst_27542);

(statearr_27584_27646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (10))){
var inst_27534 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
var statearr_27585_27647 = state_27562__$1;
(statearr_27585_27647[(2)] = inst_27534);

(statearr_27585_27647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (18))){
var inst_27545 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
var statearr_27586_27648 = state_27562__$1;
(statearr_27586_27648[(2)] = inst_27545);

(statearr_27586_27648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (8))){
var inst_27531 = cljs.core.async.close_BANG_.call(null,to);
var state_27562__$1 = state_27562;
var statearr_27587_27649 = state_27562__$1;
(statearr_27587_27649[(2)] = inst_27531);

(statearr_27587_27649[(1)] = (10));


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
});})(c__21439__auto__,jobs,results,process,async))
;
return ((function (switch__21377__auto__,c__21439__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0 = (function (){
var statearr_27591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__);

(statearr_27591[(1)] = (1));

return statearr_27591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1 = (function (state_27562){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_27562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e27592){if((e27592 instanceof Object)){
var ex__21381__auto__ = e27592;
var statearr_27593_27650 = state_27562;
(statearr_27593_27650[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27651 = state_27562;
state_27562 = G__27651;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__ = function(state_27562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1.call(this,state_27562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__,jobs,results,process,async))
})();
var state__21441__auto__ = (function (){var statearr_27594 = f__21440__auto__.call(null);
(statearr_27594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_27594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__,jobs,results,process,async))
);

return c__21439__auto__;
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
var G__27653 = arguments.length;
switch (G__27653) {
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
var G__27656 = arguments.length;
switch (G__27656) {
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
var G__27659 = arguments.length;
switch (G__27659) {
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
var c__21439__auto___27711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___27711,tc,fc){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___27711,tc,fc){
return (function (state_27685){
var state_val_27686 = (state_27685[(1)]);
if((state_val_27686 === (7))){
var inst_27681 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
var statearr_27687_27712 = state_27685__$1;
(statearr_27687_27712[(2)] = inst_27681);

(statearr_27687_27712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (1))){
var state_27685__$1 = state_27685;
var statearr_27688_27713 = state_27685__$1;
(statearr_27688_27713[(2)] = null);

(statearr_27688_27713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (4))){
var inst_27662 = (state_27685[(7)]);
var inst_27662__$1 = (state_27685[(2)]);
var inst_27663 = (inst_27662__$1 == null);
var state_27685__$1 = (function (){var statearr_27689 = state_27685;
(statearr_27689[(7)] = inst_27662__$1);

return statearr_27689;
})();
if(cljs.core.truth_(inst_27663)){
var statearr_27690_27714 = state_27685__$1;
(statearr_27690_27714[(1)] = (5));

} else {
var statearr_27691_27715 = state_27685__$1;
(statearr_27691_27715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (13))){
var state_27685__$1 = state_27685;
var statearr_27692_27716 = state_27685__$1;
(statearr_27692_27716[(2)] = null);

(statearr_27692_27716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (6))){
var inst_27662 = (state_27685[(7)]);
var inst_27668 = p.call(null,inst_27662);
var state_27685__$1 = state_27685;
if(cljs.core.truth_(inst_27668)){
var statearr_27693_27717 = state_27685__$1;
(statearr_27693_27717[(1)] = (9));

} else {
var statearr_27694_27718 = state_27685__$1;
(statearr_27694_27718[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (3))){
var inst_27683 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27685__$1,inst_27683);
} else {
if((state_val_27686 === (12))){
var state_27685__$1 = state_27685;
var statearr_27695_27719 = state_27685__$1;
(statearr_27695_27719[(2)] = null);

(statearr_27695_27719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (2))){
var state_27685__$1 = state_27685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27685__$1,(4),ch);
} else {
if((state_val_27686 === (11))){
var inst_27662 = (state_27685[(7)]);
var inst_27672 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27685__$1,(8),inst_27672,inst_27662);
} else {
if((state_val_27686 === (9))){
var state_27685__$1 = state_27685;
var statearr_27696_27720 = state_27685__$1;
(statearr_27696_27720[(2)] = tc);

(statearr_27696_27720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (5))){
var inst_27665 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27666 = cljs.core.async.close_BANG_.call(null,fc);
var state_27685__$1 = (function (){var statearr_27697 = state_27685;
(statearr_27697[(8)] = inst_27665);

return statearr_27697;
})();
var statearr_27698_27721 = state_27685__$1;
(statearr_27698_27721[(2)] = inst_27666);

(statearr_27698_27721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (14))){
var inst_27679 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
var statearr_27699_27722 = state_27685__$1;
(statearr_27699_27722[(2)] = inst_27679);

(statearr_27699_27722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (10))){
var state_27685__$1 = state_27685;
var statearr_27700_27723 = state_27685__$1;
(statearr_27700_27723[(2)] = fc);

(statearr_27700_27723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (8))){
var inst_27674 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
if(cljs.core.truth_(inst_27674)){
var statearr_27701_27724 = state_27685__$1;
(statearr_27701_27724[(1)] = (12));

} else {
var statearr_27702_27725 = state_27685__$1;
(statearr_27702_27725[(1)] = (13));

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
});})(c__21439__auto___27711,tc,fc))
;
return ((function (switch__21377__auto__,c__21439__auto___27711,tc,fc){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_27706 = [null,null,null,null,null,null,null,null,null];
(statearr_27706[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_27706[(1)] = (1));

return statearr_27706;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_27685){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_27685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e27707){if((e27707 instanceof Object)){
var ex__21381__auto__ = e27707;
var statearr_27708_27726 = state_27685;
(statearr_27708_27726[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27727 = state_27685;
state_27685 = G__27727;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_27685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_27685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___27711,tc,fc))
})();
var state__21441__auto__ = (function (){var statearr_27709 = f__21440__auto__.call(null);
(statearr_27709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___27711);

return statearr_27709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___27711,tc,fc))
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
var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__){
return (function (state_27774){
var state_val_27775 = (state_27774[(1)]);
if((state_val_27775 === (7))){
var inst_27770 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27776_27792 = state_27774__$1;
(statearr_27776_27792[(2)] = inst_27770);

(statearr_27776_27792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (6))){
var inst_27760 = (state_27774[(7)]);
var inst_27763 = (state_27774[(8)]);
var inst_27767 = f.call(null,inst_27760,inst_27763);
var inst_27760__$1 = inst_27767;
var state_27774__$1 = (function (){var statearr_27777 = state_27774;
(statearr_27777[(7)] = inst_27760__$1);

return statearr_27777;
})();
var statearr_27778_27793 = state_27774__$1;
(statearr_27778_27793[(2)] = null);

(statearr_27778_27793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (5))){
var inst_27760 = (state_27774[(7)]);
var state_27774__$1 = state_27774;
var statearr_27779_27794 = state_27774__$1;
(statearr_27779_27794[(2)] = inst_27760);

(statearr_27779_27794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (4))){
var inst_27763 = (state_27774[(8)]);
var inst_27763__$1 = (state_27774[(2)]);
var inst_27764 = (inst_27763__$1 == null);
var state_27774__$1 = (function (){var statearr_27780 = state_27774;
(statearr_27780[(8)] = inst_27763__$1);

return statearr_27780;
})();
if(cljs.core.truth_(inst_27764)){
var statearr_27781_27795 = state_27774__$1;
(statearr_27781_27795[(1)] = (5));

} else {
var statearr_27782_27796 = state_27774__$1;
(statearr_27782_27796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (3))){
var inst_27772 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27774__$1,inst_27772);
} else {
if((state_val_27775 === (2))){
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27774__$1,(4),ch);
} else {
if((state_val_27775 === (1))){
var inst_27760 = init;
var state_27774__$1 = (function (){var statearr_27783 = state_27774;
(statearr_27783[(7)] = inst_27760);

return statearr_27783;
})();
var statearr_27784_27797 = state_27774__$1;
(statearr_27784_27797[(2)] = null);

(statearr_27784_27797[(1)] = (2));


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
});})(c__21439__auto__))
;
return ((function (switch__21377__auto__,c__21439__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21378__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21378__auto____0 = (function (){
var statearr_27788 = [null,null,null,null,null,null,null,null,null];
(statearr_27788[(0)] = cljs$core$async$reduce_$_state_machine__21378__auto__);

(statearr_27788[(1)] = (1));

return statearr_27788;
});
var cljs$core$async$reduce_$_state_machine__21378__auto____1 = (function (state_27774){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_27774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e27789){if((e27789 instanceof Object)){
var ex__21381__auto__ = e27789;
var statearr_27790_27798 = state_27774;
(statearr_27790_27798[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27799 = state_27774;
state_27774 = G__27799;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21378__auto__ = function(state_27774){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21378__auto____1.call(this,state_27774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21378__auto____0;
cljs$core$async$reduce_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21378__auto____1;
return cljs$core$async$reduce_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__))
})();
var state__21441__auto__ = (function (){var statearr_27791 = f__21440__auto__.call(null);
(statearr_27791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_27791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__))
);

return c__21439__auto__;
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
var G__27801 = arguments.length;
switch (G__27801) {
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
var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__){
return (function (state_27826){
var state_val_27827 = (state_27826[(1)]);
if((state_val_27827 === (7))){
var inst_27808 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27828_27852 = state_27826__$1;
(statearr_27828_27852[(2)] = inst_27808);

(statearr_27828_27852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (1))){
var inst_27802 = cljs.core.seq.call(null,coll);
var inst_27803 = inst_27802;
var state_27826__$1 = (function (){var statearr_27829 = state_27826;
(statearr_27829[(7)] = inst_27803);

return statearr_27829;
})();
var statearr_27830_27853 = state_27826__$1;
(statearr_27830_27853[(2)] = null);

(statearr_27830_27853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (4))){
var inst_27803 = (state_27826[(7)]);
var inst_27806 = cljs.core.first.call(null,inst_27803);
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27826__$1,(7),ch,inst_27806);
} else {
if((state_val_27827 === (13))){
var inst_27820 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27831_27854 = state_27826__$1;
(statearr_27831_27854[(2)] = inst_27820);

(statearr_27831_27854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (6))){
var inst_27811 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
if(cljs.core.truth_(inst_27811)){
var statearr_27832_27855 = state_27826__$1;
(statearr_27832_27855[(1)] = (8));

} else {
var statearr_27833_27856 = state_27826__$1;
(statearr_27833_27856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (3))){
var inst_27824 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27826__$1,inst_27824);
} else {
if((state_val_27827 === (12))){
var state_27826__$1 = state_27826;
var statearr_27834_27857 = state_27826__$1;
(statearr_27834_27857[(2)] = null);

(statearr_27834_27857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (2))){
var inst_27803 = (state_27826[(7)]);
var state_27826__$1 = state_27826;
if(cljs.core.truth_(inst_27803)){
var statearr_27835_27858 = state_27826__$1;
(statearr_27835_27858[(1)] = (4));

} else {
var statearr_27836_27859 = state_27826__$1;
(statearr_27836_27859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (11))){
var inst_27817 = cljs.core.async.close_BANG_.call(null,ch);
var state_27826__$1 = state_27826;
var statearr_27837_27860 = state_27826__$1;
(statearr_27837_27860[(2)] = inst_27817);

(statearr_27837_27860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (9))){
var state_27826__$1 = state_27826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27838_27861 = state_27826__$1;
(statearr_27838_27861[(1)] = (11));

} else {
var statearr_27839_27862 = state_27826__$1;
(statearr_27839_27862[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (5))){
var inst_27803 = (state_27826[(7)]);
var state_27826__$1 = state_27826;
var statearr_27840_27863 = state_27826__$1;
(statearr_27840_27863[(2)] = inst_27803);

(statearr_27840_27863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (10))){
var inst_27822 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27841_27864 = state_27826__$1;
(statearr_27841_27864[(2)] = inst_27822);

(statearr_27841_27864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (8))){
var inst_27803 = (state_27826[(7)]);
var inst_27813 = cljs.core.next.call(null,inst_27803);
var inst_27803__$1 = inst_27813;
var state_27826__$1 = (function (){var statearr_27842 = state_27826;
(statearr_27842[(7)] = inst_27803__$1);

return statearr_27842;
})();
var statearr_27843_27865 = state_27826__$1;
(statearr_27843_27865[(2)] = null);

(statearr_27843_27865[(1)] = (2));


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
});})(c__21439__auto__))
;
return ((function (switch__21377__auto__,c__21439__auto__){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_27847 = [null,null,null,null,null,null,null,null];
(statearr_27847[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_27847[(1)] = (1));

return statearr_27847;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_27826){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_27826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e27848){if((e27848 instanceof Object)){
var ex__21381__auto__ = e27848;
var statearr_27849_27866 = state_27826;
(statearr_27849_27866[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27867 = state_27826;
state_27826 = G__27867;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_27826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_27826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__))
})();
var state__21441__auto__ = (function (){var statearr_27850 = f__21440__auto__.call(null);
(statearr_27850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__))
);

return c__21439__auto__;
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

cljs.core.async.Mux = (function (){var obj27869 = {};
return obj27869;
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


cljs.core.async.Mult = (function (){var obj27871 = {};
return obj27871;
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
if(typeof cljs.core.async.t28093 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28093 = (function (cs,ch,mult,meta28094){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28094 = meta28094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28093.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28093.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28093.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28093.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28093.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28095){
var self__ = this;
var _28095__$1 = this;
return self__.meta28094;
});})(cs))
;

cljs.core.async.t28093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28095,meta28094__$1){
var self__ = this;
var _28095__$1 = this;
return (new cljs.core.async.t28093(self__.cs,self__.ch,self__.mult,meta28094__$1));
});})(cs))
;

cljs.core.async.t28093.cljs$lang$type = true;

cljs.core.async.t28093.cljs$lang$ctorStr = "cljs.core.async/t28093";

cljs.core.async.t28093.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t28093");
});})(cs))
;

cljs.core.async.__GT_t28093 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28093(cs__$1,ch__$1,mult__$1,meta28094){
return (new cljs.core.async.t28093(cs__$1,ch__$1,mult__$1,meta28094));
});})(cs))
;

}

return (new cljs.core.async.t28093(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21439__auto___28314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___28314,cs,m,dchan,dctr,done){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___28314,cs,m,dchan,dctr,done){
return (function (state_28226){
var state_val_28227 = (state_28226[(1)]);
if((state_val_28227 === (7))){
var inst_28222 = (state_28226[(2)]);
var state_28226__$1 = state_28226;
var statearr_28228_28315 = state_28226__$1;
(statearr_28228_28315[(2)] = inst_28222);

(statearr_28228_28315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (20))){
var inst_28127 = (state_28226[(7)]);
var inst_28137 = cljs.core.first.call(null,inst_28127);
var inst_28138 = cljs.core.nth.call(null,inst_28137,(0),null);
var inst_28139 = cljs.core.nth.call(null,inst_28137,(1),null);
var state_28226__$1 = (function (){var statearr_28229 = state_28226;
(statearr_28229[(8)] = inst_28138);

return statearr_28229;
})();
if(cljs.core.truth_(inst_28139)){
var statearr_28230_28316 = state_28226__$1;
(statearr_28230_28316[(1)] = (22));

} else {
var statearr_28231_28317 = state_28226__$1;
(statearr_28231_28317[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (27))){
var inst_28174 = (state_28226[(9)]);
var inst_28167 = (state_28226[(10)]);
var inst_28169 = (state_28226[(11)]);
var inst_28098 = (state_28226[(12)]);
var inst_28174__$1 = cljs.core._nth.call(null,inst_28167,inst_28169);
var inst_28175 = cljs.core.async.put_BANG_.call(null,inst_28174__$1,inst_28098,done);
var state_28226__$1 = (function (){var statearr_28232 = state_28226;
(statearr_28232[(9)] = inst_28174__$1);

return statearr_28232;
})();
if(cljs.core.truth_(inst_28175)){
var statearr_28233_28318 = state_28226__$1;
(statearr_28233_28318[(1)] = (30));

} else {
var statearr_28234_28319 = state_28226__$1;
(statearr_28234_28319[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (1))){
var state_28226__$1 = state_28226;
var statearr_28235_28320 = state_28226__$1;
(statearr_28235_28320[(2)] = null);

(statearr_28235_28320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (24))){
var inst_28127 = (state_28226[(7)]);
var inst_28144 = (state_28226[(2)]);
var inst_28145 = cljs.core.next.call(null,inst_28127);
var inst_28107 = inst_28145;
var inst_28108 = null;
var inst_28109 = (0);
var inst_28110 = (0);
var state_28226__$1 = (function (){var statearr_28236 = state_28226;
(statearr_28236[(13)] = inst_28110);

(statearr_28236[(14)] = inst_28144);

(statearr_28236[(15)] = inst_28108);

(statearr_28236[(16)] = inst_28107);

(statearr_28236[(17)] = inst_28109);

return statearr_28236;
})();
var statearr_28237_28321 = state_28226__$1;
(statearr_28237_28321[(2)] = null);

(statearr_28237_28321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (39))){
var state_28226__$1 = state_28226;
var statearr_28241_28322 = state_28226__$1;
(statearr_28241_28322[(2)] = null);

(statearr_28241_28322[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (4))){
var inst_28098 = (state_28226[(12)]);
var inst_28098__$1 = (state_28226[(2)]);
var inst_28099 = (inst_28098__$1 == null);
var state_28226__$1 = (function (){var statearr_28242 = state_28226;
(statearr_28242[(12)] = inst_28098__$1);

return statearr_28242;
})();
if(cljs.core.truth_(inst_28099)){
var statearr_28243_28323 = state_28226__$1;
(statearr_28243_28323[(1)] = (5));

} else {
var statearr_28244_28324 = state_28226__$1;
(statearr_28244_28324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (15))){
var inst_28110 = (state_28226[(13)]);
var inst_28108 = (state_28226[(15)]);
var inst_28107 = (state_28226[(16)]);
var inst_28109 = (state_28226[(17)]);
var inst_28123 = (state_28226[(2)]);
var inst_28124 = (inst_28110 + (1));
var tmp28238 = inst_28108;
var tmp28239 = inst_28107;
var tmp28240 = inst_28109;
var inst_28107__$1 = tmp28239;
var inst_28108__$1 = tmp28238;
var inst_28109__$1 = tmp28240;
var inst_28110__$1 = inst_28124;
var state_28226__$1 = (function (){var statearr_28245 = state_28226;
(statearr_28245[(18)] = inst_28123);

(statearr_28245[(13)] = inst_28110__$1);

(statearr_28245[(15)] = inst_28108__$1);

(statearr_28245[(16)] = inst_28107__$1);

(statearr_28245[(17)] = inst_28109__$1);

return statearr_28245;
})();
var statearr_28246_28325 = state_28226__$1;
(statearr_28246_28325[(2)] = null);

(statearr_28246_28325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (21))){
var inst_28148 = (state_28226[(2)]);
var state_28226__$1 = state_28226;
var statearr_28250_28326 = state_28226__$1;
(statearr_28250_28326[(2)] = inst_28148);

(statearr_28250_28326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (31))){
var inst_28174 = (state_28226[(9)]);
var inst_28178 = done.call(null,null);
var inst_28179 = cljs.core.async.untap_STAR_.call(null,m,inst_28174);
var state_28226__$1 = (function (){var statearr_28251 = state_28226;
(statearr_28251[(19)] = inst_28178);

return statearr_28251;
})();
var statearr_28252_28327 = state_28226__$1;
(statearr_28252_28327[(2)] = inst_28179);

(statearr_28252_28327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (32))){
var inst_28166 = (state_28226[(20)]);
var inst_28167 = (state_28226[(10)]);
var inst_28169 = (state_28226[(11)]);
var inst_28168 = (state_28226[(21)]);
var inst_28181 = (state_28226[(2)]);
var inst_28182 = (inst_28169 + (1));
var tmp28247 = inst_28166;
var tmp28248 = inst_28167;
var tmp28249 = inst_28168;
var inst_28166__$1 = tmp28247;
var inst_28167__$1 = tmp28248;
var inst_28168__$1 = tmp28249;
var inst_28169__$1 = inst_28182;
var state_28226__$1 = (function (){var statearr_28253 = state_28226;
(statearr_28253[(20)] = inst_28166__$1);

(statearr_28253[(22)] = inst_28181);

(statearr_28253[(10)] = inst_28167__$1);

(statearr_28253[(11)] = inst_28169__$1);

(statearr_28253[(21)] = inst_28168__$1);

return statearr_28253;
})();
var statearr_28254_28328 = state_28226__$1;
(statearr_28254_28328[(2)] = null);

(statearr_28254_28328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (40))){
var inst_28194 = (state_28226[(23)]);
var inst_28198 = done.call(null,null);
var inst_28199 = cljs.core.async.untap_STAR_.call(null,m,inst_28194);
var state_28226__$1 = (function (){var statearr_28255 = state_28226;
(statearr_28255[(24)] = inst_28198);

return statearr_28255;
})();
var statearr_28256_28329 = state_28226__$1;
(statearr_28256_28329[(2)] = inst_28199);

(statearr_28256_28329[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (33))){
var inst_28185 = (state_28226[(25)]);
var inst_28187 = cljs.core.chunked_seq_QMARK_.call(null,inst_28185);
var state_28226__$1 = state_28226;
if(inst_28187){
var statearr_28257_28330 = state_28226__$1;
(statearr_28257_28330[(1)] = (36));

} else {
var statearr_28258_28331 = state_28226__$1;
(statearr_28258_28331[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (13))){
var inst_28117 = (state_28226[(26)]);
var inst_28120 = cljs.core.async.close_BANG_.call(null,inst_28117);
var state_28226__$1 = state_28226;
var statearr_28259_28332 = state_28226__$1;
(statearr_28259_28332[(2)] = inst_28120);

(statearr_28259_28332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (22))){
var inst_28138 = (state_28226[(8)]);
var inst_28141 = cljs.core.async.close_BANG_.call(null,inst_28138);
var state_28226__$1 = state_28226;
var statearr_28260_28333 = state_28226__$1;
(statearr_28260_28333[(2)] = inst_28141);

(statearr_28260_28333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (36))){
var inst_28185 = (state_28226[(25)]);
var inst_28189 = cljs.core.chunk_first.call(null,inst_28185);
var inst_28190 = cljs.core.chunk_rest.call(null,inst_28185);
var inst_28191 = cljs.core.count.call(null,inst_28189);
var inst_28166 = inst_28190;
var inst_28167 = inst_28189;
var inst_28168 = inst_28191;
var inst_28169 = (0);
var state_28226__$1 = (function (){var statearr_28261 = state_28226;
(statearr_28261[(20)] = inst_28166);

(statearr_28261[(10)] = inst_28167);

(statearr_28261[(11)] = inst_28169);

(statearr_28261[(21)] = inst_28168);

return statearr_28261;
})();
var statearr_28262_28334 = state_28226__$1;
(statearr_28262_28334[(2)] = null);

(statearr_28262_28334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (41))){
var inst_28185 = (state_28226[(25)]);
var inst_28201 = (state_28226[(2)]);
var inst_28202 = cljs.core.next.call(null,inst_28185);
var inst_28166 = inst_28202;
var inst_28167 = null;
var inst_28168 = (0);
var inst_28169 = (0);
var state_28226__$1 = (function (){var statearr_28263 = state_28226;
(statearr_28263[(20)] = inst_28166);

(statearr_28263[(10)] = inst_28167);

(statearr_28263[(11)] = inst_28169);

(statearr_28263[(27)] = inst_28201);

(statearr_28263[(21)] = inst_28168);

return statearr_28263;
})();
var statearr_28264_28335 = state_28226__$1;
(statearr_28264_28335[(2)] = null);

(statearr_28264_28335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (43))){
var state_28226__$1 = state_28226;
var statearr_28265_28336 = state_28226__$1;
(statearr_28265_28336[(2)] = null);

(statearr_28265_28336[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (29))){
var inst_28210 = (state_28226[(2)]);
var state_28226__$1 = state_28226;
var statearr_28266_28337 = state_28226__$1;
(statearr_28266_28337[(2)] = inst_28210);

(statearr_28266_28337[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (44))){
var inst_28219 = (state_28226[(2)]);
var state_28226__$1 = (function (){var statearr_28267 = state_28226;
(statearr_28267[(28)] = inst_28219);

return statearr_28267;
})();
var statearr_28268_28338 = state_28226__$1;
(statearr_28268_28338[(2)] = null);

(statearr_28268_28338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (6))){
var inst_28158 = (state_28226[(29)]);
var inst_28157 = cljs.core.deref.call(null,cs);
var inst_28158__$1 = cljs.core.keys.call(null,inst_28157);
var inst_28159 = cljs.core.count.call(null,inst_28158__$1);
var inst_28160 = cljs.core.reset_BANG_.call(null,dctr,inst_28159);
var inst_28165 = cljs.core.seq.call(null,inst_28158__$1);
var inst_28166 = inst_28165;
var inst_28167 = null;
var inst_28168 = (0);
var inst_28169 = (0);
var state_28226__$1 = (function (){var statearr_28269 = state_28226;
(statearr_28269[(20)] = inst_28166);

(statearr_28269[(10)] = inst_28167);

(statearr_28269[(11)] = inst_28169);

(statearr_28269[(29)] = inst_28158__$1);

(statearr_28269[(21)] = inst_28168);

(statearr_28269[(30)] = inst_28160);

return statearr_28269;
})();
var statearr_28270_28339 = state_28226__$1;
(statearr_28270_28339[(2)] = null);

(statearr_28270_28339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (28))){
var inst_28185 = (state_28226[(25)]);
var inst_28166 = (state_28226[(20)]);
var inst_28185__$1 = cljs.core.seq.call(null,inst_28166);
var state_28226__$1 = (function (){var statearr_28271 = state_28226;
(statearr_28271[(25)] = inst_28185__$1);

return statearr_28271;
})();
if(inst_28185__$1){
var statearr_28272_28340 = state_28226__$1;
(statearr_28272_28340[(1)] = (33));

} else {
var statearr_28273_28341 = state_28226__$1;
(statearr_28273_28341[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (25))){
var inst_28169 = (state_28226[(11)]);
var inst_28168 = (state_28226[(21)]);
var inst_28171 = (inst_28169 < inst_28168);
var inst_28172 = inst_28171;
var state_28226__$1 = state_28226;
if(cljs.core.truth_(inst_28172)){
var statearr_28274_28342 = state_28226__$1;
(statearr_28274_28342[(1)] = (27));

} else {
var statearr_28275_28343 = state_28226__$1;
(statearr_28275_28343[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (34))){
var state_28226__$1 = state_28226;
var statearr_28276_28344 = state_28226__$1;
(statearr_28276_28344[(2)] = null);

(statearr_28276_28344[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (17))){
var state_28226__$1 = state_28226;
var statearr_28277_28345 = state_28226__$1;
(statearr_28277_28345[(2)] = null);

(statearr_28277_28345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (3))){
var inst_28224 = (state_28226[(2)]);
var state_28226__$1 = state_28226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28226__$1,inst_28224);
} else {
if((state_val_28227 === (12))){
var inst_28153 = (state_28226[(2)]);
var state_28226__$1 = state_28226;
var statearr_28278_28346 = state_28226__$1;
(statearr_28278_28346[(2)] = inst_28153);

(statearr_28278_28346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (2))){
var state_28226__$1 = state_28226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28226__$1,(4),ch);
} else {
if((state_val_28227 === (23))){
var state_28226__$1 = state_28226;
var statearr_28279_28347 = state_28226__$1;
(statearr_28279_28347[(2)] = null);

(statearr_28279_28347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (35))){
var inst_28208 = (state_28226[(2)]);
var state_28226__$1 = state_28226;
var statearr_28280_28348 = state_28226__$1;
(statearr_28280_28348[(2)] = inst_28208);

(statearr_28280_28348[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (19))){
var inst_28127 = (state_28226[(7)]);
var inst_28131 = cljs.core.chunk_first.call(null,inst_28127);
var inst_28132 = cljs.core.chunk_rest.call(null,inst_28127);
var inst_28133 = cljs.core.count.call(null,inst_28131);
var inst_28107 = inst_28132;
var inst_28108 = inst_28131;
var inst_28109 = inst_28133;
var inst_28110 = (0);
var state_28226__$1 = (function (){var statearr_28281 = state_28226;
(statearr_28281[(13)] = inst_28110);

(statearr_28281[(15)] = inst_28108);

(statearr_28281[(16)] = inst_28107);

(statearr_28281[(17)] = inst_28109);

return statearr_28281;
})();
var statearr_28282_28349 = state_28226__$1;
(statearr_28282_28349[(2)] = null);

(statearr_28282_28349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (11))){
var inst_28107 = (state_28226[(16)]);
var inst_28127 = (state_28226[(7)]);
var inst_28127__$1 = cljs.core.seq.call(null,inst_28107);
var state_28226__$1 = (function (){var statearr_28283 = state_28226;
(statearr_28283[(7)] = inst_28127__$1);

return statearr_28283;
})();
if(inst_28127__$1){
var statearr_28284_28350 = state_28226__$1;
(statearr_28284_28350[(1)] = (16));

} else {
var statearr_28285_28351 = state_28226__$1;
(statearr_28285_28351[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (9))){
var inst_28155 = (state_28226[(2)]);
var state_28226__$1 = state_28226;
var statearr_28286_28352 = state_28226__$1;
(statearr_28286_28352[(2)] = inst_28155);

(statearr_28286_28352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (5))){
var inst_28105 = cljs.core.deref.call(null,cs);
var inst_28106 = cljs.core.seq.call(null,inst_28105);
var inst_28107 = inst_28106;
var inst_28108 = null;
var inst_28109 = (0);
var inst_28110 = (0);
var state_28226__$1 = (function (){var statearr_28287 = state_28226;
(statearr_28287[(13)] = inst_28110);

(statearr_28287[(15)] = inst_28108);

(statearr_28287[(16)] = inst_28107);

(statearr_28287[(17)] = inst_28109);

return statearr_28287;
})();
var statearr_28288_28353 = state_28226__$1;
(statearr_28288_28353[(2)] = null);

(statearr_28288_28353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (14))){
var state_28226__$1 = state_28226;
var statearr_28289_28354 = state_28226__$1;
(statearr_28289_28354[(2)] = null);

(statearr_28289_28354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (45))){
var inst_28216 = (state_28226[(2)]);
var state_28226__$1 = state_28226;
var statearr_28290_28355 = state_28226__$1;
(statearr_28290_28355[(2)] = inst_28216);

(statearr_28290_28355[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (26))){
var inst_28158 = (state_28226[(29)]);
var inst_28212 = (state_28226[(2)]);
var inst_28213 = cljs.core.seq.call(null,inst_28158);
var state_28226__$1 = (function (){var statearr_28291 = state_28226;
(statearr_28291[(31)] = inst_28212);

return statearr_28291;
})();
if(inst_28213){
var statearr_28292_28356 = state_28226__$1;
(statearr_28292_28356[(1)] = (42));

} else {
var statearr_28293_28357 = state_28226__$1;
(statearr_28293_28357[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (16))){
var inst_28127 = (state_28226[(7)]);
var inst_28129 = cljs.core.chunked_seq_QMARK_.call(null,inst_28127);
var state_28226__$1 = state_28226;
if(inst_28129){
var statearr_28294_28358 = state_28226__$1;
(statearr_28294_28358[(1)] = (19));

} else {
var statearr_28295_28359 = state_28226__$1;
(statearr_28295_28359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (38))){
var inst_28205 = (state_28226[(2)]);
var state_28226__$1 = state_28226;
var statearr_28296_28360 = state_28226__$1;
(statearr_28296_28360[(2)] = inst_28205);

(statearr_28296_28360[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (30))){
var state_28226__$1 = state_28226;
var statearr_28297_28361 = state_28226__$1;
(statearr_28297_28361[(2)] = null);

(statearr_28297_28361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (10))){
var inst_28110 = (state_28226[(13)]);
var inst_28108 = (state_28226[(15)]);
var inst_28116 = cljs.core._nth.call(null,inst_28108,inst_28110);
var inst_28117 = cljs.core.nth.call(null,inst_28116,(0),null);
var inst_28118 = cljs.core.nth.call(null,inst_28116,(1),null);
var state_28226__$1 = (function (){var statearr_28298 = state_28226;
(statearr_28298[(26)] = inst_28117);

return statearr_28298;
})();
if(cljs.core.truth_(inst_28118)){
var statearr_28299_28362 = state_28226__$1;
(statearr_28299_28362[(1)] = (13));

} else {
var statearr_28300_28363 = state_28226__$1;
(statearr_28300_28363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (18))){
var inst_28151 = (state_28226[(2)]);
var state_28226__$1 = state_28226;
var statearr_28301_28364 = state_28226__$1;
(statearr_28301_28364[(2)] = inst_28151);

(statearr_28301_28364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (42))){
var state_28226__$1 = state_28226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28226__$1,(45),dchan);
} else {
if((state_val_28227 === (37))){
var inst_28185 = (state_28226[(25)]);
var inst_28194 = (state_28226[(23)]);
var inst_28098 = (state_28226[(12)]);
var inst_28194__$1 = cljs.core.first.call(null,inst_28185);
var inst_28195 = cljs.core.async.put_BANG_.call(null,inst_28194__$1,inst_28098,done);
var state_28226__$1 = (function (){var statearr_28302 = state_28226;
(statearr_28302[(23)] = inst_28194__$1);

return statearr_28302;
})();
if(cljs.core.truth_(inst_28195)){
var statearr_28303_28365 = state_28226__$1;
(statearr_28303_28365[(1)] = (39));

} else {
var statearr_28304_28366 = state_28226__$1;
(statearr_28304_28366[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28227 === (8))){
var inst_28110 = (state_28226[(13)]);
var inst_28109 = (state_28226[(17)]);
var inst_28112 = (inst_28110 < inst_28109);
var inst_28113 = inst_28112;
var state_28226__$1 = state_28226;
if(cljs.core.truth_(inst_28113)){
var statearr_28305_28367 = state_28226__$1;
(statearr_28305_28367[(1)] = (10));

} else {
var statearr_28306_28368 = state_28226__$1;
(statearr_28306_28368[(1)] = (11));

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
});})(c__21439__auto___28314,cs,m,dchan,dctr,done))
;
return ((function (switch__21377__auto__,c__21439__auto___28314,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21378__auto__ = null;
var cljs$core$async$mult_$_state_machine__21378__auto____0 = (function (){
var statearr_28310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28310[(0)] = cljs$core$async$mult_$_state_machine__21378__auto__);

(statearr_28310[(1)] = (1));

return statearr_28310;
});
var cljs$core$async$mult_$_state_machine__21378__auto____1 = (function (state_28226){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_28226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e28311){if((e28311 instanceof Object)){
var ex__21381__auto__ = e28311;
var statearr_28312_28369 = state_28226;
(statearr_28312_28369[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28370 = state_28226;
state_28226 = G__28370;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21378__auto__ = function(state_28226){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21378__auto____1.call(this,state_28226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21378__auto____0;
cljs$core$async$mult_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21378__auto____1;
return cljs$core$async$mult_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___28314,cs,m,dchan,dctr,done))
})();
var state__21441__auto__ = (function (){var statearr_28313 = f__21440__auto__.call(null);
(statearr_28313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___28314);

return statearr_28313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___28314,cs,m,dchan,dctr,done))
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
var G__28372 = arguments.length;
switch (G__28372) {
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

cljs.core.async.Mix = (function (){var obj28375 = {};
return obj28375;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28380){
var map__28381 = p__28380;
var map__28381__$1 = ((cljs.core.seq_QMARK_.call(null,map__28381))?cljs.core.apply.call(null,cljs.core.hash_map,map__28381):map__28381);
var opts = map__28381__$1;
var statearr_28382_28385 = state;
(statearr_28382_28385[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28381,map__28381__$1,opts){
return (function (val){
var statearr_28383_28386 = state;
(statearr_28383_28386[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28381,map__28381__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28384_28387 = state;
(statearr_28384_28387[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28376){
var G__28377 = cljs.core.first.call(null,seq28376);
var seq28376__$1 = cljs.core.next.call(null,seq28376);
var G__28378 = cljs.core.first.call(null,seq28376__$1);
var seq28376__$2 = cljs.core.next.call(null,seq28376__$1);
var G__28379 = cljs.core.first.call(null,seq28376__$2);
var seq28376__$3 = cljs.core.next.call(null,seq28376__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28377,G__28378,G__28379,seq28376__$3);
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
if(typeof cljs.core.async.t28507 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28507 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28508){
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
this.meta28508 = meta28508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28507.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28507.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28507.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28507.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28507.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28507.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t28507.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28509){
var self__ = this;
var _28509__$1 = this;
return self__.meta28508;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28509,meta28508__$1){
var self__ = this;
var _28509__$1 = this;
return (new cljs.core.async.t28507(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28508__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28507.cljs$lang$type = true;

cljs.core.async.t28507.cljs$lang$ctorStr = "cljs.core.async/t28507";

cljs.core.async.t28507.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t28507");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28507 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28507(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28508){
return (new cljs.core.async.t28507(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28508));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28507(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21439__auto___28626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___28626,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___28626,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28579){
var state_val_28580 = (state_28579[(1)]);
if((state_val_28580 === (7))){
var inst_28523 = (state_28579[(7)]);
var inst_28528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28523);
var state_28579__$1 = state_28579;
var statearr_28581_28627 = state_28579__$1;
(statearr_28581_28627[(2)] = inst_28528);

(statearr_28581_28627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (20))){
var inst_28538 = (state_28579[(8)]);
var state_28579__$1 = state_28579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28579__$1,(23),out,inst_28538);
} else {
if((state_val_28580 === (1))){
var inst_28513 = (state_28579[(9)]);
var inst_28513__$1 = calc_state.call(null);
var inst_28514 = cljs.core.seq_QMARK_.call(null,inst_28513__$1);
var state_28579__$1 = (function (){var statearr_28582 = state_28579;
(statearr_28582[(9)] = inst_28513__$1);

return statearr_28582;
})();
if(inst_28514){
var statearr_28583_28628 = state_28579__$1;
(statearr_28583_28628[(1)] = (2));

} else {
var statearr_28584_28629 = state_28579__$1;
(statearr_28584_28629[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (24))){
var inst_28531 = (state_28579[(10)]);
var inst_28523 = inst_28531;
var state_28579__$1 = (function (){var statearr_28585 = state_28579;
(statearr_28585[(7)] = inst_28523);

return statearr_28585;
})();
var statearr_28586_28630 = state_28579__$1;
(statearr_28586_28630[(2)] = null);

(statearr_28586_28630[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (4))){
var inst_28513 = (state_28579[(9)]);
var inst_28519 = (state_28579[(2)]);
var inst_28520 = cljs.core.get.call(null,inst_28519,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28521 = cljs.core.get.call(null,inst_28519,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28522 = cljs.core.get.call(null,inst_28519,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28523 = inst_28513;
var state_28579__$1 = (function (){var statearr_28587 = state_28579;
(statearr_28587[(11)] = inst_28521);

(statearr_28587[(12)] = inst_28522);

(statearr_28587[(13)] = inst_28520);

(statearr_28587[(7)] = inst_28523);

return statearr_28587;
})();
var statearr_28588_28631 = state_28579__$1;
(statearr_28588_28631[(2)] = null);

(statearr_28588_28631[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (15))){
var state_28579__$1 = state_28579;
var statearr_28589_28632 = state_28579__$1;
(statearr_28589_28632[(2)] = null);

(statearr_28589_28632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (21))){
var inst_28531 = (state_28579[(10)]);
var inst_28523 = inst_28531;
var state_28579__$1 = (function (){var statearr_28590 = state_28579;
(statearr_28590[(7)] = inst_28523);

return statearr_28590;
})();
var statearr_28591_28633 = state_28579__$1;
(statearr_28591_28633[(2)] = null);

(statearr_28591_28633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (13))){
var inst_28575 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
var statearr_28592_28634 = state_28579__$1;
(statearr_28592_28634[(2)] = inst_28575);

(statearr_28592_28634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (22))){
var inst_28573 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
var statearr_28593_28635 = state_28579__$1;
(statearr_28593_28635[(2)] = inst_28573);

(statearr_28593_28635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (6))){
var inst_28577 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28579__$1,inst_28577);
} else {
if((state_val_28580 === (25))){
var state_28579__$1 = state_28579;
var statearr_28594_28636 = state_28579__$1;
(statearr_28594_28636[(2)] = null);

(statearr_28594_28636[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (17))){
var inst_28553 = (state_28579[(14)]);
var state_28579__$1 = state_28579;
var statearr_28595_28637 = state_28579__$1;
(statearr_28595_28637[(2)] = inst_28553);

(statearr_28595_28637[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (3))){
var inst_28513 = (state_28579[(9)]);
var state_28579__$1 = state_28579;
var statearr_28596_28638 = state_28579__$1;
(statearr_28596_28638[(2)] = inst_28513);

(statearr_28596_28638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (12))){
var inst_28539 = (state_28579[(15)]);
var inst_28534 = (state_28579[(16)]);
var inst_28553 = (state_28579[(14)]);
var inst_28553__$1 = inst_28534.call(null,inst_28539);
var state_28579__$1 = (function (){var statearr_28597 = state_28579;
(statearr_28597[(14)] = inst_28553__$1);

return statearr_28597;
})();
if(cljs.core.truth_(inst_28553__$1)){
var statearr_28598_28639 = state_28579__$1;
(statearr_28598_28639[(1)] = (17));

} else {
var statearr_28599_28640 = state_28579__$1;
(statearr_28599_28640[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (2))){
var inst_28513 = (state_28579[(9)]);
var inst_28516 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28513);
var state_28579__$1 = state_28579;
var statearr_28600_28641 = state_28579__$1;
(statearr_28600_28641[(2)] = inst_28516);

(statearr_28600_28641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (23))){
var inst_28564 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
if(cljs.core.truth_(inst_28564)){
var statearr_28601_28642 = state_28579__$1;
(statearr_28601_28642[(1)] = (24));

} else {
var statearr_28602_28643 = state_28579__$1;
(statearr_28602_28643[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (19))){
var inst_28561 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
if(cljs.core.truth_(inst_28561)){
var statearr_28603_28644 = state_28579__$1;
(statearr_28603_28644[(1)] = (20));

} else {
var statearr_28604_28645 = state_28579__$1;
(statearr_28604_28645[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (11))){
var inst_28538 = (state_28579[(8)]);
var inst_28544 = (inst_28538 == null);
var state_28579__$1 = state_28579;
if(cljs.core.truth_(inst_28544)){
var statearr_28605_28646 = state_28579__$1;
(statearr_28605_28646[(1)] = (14));

} else {
var statearr_28606_28647 = state_28579__$1;
(statearr_28606_28647[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (9))){
var inst_28531 = (state_28579[(10)]);
var inst_28531__$1 = (state_28579[(2)]);
var inst_28532 = cljs.core.get.call(null,inst_28531__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28533 = cljs.core.get.call(null,inst_28531__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28534 = cljs.core.get.call(null,inst_28531__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28579__$1 = (function (){var statearr_28607 = state_28579;
(statearr_28607[(10)] = inst_28531__$1);

(statearr_28607[(16)] = inst_28534);

(statearr_28607[(17)] = inst_28533);

return statearr_28607;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28579__$1,(10),inst_28532);
} else {
if((state_val_28580 === (5))){
var inst_28523 = (state_28579[(7)]);
var inst_28526 = cljs.core.seq_QMARK_.call(null,inst_28523);
var state_28579__$1 = state_28579;
if(inst_28526){
var statearr_28608_28648 = state_28579__$1;
(statearr_28608_28648[(1)] = (7));

} else {
var statearr_28609_28649 = state_28579__$1;
(statearr_28609_28649[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (14))){
var inst_28539 = (state_28579[(15)]);
var inst_28546 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28539);
var state_28579__$1 = state_28579;
var statearr_28610_28650 = state_28579__$1;
(statearr_28610_28650[(2)] = inst_28546);

(statearr_28610_28650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (26))){
var inst_28569 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
var statearr_28611_28651 = state_28579__$1;
(statearr_28611_28651[(2)] = inst_28569);

(statearr_28611_28651[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (16))){
var inst_28549 = (state_28579[(2)]);
var inst_28550 = calc_state.call(null);
var inst_28523 = inst_28550;
var state_28579__$1 = (function (){var statearr_28612 = state_28579;
(statearr_28612[(18)] = inst_28549);

(statearr_28612[(7)] = inst_28523);

return statearr_28612;
})();
var statearr_28613_28652 = state_28579__$1;
(statearr_28613_28652[(2)] = null);

(statearr_28613_28652[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (10))){
var inst_28538 = (state_28579[(8)]);
var inst_28539 = (state_28579[(15)]);
var inst_28537 = (state_28579[(2)]);
var inst_28538__$1 = cljs.core.nth.call(null,inst_28537,(0),null);
var inst_28539__$1 = cljs.core.nth.call(null,inst_28537,(1),null);
var inst_28540 = (inst_28538__$1 == null);
var inst_28541 = cljs.core._EQ_.call(null,inst_28539__$1,change);
var inst_28542 = (inst_28540) || (inst_28541);
var state_28579__$1 = (function (){var statearr_28614 = state_28579;
(statearr_28614[(8)] = inst_28538__$1);

(statearr_28614[(15)] = inst_28539__$1);

return statearr_28614;
})();
if(cljs.core.truth_(inst_28542)){
var statearr_28615_28653 = state_28579__$1;
(statearr_28615_28653[(1)] = (11));

} else {
var statearr_28616_28654 = state_28579__$1;
(statearr_28616_28654[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (18))){
var inst_28539 = (state_28579[(15)]);
var inst_28534 = (state_28579[(16)]);
var inst_28533 = (state_28579[(17)]);
var inst_28556 = cljs.core.empty_QMARK_.call(null,inst_28534);
var inst_28557 = inst_28533.call(null,inst_28539);
var inst_28558 = cljs.core.not.call(null,inst_28557);
var inst_28559 = (inst_28556) && (inst_28558);
var state_28579__$1 = state_28579;
var statearr_28617_28655 = state_28579__$1;
(statearr_28617_28655[(2)] = inst_28559);

(statearr_28617_28655[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (8))){
var inst_28523 = (state_28579[(7)]);
var state_28579__$1 = state_28579;
var statearr_28618_28656 = state_28579__$1;
(statearr_28618_28656[(2)] = inst_28523);

(statearr_28618_28656[(1)] = (9));


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
});})(c__21439__auto___28626,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21377__auto__,c__21439__auto___28626,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21378__auto__ = null;
var cljs$core$async$mix_$_state_machine__21378__auto____0 = (function (){
var statearr_28622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28622[(0)] = cljs$core$async$mix_$_state_machine__21378__auto__);

(statearr_28622[(1)] = (1));

return statearr_28622;
});
var cljs$core$async$mix_$_state_machine__21378__auto____1 = (function (state_28579){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_28579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e28623){if((e28623 instanceof Object)){
var ex__21381__auto__ = e28623;
var statearr_28624_28657 = state_28579;
(statearr_28624_28657[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28658 = state_28579;
state_28579 = G__28658;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21378__auto__ = function(state_28579){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21378__auto____1.call(this,state_28579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21378__auto____0;
cljs$core$async$mix_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21378__auto____1;
return cljs$core$async$mix_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___28626,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21441__auto__ = (function (){var statearr_28625 = f__21440__auto__.call(null);
(statearr_28625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___28626);

return statearr_28625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___28626,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj28660 = {};
return obj28660;
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
var G__28662 = arguments.length;
switch (G__28662) {
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
var G__28666 = arguments.length;
switch (G__28666) {
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
return (function (p1__28664_SHARP_){
if(cljs.core.truth_(p1__28664_SHARP_.call(null,topic))){
return p1__28664_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28664_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28667 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28667 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta28668){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta28668 = meta28668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28667.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28667.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28667.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28667.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28667.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28667.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28669){
var self__ = this;
var _28669__$1 = this;
return self__.meta28668;
});})(mults,ensure_mult))
;

cljs.core.async.t28667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28669,meta28668__$1){
var self__ = this;
var _28669__$1 = this;
return (new cljs.core.async.t28667(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta28668__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28667.cljs$lang$type = true;

cljs.core.async.t28667.cljs$lang$ctorStr = "cljs.core.async/t28667";

cljs.core.async.t28667.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t28667");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28667 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28667(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28668){
return (new cljs.core.async.t28667(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28668));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28667(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21439__auto___28790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___28790,mults,ensure_mult,p){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___28790,mults,ensure_mult,p){
return (function (state_28741){
var state_val_28742 = (state_28741[(1)]);
if((state_val_28742 === (7))){
var inst_28737 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28743_28791 = state_28741__$1;
(statearr_28743_28791[(2)] = inst_28737);

(statearr_28743_28791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (20))){
var state_28741__$1 = state_28741;
var statearr_28744_28792 = state_28741__$1;
(statearr_28744_28792[(2)] = null);

(statearr_28744_28792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (1))){
var state_28741__$1 = state_28741;
var statearr_28745_28793 = state_28741__$1;
(statearr_28745_28793[(2)] = null);

(statearr_28745_28793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (24))){
var inst_28720 = (state_28741[(7)]);
var inst_28729 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28720);
var state_28741__$1 = state_28741;
var statearr_28746_28794 = state_28741__$1;
(statearr_28746_28794[(2)] = inst_28729);

(statearr_28746_28794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (4))){
var inst_28672 = (state_28741[(8)]);
var inst_28672__$1 = (state_28741[(2)]);
var inst_28673 = (inst_28672__$1 == null);
var state_28741__$1 = (function (){var statearr_28747 = state_28741;
(statearr_28747[(8)] = inst_28672__$1);

return statearr_28747;
})();
if(cljs.core.truth_(inst_28673)){
var statearr_28748_28795 = state_28741__$1;
(statearr_28748_28795[(1)] = (5));

} else {
var statearr_28749_28796 = state_28741__$1;
(statearr_28749_28796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (15))){
var inst_28714 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28750_28797 = state_28741__$1;
(statearr_28750_28797[(2)] = inst_28714);

(statearr_28750_28797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (21))){
var inst_28734 = (state_28741[(2)]);
var state_28741__$1 = (function (){var statearr_28751 = state_28741;
(statearr_28751[(9)] = inst_28734);

return statearr_28751;
})();
var statearr_28752_28798 = state_28741__$1;
(statearr_28752_28798[(2)] = null);

(statearr_28752_28798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (13))){
var inst_28696 = (state_28741[(10)]);
var inst_28698 = cljs.core.chunked_seq_QMARK_.call(null,inst_28696);
var state_28741__$1 = state_28741;
if(inst_28698){
var statearr_28753_28799 = state_28741__$1;
(statearr_28753_28799[(1)] = (16));

} else {
var statearr_28754_28800 = state_28741__$1;
(statearr_28754_28800[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (22))){
var inst_28726 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
if(cljs.core.truth_(inst_28726)){
var statearr_28755_28801 = state_28741__$1;
(statearr_28755_28801[(1)] = (23));

} else {
var statearr_28756_28802 = state_28741__$1;
(statearr_28756_28802[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (6))){
var inst_28720 = (state_28741[(7)]);
var inst_28722 = (state_28741[(11)]);
var inst_28672 = (state_28741[(8)]);
var inst_28720__$1 = topic_fn.call(null,inst_28672);
var inst_28721 = cljs.core.deref.call(null,mults);
var inst_28722__$1 = cljs.core.get.call(null,inst_28721,inst_28720__$1);
var state_28741__$1 = (function (){var statearr_28757 = state_28741;
(statearr_28757[(7)] = inst_28720__$1);

(statearr_28757[(11)] = inst_28722__$1);

return statearr_28757;
})();
if(cljs.core.truth_(inst_28722__$1)){
var statearr_28758_28803 = state_28741__$1;
(statearr_28758_28803[(1)] = (19));

} else {
var statearr_28759_28804 = state_28741__$1;
(statearr_28759_28804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (25))){
var inst_28731 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28760_28805 = state_28741__$1;
(statearr_28760_28805[(2)] = inst_28731);

(statearr_28760_28805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (17))){
var inst_28696 = (state_28741[(10)]);
var inst_28705 = cljs.core.first.call(null,inst_28696);
var inst_28706 = cljs.core.async.muxch_STAR_.call(null,inst_28705);
var inst_28707 = cljs.core.async.close_BANG_.call(null,inst_28706);
var inst_28708 = cljs.core.next.call(null,inst_28696);
var inst_28682 = inst_28708;
var inst_28683 = null;
var inst_28684 = (0);
var inst_28685 = (0);
var state_28741__$1 = (function (){var statearr_28761 = state_28741;
(statearr_28761[(12)] = inst_28707);

(statearr_28761[(13)] = inst_28685);

(statearr_28761[(14)] = inst_28684);

(statearr_28761[(15)] = inst_28682);

(statearr_28761[(16)] = inst_28683);

return statearr_28761;
})();
var statearr_28762_28806 = state_28741__$1;
(statearr_28762_28806[(2)] = null);

(statearr_28762_28806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (3))){
var inst_28739 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28741__$1,inst_28739);
} else {
if((state_val_28742 === (12))){
var inst_28716 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28763_28807 = state_28741__$1;
(statearr_28763_28807[(2)] = inst_28716);

(statearr_28763_28807[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (2))){
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28741__$1,(4),ch);
} else {
if((state_val_28742 === (23))){
var state_28741__$1 = state_28741;
var statearr_28764_28808 = state_28741__$1;
(statearr_28764_28808[(2)] = null);

(statearr_28764_28808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (19))){
var inst_28722 = (state_28741[(11)]);
var inst_28672 = (state_28741[(8)]);
var inst_28724 = cljs.core.async.muxch_STAR_.call(null,inst_28722);
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28741__$1,(22),inst_28724,inst_28672);
} else {
if((state_val_28742 === (11))){
var inst_28696 = (state_28741[(10)]);
var inst_28682 = (state_28741[(15)]);
var inst_28696__$1 = cljs.core.seq.call(null,inst_28682);
var state_28741__$1 = (function (){var statearr_28765 = state_28741;
(statearr_28765[(10)] = inst_28696__$1);

return statearr_28765;
})();
if(inst_28696__$1){
var statearr_28766_28809 = state_28741__$1;
(statearr_28766_28809[(1)] = (13));

} else {
var statearr_28767_28810 = state_28741__$1;
(statearr_28767_28810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (9))){
var inst_28718 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28768_28811 = state_28741__$1;
(statearr_28768_28811[(2)] = inst_28718);

(statearr_28768_28811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (5))){
var inst_28679 = cljs.core.deref.call(null,mults);
var inst_28680 = cljs.core.vals.call(null,inst_28679);
var inst_28681 = cljs.core.seq.call(null,inst_28680);
var inst_28682 = inst_28681;
var inst_28683 = null;
var inst_28684 = (0);
var inst_28685 = (0);
var state_28741__$1 = (function (){var statearr_28769 = state_28741;
(statearr_28769[(13)] = inst_28685);

(statearr_28769[(14)] = inst_28684);

(statearr_28769[(15)] = inst_28682);

(statearr_28769[(16)] = inst_28683);

return statearr_28769;
})();
var statearr_28770_28812 = state_28741__$1;
(statearr_28770_28812[(2)] = null);

(statearr_28770_28812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (14))){
var state_28741__$1 = state_28741;
var statearr_28774_28813 = state_28741__$1;
(statearr_28774_28813[(2)] = null);

(statearr_28774_28813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (16))){
var inst_28696 = (state_28741[(10)]);
var inst_28700 = cljs.core.chunk_first.call(null,inst_28696);
var inst_28701 = cljs.core.chunk_rest.call(null,inst_28696);
var inst_28702 = cljs.core.count.call(null,inst_28700);
var inst_28682 = inst_28701;
var inst_28683 = inst_28700;
var inst_28684 = inst_28702;
var inst_28685 = (0);
var state_28741__$1 = (function (){var statearr_28775 = state_28741;
(statearr_28775[(13)] = inst_28685);

(statearr_28775[(14)] = inst_28684);

(statearr_28775[(15)] = inst_28682);

(statearr_28775[(16)] = inst_28683);

return statearr_28775;
})();
var statearr_28776_28814 = state_28741__$1;
(statearr_28776_28814[(2)] = null);

(statearr_28776_28814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (10))){
var inst_28685 = (state_28741[(13)]);
var inst_28684 = (state_28741[(14)]);
var inst_28682 = (state_28741[(15)]);
var inst_28683 = (state_28741[(16)]);
var inst_28690 = cljs.core._nth.call(null,inst_28683,inst_28685);
var inst_28691 = cljs.core.async.muxch_STAR_.call(null,inst_28690);
var inst_28692 = cljs.core.async.close_BANG_.call(null,inst_28691);
var inst_28693 = (inst_28685 + (1));
var tmp28771 = inst_28684;
var tmp28772 = inst_28682;
var tmp28773 = inst_28683;
var inst_28682__$1 = tmp28772;
var inst_28683__$1 = tmp28773;
var inst_28684__$1 = tmp28771;
var inst_28685__$1 = inst_28693;
var state_28741__$1 = (function (){var statearr_28777 = state_28741;
(statearr_28777[(17)] = inst_28692);

(statearr_28777[(13)] = inst_28685__$1);

(statearr_28777[(14)] = inst_28684__$1);

(statearr_28777[(15)] = inst_28682__$1);

(statearr_28777[(16)] = inst_28683__$1);

return statearr_28777;
})();
var statearr_28778_28815 = state_28741__$1;
(statearr_28778_28815[(2)] = null);

(statearr_28778_28815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (18))){
var inst_28711 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
var statearr_28779_28816 = state_28741__$1;
(statearr_28779_28816[(2)] = inst_28711);

(statearr_28779_28816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28742 === (8))){
var inst_28685 = (state_28741[(13)]);
var inst_28684 = (state_28741[(14)]);
var inst_28687 = (inst_28685 < inst_28684);
var inst_28688 = inst_28687;
var state_28741__$1 = state_28741;
if(cljs.core.truth_(inst_28688)){
var statearr_28780_28817 = state_28741__$1;
(statearr_28780_28817[(1)] = (10));

} else {
var statearr_28781_28818 = state_28741__$1;
(statearr_28781_28818[(1)] = (11));

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
});})(c__21439__auto___28790,mults,ensure_mult,p))
;
return ((function (switch__21377__auto__,c__21439__auto___28790,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_28785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28785[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_28785[(1)] = (1));

return statearr_28785;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_28741){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_28741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e28786){if((e28786 instanceof Object)){
var ex__21381__auto__ = e28786;
var statearr_28787_28819 = state_28741;
(statearr_28787_28819[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28820 = state_28741;
state_28741 = G__28820;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_28741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_28741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___28790,mults,ensure_mult,p))
})();
var state__21441__auto__ = (function (){var statearr_28788 = f__21440__auto__.call(null);
(statearr_28788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___28790);

return statearr_28788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___28790,mults,ensure_mult,p))
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
var G__28822 = arguments.length;
switch (G__28822) {
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
var G__28825 = arguments.length;
switch (G__28825) {
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
var G__28828 = arguments.length;
switch (G__28828) {
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
var c__21439__auto___28898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___28898,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___28898,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28867){
var state_val_28868 = (state_28867[(1)]);
if((state_val_28868 === (7))){
var state_28867__$1 = state_28867;
var statearr_28869_28899 = state_28867__$1;
(statearr_28869_28899[(2)] = null);

(statearr_28869_28899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (1))){
var state_28867__$1 = state_28867;
var statearr_28870_28900 = state_28867__$1;
(statearr_28870_28900[(2)] = null);

(statearr_28870_28900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (4))){
var inst_28831 = (state_28867[(7)]);
var inst_28833 = (inst_28831 < cnt);
var state_28867__$1 = state_28867;
if(cljs.core.truth_(inst_28833)){
var statearr_28871_28901 = state_28867__$1;
(statearr_28871_28901[(1)] = (6));

} else {
var statearr_28872_28902 = state_28867__$1;
(statearr_28872_28902[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (15))){
var inst_28863 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28873_28903 = state_28867__$1;
(statearr_28873_28903[(2)] = inst_28863);

(statearr_28873_28903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (13))){
var inst_28856 = cljs.core.async.close_BANG_.call(null,out);
var state_28867__$1 = state_28867;
var statearr_28874_28904 = state_28867__$1;
(statearr_28874_28904[(2)] = inst_28856);

(statearr_28874_28904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (6))){
var state_28867__$1 = state_28867;
var statearr_28875_28905 = state_28867__$1;
(statearr_28875_28905[(2)] = null);

(statearr_28875_28905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (3))){
var inst_28865 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28867__$1,inst_28865);
} else {
if((state_val_28868 === (12))){
var inst_28853 = (state_28867[(8)]);
var inst_28853__$1 = (state_28867[(2)]);
var inst_28854 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28853__$1);
var state_28867__$1 = (function (){var statearr_28876 = state_28867;
(statearr_28876[(8)] = inst_28853__$1);

return statearr_28876;
})();
if(cljs.core.truth_(inst_28854)){
var statearr_28877_28906 = state_28867__$1;
(statearr_28877_28906[(1)] = (13));

} else {
var statearr_28878_28907 = state_28867__$1;
(statearr_28878_28907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (2))){
var inst_28830 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28831 = (0);
var state_28867__$1 = (function (){var statearr_28879 = state_28867;
(statearr_28879[(7)] = inst_28831);

(statearr_28879[(9)] = inst_28830);

return statearr_28879;
})();
var statearr_28880_28908 = state_28867__$1;
(statearr_28880_28908[(2)] = null);

(statearr_28880_28908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (11))){
var inst_28831 = (state_28867[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28867,(10),Object,null,(9));
var inst_28840 = chs__$1.call(null,inst_28831);
var inst_28841 = done.call(null,inst_28831);
var inst_28842 = cljs.core.async.take_BANG_.call(null,inst_28840,inst_28841);
var state_28867__$1 = state_28867;
var statearr_28881_28909 = state_28867__$1;
(statearr_28881_28909[(2)] = inst_28842);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28867__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (9))){
var inst_28831 = (state_28867[(7)]);
var inst_28844 = (state_28867[(2)]);
var inst_28845 = (inst_28831 + (1));
var inst_28831__$1 = inst_28845;
var state_28867__$1 = (function (){var statearr_28882 = state_28867;
(statearr_28882[(10)] = inst_28844);

(statearr_28882[(7)] = inst_28831__$1);

return statearr_28882;
})();
var statearr_28883_28910 = state_28867__$1;
(statearr_28883_28910[(2)] = null);

(statearr_28883_28910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (5))){
var inst_28851 = (state_28867[(2)]);
var state_28867__$1 = (function (){var statearr_28884 = state_28867;
(statearr_28884[(11)] = inst_28851);

return statearr_28884;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28867__$1,(12),dchan);
} else {
if((state_val_28868 === (14))){
var inst_28853 = (state_28867[(8)]);
var inst_28858 = cljs.core.apply.call(null,f,inst_28853);
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28867__$1,(16),out,inst_28858);
} else {
if((state_val_28868 === (16))){
var inst_28860 = (state_28867[(2)]);
var state_28867__$1 = (function (){var statearr_28885 = state_28867;
(statearr_28885[(12)] = inst_28860);

return statearr_28885;
})();
var statearr_28886_28911 = state_28867__$1;
(statearr_28886_28911[(2)] = null);

(statearr_28886_28911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (10))){
var inst_28835 = (state_28867[(2)]);
var inst_28836 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28867__$1 = (function (){var statearr_28887 = state_28867;
(statearr_28887[(13)] = inst_28835);

return statearr_28887;
})();
var statearr_28888_28912 = state_28867__$1;
(statearr_28888_28912[(2)] = inst_28836);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28867__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (8))){
var inst_28849 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28889_28913 = state_28867__$1;
(statearr_28889_28913[(2)] = inst_28849);

(statearr_28889_28913[(1)] = (5));


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
});})(c__21439__auto___28898,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21377__auto__,c__21439__auto___28898,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_28893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28893[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_28893[(1)] = (1));

return statearr_28893;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_28867){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_28867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e28894){if((e28894 instanceof Object)){
var ex__21381__auto__ = e28894;
var statearr_28895_28914 = state_28867;
(statearr_28895_28914[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28915 = state_28867;
state_28867 = G__28915;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_28867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_28867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___28898,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21441__auto__ = (function (){var statearr_28896 = f__21440__auto__.call(null);
(statearr_28896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___28898);

return statearr_28896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___28898,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28918 = arguments.length;
switch (G__28918) {
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
var c__21439__auto___28973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___28973,out){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___28973,out){
return (function (state_28948){
var state_val_28949 = (state_28948[(1)]);
if((state_val_28949 === (7))){
var inst_28928 = (state_28948[(7)]);
var inst_28927 = (state_28948[(8)]);
var inst_28927__$1 = (state_28948[(2)]);
var inst_28928__$1 = cljs.core.nth.call(null,inst_28927__$1,(0),null);
var inst_28929 = cljs.core.nth.call(null,inst_28927__$1,(1),null);
var inst_28930 = (inst_28928__$1 == null);
var state_28948__$1 = (function (){var statearr_28950 = state_28948;
(statearr_28950[(9)] = inst_28929);

(statearr_28950[(7)] = inst_28928__$1);

(statearr_28950[(8)] = inst_28927__$1);

return statearr_28950;
})();
if(cljs.core.truth_(inst_28930)){
var statearr_28951_28974 = state_28948__$1;
(statearr_28951_28974[(1)] = (8));

} else {
var statearr_28952_28975 = state_28948__$1;
(statearr_28952_28975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (1))){
var inst_28919 = cljs.core.vec.call(null,chs);
var inst_28920 = inst_28919;
var state_28948__$1 = (function (){var statearr_28953 = state_28948;
(statearr_28953[(10)] = inst_28920);

return statearr_28953;
})();
var statearr_28954_28976 = state_28948__$1;
(statearr_28954_28976[(2)] = null);

(statearr_28954_28976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (4))){
var inst_28920 = (state_28948[(10)]);
var state_28948__$1 = state_28948;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28948__$1,(7),inst_28920);
} else {
if((state_val_28949 === (6))){
var inst_28944 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28955_28977 = state_28948__$1;
(statearr_28955_28977[(2)] = inst_28944);

(statearr_28955_28977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (3))){
var inst_28946 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28948__$1,inst_28946);
} else {
if((state_val_28949 === (2))){
var inst_28920 = (state_28948[(10)]);
var inst_28922 = cljs.core.count.call(null,inst_28920);
var inst_28923 = (inst_28922 > (0));
var state_28948__$1 = state_28948;
if(cljs.core.truth_(inst_28923)){
var statearr_28957_28978 = state_28948__$1;
(statearr_28957_28978[(1)] = (4));

} else {
var statearr_28958_28979 = state_28948__$1;
(statearr_28958_28979[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (11))){
var inst_28920 = (state_28948[(10)]);
var inst_28937 = (state_28948[(2)]);
var tmp28956 = inst_28920;
var inst_28920__$1 = tmp28956;
var state_28948__$1 = (function (){var statearr_28959 = state_28948;
(statearr_28959[(10)] = inst_28920__$1);

(statearr_28959[(11)] = inst_28937);

return statearr_28959;
})();
var statearr_28960_28980 = state_28948__$1;
(statearr_28960_28980[(2)] = null);

(statearr_28960_28980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (9))){
var inst_28928 = (state_28948[(7)]);
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28948__$1,(11),out,inst_28928);
} else {
if((state_val_28949 === (5))){
var inst_28942 = cljs.core.async.close_BANG_.call(null,out);
var state_28948__$1 = state_28948;
var statearr_28961_28981 = state_28948__$1;
(statearr_28961_28981[(2)] = inst_28942);

(statearr_28961_28981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (10))){
var inst_28940 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28962_28982 = state_28948__$1;
(statearr_28962_28982[(2)] = inst_28940);

(statearr_28962_28982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (8))){
var inst_28920 = (state_28948[(10)]);
var inst_28929 = (state_28948[(9)]);
var inst_28928 = (state_28948[(7)]);
var inst_28927 = (state_28948[(8)]);
var inst_28932 = (function (){var c = inst_28929;
var v = inst_28928;
var vec__28925 = inst_28927;
var cs = inst_28920;
return ((function (c,v,vec__28925,cs,inst_28920,inst_28929,inst_28928,inst_28927,state_val_28949,c__21439__auto___28973,out){
return (function (p1__28916_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28916_SHARP_);
});
;})(c,v,vec__28925,cs,inst_28920,inst_28929,inst_28928,inst_28927,state_val_28949,c__21439__auto___28973,out))
})();
var inst_28933 = cljs.core.filterv.call(null,inst_28932,inst_28920);
var inst_28920__$1 = inst_28933;
var state_28948__$1 = (function (){var statearr_28963 = state_28948;
(statearr_28963[(10)] = inst_28920__$1);

return statearr_28963;
})();
var statearr_28964_28983 = state_28948__$1;
(statearr_28964_28983[(2)] = null);

(statearr_28964_28983[(1)] = (2));


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
});})(c__21439__auto___28973,out))
;
return ((function (switch__21377__auto__,c__21439__auto___28973,out){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_28968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28968[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_28968[(1)] = (1));

return statearr_28968;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_28948){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_28948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e28969){if((e28969 instanceof Object)){
var ex__21381__auto__ = e28969;
var statearr_28970_28984 = state_28948;
(statearr_28970_28984[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28985 = state_28948;
state_28948 = G__28985;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_28948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_28948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___28973,out))
})();
var state__21441__auto__ = (function (){var statearr_28971 = f__21440__auto__.call(null);
(statearr_28971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___28973);

return statearr_28971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___28973,out))
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
var G__28987 = arguments.length;
switch (G__28987) {
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
var c__21439__auto___29035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___29035,out){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___29035,out){
return (function (state_29011){
var state_val_29012 = (state_29011[(1)]);
if((state_val_29012 === (7))){
var inst_28993 = (state_29011[(7)]);
var inst_28993__$1 = (state_29011[(2)]);
var inst_28994 = (inst_28993__$1 == null);
var inst_28995 = cljs.core.not.call(null,inst_28994);
var state_29011__$1 = (function (){var statearr_29013 = state_29011;
(statearr_29013[(7)] = inst_28993__$1);

return statearr_29013;
})();
if(inst_28995){
var statearr_29014_29036 = state_29011__$1;
(statearr_29014_29036[(1)] = (8));

} else {
var statearr_29015_29037 = state_29011__$1;
(statearr_29015_29037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (1))){
var inst_28988 = (0);
var state_29011__$1 = (function (){var statearr_29016 = state_29011;
(statearr_29016[(8)] = inst_28988);

return statearr_29016;
})();
var statearr_29017_29038 = state_29011__$1;
(statearr_29017_29038[(2)] = null);

(statearr_29017_29038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (4))){
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29011__$1,(7),ch);
} else {
if((state_val_29012 === (6))){
var inst_29006 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29018_29039 = state_29011__$1;
(statearr_29018_29039[(2)] = inst_29006);

(statearr_29018_29039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (3))){
var inst_29008 = (state_29011[(2)]);
var inst_29009 = cljs.core.async.close_BANG_.call(null,out);
var state_29011__$1 = (function (){var statearr_29019 = state_29011;
(statearr_29019[(9)] = inst_29008);

return statearr_29019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29011__$1,inst_29009);
} else {
if((state_val_29012 === (2))){
var inst_28988 = (state_29011[(8)]);
var inst_28990 = (inst_28988 < n);
var state_29011__$1 = state_29011;
if(cljs.core.truth_(inst_28990)){
var statearr_29020_29040 = state_29011__$1;
(statearr_29020_29040[(1)] = (4));

} else {
var statearr_29021_29041 = state_29011__$1;
(statearr_29021_29041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (11))){
var inst_28988 = (state_29011[(8)]);
var inst_28998 = (state_29011[(2)]);
var inst_28999 = (inst_28988 + (1));
var inst_28988__$1 = inst_28999;
var state_29011__$1 = (function (){var statearr_29022 = state_29011;
(statearr_29022[(8)] = inst_28988__$1);

(statearr_29022[(10)] = inst_28998);

return statearr_29022;
})();
var statearr_29023_29042 = state_29011__$1;
(statearr_29023_29042[(2)] = null);

(statearr_29023_29042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (9))){
var state_29011__$1 = state_29011;
var statearr_29024_29043 = state_29011__$1;
(statearr_29024_29043[(2)] = null);

(statearr_29024_29043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (5))){
var state_29011__$1 = state_29011;
var statearr_29025_29044 = state_29011__$1;
(statearr_29025_29044[(2)] = null);

(statearr_29025_29044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (10))){
var inst_29003 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29026_29045 = state_29011__$1;
(statearr_29026_29045[(2)] = inst_29003);

(statearr_29026_29045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (8))){
var inst_28993 = (state_29011[(7)]);
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29011__$1,(11),out,inst_28993);
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
});})(c__21439__auto___29035,out))
;
return ((function (switch__21377__auto__,c__21439__auto___29035,out){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_29030 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29030[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_29030[(1)] = (1));

return statearr_29030;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_29011){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_29011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e29031){if((e29031 instanceof Object)){
var ex__21381__auto__ = e29031;
var statearr_29032_29046 = state_29011;
(statearr_29032_29046[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29047 = state_29011;
state_29011 = G__29047;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_29011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_29011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___29035,out))
})();
var state__21441__auto__ = (function (){var statearr_29033 = f__21440__auto__.call(null);
(statearr_29033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___29035);

return statearr_29033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___29035,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29055 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29055 = (function (ch,f,map_LT_,meta29056){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29056 = meta29056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29055.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29055.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29058 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29058 = (function (fn1,_,meta29056,map_LT_,f,ch,meta29059){
this.fn1 = fn1;
this._ = _;
this.meta29056 = meta29056;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29059 = meta29059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29058.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29048_SHARP_){
return f1.call(null,(((p1__29048_SHARP_ == null))?null:self__.f.call(null,p1__29048_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29060){
var self__ = this;
var _29060__$1 = this;
return self__.meta29059;
});})(___$1))
;

cljs.core.async.t29058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29060,meta29059__$1){
var self__ = this;
var _29060__$1 = this;
return (new cljs.core.async.t29058(self__.fn1,self__._,self__.meta29056,self__.map_LT_,self__.f,self__.ch,meta29059__$1));
});})(___$1))
;

cljs.core.async.t29058.cljs$lang$type = true;

cljs.core.async.t29058.cljs$lang$ctorStr = "cljs.core.async/t29058";

cljs.core.async.t29058.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t29058");
});})(___$1))
;

cljs.core.async.__GT_t29058 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29058(fn1__$1,___$2,meta29056__$1,map_LT___$1,f__$1,ch__$1,meta29059){
return (new cljs.core.async.t29058(fn1__$1,___$2,meta29056__$1,map_LT___$1,f__$1,ch__$1,meta29059));
});})(___$1))
;

}

return (new cljs.core.async.t29058(fn1,___$1,self__.meta29056,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t29055.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29057){
var self__ = this;
var _29057__$1 = this;
return self__.meta29056;
});

cljs.core.async.t29055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29057,meta29056__$1){
var self__ = this;
var _29057__$1 = this;
return (new cljs.core.async.t29055(self__.ch,self__.f,self__.map_LT_,meta29056__$1));
});

cljs.core.async.t29055.cljs$lang$type = true;

cljs.core.async.t29055.cljs$lang$ctorStr = "cljs.core.async/t29055";

cljs.core.async.t29055.cljs$lang$ctorPrWriter = (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t29055");
});

cljs.core.async.__GT_t29055 = (function cljs$core$async$map_LT__$___GT_t29055(ch__$1,f__$1,map_LT___$1,meta29056){
return (new cljs.core.async.t29055(ch__$1,f__$1,map_LT___$1,meta29056));
});

}

return (new cljs.core.async.t29055(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29064 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29064 = (function (ch,f,map_GT_,meta29065){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29065 = meta29065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29064.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29064.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29064.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29066){
var self__ = this;
var _29066__$1 = this;
return self__.meta29065;
});

cljs.core.async.t29064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29066,meta29065__$1){
var self__ = this;
var _29066__$1 = this;
return (new cljs.core.async.t29064(self__.ch,self__.f,self__.map_GT_,meta29065__$1));
});

cljs.core.async.t29064.cljs$lang$type = true;

cljs.core.async.t29064.cljs$lang$ctorStr = "cljs.core.async/t29064";

cljs.core.async.t29064.cljs$lang$ctorPrWriter = (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t29064");
});

cljs.core.async.__GT_t29064 = (function cljs$core$async$map_GT__$___GT_t29064(ch__$1,f__$1,map_GT___$1,meta29065){
return (new cljs.core.async.t29064(ch__$1,f__$1,map_GT___$1,meta29065));
});

}

return (new cljs.core.async.t29064(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29070 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29070 = (function (ch,p,filter_GT_,meta29071){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29071 = meta29071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29070.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29070.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29070.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29070.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29070.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29070.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29070.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29072){
var self__ = this;
var _29072__$1 = this;
return self__.meta29071;
});

cljs.core.async.t29070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29072,meta29071__$1){
var self__ = this;
var _29072__$1 = this;
return (new cljs.core.async.t29070(self__.ch,self__.p,self__.filter_GT_,meta29071__$1));
});

cljs.core.async.t29070.cljs$lang$type = true;

cljs.core.async.t29070.cljs$lang$ctorStr = "cljs.core.async/t29070";

cljs.core.async.t29070.cljs$lang$ctorPrWriter = (function (this__18774__auto__,writer__18775__auto__,opt__18776__auto__){
return cljs.core._write.call(null,writer__18775__auto__,"cljs.core.async/t29070");
});

cljs.core.async.__GT_t29070 = (function cljs$core$async$filter_GT__$___GT_t29070(ch__$1,p__$1,filter_GT___$1,meta29071){
return (new cljs.core.async.t29070(ch__$1,p__$1,filter_GT___$1,meta29071));
});

}

return (new cljs.core.async.t29070(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29074 = arguments.length;
switch (G__29074) {
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
var c__21439__auto___29117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___29117,out){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___29117,out){
return (function (state_29095){
var state_val_29096 = (state_29095[(1)]);
if((state_val_29096 === (7))){
var inst_29091 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
var statearr_29097_29118 = state_29095__$1;
(statearr_29097_29118[(2)] = inst_29091);

(statearr_29097_29118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (1))){
var state_29095__$1 = state_29095;
var statearr_29098_29119 = state_29095__$1;
(statearr_29098_29119[(2)] = null);

(statearr_29098_29119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (4))){
var inst_29077 = (state_29095[(7)]);
var inst_29077__$1 = (state_29095[(2)]);
var inst_29078 = (inst_29077__$1 == null);
var state_29095__$1 = (function (){var statearr_29099 = state_29095;
(statearr_29099[(7)] = inst_29077__$1);

return statearr_29099;
})();
if(cljs.core.truth_(inst_29078)){
var statearr_29100_29120 = state_29095__$1;
(statearr_29100_29120[(1)] = (5));

} else {
var statearr_29101_29121 = state_29095__$1;
(statearr_29101_29121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (6))){
var inst_29077 = (state_29095[(7)]);
var inst_29082 = p.call(null,inst_29077);
var state_29095__$1 = state_29095;
if(cljs.core.truth_(inst_29082)){
var statearr_29102_29122 = state_29095__$1;
(statearr_29102_29122[(1)] = (8));

} else {
var statearr_29103_29123 = state_29095__$1;
(statearr_29103_29123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (3))){
var inst_29093 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29095__$1,inst_29093);
} else {
if((state_val_29096 === (2))){
var state_29095__$1 = state_29095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29095__$1,(4),ch);
} else {
if((state_val_29096 === (11))){
var inst_29085 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
var statearr_29104_29124 = state_29095__$1;
(statearr_29104_29124[(2)] = inst_29085);

(statearr_29104_29124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (9))){
var state_29095__$1 = state_29095;
var statearr_29105_29125 = state_29095__$1;
(statearr_29105_29125[(2)] = null);

(statearr_29105_29125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (5))){
var inst_29080 = cljs.core.async.close_BANG_.call(null,out);
var state_29095__$1 = state_29095;
var statearr_29106_29126 = state_29095__$1;
(statearr_29106_29126[(2)] = inst_29080);

(statearr_29106_29126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (10))){
var inst_29088 = (state_29095[(2)]);
var state_29095__$1 = (function (){var statearr_29107 = state_29095;
(statearr_29107[(8)] = inst_29088);

return statearr_29107;
})();
var statearr_29108_29127 = state_29095__$1;
(statearr_29108_29127[(2)] = null);

(statearr_29108_29127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (8))){
var inst_29077 = (state_29095[(7)]);
var state_29095__$1 = state_29095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29095__$1,(11),out,inst_29077);
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
});})(c__21439__auto___29117,out))
;
return ((function (switch__21377__auto__,c__21439__auto___29117,out){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_29112 = [null,null,null,null,null,null,null,null,null];
(statearr_29112[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_29112[(1)] = (1));

return statearr_29112;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_29095){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_29095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e29113){if((e29113 instanceof Object)){
var ex__21381__auto__ = e29113;
var statearr_29114_29128 = state_29095;
(statearr_29114_29128[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29129 = state_29095;
state_29095 = G__29129;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_29095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_29095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___29117,out))
})();
var state__21441__auto__ = (function (){var statearr_29115 = f__21440__auto__.call(null);
(statearr_29115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___29117);

return statearr_29115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___29117,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__29131 = arguments.length;
switch (G__29131) {
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
var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__){
return (function (state_29298){
var state_val_29299 = (state_29298[(1)]);
if((state_val_29299 === (7))){
var inst_29294 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29300_29341 = state_29298__$1;
(statearr_29300_29341[(2)] = inst_29294);

(statearr_29300_29341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (20))){
var inst_29264 = (state_29298[(7)]);
var inst_29275 = (state_29298[(2)]);
var inst_29276 = cljs.core.next.call(null,inst_29264);
var inst_29250 = inst_29276;
var inst_29251 = null;
var inst_29252 = (0);
var inst_29253 = (0);
var state_29298__$1 = (function (){var statearr_29301 = state_29298;
(statearr_29301[(8)] = inst_29250);

(statearr_29301[(9)] = inst_29275);

(statearr_29301[(10)] = inst_29251);

(statearr_29301[(11)] = inst_29252);

(statearr_29301[(12)] = inst_29253);

return statearr_29301;
})();
var statearr_29302_29342 = state_29298__$1;
(statearr_29302_29342[(2)] = null);

(statearr_29302_29342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (1))){
var state_29298__$1 = state_29298;
var statearr_29303_29343 = state_29298__$1;
(statearr_29303_29343[(2)] = null);

(statearr_29303_29343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (4))){
var inst_29239 = (state_29298[(13)]);
var inst_29239__$1 = (state_29298[(2)]);
var inst_29240 = (inst_29239__$1 == null);
var state_29298__$1 = (function (){var statearr_29304 = state_29298;
(statearr_29304[(13)] = inst_29239__$1);

return statearr_29304;
})();
if(cljs.core.truth_(inst_29240)){
var statearr_29305_29344 = state_29298__$1;
(statearr_29305_29344[(1)] = (5));

} else {
var statearr_29306_29345 = state_29298__$1;
(statearr_29306_29345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (15))){
var state_29298__$1 = state_29298;
var statearr_29310_29346 = state_29298__$1;
(statearr_29310_29346[(2)] = null);

(statearr_29310_29346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (21))){
var state_29298__$1 = state_29298;
var statearr_29311_29347 = state_29298__$1;
(statearr_29311_29347[(2)] = null);

(statearr_29311_29347[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (13))){
var inst_29250 = (state_29298[(8)]);
var inst_29251 = (state_29298[(10)]);
var inst_29252 = (state_29298[(11)]);
var inst_29253 = (state_29298[(12)]);
var inst_29260 = (state_29298[(2)]);
var inst_29261 = (inst_29253 + (1));
var tmp29307 = inst_29250;
var tmp29308 = inst_29251;
var tmp29309 = inst_29252;
var inst_29250__$1 = tmp29307;
var inst_29251__$1 = tmp29308;
var inst_29252__$1 = tmp29309;
var inst_29253__$1 = inst_29261;
var state_29298__$1 = (function (){var statearr_29312 = state_29298;
(statearr_29312[(14)] = inst_29260);

(statearr_29312[(8)] = inst_29250__$1);

(statearr_29312[(10)] = inst_29251__$1);

(statearr_29312[(11)] = inst_29252__$1);

(statearr_29312[(12)] = inst_29253__$1);

return statearr_29312;
})();
var statearr_29313_29348 = state_29298__$1;
(statearr_29313_29348[(2)] = null);

(statearr_29313_29348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (22))){
var state_29298__$1 = state_29298;
var statearr_29314_29349 = state_29298__$1;
(statearr_29314_29349[(2)] = null);

(statearr_29314_29349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (6))){
var inst_29239 = (state_29298[(13)]);
var inst_29248 = f.call(null,inst_29239);
var inst_29249 = cljs.core.seq.call(null,inst_29248);
var inst_29250 = inst_29249;
var inst_29251 = null;
var inst_29252 = (0);
var inst_29253 = (0);
var state_29298__$1 = (function (){var statearr_29315 = state_29298;
(statearr_29315[(8)] = inst_29250);

(statearr_29315[(10)] = inst_29251);

(statearr_29315[(11)] = inst_29252);

(statearr_29315[(12)] = inst_29253);

return statearr_29315;
})();
var statearr_29316_29350 = state_29298__$1;
(statearr_29316_29350[(2)] = null);

(statearr_29316_29350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (17))){
var inst_29264 = (state_29298[(7)]);
var inst_29268 = cljs.core.chunk_first.call(null,inst_29264);
var inst_29269 = cljs.core.chunk_rest.call(null,inst_29264);
var inst_29270 = cljs.core.count.call(null,inst_29268);
var inst_29250 = inst_29269;
var inst_29251 = inst_29268;
var inst_29252 = inst_29270;
var inst_29253 = (0);
var state_29298__$1 = (function (){var statearr_29317 = state_29298;
(statearr_29317[(8)] = inst_29250);

(statearr_29317[(10)] = inst_29251);

(statearr_29317[(11)] = inst_29252);

(statearr_29317[(12)] = inst_29253);

return statearr_29317;
})();
var statearr_29318_29351 = state_29298__$1;
(statearr_29318_29351[(2)] = null);

(statearr_29318_29351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (3))){
var inst_29296 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29298__$1,inst_29296);
} else {
if((state_val_29299 === (12))){
var inst_29284 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29319_29352 = state_29298__$1;
(statearr_29319_29352[(2)] = inst_29284);

(statearr_29319_29352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (2))){
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29298__$1,(4),in$);
} else {
if((state_val_29299 === (23))){
var inst_29292 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29320_29353 = state_29298__$1;
(statearr_29320_29353[(2)] = inst_29292);

(statearr_29320_29353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (19))){
var inst_29279 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29321_29354 = state_29298__$1;
(statearr_29321_29354[(2)] = inst_29279);

(statearr_29321_29354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (11))){
var inst_29250 = (state_29298[(8)]);
var inst_29264 = (state_29298[(7)]);
var inst_29264__$1 = cljs.core.seq.call(null,inst_29250);
var state_29298__$1 = (function (){var statearr_29322 = state_29298;
(statearr_29322[(7)] = inst_29264__$1);

return statearr_29322;
})();
if(inst_29264__$1){
var statearr_29323_29355 = state_29298__$1;
(statearr_29323_29355[(1)] = (14));

} else {
var statearr_29324_29356 = state_29298__$1;
(statearr_29324_29356[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (9))){
var inst_29286 = (state_29298[(2)]);
var inst_29287 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29298__$1 = (function (){var statearr_29325 = state_29298;
(statearr_29325[(15)] = inst_29286);

return statearr_29325;
})();
if(cljs.core.truth_(inst_29287)){
var statearr_29326_29357 = state_29298__$1;
(statearr_29326_29357[(1)] = (21));

} else {
var statearr_29327_29358 = state_29298__$1;
(statearr_29327_29358[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (5))){
var inst_29242 = cljs.core.async.close_BANG_.call(null,out);
var state_29298__$1 = state_29298;
var statearr_29328_29359 = state_29298__$1;
(statearr_29328_29359[(2)] = inst_29242);

(statearr_29328_29359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (14))){
var inst_29264 = (state_29298[(7)]);
var inst_29266 = cljs.core.chunked_seq_QMARK_.call(null,inst_29264);
var state_29298__$1 = state_29298;
if(inst_29266){
var statearr_29329_29360 = state_29298__$1;
(statearr_29329_29360[(1)] = (17));

} else {
var statearr_29330_29361 = state_29298__$1;
(statearr_29330_29361[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (16))){
var inst_29282 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29331_29362 = state_29298__$1;
(statearr_29331_29362[(2)] = inst_29282);

(statearr_29331_29362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (10))){
var inst_29251 = (state_29298[(10)]);
var inst_29253 = (state_29298[(12)]);
var inst_29258 = cljs.core._nth.call(null,inst_29251,inst_29253);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29298__$1,(13),out,inst_29258);
} else {
if((state_val_29299 === (18))){
var inst_29264 = (state_29298[(7)]);
var inst_29273 = cljs.core.first.call(null,inst_29264);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29298__$1,(20),out,inst_29273);
} else {
if((state_val_29299 === (8))){
var inst_29252 = (state_29298[(11)]);
var inst_29253 = (state_29298[(12)]);
var inst_29255 = (inst_29253 < inst_29252);
var inst_29256 = inst_29255;
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29256)){
var statearr_29332_29363 = state_29298__$1;
(statearr_29332_29363[(1)] = (10));

} else {
var statearr_29333_29364 = state_29298__$1;
(statearr_29333_29364[(1)] = (11));

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
});})(c__21439__auto__))
;
return ((function (switch__21377__auto__,c__21439__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21378__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21378__auto____0 = (function (){
var statearr_29337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29337[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21378__auto__);

(statearr_29337[(1)] = (1));

return statearr_29337;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21378__auto____1 = (function (state_29298){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_29298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e29338){if((e29338 instanceof Object)){
var ex__21381__auto__ = e29338;
var statearr_29339_29365 = state_29298;
(statearr_29339_29365[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29366 = state_29298;
state_29298 = G__29366;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21378__auto__ = function(state_29298){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21378__auto____1.call(this,state_29298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21378__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21378__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__))
})();
var state__21441__auto__ = (function (){var statearr_29340 = f__21440__auto__.call(null);
(statearr_29340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_29340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__))
);

return c__21439__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__29368 = arguments.length;
switch (G__29368) {
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
var G__29371 = arguments.length;
switch (G__29371) {
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
var G__29374 = arguments.length;
switch (G__29374) {
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
var c__21439__auto___29424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___29424,out){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___29424,out){
return (function (state_29398){
var state_val_29399 = (state_29398[(1)]);
if((state_val_29399 === (7))){
var inst_29393 = (state_29398[(2)]);
var state_29398__$1 = state_29398;
var statearr_29400_29425 = state_29398__$1;
(statearr_29400_29425[(2)] = inst_29393);

(statearr_29400_29425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (1))){
var inst_29375 = null;
var state_29398__$1 = (function (){var statearr_29401 = state_29398;
(statearr_29401[(7)] = inst_29375);

return statearr_29401;
})();
var statearr_29402_29426 = state_29398__$1;
(statearr_29402_29426[(2)] = null);

(statearr_29402_29426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (4))){
var inst_29378 = (state_29398[(8)]);
var inst_29378__$1 = (state_29398[(2)]);
var inst_29379 = (inst_29378__$1 == null);
var inst_29380 = cljs.core.not.call(null,inst_29379);
var state_29398__$1 = (function (){var statearr_29403 = state_29398;
(statearr_29403[(8)] = inst_29378__$1);

return statearr_29403;
})();
if(inst_29380){
var statearr_29404_29427 = state_29398__$1;
(statearr_29404_29427[(1)] = (5));

} else {
var statearr_29405_29428 = state_29398__$1;
(statearr_29405_29428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (6))){
var state_29398__$1 = state_29398;
var statearr_29406_29429 = state_29398__$1;
(statearr_29406_29429[(2)] = null);

(statearr_29406_29429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (3))){
var inst_29395 = (state_29398[(2)]);
var inst_29396 = cljs.core.async.close_BANG_.call(null,out);
var state_29398__$1 = (function (){var statearr_29407 = state_29398;
(statearr_29407[(9)] = inst_29395);

return statearr_29407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29398__$1,inst_29396);
} else {
if((state_val_29399 === (2))){
var state_29398__$1 = state_29398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29398__$1,(4),ch);
} else {
if((state_val_29399 === (11))){
var inst_29378 = (state_29398[(8)]);
var inst_29387 = (state_29398[(2)]);
var inst_29375 = inst_29378;
var state_29398__$1 = (function (){var statearr_29408 = state_29398;
(statearr_29408[(7)] = inst_29375);

(statearr_29408[(10)] = inst_29387);

return statearr_29408;
})();
var statearr_29409_29430 = state_29398__$1;
(statearr_29409_29430[(2)] = null);

(statearr_29409_29430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (9))){
var inst_29378 = (state_29398[(8)]);
var state_29398__$1 = state_29398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29398__$1,(11),out,inst_29378);
} else {
if((state_val_29399 === (5))){
var inst_29375 = (state_29398[(7)]);
var inst_29378 = (state_29398[(8)]);
var inst_29382 = cljs.core._EQ_.call(null,inst_29378,inst_29375);
var state_29398__$1 = state_29398;
if(inst_29382){
var statearr_29411_29431 = state_29398__$1;
(statearr_29411_29431[(1)] = (8));

} else {
var statearr_29412_29432 = state_29398__$1;
(statearr_29412_29432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (10))){
var inst_29390 = (state_29398[(2)]);
var state_29398__$1 = state_29398;
var statearr_29413_29433 = state_29398__$1;
(statearr_29413_29433[(2)] = inst_29390);

(statearr_29413_29433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29399 === (8))){
var inst_29375 = (state_29398[(7)]);
var tmp29410 = inst_29375;
var inst_29375__$1 = tmp29410;
var state_29398__$1 = (function (){var statearr_29414 = state_29398;
(statearr_29414[(7)] = inst_29375__$1);

return statearr_29414;
})();
var statearr_29415_29434 = state_29398__$1;
(statearr_29415_29434[(2)] = null);

(statearr_29415_29434[(1)] = (2));


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
});})(c__21439__auto___29424,out))
;
return ((function (switch__21377__auto__,c__21439__auto___29424,out){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_29419 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29419[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_29419[(1)] = (1));

return statearr_29419;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_29398){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_29398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e29420){if((e29420 instanceof Object)){
var ex__21381__auto__ = e29420;
var statearr_29421_29435 = state_29398;
(statearr_29421_29435[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29436 = state_29398;
state_29398 = G__29436;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_29398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_29398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___29424,out))
})();
var state__21441__auto__ = (function (){var statearr_29422 = f__21440__auto__.call(null);
(statearr_29422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___29424);

return statearr_29422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___29424,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__29438 = arguments.length;
switch (G__29438) {
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
var c__21439__auto___29507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___29507,out){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___29507,out){
return (function (state_29476){
var state_val_29477 = (state_29476[(1)]);
if((state_val_29477 === (7))){
var inst_29472 = (state_29476[(2)]);
var state_29476__$1 = state_29476;
var statearr_29478_29508 = state_29476__$1;
(statearr_29478_29508[(2)] = inst_29472);

(statearr_29478_29508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (1))){
var inst_29439 = (new Array(n));
var inst_29440 = inst_29439;
var inst_29441 = (0);
var state_29476__$1 = (function (){var statearr_29479 = state_29476;
(statearr_29479[(7)] = inst_29441);

(statearr_29479[(8)] = inst_29440);

return statearr_29479;
})();
var statearr_29480_29509 = state_29476__$1;
(statearr_29480_29509[(2)] = null);

(statearr_29480_29509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (4))){
var inst_29444 = (state_29476[(9)]);
var inst_29444__$1 = (state_29476[(2)]);
var inst_29445 = (inst_29444__$1 == null);
var inst_29446 = cljs.core.not.call(null,inst_29445);
var state_29476__$1 = (function (){var statearr_29481 = state_29476;
(statearr_29481[(9)] = inst_29444__$1);

return statearr_29481;
})();
if(inst_29446){
var statearr_29482_29510 = state_29476__$1;
(statearr_29482_29510[(1)] = (5));

} else {
var statearr_29483_29511 = state_29476__$1;
(statearr_29483_29511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (15))){
var inst_29466 = (state_29476[(2)]);
var state_29476__$1 = state_29476;
var statearr_29484_29512 = state_29476__$1;
(statearr_29484_29512[(2)] = inst_29466);

(statearr_29484_29512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (13))){
var state_29476__$1 = state_29476;
var statearr_29485_29513 = state_29476__$1;
(statearr_29485_29513[(2)] = null);

(statearr_29485_29513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (6))){
var inst_29441 = (state_29476[(7)]);
var inst_29462 = (inst_29441 > (0));
var state_29476__$1 = state_29476;
if(cljs.core.truth_(inst_29462)){
var statearr_29486_29514 = state_29476__$1;
(statearr_29486_29514[(1)] = (12));

} else {
var statearr_29487_29515 = state_29476__$1;
(statearr_29487_29515[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (3))){
var inst_29474 = (state_29476[(2)]);
var state_29476__$1 = state_29476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29476__$1,inst_29474);
} else {
if((state_val_29477 === (12))){
var inst_29440 = (state_29476[(8)]);
var inst_29464 = cljs.core.vec.call(null,inst_29440);
var state_29476__$1 = state_29476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29476__$1,(15),out,inst_29464);
} else {
if((state_val_29477 === (2))){
var state_29476__$1 = state_29476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29476__$1,(4),ch);
} else {
if((state_val_29477 === (11))){
var inst_29456 = (state_29476[(2)]);
var inst_29457 = (new Array(n));
var inst_29440 = inst_29457;
var inst_29441 = (0);
var state_29476__$1 = (function (){var statearr_29488 = state_29476;
(statearr_29488[(7)] = inst_29441);

(statearr_29488[(10)] = inst_29456);

(statearr_29488[(8)] = inst_29440);

return statearr_29488;
})();
var statearr_29489_29516 = state_29476__$1;
(statearr_29489_29516[(2)] = null);

(statearr_29489_29516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (9))){
var inst_29440 = (state_29476[(8)]);
var inst_29454 = cljs.core.vec.call(null,inst_29440);
var state_29476__$1 = state_29476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29476__$1,(11),out,inst_29454);
} else {
if((state_val_29477 === (5))){
var inst_29441 = (state_29476[(7)]);
var inst_29449 = (state_29476[(11)]);
var inst_29444 = (state_29476[(9)]);
var inst_29440 = (state_29476[(8)]);
var inst_29448 = (inst_29440[inst_29441] = inst_29444);
var inst_29449__$1 = (inst_29441 + (1));
var inst_29450 = (inst_29449__$1 < n);
var state_29476__$1 = (function (){var statearr_29490 = state_29476;
(statearr_29490[(11)] = inst_29449__$1);

(statearr_29490[(12)] = inst_29448);

return statearr_29490;
})();
if(cljs.core.truth_(inst_29450)){
var statearr_29491_29517 = state_29476__$1;
(statearr_29491_29517[(1)] = (8));

} else {
var statearr_29492_29518 = state_29476__$1;
(statearr_29492_29518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (14))){
var inst_29469 = (state_29476[(2)]);
var inst_29470 = cljs.core.async.close_BANG_.call(null,out);
var state_29476__$1 = (function (){var statearr_29494 = state_29476;
(statearr_29494[(13)] = inst_29469);

return statearr_29494;
})();
var statearr_29495_29519 = state_29476__$1;
(statearr_29495_29519[(2)] = inst_29470);

(statearr_29495_29519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (10))){
var inst_29460 = (state_29476[(2)]);
var state_29476__$1 = state_29476;
var statearr_29496_29520 = state_29476__$1;
(statearr_29496_29520[(2)] = inst_29460);

(statearr_29496_29520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29477 === (8))){
var inst_29449 = (state_29476[(11)]);
var inst_29440 = (state_29476[(8)]);
var tmp29493 = inst_29440;
var inst_29440__$1 = tmp29493;
var inst_29441 = inst_29449;
var state_29476__$1 = (function (){var statearr_29497 = state_29476;
(statearr_29497[(7)] = inst_29441);

(statearr_29497[(8)] = inst_29440__$1);

return statearr_29497;
})();
var statearr_29498_29521 = state_29476__$1;
(statearr_29498_29521[(2)] = null);

(statearr_29498_29521[(1)] = (2));


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
});})(c__21439__auto___29507,out))
;
return ((function (switch__21377__auto__,c__21439__auto___29507,out){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_29502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29502[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_29502[(1)] = (1));

return statearr_29502;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_29476){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_29476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e29503){if((e29503 instanceof Object)){
var ex__21381__auto__ = e29503;
var statearr_29504_29522 = state_29476;
(statearr_29504_29522[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29523 = state_29476;
state_29476 = G__29523;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_29476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_29476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___29507,out))
})();
var state__21441__auto__ = (function (){var statearr_29505 = f__21440__auto__.call(null);
(statearr_29505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___29507);

return statearr_29505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___29507,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__29525 = arguments.length;
switch (G__29525) {
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
var c__21439__auto___29598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto___29598,out){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto___29598,out){
return (function (state_29567){
var state_val_29568 = (state_29567[(1)]);
if((state_val_29568 === (7))){
var inst_29563 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29569_29599 = state_29567__$1;
(statearr_29569_29599[(2)] = inst_29563);

(statearr_29569_29599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (1))){
var inst_29526 = [];
var inst_29527 = inst_29526;
var inst_29528 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29567__$1 = (function (){var statearr_29570 = state_29567;
(statearr_29570[(7)] = inst_29528);

(statearr_29570[(8)] = inst_29527);

return statearr_29570;
})();
var statearr_29571_29600 = state_29567__$1;
(statearr_29571_29600[(2)] = null);

(statearr_29571_29600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (4))){
var inst_29531 = (state_29567[(9)]);
var inst_29531__$1 = (state_29567[(2)]);
var inst_29532 = (inst_29531__$1 == null);
var inst_29533 = cljs.core.not.call(null,inst_29532);
var state_29567__$1 = (function (){var statearr_29572 = state_29567;
(statearr_29572[(9)] = inst_29531__$1);

return statearr_29572;
})();
if(inst_29533){
var statearr_29573_29601 = state_29567__$1;
(statearr_29573_29601[(1)] = (5));

} else {
var statearr_29574_29602 = state_29567__$1;
(statearr_29574_29602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (15))){
var inst_29557 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29575_29603 = state_29567__$1;
(statearr_29575_29603[(2)] = inst_29557);

(statearr_29575_29603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (13))){
var state_29567__$1 = state_29567;
var statearr_29576_29604 = state_29567__$1;
(statearr_29576_29604[(2)] = null);

(statearr_29576_29604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (6))){
var inst_29527 = (state_29567[(8)]);
var inst_29552 = inst_29527.length;
var inst_29553 = (inst_29552 > (0));
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29553)){
var statearr_29577_29605 = state_29567__$1;
(statearr_29577_29605[(1)] = (12));

} else {
var statearr_29578_29606 = state_29567__$1;
(statearr_29578_29606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (3))){
var inst_29565 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29567__$1,inst_29565);
} else {
if((state_val_29568 === (12))){
var inst_29527 = (state_29567[(8)]);
var inst_29555 = cljs.core.vec.call(null,inst_29527);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29567__$1,(15),out,inst_29555);
} else {
if((state_val_29568 === (2))){
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29567__$1,(4),ch);
} else {
if((state_val_29568 === (11))){
var inst_29531 = (state_29567[(9)]);
var inst_29535 = (state_29567[(10)]);
var inst_29545 = (state_29567[(2)]);
var inst_29546 = [];
var inst_29547 = inst_29546.push(inst_29531);
var inst_29527 = inst_29546;
var inst_29528 = inst_29535;
var state_29567__$1 = (function (){var statearr_29579 = state_29567;
(statearr_29579[(7)] = inst_29528);

(statearr_29579[(11)] = inst_29547);

(statearr_29579[(8)] = inst_29527);

(statearr_29579[(12)] = inst_29545);

return statearr_29579;
})();
var statearr_29580_29607 = state_29567__$1;
(statearr_29580_29607[(2)] = null);

(statearr_29580_29607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (9))){
var inst_29527 = (state_29567[(8)]);
var inst_29543 = cljs.core.vec.call(null,inst_29527);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29567__$1,(11),out,inst_29543);
} else {
if((state_val_29568 === (5))){
var inst_29528 = (state_29567[(7)]);
var inst_29531 = (state_29567[(9)]);
var inst_29535 = (state_29567[(10)]);
var inst_29535__$1 = f.call(null,inst_29531);
var inst_29536 = cljs.core._EQ_.call(null,inst_29535__$1,inst_29528);
var inst_29537 = cljs.core.keyword_identical_QMARK_.call(null,inst_29528,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29538 = (inst_29536) || (inst_29537);
var state_29567__$1 = (function (){var statearr_29581 = state_29567;
(statearr_29581[(10)] = inst_29535__$1);

return statearr_29581;
})();
if(cljs.core.truth_(inst_29538)){
var statearr_29582_29608 = state_29567__$1;
(statearr_29582_29608[(1)] = (8));

} else {
var statearr_29583_29609 = state_29567__$1;
(statearr_29583_29609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (14))){
var inst_29560 = (state_29567[(2)]);
var inst_29561 = cljs.core.async.close_BANG_.call(null,out);
var state_29567__$1 = (function (){var statearr_29585 = state_29567;
(statearr_29585[(13)] = inst_29560);

return statearr_29585;
})();
var statearr_29586_29610 = state_29567__$1;
(statearr_29586_29610[(2)] = inst_29561);

(statearr_29586_29610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (10))){
var inst_29550 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29587_29611 = state_29567__$1;
(statearr_29587_29611[(2)] = inst_29550);

(statearr_29587_29611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (8))){
var inst_29527 = (state_29567[(8)]);
var inst_29531 = (state_29567[(9)]);
var inst_29535 = (state_29567[(10)]);
var inst_29540 = inst_29527.push(inst_29531);
var tmp29584 = inst_29527;
var inst_29527__$1 = tmp29584;
var inst_29528 = inst_29535;
var state_29567__$1 = (function (){var statearr_29588 = state_29567;
(statearr_29588[(7)] = inst_29528);

(statearr_29588[(8)] = inst_29527__$1);

(statearr_29588[(14)] = inst_29540);

return statearr_29588;
})();
var statearr_29589_29612 = state_29567__$1;
(statearr_29589_29612[(2)] = null);

(statearr_29589_29612[(1)] = (2));


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
});})(c__21439__auto___29598,out))
;
return ((function (switch__21377__auto__,c__21439__auto___29598,out){
return (function() {
var cljs$core$async$state_machine__21378__auto__ = null;
var cljs$core$async$state_machine__21378__auto____0 = (function (){
var statearr_29593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29593[(0)] = cljs$core$async$state_machine__21378__auto__);

(statearr_29593[(1)] = (1));

return statearr_29593;
});
var cljs$core$async$state_machine__21378__auto____1 = (function (state_29567){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_29567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e29594){if((e29594 instanceof Object)){
var ex__21381__auto__ = e29594;
var statearr_29595_29613 = state_29567;
(statearr_29595_29613[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29614 = state_29567;
state_29567 = G__29614;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
cljs$core$async$state_machine__21378__auto__ = function(state_29567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21378__auto____1.call(this,state_29567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21378__auto____0;
cljs$core$async$state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21378__auto____1;
return cljs$core$async$state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto___29598,out))
})();
var state__21441__auto__ = (function (){var statearr_29596 = f__21440__auto__.call(null);
(statearr_29596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto___29598);

return statearr_29596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto___29598,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1436069137148