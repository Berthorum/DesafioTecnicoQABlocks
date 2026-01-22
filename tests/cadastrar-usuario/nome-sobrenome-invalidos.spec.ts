import { test, expect } from "@playwright/test";
import { AcceptCookiesPage } from "../../pages/AcceptCookiesPage";

test.beforeEach(async ({ page }) => {
  // Uso de Page Object Model para ação de aceitar cookies.

  const acceptCookiesPage = new AcceptCookiesPage(page);
  await acceptCookiesPage.acceptCookies();
});

test("Checagem de Nome e Sobrenome com único caractere", async ({ page }) => {
  // Preenchimento dos campos "Nome" e "Sobrenome"

  await page.locator("#first_name").fill("A");
  await page.locator("#last_name").fill("B");

  const spanErrors = await page
    .locator("span")
    .filter({ hasText: "This field must contain at least three characters" });

  await page.waitForTimeout(3000);

  await expect(spanErrors).toHaveCount(2);
});

test("Checagem de cadastro de usuário com Nome e Sobrenome sendo um único caractere especial", async ({
  page,
}) => {
  // Preenchimento dos campo "Email"

  await page.getByPlaceholder("Email").fill("john.doebr01@gmail.com");

  // Preenchimento dos campo "País"

  await page.getByPlaceholder("Escolha o país").click();
  await page.getByRole("button", { name: "Brazil" }).click();

  // Preenchimento dos campo "Idioma da Família"

  await page.locator("span", { hasText: "Idioma da Família" }).click();
  await page.getByRole("button", { name: "Families in English" }).click();

  // Preenchimento dos campo "Área de Atuação"

  const spanCheckboxArchitect = await page.locator("span", {
    hasText: "Arquiteto",
  });
  spanCheckboxArchitect.locator("..").locator("div").click();
  await page.waitForTimeout(2000);

  const spanCheckboxDesign = await page.locator("span", {
    hasText: "Designer de Interiores",
  });

  spanCheckboxDesign.locator("..").locator("div").click();
  await page.waitForTimeout(3000);

  // Preenchimento dos campos "Senha" e "Confirme sua Senha"

  await page.locator("#password").fill("123456789Aa!");
  await page.locator("#confirm_password").fill("123456789Aa!");

  // Preenchimento dos campo "Como você ficou sabendo sobre a Blocks"

  await page
    .locator("span", { hasText: "Como você ficou sabendo sobre a Blocks?" })
    .click();
  await page.getByRole("button", { name: "Other", exact: true }).click();

  // Preenchimento dos campo "Termos de Uso"

  const spanuTermsOfUse = await page.locator("span", {
    hasText: "Eu aceito a",
  });
  spanuTermsOfUse.locator("..").locator("div").click();
  await page.waitForTimeout(3000);

  // Preenchimento dos campos "Nome" e "Sobrenome"

  await page.locator("#first_name").fill("#");
  await page.locator("#last_name").fill("$");

  await page.waitForTimeout(5000);

  const spanRegisterButton = await page.locator("span", {
    hasText: "Entrar",
  });

  const buttonRegister = spanRegisterButton.locator("..").locator("..");

  await expect(buttonRegister).toBeDisabled();
});
