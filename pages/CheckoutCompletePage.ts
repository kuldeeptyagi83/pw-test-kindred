import { BasePage } from "./BasePage";

export class CheckoutCompletePage extends BasePage {
  getCompleteHeader() {
    return this.page.getByRole("heading", { name: "Thank you for your order!" });
  }

  getCompleteHeaderText() {
    return this.page.getByText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!",
    );
  }
  getBackHome() {
    return this.page.getByRole("button", { name: "Back Home" });
  }
}
