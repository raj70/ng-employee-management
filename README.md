# NgEmployeeManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## ng-bootstrap
to make it work;
run : ng add @ng-bootstrap/schematics
This will download and update few files of the project.



## form data to datasource
Import and Add FormModule (check in auth.module.ts)
### On form:
Add [(ngModel)] : example ([(ngModel)]="username" name="username"). (check in login.component.html)

https://angular.io/guide/template-syntax#ngmodel-two-way-binding


## this application requried https://github.com/raj70/api-employee

The "api-employee" required Mongodb. 
Install Mongodb.
run mongodb

And run : npm run apps (for api-employees)

The Api-Employee consists of two API services.
1) Auth Service
2) Employee Service

