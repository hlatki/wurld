(ns wurld.util-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:require [cemerick.cljs.test :as t]
            [wurld.util :as util]))

(deftest build-url-url
         (is (= (util/build-url "hannahio" 6) "hannah.io"))
         (is (= (util/build-url "" 0) ".")))

(deftest check-tld-test
         (is (= (util/check-tld "hannahio" 6) "hannah.io"))
         (is (= (util/check-tld "notaurl" 0) false))
         (is (= (util/check-tld "" 7) false)))

(deftest get-possible-urls-test
         (is (= (util/get-possible-urls "nautical") ["nautic.al" "nauti.cal"]))
         (is (= (util/get-possible-urls "clojure") ["cloju.re"]))
         (is (= (util/get-possible-urls "ad") []))
         (is (= (util/get-possible-urls "notaurl") [])))