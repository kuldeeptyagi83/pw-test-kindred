import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

if (!process.env.TEST_USERNAME) {
  throw new Error("The TEST_USERNAME environment variable is not set in .env file ...");
}
if (!process.env.TEST_PASSWORD) {
  throw new Error("The TEST_PASSWORD environment variable is not set in .env file ...");
}

if (!process.env.APP_URL) {
  throw new Error("The APP_URL environment variable is not set in .env file ...");
}

export const TEST_PASSWORD = process.env.TEST_PASSWORD;
export const TEST_USERNAME = process.env.TEST_USERNAME;

// const appBaseUrl = process.env.APP_URL ?? "https://www.saucedemo.com"
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.APP_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
    video: "retain-on-failure",
    testIdAttribute: "data-test", // Set the test ID attribute to 'data-test'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "loginSetup",
      testMatch: "**/*.setup.ts",
    },
    {
      name: "chromium",
      dependencies: ["loginSetup"],
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.APP_URL,
        trace: "on-first-retry",
        storageState: `storageState-${TEST_USERNAME}.json`,
      },
    },

    // {
    //     name: 'firefox',
    //     use: {...devices['Desktop Firefox']},
    // },
    //
    // {
    //     name: 'webkit',
    //     use: {...devices['Desktop Safari']},
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
