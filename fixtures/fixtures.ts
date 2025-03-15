import { test as baseTest } from "@playwright/test";
import { ProductsPage, LoginPage, YourCartPage, CheckoutInformationPage, CheckoutCompletePage } from "../pages";
import { CheckoutOverviewPage } from "../pages";

type MyPageFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  yourCartPage: YourCartPage;
  checkoutInformationPage: CheckoutInformationPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutCompletePage: CheckoutCompletePage;
};

export const test = baseTest.extend<MyPageFixtures>({
  loginPage: async ({ page, baseURL }, use) => {
    await use(new LoginPage(page, baseURL!));
  },
  productsPage: async ({ page }, use) => {
    await page.goto(`/inventory.html`);
    await use(new ProductsPage(page));
  },
  yourCartPage: async ({ page }, use) => {
    await use(new YourCartPage(page));
  },
  checkoutInformationPage: async ({ page }, use) => {
    await use(new CheckoutInformationPage(page));
  },
  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
});

export { expect } from "@playwright/test";
