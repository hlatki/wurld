#!/bin/bash

# This deployment strategy is adapted from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd
# (minus all the cool travis ci stuff)

echo "This is going to build the code and push it to the gh-pages branch"

echo "Building...."
lein cljsbuild once min

echo "Git shenanigans..."
cd resources/public/
git init
git add index.html
git add js/compiled/app.js
git commit -m "Update compiled output"

echo "Force pushing repo to gh-pages"
git push --force "git@github.com:hlatki/wurld.git" master:gh-pages

echo "All done!"
