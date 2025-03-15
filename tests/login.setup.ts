import { test as loginSetup, expect } from "../fixtures/fixtures";
import { TEST_PASSWORD, TEST_USERNAME } from "../playwright.config";

loginSetup("Login to app", async ({ loginPage, page }) => {
  await loginSetup.step("Should login successfully", async () => {
    await loginPage.login(TEST_USERNAME, TEST_PASSWORD);
    await expect(page.getByText("Products", { exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "Open Menu", exact: true })).toBeVisible();
    await page.context().storageState({ path: `storageState-${TEST_USERNAME}.json` });
  });
});
