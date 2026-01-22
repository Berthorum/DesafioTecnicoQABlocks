import { test, expect } from "@playwright/test";
import { AcceptCookiesPage } from "../../pages/AcceptCookiesPage";
import { FillFieldsPage } from "../../pages/FillFieldsPage";

test.beforeEach(async ({ page }) => {
  // Uso de Page Object Model para ação de aceitar cookies.

  const acceptCookiesPage = new AcceptCookiesPage(page);
  await acceptCookiesPage.acceptCookies();
});

test("G-mail com formato inválido", async ({ page }) => {
  const fillFieldsPage = new FillFieldsPage(page);

  // Preenchimento dos campo "Email"

  await fillFieldsPage.fillInput({
    selector: "#email",
    value: "john.doe@gmail",
  });

  const spanError = page
    .locator("span")
    .filter({ hasText: "This is not a valid email." });

  await page.waitForTimeout(3000);

  await expect(spanError).toBeVisible();
});
