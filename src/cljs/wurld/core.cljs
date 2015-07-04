(ns wurld.core
  (:require [reagent.core :as reagent :refer [atom]]
            [wurld.util :refer [get-possible-urls]]))


(def title-text "Hello, Wurld!")
(def sub-title-text "Because .com's are for your grandpa, brah")
(def marketing-nonesense "Wurld helps you figure out what kind of cool single word URL's you can make from your #brand. For instance, say you're Nautical Inc. Wurld will tell you that your new home could be nautic.al or nauti.cal like you're a hot new startup and not a 150 year old purveyor of sailcloth.")


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
       {:class "jumbotron"}
       [:h1 title-text]
       [:h2 sub-title-text]
       [:p marketing-nonesense]
        [:p "Enter a word: " [input-component value]]
        [:div "Possible URLs:" [lister (get-possible-urls @value)]]])))


(defn ^:export main []
  (reagent/render [page]
                  (.getElementById js/document "app")))
