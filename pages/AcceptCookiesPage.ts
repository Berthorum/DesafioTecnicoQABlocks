import { Page } from "@playwright/test";

export class AcceptCookiesPage {
  constructor(private page: Page) {}

  async acceptCookies() {
    await this.page.goto("");
    await this.page.waitForTimeout(3000);
    await this.page.getByRole("button", { name: "Allow all" }).click();
  }
}
