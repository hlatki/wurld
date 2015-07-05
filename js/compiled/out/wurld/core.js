// Compiled by ClojureScript 0.0-3211 {}
goog.provide('wurld.core');
goog.require('cljs.core');
goog.require('wurld.util');
goog.require('reagent.core');
wurld.core.title_text = "Hello, wURLd!";
wurld.core.sub_title_text = "Because .com's are for your grandpa, brah";
wurld.core.marketing_nonesense = "wURLd helps you figure out what kind of cool single word domains you can make from your #brand. Say you're Nautical Inc; wURLd will tell you that your new home could be nautic.al or nauti.cal. Boom! Just like that you're a hot new startup and not just a 150 year-old purveyor of sailcloth or whatever.";
wurld.core.input_word = reagent.core.atom.call(null,"");
wurld.core.lister = (function wurld$core$lister(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__18949__auto__ = (function wurld$core$lister_$_iter__20449(s__20450){
return (new cljs.core.LazySeq(null,(function (){
var s__20450__$1 = s__20450;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20450__$1);
if(temp__4126__auto__){
var s__20450__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20450__$2)){
var c__18947__auto__ = cljs.core.chunk_first.call(null,s__20450__$2);
var size__18948__auto__ = cljs.core.count.call(null,c__18947__auto__);
var b__20452 = cljs.core.chunk_buffer.call(null,size__18948__auto__);
if((function (){var i__20451 = (0);
while(true){
if((i__20451 < size__18948__auto__)){
var item = cljs.core._nth.call(null,c__18947__auto__,i__20451);
cljs.core.chunk_append.call(null,b__20452,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__20453 = (i__20451 + (1));
i__20451 = G__20453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20452),wurld$core$lister_$_iter__20449.call(null,cljs.core.chunk_rest.call(null,s__20450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20452),null);
}
} else {
var item = cljs.core.first.call(null,s__20450__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),wurld$core$lister_$_iter__20449.call(null,cljs.core.rest.call(null,s__20450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18949__auto__.call(null,items);
})()], null);
});
wurld.core.no_results_message = (function wurld$core$no_results_message(){
var current_input = cljs.core.deref.call(null,wurld.core.input_word);
if(cljs.core._EQ_.call(null,current_input,"")){
return "";
} else {
return [cljs.core.str("Can't make a domain out of '"),cljs.core.str(current_input),cljs.core.str("', brah")].join('');
}
});
wurld.core.update_possibilities = (function wurld$core$update_possibilities(items){
if(cljs.core.seq.call(null,items)){
return wurld.core.lister.call(null,items);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),wurld.core.no_results_message.call(null)], null);
}
});
/**
 * Text box to enter word. Triggers url search
 */
wurld.core.input_component = (function wurld$core$input_component(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control input-lg",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What's your brand?",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,wurld.core.input_word),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20454_SHARP_){
return cljs.core.reset_BANG_.call(null,wurld.core.input_word,p1__20454_SHARP_.target.value);
})], null)], null)], null);
});
wurld.core.page = (function wurld$core$page(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),wurld.core.title_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),wurld.core.sub_title_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),wurld.core.marketing_nonesense], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wurld.core.input_component,""], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Possible URLs:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wurld.core.update_possibilities,wurld.util.get_possible_domains.call(null,cljs.core.deref.call(null,wurld.core.input_word))], null)], null)], null)], null);
});
});
wurld.core.main = (function wurld$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wurld.core.page], null),document.getElementById("app"));
});
goog.exportSymbol('wurld.core.main', wurld.core.main);

//# sourceMappingURL=core.js.map?rel=1436069123869