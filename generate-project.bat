@ECHO OFF

SET /P name=Enter Project Name: 

cd C:\Users\eric\OneDrive\Desktop\GitHub\gig_work
call ng new %name%

SET /P projects=Enter The Projects To Install:

cd C:\Users\eric\OneDrive\Desktop\GitHub\gig_work\%name%

for %%a in ("%projects:,=" "%") do (
  call npm i @farley911/%%a
)