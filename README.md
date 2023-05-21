# Honey Badger
You know what Honey Badger is; it's Fight Club.

## Material
### Adding Material Components to a Module
1. Add the material component to the `project`.module.ts imports block.
1. Add the the following code block to the `project`.stories.ts meta property.
1. The material component must be imported into any app that implements the project.
_`project`.stories.ts_
```
const meta = {
  ...,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [<MatModule>]
    })
  ]
}
```

## Storybook
### Running Storybook
```
$ ng run tester-app:storybook
```

## Angular Library
### Create A New Library(Package)
```
$ cd .\honey-badger\
$ ng g library <package-name> --prefix hb
```
* Add the .html and .scss files if needed.
* In `package`.component.ts change `template` to `templateUrl` and `styles` to `styleUrls`, populate the values.
* Update the component decorator.
* Remove the service if it's not needed.
* Remove the service import from public-api.ts
* Add the `project`\src\lib\\`project`.stories.ts file.
* Add `project`.stories.ts file.
* Follow the NPM - Create New Package instructions.

## NPM
### Create New Package
```
$ cd .\honey-badger\projects\<project>
$ npm init --scope=@farley911
$ cd ..\..
$ ng build <package>
$ cd \dist\<package>
$ npm publish --access public
```
* Update ./honey-badger/package.json to include your new project.

### Update Package
```
$ cd .\honey-badger\projects\<project>
$ npm version <patch|minor|major>
$ cd ..\..
$ ng build <package>
$ cd \dist\<package>
$ npm publish --access public
```
* Update ./honey-badger/package.json to the current version of the project.

### Update `client`\package.json with the latest version
Update package.json with the correct verions and run:
```
$ cd <client>
$ npm i
```
