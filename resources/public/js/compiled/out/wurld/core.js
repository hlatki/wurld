// Compiled by ClojureScript 0.0-3211 {}
goog.provide('wurld.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof wurld.core.app_state !== 'undefined'){
} else {
wurld.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, what is your name? "], null));
}
wurld.core.page = (function wurld$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,wurld.core.app_state).call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),"FIXME"], null);
});
wurld.core.main = (function wurld$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wurld.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('wurld.core.main', wurld.core.main);

//# sourceMappingURL=core.js.map?rel=1433624443968