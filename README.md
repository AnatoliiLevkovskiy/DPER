# DPER
Playwright tests
## Setup
### Install dependencies
```sh
npm install
```
### Set required environment variables
For running the tests using CLI, the variables can just be set in the terminal used to run the test. For local execution, rename the `.env.example` file to `.env` and update the values contained there.
```sh
ADMIN_USERNAME=username 
ADMIN_PASSWORD=secretpassword 
```
If using the Playwright extension for VS Code, using the `.env` file is highly recommended.

## Running the tests
To run all tests on all configured browsers use
```sh
npx playwright test
```
For more fine-grained control over test execution, test can be triggered using the Playwright extension for VS Code or [Playwright CLI](https://playwright.dev/docs/test-cli#introduction)

## Features
### Authentication handling
Playwright will authenticate the user and save the authenticated state. Each test can use the **admin** state by test.use({ storageState: "auth.json" }); (https://playwright.dev/docs/test-use-options#configuration-scopes)
## Scripts
TBD
