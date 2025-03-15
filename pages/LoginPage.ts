import { Page } from "@playwright/test";

export class LoginPage {
  private readonly baseURL: string;
  protected page: Page;

  constructor(page: Page, baseURL: string) {
    this.page = page;
    this.baseURL = baseURL;
  }

  async login(username: string, password: string) {
    await this.page.goto(this.baseURL);
    await this.page.getByRole("textbox", { name: "Username" }).fill(username);
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
