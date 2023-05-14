# Spear LT _-or-_ Honey Badger

I know what Spear LT is; it's like Fight Club.

## Create New Package
```
$ cd .\spear-lt\projects\<project>
$ npm init --scope=@farley911
$ cd ..\..
$ ng build <package>
$ cd \dist\<package>
$ npm publish --access public
```

## Update Package
```
$ cd .\spear-lt\projects\<project>
$ npm version <patch|minor|major>
$ cd ..\..
$ ng build <package>
$ cd \dist\<package>
$ npm publish --access public
```

## Update \<client>\package.json with the latest version
```
$ cd <client>
$ npm i
```
