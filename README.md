## Node Mobules

Run `npm install` to install node modules

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Why I used .module.ts for artist page

Well, I created the module for lazy loading that is a pattern to defer initialization of modules until they are needed.
So when the user enter the page, the scripts of my login page will be loaded, and then when he login the script of artist module will be loaded.
N.B: I know that's a small exercice and it will not affect too mush in the app but if you consider it for a big project it will make difference
