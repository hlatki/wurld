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
var seq__26364_26376 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26365_26377 = null;
var count__26366_26378 = (0);
var i__26367_26379 = (0);
while(true){
if((i__26367_26379 < count__26366_26378)){
var f_26380 = cljs.core._nth.call(null,chunk__26365_26377,i__26367_26379);
cljs.core.println.call(null,"  ",f_26380);

var G__26381 = seq__26364_26376;
var G__26382 = chunk__26365_26377;
var G__26383 = count__26366_26378;
var G__26384 = (i__26367_26379 + (1));
seq__26364_26376 = G__26381;
chunk__26365_26377 = G__26382;
count__26366_26378 = G__26383;
i__26367_26379 = G__26384;
continue;
} else {
var temp__4126__auto___26385 = cljs.core.seq.call(null,seq__26364_26376);
if(temp__4126__auto___26385){
var seq__26364_26386__$1 = temp__4126__auto___26385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26364_26386__$1)){
var c__18980__auto___26387 = cljs.core.chunk_first.call(null,seq__26364_26386__$1);
var G__26388 = cljs.core.chunk_rest.call(null,seq__26364_26386__$1);
var G__26389 = c__18980__auto___26387;
var G__26390 = cljs.core.count.call(null,c__18980__auto___26387);
var G__26391 = (0);
seq__26364_26376 = G__26388;
chunk__26365_26377 = G__26389;
count__26366_26378 = G__26390;
i__26367_26379 = G__26391;
continue;
} else {
var f_26392 = cljs.core.first.call(null,seq__26364_26386__$1);
cljs.core.println.call(null,"  ",f_26392);

var G__26393 = cljs.core.next.call(null,seq__26364_26386__$1);
var G__26394 = null;
var G__26395 = (0);
var G__26396 = (0);
seq__26364_26376 = G__26393;
chunk__26365_26377 = G__26394;
count__26366_26378 = G__26395;
i__26367_26379 = G__26396;
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
var seq__26368 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26369 = null;
var count__26370 = (0);
var i__26371 = (0);
while(true){
if((i__26371 < count__26370)){
var vec__26372 = cljs.core._nth.call(null,chunk__26369,i__26371);
var name = cljs.core.nth.call(null,vec__26372,(0),null);
var map__26373 = cljs.core.nth.call(null,vec__26372,(1),null);
var map__26373__$1 = ((cljs.core.seq_QMARK_.call(null,map__26373))?cljs.core.apply.call(null,cljs.core.hash_map,map__26373):map__26373);
var arglists = cljs.core.get.call(null,map__26373__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26373__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26397 = seq__26368;
var G__26398 = chunk__26369;
var G__26399 = count__26370;
var G__26400 = (i__26371 + (1));
seq__26368 = G__26397;
chunk__26369 = G__26398;
count__26370 = G__26399;
i__26371 = G__26400;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26368);
if(temp__4126__auto__){
var seq__26368__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26368__$1)){
var c__18980__auto__ = cljs.core.chunk_first.call(null,seq__26368__$1);
var G__26401 = cljs.core.chunk_rest.call(null,seq__26368__$1);
var G__26402 = c__18980__auto__;
var G__26403 = cljs.core.count.call(null,c__18980__auto__);
var G__26404 = (0);
seq__26368 = G__26401;
chunk__26369 = G__26402;
count__26370 = G__26403;
i__26371 = G__26404;
continue;
} else {
var vec__26374 = cljs.core.first.call(null,seq__26368__$1);
var name = cljs.core.nth.call(null,vec__26374,(0),null);
var map__26375 = cljs.core.nth.call(null,vec__26374,(1),null);
var map__26375__$1 = ((cljs.core.seq_QMARK_.call(null,map__26375))?cljs.core.apply.call(null,cljs.core.hash_map,map__26375):map__26375);
var arglists = cljs.core.get.call(null,map__26375__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26375__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26405 = cljs.core.next.call(null,seq__26368__$1);
var G__26406 = null;
var G__26407 = (0);
var G__26408 = (0);
seq__26368 = G__26405;
chunk__26369 = G__26406;
count__26370 = G__26407;
i__26371 = G__26408;
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

//# sourceMappingURL=repl.js.map?rel=1436069132297