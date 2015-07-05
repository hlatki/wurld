(ns wurld.util
  (:require wurld.tlds))


(defn build-domain
  "Create URL by inserting . between name and TLD, given location of split"
  [s i]
  (str (subs s 0 i) "." (subs s i)))

(defn check-tld
  "Given string and position pos, look up (subs s p) in tld set and return url.
  Otherwise return false"
  [s pos]
  (let [tld (subs s pos)]
    (if (contains? wurld.tlds/tld-set tld)
      (build-domain s pos)
      false)))

;;TODO: clean this function up a little
(defn get-possible-domains
  "Get possible urls from word"
  [word]
  (loop [pos (dec (count word))
         acc []]
    (if (<= pos 0)
      acc
      (if-let [domain-name (check-tld word pos)]
        (recur (dec pos) (conj acc domain-name))
        (recur (dec pos) acc)))))