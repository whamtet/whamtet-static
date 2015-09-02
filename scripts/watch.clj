(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'whamtet-static.core
   :output-to "out/whamtet_static.js"
   :output-dir "out"})
