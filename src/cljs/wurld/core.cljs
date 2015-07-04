(ns wurld.core
  (:require [reagent.core :as reagent :refer [atom]]
            [wurld.util :refer [get-possible-urls]]))




;; This handy funtcion is apdapted from the Reagent website (https://reagent-project.github.io/)
(defn lister [items]
  [:ul
   (for [item items]
     ^{:key item} [:li item])])


;; This code is adapted from the textbox example given at https://reagent-project.github.io/
(defn input-component
  "Text box to enter word. Triggers url search"
  [value]
  [:input
   {:type "text"
    :class "form-control input-lg"
    :placeholder "What's your brand?"
    :value @value
    :on-change #(reset! value (-> % .-target .-value))}])

(defn page []
  (let [value (atom "clojure")]
    (fn []
      [:div
        [:p "Enter a word: " [input-component value]]
        [:div "Possible URLs:" [lister (get-possible-urls @value)]]])))


(defn ^:export main []
  (reagent/render [page]
                  (.getElementById js/document "app")))
