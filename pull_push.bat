@echo off

git pull&&git push
set re=%ERRORLEVEL%
if %re%==1 echo err&pause
if %re%==0 echo success
