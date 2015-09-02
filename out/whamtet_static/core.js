// Compiled by ClojureScript 1.7.48 {}
goog.provide('whamtet_static.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
whamtet_static.core.show_position = (function whamtet_static$core$show_position(position_data){
var coords = position_data.coords;
var data = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),position_data.timestamp,new cljs.core.Keyword(null,"accuracy","accuracy",2101295176),coords.accuracy,new cljs.core.Keyword(null,"altitude","altitude",463588637),coords.altitude,new cljs.core.Keyword(null,"altitude-accuracy","altitude-accuracy",497213403),coords.altitudeAccuracy,new cljs.core.Keyword(null,"heading","heading",-1312171873),coords.heading,new cljs.core.Keyword(null,"latitude","latitude",394867543),coords.latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),coords.longitude,new cljs.core.Keyword(null,"speed","speed",1257663751),coords.speed], null);
return document.getElementById("content").innerHTML = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br/ >",cljs.core.map.call(null,cljs.core.pr_str,data)));
});
setTimeout((function (){
return navigator.geolocation.getCurrentPosition(whamtet_static.core.show_position);
}),(1000));

//# sourceMappingURL=core.js.map