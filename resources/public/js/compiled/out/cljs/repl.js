// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26346_26358 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26347_26359 = null;
var count__26348_26360 = (0);
var i__26349_26361 = (0);
while(true){
if((i__26349_26361 < count__26348_26360)){
var f_26362 = cljs.core._nth.call(null,chunk__26347_26359,i__26349_26361);
cljs.core.println.call(null,"  ",f_26362);

var G__26363 = seq__26346_26358;
var G__26364 = chunk__26347_26359;
var G__26365 = count__26348_26360;
var G__26366 = (i__26349_26361 + (1));
seq__26346_26358 = G__26363;
chunk__26347_26359 = G__26364;
count__26348_26360 = G__26365;
i__26349_26361 = G__26366;
continue;
} else {
var temp__4126__auto___26367 = cljs.core.seq.call(null,seq__26346_26358);
if(temp__4126__auto___26367){
var seq__26346_26368__$1 = temp__4126__auto___26367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26346_26368__$1)){
var c__18980__auto___26369 = cljs.core.chunk_first.call(null,seq__26346_26368__$1);
var G__26370 = cljs.core.chunk_rest.call(null,seq__26346_26368__$1);
var G__26371 = c__18980__auto___26369;
var G__26372 = cljs.core.count.call(null,c__18980__auto___26369);
var G__26373 = (0);
seq__26346_26358 = G__26370;
chunk__26347_26359 = G__26371;
count__26348_26360 = G__26372;
i__26349_26361 = G__26373;
continue;
} else {
var f_26374 = cljs.core.first.call(null,seq__26346_26368__$1);
cljs.core.println.call(null,"  ",f_26374);

var G__26375 = cljs.core.next.call(null,seq__26346_26368__$1);
var G__26376 = null;
var G__26377 = (0);
var G__26378 = (0);
seq__26346_26358 = G__26375;
chunk__26347_26359 = G__26376;
count__26348_26360 = G__26377;
i__26349_26361 = G__26378;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26350 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26351 = null;
var count__26352 = (0);
var i__26353 = (0);
while(true){
if((i__26353 < count__26352)){
var vec__26354 = cljs.core._nth.call(null,chunk__26351,i__26353);
var name = cljs.core.nth.call(null,vec__26354,(0),null);
var map__26355 = cljs.core.nth.call(null,vec__26354,(1),null);
var map__26355__$1 = ((cljs.core.seq_QMARK_.call(null,map__26355))?cljs.core.apply.call(null,cljs.core.hash_map,map__26355):map__26355);
var arglists = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26379 = seq__26350;
var G__26380 = chunk__26351;
var G__26381 = count__26352;
var G__26382 = (i__26353 + (1));
seq__26350 = G__26379;
chunk__26351 = G__26380;
count__26352 = G__26381;
i__26353 = G__26382;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26350);
if(temp__4126__auto__){
var seq__26350__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26350__$1)){
var c__18980__auto__ = cljs.core.chunk_first.call(null,seq__26350__$1);
var G__26383 = cljs.core.chunk_rest.call(null,seq__26350__$1);
var G__26384 = c__18980__auto__;
var G__26385 = cljs.core.count.call(null,c__18980__auto__);
var G__26386 = (0);
seq__26350 = G__26383;
chunk__26351 = G__26384;
count__26352 = G__26385;
i__26353 = G__26386;
continue;
} else {
var vec__26356 = cljs.core.first.call(null,seq__26350__$1);
var name = cljs.core.nth.call(null,vec__26356,(0),null);
var map__26357 = cljs.core.nth.call(null,vec__26356,(1),null);
var map__26357__$1 = ((cljs.core.seq_QMARK_.call(null,map__26357))?cljs.core.apply.call(null,cljs.core.hash_map,map__26357):map__26357);
var arglists = cljs.core.get.call(null,map__26357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26387 = cljs.core.next.call(null,seq__26350__$1);
var G__26388 = null;
var G__26389 = (0);
var G__26390 = (0);
seq__26350 = G__26387;
chunk__26351 = G__26388;
count__26352 = G__26389;
i__26353 = G__26390;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1433624455559