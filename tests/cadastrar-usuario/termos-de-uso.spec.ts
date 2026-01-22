import { test, expect } from "@playwright/test";
import { AcceptCookiesPage } from "../../pages/AcceptCookiesPage";

test.beforeEach(async ({ page }) => {
  // Uso de Page Object Model para ação de aceitar cookies.

  const acceptCookiesPage = new AcceptCookiesPage(page);
  await acceptCookiesPage.acceptCookies();
});

test("Checagem de Cadastro do usuário sem aceite dos termos de uso", async ({
  page,
}) => {
  // Preenchimento dos campos "Nome" e "Sobrenome"
  await page.locator("#first_name").fill("John");
  await page.locator("#last_name").fill("Doe");

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

  // Preenchimento dos campo "Como você ficou sabendo sobre a Blocks"
  await page
    .locator("span", { hasText: "Como você ficou sabendo sobre a Blocks?" })
    .click();
  await page.getByRole("button", { name: "Other", exact: true }).click();

  // Preenchimento dos campos "Senha" e "Confirme sua Senha"
  await page.locator("#password").fill("123456789Aa!");
  await page.locator("#confirm_password").fill("123456789Aa!");

  const spanRegisterButton = await page.locator("span", {
    hasText: "Entrar",
  });

  const buttonRegister = spanRegisterButton.locator("..").locator("..");

  await page.waitForTimeout(3000);

  await expect(buttonRegister).toBeDisabled();
});
