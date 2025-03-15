import { BasePage } from "./BasePage";

export class CheckoutOverviewPage extends BasePage {
  async getItemsTotal(textKey: string = "Item total:") {
    const itemTotal = await this.page.getByText(new RegExp(textKey)).textContent();
    return itemTotal ? itemTotal.split(":")[1].trim() : "";
  }

  async getTotal() {
    return this.getItemsTotal("Total:");
  }

  getFinishButton() {
    return this.page.getByRole("button", { name: "Finish" });
  }
}
