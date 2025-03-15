import { Locator, Page } from "@playwright/test";

export class BasePage {
  protected page: Page;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartLink = page.getByTestId("shopping-cart-link");
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }

  async getCartItemsCount() {
    const textContent = await this.shoppingCartLink.textContent();
    return textContent ? parseInt(textContent) : 0;
  }

  async getCartItems() {
    const items = this.page.locator('div[data-test="inventory-item"]');
    const itemCount = await items.count();
    const cartItems: { name: string; price: string }[] = [];

    for (let i = 0; i < itemCount; i++) {
      const name = await items.nth(i).locator('div[data-test="inventory-item-name"]').textContent();
      const price = await items.nth(i).locator('div[data-test="inventory-item-price"]').textContent();
      if (name && price) {
        cartItems.push({ name, price });
      }
    }

    return cartItems;
  }
}
