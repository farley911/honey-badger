# Spear LT _-or-_ Honey Badger

You know what Spear LT | Honey Badger is; it's Fight Club.

## Material

### Adding Material Components to a Module
1. Add the material component to the <project>.module.ts imports block.
1. Add the the following code block to the <project>.stories.ts meta property.
```
decorators: [
  moduleMetadata({
    declarations: [],
    imports: [<MatModule>]
  })
]
```
1. The material component must be imported into any app that implements the project.

## Storybook

### Running Storybook
```
$ ng run spear-lt-tester:storybook
```

## NPM

### Create New Package
```
$ cd .\spear-lt\projects\<project>
$ npm init --scope=@farley911
$ cd ..\..
$ ng build <package>
$ cd \dist\<package>
$ npm publish --access public
```

### Update Package
```
$ cd .\spear-lt\projects\<project>
$ npm version <patch|minor|major>
$ cd ..\..
$ ng build <package>
$ cd \dist\<package>
$ npm publish --access public
```

### Update \<client>\package.json with the latest version
```
$ cd <client>
$ npm i
```
