@REM #!/usr/bin/env sh
@echo off

 set -e

 pnpm run build

 cd docs/.vitepress/dist

 git add -A
 git commit -m 'deploy'

 git push -f https://github.com/kalinuxJS/my-components.git master:code
