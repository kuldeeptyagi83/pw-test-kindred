import { BasePage } from "./BasePage";

export class CheckoutInformationPage extends BasePage {
  getContinueButton() {
    return this.page.getByRole("button", { name: "Continue" });
  }

  getFirstNameField() {
    return this.page.getByRole("textbox", { name: "First Name" });
  }
  getLastNameField() {
    return this.page.getByRole("textbox", { name: "Last Name" });
  }
  getPostalCodeField() {
    return this.page.getByRole("textbox", { name: "Postal Code" });
  }

  async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.getFirstNameField().fill(firstName);
    await this.getLastNameField().fill(lastName);
    await this.getPostalCodeField().fill(postalCode);
  }
}
