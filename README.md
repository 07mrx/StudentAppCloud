# StudentApp

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build and Deploy
Run `npm run deploy-backend` to build and deploy the backend project to AWS. 
Use the serverless output and replace the endpoint in src/app/apis/api.service.ts with the newly deployed endpoint.

Run `npm run deploy-website` to build and deploy the frontend project as static website hosted in an S3 bucket.
The S3 bucket is created beforehand, it is deployed and configured using the serverless stack.
In case of an update the stack will use previously created bucket.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
