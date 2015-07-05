// Compiled by ClojureScript 0.0-3211 {}
goog.provide('wurld.util');
goog.require('cljs.core');
goog.require('wurld.tlds');
/**
 * Create URL by inserting . between name and TLD, given location of split
 */
wurld.util.build_domain = (function wurld$util$build_domain(s,i){
return [cljs.core.str(cljs.core.subs.call(null,s,(0),i)),cljs.core.str("."),cljs.core.str(cljs.core.subs.call(null,s,i))].join('');
});
/**
 * Given string and position pos, look up (subs s p) in tld set and return url.
 * Otherwise return false
 */
wurld.util.check_tld = (function wurld$util$check_tld(s,pos){
var tld = cljs.core.subs.call(null,s,pos);
if(cljs.core.contains_QMARK_.call(null,wurld.tlds.tld_set,tld)){
return wurld.util.build_domain.call(null,s,pos);
} else {
return false;
}
});
/**
 * Get possible urls from word
 */
wurld.util.get_possible_domains = (function wurld$util$get_possible_domains(word){
var pos = (cljs.core.count.call(null,word) - (1));
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((pos <= (0))){
return acc;
} else {
var temp__4124__auto__ = wurld.util.check_tld.call(null,word,pos);
if(cljs.core.truth_(temp__4124__auto__)){
var domain_name = temp__4124__auto__;
var G__20218 = (pos - (1));
var G__20219 = cljs.core.conj.call(null,acc,domain_name);
pos = G__20218;
acc = G__20219;
continue;
} else {
var G__20220 = (pos - (1));
var G__20221 = acc;
pos = G__20220;
acc = G__20221;
continue;
}
}
break;
}
});

//# sourceMappingURL=util.js.map?rel=1436069122530