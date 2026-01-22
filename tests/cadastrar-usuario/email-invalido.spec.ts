import { test, expect } from "@playwright/test";
import { AcceptCookiesPage } from "../../pages/AcceptCookiesPage";

test.beforeEach(async ({ page }) => {
  // Uso de Page Object Model para ação de aceitar cookies.
  
  const acceptCookiesPage = new AcceptCookiesPage(page);
  await acceptCookiesPage.acceptCookies();
});

test("G-mail com formato inválido", async ({ page }) => {
  // Preenchimento dos campo "Email"
  await page.getByPlaceholder("Email").fill("john.doe@gmail");

  const spanError = await page
    .locator("span")
    .filter({ hasText: "This is not a valid email." });

  await page.waitForTimeout(3000);

  await expect(spanError).toBeVisible();
});
