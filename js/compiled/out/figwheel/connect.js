// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('wurld.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29753__delegate = function (x){
if(cljs.core.truth_(wurld.core.main)){
return cljs.core.apply.call(null,wurld.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wurld.core/main' is missing");
}
};
var G__29753 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29754__i = 0, G__29754__a = new Array(arguments.length -  0);
while (G__29754__i < G__29754__a.length) {G__29754__a[G__29754__i] = arguments[G__29754__i + 0]; ++G__29754__i;}
  x = new cljs.core.IndexedSeq(G__29754__a,0);
} 
return G__29753__delegate.call(this,x);};
G__29753.cljs$lang$maxFixedArity = 0;
G__29753.cljs$lang$applyTo = (function (arglist__29755){
var x = cljs.core.seq(arglist__29755);
return G__29753__delegate(x);
});
G__29753.cljs$core$IFn$_invoke$arity$variadic = G__29753__delegate;
return G__29753;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1436069139409