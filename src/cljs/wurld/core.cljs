(ns wurld.core
  (:require [reagent.core :as reagent :refer [atom]]
            [wurld.util :refer [get-possible-domains]]))


(def title-text "Hello, wURLd!")
(def sub-title-text "Because .com's are for your grandpa, brah")
(def marketing-nonesense "wURLd helps you figure out what kind of cool single word domains you can make from your #brand. Say you're Nautical Inc; wURLd will tell you that your new home could be nautic.al or nauti.cal. Boom! Just like that you're a hot new startup and not just a 150 year-old purveyor of sailcloth or whatever.")


(def input-word (atom ""))

;; This handy funtcion is apdapted from the Reagent website (https://reagent-project.github.io/)
(defn lister [items]
  [:ul
   (for [item items]
     ^{:key item} [:li item])])

(defn no-results-message
  []
  (let [current-input @input-word]
    (if (= current-input "")
      ""
      (str "Can't make a domain out of '" current-input "', brah"))))

(defn update-possibilities
  [items]
  (if (seq items)
    (lister items)
    [:div (no-results-message)]))

;; This code is adapted from the textbox example given at https://reagent-project.github.io/
(defn input-component
  "Text box to enter word. Triggers url search"
  [value]
  [:div {:class "form-group"}
    [:input
     {:type "text"
      :class "form-control input-lg"
      :placeholder "What's your brand?"
      :value @input-word
      :on-change #(reset! input-word (-> % .-target .-value))}]])

(defn page []
    (fn []
      [:div {:class "container"}
        [:div
         {:class "jumbotron"}
         [:h1 title-text]
         [:h2 sub-title-text]
         [:p marketing-nonesense]]
        [:div
         [:p [input-component ""]]
         [:div "Possible URLs:" [update-possibilities (get-possible-domains @input-word)]]]]))


(defn ^:export main []
  (reagent/render [page]
                  (.getElementById js/document "app")))
