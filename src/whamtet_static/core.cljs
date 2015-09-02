(ns whamtet-static.core
  (:require [clojure.browser.repl :as repl]))

(enable-console-print!)

(println "Hello world!")

(defn show-position [position-data]
  (let [
        coords (.-coords position-data)
        data {:timestamp (.-timestamp position-data)
              :accuracy (.-accuracy coords)
              :altitude (.-altitude coords)
              :altitude-accuracy (.-altitudeAccuracy coords)
              :heading (.-heading coords)
              :latitude (.-latitude coords)
              :longitude (.-longitude coords)
              :speed (.-speed coords)
              }
        ]
    (set! (.-innerHTML (js/document.getElementById "content"))
          (apply str (interpose "<br/ >" (map pr-str data))))))

(js/setTimeout
 #(js/navigator.geolocation.getCurrentPosition show-position) 1000)
