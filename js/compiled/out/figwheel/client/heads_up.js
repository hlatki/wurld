// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19235__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19235__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26121_26129 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26122_26130 = null;
var count__26123_26131 = (0);
var i__26124_26132 = (0);
while(true){
if((i__26124_26132 < count__26123_26131)){
var k_26133 = cljs.core._nth.call(null,chunk__26122_26130,i__26124_26132);
e.setAttribute(cljs.core.name.call(null,k_26133),cljs.core.get.call(null,attrs,k_26133));

var G__26134 = seq__26121_26129;
var G__26135 = chunk__26122_26130;
var G__26136 = count__26123_26131;
var G__26137 = (i__26124_26132 + (1));
seq__26121_26129 = G__26134;
chunk__26122_26130 = G__26135;
count__26123_26131 = G__26136;
i__26124_26132 = G__26137;
continue;
} else {
var temp__4126__auto___26138 = cljs.core.seq.call(null,seq__26121_26129);
if(temp__4126__auto___26138){
var seq__26121_26139__$1 = temp__4126__auto___26138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26121_26139__$1)){
var c__18980__auto___26140 = cljs.core.chunk_first.call(null,seq__26121_26139__$1);
var G__26141 = cljs.core.chunk_rest.call(null,seq__26121_26139__$1);
var G__26142 = c__18980__auto___26140;
var G__26143 = cljs.core.count.call(null,c__18980__auto___26140);
var G__26144 = (0);
seq__26121_26129 = G__26141;
chunk__26122_26130 = G__26142;
count__26123_26131 = G__26143;
i__26124_26132 = G__26144;
continue;
} else {
var k_26145 = cljs.core.first.call(null,seq__26121_26139__$1);
e.setAttribute(cljs.core.name.call(null,k_26145),cljs.core.get.call(null,attrs,k_26145));

var G__26146 = cljs.core.next.call(null,seq__26121_26139__$1);
var G__26147 = null;
var G__26148 = (0);
var G__26149 = (0);
seq__26121_26129 = G__26146;
chunk__26122_26130 = G__26147;
count__26123_26131 = G__26148;
i__26124_26132 = G__26149;
continue;
}
} else {
}
}
break;
}

var seq__26125_26150 = cljs.core.seq.call(null,children);
var chunk__26126_26151 = null;
var count__26127_26152 = (0);
var i__26128_26153 = (0);
while(true){
if((i__26128_26153 < count__26127_26152)){
var ch_26154 = cljs.core._nth.call(null,chunk__26126_26151,i__26128_26153);
e.appendChild(ch_26154);

var G__26155 = seq__26125_26150;
var G__26156 = chunk__26126_26151;
var G__26157 = count__26127_26152;
var G__26158 = (i__26128_26153 + (1));
seq__26125_26150 = G__26155;
chunk__26126_26151 = G__26156;
count__26127_26152 = G__26157;
i__26128_26153 = G__26158;
continue;
} else {
var temp__4126__auto___26159 = cljs.core.seq.call(null,seq__26125_26150);
if(temp__4126__auto___26159){
var seq__26125_26160__$1 = temp__4126__auto___26159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26125_26160__$1)){
var c__18980__auto___26161 = cljs.core.chunk_first.call(null,seq__26125_26160__$1);
var G__26162 = cljs.core.chunk_rest.call(null,seq__26125_26160__$1);
var G__26163 = c__18980__auto___26161;
var G__26164 = cljs.core.count.call(null,c__18980__auto___26161);
var G__26165 = (0);
seq__26125_26150 = G__26162;
chunk__26126_26151 = G__26163;
count__26127_26152 = G__26164;
i__26128_26153 = G__26165;
continue;
} else {
var ch_26166 = cljs.core.first.call(null,seq__26125_26160__$1);
e.appendChild(ch_26166);

var G__26167 = cljs.core.next.call(null,seq__26125_26160__$1);
var G__26168 = null;
var G__26169 = (0);
var G__26170 = (0);
seq__26125_26150 = G__26167;
chunk__26126_26151 = G__26168;
count__26127_26152 = G__26169;
i__26128_26153 = G__26170;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26118){
var G__26119 = cljs.core.first.call(null,seq26118);
var seq26118__$1 = cljs.core.next.call(null,seq26118);
var G__26120 = cljs.core.first.call(null,seq26118__$1);
var seq26118__$2 = cljs.core.next.call(null,seq26118__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26119,G__26120,seq26118__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19090__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19091__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19092__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19093__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19094__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19090__auto__,prefer_table__19091__auto__,method_cache__19092__auto__,cached_hierarchy__19093__auto__,hierarchy__19094__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19090__auto__,prefer_table__19091__auto__,method_cache__19092__auto__,cached_hierarchy__19093__auto__,hierarchy__19094__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19094__auto__,method_table__19090__auto__,prefer_table__19091__auto__,method_cache__19092__auto__,cached_hierarchy__19093__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26171 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26171.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26171.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26171.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26171);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26172,st_map){
var map__26176 = p__26172;
var map__26176__$1 = ((cljs.core.seq_QMARK_.call(null,map__26176))?cljs.core.apply.call(null,cljs.core.hash_map,map__26176):map__26176);
var container_el = cljs.core.get.call(null,map__26176__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26176,map__26176__$1,container_el){
return (function (p__26177){
var vec__26178 = p__26177;
var k = cljs.core.nth.call(null,vec__26178,(0),null);
var v = cljs.core.nth.call(null,vec__26178,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26176,map__26176__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26179,dom_str){
var map__26181 = p__26179;
var map__26181__$1 = ((cljs.core.seq_QMARK_.call(null,map__26181))?cljs.core.apply.call(null,cljs.core.hash_map,map__26181):map__26181);
var c = map__26181__$1;
var content_area_el = cljs.core.get.call(null,map__26181__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26182){
var map__26184 = p__26182;
var map__26184__$1 = ((cljs.core.seq_QMARK_.call(null,map__26184))?cljs.core.apply.call(null,cljs.core.hash_map,map__26184):map__26184);
var content_area_el = cljs.core.get.call(null,map__26184__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__){
return (function (state_26226){
var state_val_26227 = (state_26226[(1)]);
if((state_val_26227 === (2))){
var inst_26211 = (state_26226[(7)]);
var inst_26220 = (state_26226[(2)]);
var inst_26221 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26222 = ["auto"];
var inst_26223 = cljs.core.PersistentHashMap.fromArrays(inst_26221,inst_26222);
var inst_26224 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26211,inst_26223);
var state_26226__$1 = (function (){var statearr_26228 = state_26226;
(statearr_26228[(8)] = inst_26220);

return statearr_26228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26226__$1,inst_26224);
} else {
if((state_val_26227 === (1))){
var inst_26211 = (state_26226[(7)]);
var inst_26211__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26212 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26213 = ["10px","10px","100%","68px","1.0"];
var inst_26214 = cljs.core.PersistentHashMap.fromArrays(inst_26212,inst_26213);
var inst_26215 = cljs.core.merge.call(null,inst_26214,style);
var inst_26216 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26211__$1,inst_26215);
var inst_26217 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26211__$1,msg);
var inst_26218 = cljs.core.async.timeout.call(null,(300));
var state_26226__$1 = (function (){var statearr_26229 = state_26226;
(statearr_26229[(9)] = inst_26216);

(statearr_26229[(7)] = inst_26211__$1);

(statearr_26229[(10)] = inst_26217);

return statearr_26229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26226__$1,(2),inst_26218);
} else {
return null;
}
}
});})(c__21439__auto__))
;
return ((function (switch__21377__auto__,c__21439__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto____0 = (function (){
var statearr_26233 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26233[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto__);

(statearr_26233[(1)] = (1));

return statearr_26233;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto____1 = (function (state_26226){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_26226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e26234){if((e26234 instanceof Object)){
var ex__21381__auto__ = e26234;
var statearr_26235_26237 = state_26226;
(statearr_26235_26237[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26238 = state_26226;
state_26226 = G__26238;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto__ = function(state_26226){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto____1.call(this,state_26226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__))
})();
var state__21441__auto__ = (function (){var statearr_26236 = f__21440__auto__.call(null);
(statearr_26236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_26236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__))
);

return c__21439__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__26240 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__26240,(0),null);
var ln = cljs.core.nth.call(null,vec__26240,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26243 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26243,(0),null);
var file_line = cljs.core.nth.call(null,vec__26243,(1),null);
var file_column = cljs.core.nth.call(null,vec__26243,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26243,file_name,file_line,file_column){
return (function (p1__26241_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26241_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26243,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18195__auto__ = file_line;
if(cljs.core.truth_(or__18195__auto__)){
return or__18195__auto__;
} else {
var and__18183__auto__ = cause;
if(cljs.core.truth_(and__18183__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18183__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26245 = figwheel.client.heads_up.ensure_container.call(null);
var map__26245__$1 = ((cljs.core.seq_QMARK_.call(null,map__26245))?cljs.core.apply.call(null,cljs.core.hash_map,map__26245):map__26245);
var content_area_el = cljs.core.get.call(null,map__26245__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__){
return (function (state_26292){
var state_val_26293 = (state_26292[(1)]);
if((state_val_26293 === (3))){
var inst_26275 = (state_26292[(7)]);
var inst_26289 = (state_26292[(2)]);
var inst_26290 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26275,"");
var state_26292__$1 = (function (){var statearr_26294 = state_26292;
(statearr_26294[(8)] = inst_26289);

return statearr_26294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26292__$1,inst_26290);
} else {
if((state_val_26293 === (2))){
var inst_26275 = (state_26292[(7)]);
var inst_26282 = (state_26292[(2)]);
var inst_26283 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26284 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26285 = cljs.core.PersistentHashMap.fromArrays(inst_26283,inst_26284);
var inst_26286 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26275,inst_26285);
var inst_26287 = cljs.core.async.timeout.call(null,(200));
var state_26292__$1 = (function (){var statearr_26295 = state_26292;
(statearr_26295[(9)] = inst_26282);

(statearr_26295[(10)] = inst_26286);

return statearr_26295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(3),inst_26287);
} else {
if((state_val_26293 === (1))){
var inst_26275 = (state_26292[(7)]);
var inst_26275__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26276 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26277 = ["0.0"];
var inst_26278 = cljs.core.PersistentHashMap.fromArrays(inst_26276,inst_26277);
var inst_26279 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26275__$1,inst_26278);
var inst_26280 = cljs.core.async.timeout.call(null,(300));
var state_26292__$1 = (function (){var statearr_26296 = state_26292;
(statearr_26296[(7)] = inst_26275__$1);

(statearr_26296[(11)] = inst_26279);

return statearr_26296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(2),inst_26280);
} else {
return null;
}
}
}
});})(c__21439__auto__))
;
return ((function (switch__21377__auto__,c__21439__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21378__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21378__auto____0 = (function (){
var statearr_26300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26300[(0)] = figwheel$client$heads_up$clear_$_state_machine__21378__auto__);

(statearr_26300[(1)] = (1));

return statearr_26300;
});
var figwheel$client$heads_up$clear_$_state_machine__21378__auto____1 = (function (state_26292){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_26292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e26301){if((e26301 instanceof Object)){
var ex__21381__auto__ = e26301;
var statearr_26302_26304 = state_26292;
(statearr_26302_26304[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26305 = state_26292;
state_26292 = G__26305;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21378__auto__ = function(state_26292){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21378__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21378__auto____1.call(this,state_26292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21378__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21378__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__))
})();
var state__21441__auto__ = (function (){var statearr_26303 = f__21440__auto__.call(null);
(statearr_26303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_26303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__))
);

return c__21439__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21439__auto__){
return (function (){
var f__21440__auto__ = (function (){var switch__21377__auto__ = ((function (c__21439__auto__){
return (function (state_26337){
var state_val_26338 = (state_26337[(1)]);
if((state_val_26338 === (4))){
var inst_26335 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26337__$1,inst_26335);
} else {
if((state_val_26338 === (3))){
var inst_26332 = (state_26337[(2)]);
var inst_26333 = figwheel.client.heads_up.clear.call(null);
var state_26337__$1 = (function (){var statearr_26339 = state_26337;
(statearr_26339[(7)] = inst_26332);

return statearr_26339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26337__$1,(4),inst_26333);
} else {
if((state_val_26338 === (2))){
var inst_26329 = (state_26337[(2)]);
var inst_26330 = cljs.core.async.timeout.call(null,(400));
var state_26337__$1 = (function (){var statearr_26340 = state_26337;
(statearr_26340[(8)] = inst_26329);

return statearr_26340;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26337__$1,(3),inst_26330);
} else {
if((state_val_26338 === (1))){
var inst_26327 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26337__$1 = state_26337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26337__$1,(2),inst_26327);
} else {
return null;
}
}
}
}
});})(c__21439__auto__))
;
return ((function (switch__21377__auto__,c__21439__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto____0 = (function (){
var statearr_26344 = [null,null,null,null,null,null,null,null,null];
(statearr_26344[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto__);

(statearr_26344[(1)] = (1));

return statearr_26344;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto____1 = (function (state_26337){
while(true){
var ret_value__21379__auto__ = (function (){try{while(true){
var result__21380__auto__ = switch__21377__auto__.call(null,state_26337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21380__auto__;
}
break;
}
}catch (e26345){if((e26345 instanceof Object)){
var ex__21381__auto__ = e26345;
var statearr_26346_26348 = state_26337;
(statearr_26346_26348[(5)] = ex__21381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26349 = state_26337;
state_26337 = G__26349;
continue;
} else {
return ret_value__21379__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto__ = function(state_26337){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto____1.call(this,state_26337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21378__auto__;
})()
;})(switch__21377__auto__,c__21439__auto__))
})();
var state__21441__auto__ = (function (){var statearr_26347 = f__21440__auto__.call(null);
(statearr_26347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21439__auto__);

return statearr_26347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21441__auto__);
});})(c__21439__auto__))
);

return c__21439__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1436069132182