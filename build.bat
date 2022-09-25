
@ECHO OFF
call :echoCyan "Wally Production build initiated..."

call :echoCyan "reading .env file"

for /F "tokens=* USEBACKQ" %%F IN (`find "PACKAGE_NAME" ./.env`) DO (
set packagename=%%F
)
for /F "tokens=* USEBACKQ" %%F IN (`find "APP_NAME" ./.env`) DO (
set appName=%%F
)
echo:
set packagename=%packagename:~13%
set appName=%appName:~9%

echo:
echo.package_name=%packagename%
echo:
echo.app_name=%appName%
echo:
mkdir artifacts
call :echoCyan "removing old artifacts..."
call npm run rmdir -- artifacts
call :echoCyan "!!old artifacts removed"
call :echoCyan " Installing 3rd party dependencies"
call yarn 

call :echoCyan "renaming app and packagename"
call npx react-native-rename "%appName%" -b "%packageName%"
cd android/ 

call :echoCyan "Creating production build"
call ./gradlew bundleRelease
cd ../
mkdir artifacts

call :echoCyan "copying abb file to ./artifacts."
move ./android/app/build/outputs/bundle/release ./artifacts

call :echoCyan "Completed!!!!"
exit 0
pause

:echoCyan
echo [96m%~1%[0m
