import { BasePage } from "./BasePage";

export class YourCartPage extends BasePage {
  getCheckoutButton() {
    return this.page.getByRole("button", { name: "Checkout" });
  }
}
