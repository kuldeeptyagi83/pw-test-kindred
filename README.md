# Playwright Test Automation

## Assumptions

As a QA Engineer, I have not taken into consideration negative and positive scenarios.
My sole purpose was to get the test automation suite up and running using Playwright for one simple end-to-end user
journey.

## Overview

This project is a test automation suite using Playwright for end-to-end testing.

## Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/kuldeeptyagi83/pw-test-kindred.git
   cd pw-test-kindred
      ```

## Install dependencies:

```sh
npm run install
 ```

Create a .env file (refer env-example file) in the root directory and add the following environment variables:  
TEST_USERNAME
TEST_PASSWORD
APP_URL

## Running Tests

To run all tests:

```sh
npm run test
```

## GitHub Actions

- This project uses GitHub Actions for continuous integration. The workflow file is located at
  .github/workflows/playwright-tests.yml.  
### Secrets
- Add the following secrets to your GitHub repository:  
  TEST_USERNAME
  TEST_PASSWORD
  APP_URL

## Project Structure

- fixtures/: Contains the test fixtures.
- pages/: Contains the page objects.
- tests/: Contains the test files.
- prettierrc: Prettier configuration file.
- eslint.config.js: ESLint configuration file.
- tsconfig.json: TypeScript configuration file.
- playwright.config.ts: Playwright configuration file.
- .env: Environment variables file.
- github/workflows/: GitHub Actions workflow files.

## Configuration

The Playwright configuration is defined in playwright.config.ts. You can customize the settings as needed.