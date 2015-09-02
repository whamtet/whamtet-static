// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__1498_1512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1499_1513 = null;
var count__1500_1514 = (0);
var i__1501_1515 = (0);
while(true){
if((i__1501_1515 < count__1500_1514)){
var f_1516 = cljs.core._nth.call(null,chunk__1499_1513,i__1501_1515);
cljs.core.println.call(null,"  ",f_1516);

var G__1517 = seq__1498_1512;
var G__1518 = chunk__1499_1513;
var G__1519 = count__1500_1514;
var G__1520 = (i__1501_1515 + (1));
seq__1498_1512 = G__1517;
chunk__1499_1513 = G__1518;
count__1500_1514 = G__1519;
i__1501_1515 = G__1520;
continue;
} else {
var temp__4425__auto___1521 = cljs.core.seq.call(null,seq__1498_1512);
if(temp__4425__auto___1521){
var seq__1498_1522__$1 = temp__4425__auto___1521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1498_1522__$1)){
var c__1003__auto___1523 = cljs.core.chunk_first.call(null,seq__1498_1522__$1);
var G__1524 = cljs.core.chunk_rest.call(null,seq__1498_1522__$1);
var G__1525 = c__1003__auto___1523;
var G__1526 = cljs.core.count.call(null,c__1003__auto___1523);
var G__1527 = (0);
seq__1498_1512 = G__1524;
chunk__1499_1513 = G__1525;
count__1500_1514 = G__1526;
i__1501_1515 = G__1527;
continue;
} else {
var f_1528 = cljs.core.first.call(null,seq__1498_1522__$1);
cljs.core.println.call(null,"  ",f_1528);

var G__1529 = cljs.core.next.call(null,seq__1498_1522__$1);
var G__1530 = null;
var G__1531 = (0);
var G__1532 = (0);
seq__1498_1512 = G__1529;
chunk__1499_1513 = G__1530;
count__1500_1514 = G__1531;
i__1501_1515 = G__1532;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1533 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__219__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1533);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1533)))?cljs.core.second.call(null,arglists_1533):arglists_1533));
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
var seq__1502 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1503 = null;
var count__1504 = (0);
var i__1505 = (0);
while(true){
if((i__1505 < count__1504)){
var vec__1506 = cljs.core._nth.call(null,chunk__1503,i__1505);
var name = cljs.core.nth.call(null,vec__1506,(0),null);
var map__1507 = cljs.core.nth.call(null,vec__1506,(1),null);
var map__1507__$1 = ((((!((map__1507 == null)))?((((map__1507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1507):map__1507);
var doc = cljs.core.get.call(null,map__1507__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1507__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1534 = seq__1502;
var G__1535 = chunk__1503;
var G__1536 = count__1504;
var G__1537 = (i__1505 + (1));
seq__1502 = G__1534;
chunk__1503 = G__1535;
count__1504 = G__1536;
i__1505 = G__1537;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1502);
if(temp__4425__auto__){
var seq__1502__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1502__$1)){
var c__1003__auto__ = cljs.core.chunk_first.call(null,seq__1502__$1);
var G__1538 = cljs.core.chunk_rest.call(null,seq__1502__$1);
var G__1539 = c__1003__auto__;
var G__1540 = cljs.core.count.call(null,c__1003__auto__);
var G__1541 = (0);
seq__1502 = G__1538;
chunk__1503 = G__1539;
count__1504 = G__1540;
i__1505 = G__1541;
continue;
} else {
var vec__1509 = cljs.core.first.call(null,seq__1502__$1);
var name = cljs.core.nth.call(null,vec__1509,(0),null);
var map__1510 = cljs.core.nth.call(null,vec__1509,(1),null);
var map__1510__$1 = ((((!((map__1510 == null)))?((((map__1510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1510):map__1510);
var doc = cljs.core.get.call(null,map__1510__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1510__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1542 = cljs.core.next.call(null,seq__1502__$1);
var G__1543 = null;
var G__1544 = (0);
var G__1545 = (0);
seq__1502 = G__1542;
chunk__1503 = G__1543;
count__1504 = G__1544;
i__1505 = G__1545;
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

//# sourceMappingURL=repl.js.map