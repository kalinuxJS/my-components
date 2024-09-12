#!/usr/bin/env sh

 set -e

 pnpm run docs:build

 cd docs/.vitepress/dist

 git add -A
 git commit -m 'deploy'

 git push -f https://github.com/kalinuxJS/my-components.git master:code
