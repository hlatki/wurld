# wurld

Wurld is a webapp built with ClojureScript and Reagent that lets you check if your word, brand, or phrase could be one of those clever domain names like bit.ly where the TLD is actually part of the word.

## Deploy code
The deploy.sh script will update the gh-pages branch of this repo

```
./deploy.sh
```

## Development Mode

```
lein clean
lein figwheel
```

[Figwheel](https://github.com/bhauman/lein-figwheel) will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build

```
lein clean
lein cljsbuild once min
```
