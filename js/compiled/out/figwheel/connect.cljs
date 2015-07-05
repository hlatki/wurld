(ns figwheel.connect (:require [wurld.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/wurld.core.main (apply js/wurld.core.main x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'wurld.core/main' is missing"))), :build-id "dev"})

