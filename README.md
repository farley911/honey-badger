# Honey Badger
You know what Honey Badger is; it's Fight Club.

## Building A Client Application
1. Create a new repo for the client.
  * [New Repo](https://github.com/new)
    * Choose private.
    * Do not initialize the repo with a README file.
2. Clone the repo
3. Create the client app in the repo
  ```
  ng new <client-name>
  ```
  * `y` to routing is requested.
  * `SCSS` for styles.    
4. Update the README with the clients information.
  * [Example README](https://github.com/farley911/honey-badger/wiki/Client-App-README-Example)
5. Install Material in `./<client-name>`
```
ng add @angular/material
```
  * Choose a theme
    * TODO: Handle custom themes
  * `y` to global typography
  * `y` to animations
6. Install farley911 modules requested by client.
  * See [Storybook](http://localhost:6006/) for details.
7. Provide client details to the modules.
8. Add `./node_modules` to the .gitignore if vscode has not prompted you to.
9. Build the client Application
  * `ng build`
10. Zip up the `./dist` directory and provide it to the client.


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
ng run tester-app:storybook
```
### Storybook Troubleshooting
* Make sure to npm install your module into Honey Badger so that Storybook can find files it exports.
* Do not use `@farley911` imports inside your `*.stories.ts` files

## Angular Library
### Create A New Library(Package)
```
cd .\honey-badger\
```
```
ng g lib <package-name> --prefix hb
```
* Add the .html and .scss files if needed.
* In `package`.component.ts change `template` to `templateUrl` and `styles` to `styleUrls`, populate the values.
* Update the component decorator.
* Remove the service if it's not needed.
* Remove the service import from public-api.ts
* Add the `project`\src\lib\\`project`.stories.ts file.
* Add `project`.stories.ts file.
* Follow the NPM - Create New Package instructions.

## Assets
To export /assets from a project you'll need to: 

* Add `"assets": ["./assets"],` to the `<package>/ng-package.json` file.
* Add `{ from: '../../<project>/assets', to: '/assets' }` to staticDirs in `/tester-app/.storybook/main.ts`.

## NPM
### Create New Package
```
cd .\honey-badger\projects\<project>
npm init --scope=@farley911
cd ..\..
ng build <package>
cd \dist\<package>
```
```
npm publish --access public
```
* Update the ./`project`/README.md
* Update ./honey-badger/package.json to include your new project.
* Add any exported enums to the `public-api.ts` file.

### Update Package
```
cd .\honey-badger\projects\<project>
npm version <patch|minor|major>
cd ..\..
ng build <package>
cd \dist\<package>
```
```
npm publish --access public
```
* Update ./honey-badger/package.json to the current version of the project.

### Update `./<client name>`\package.json with the latest version
Update package.json with the correct verions and run:
```
cd <client name>
npm i
```

## Troubleshooting
* BS 'selector' error in Storybook? Delete the `/node_modules` directory from the package and restart Storybook and don't run `npm i` on a package directory again.