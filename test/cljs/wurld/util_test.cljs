(ns wurld.util-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:require [cemerick.cljs.test :as t]
            [wurld.util :as util]))

(deftest build-url-url
         (is (= (util/build-domain "hannahio" 6) "hannah.io"))
         (is (= (util/build-domain "" 0) ".")))

(deftest check-tld-test
         (is (= (util/check-tld "hannahio" 6) "hannah.io"))
         (is (= (util/check-tld "notaurl" 0) false))
         (is (= (util/check-tld "" 7) false)))

(deftest get-possible-urls-test
         (is (= (util/get-possible-domains "nautical") ["nautic.al" "nauti.cal"]))
         (is (= (util/get-possible-domains "clojure") ["cloju.re"]))
         (is (= (util/get-possible-domains "ad") []))
         (is (= (util/get-possible-domains "notaurl") [])))