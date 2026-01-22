import { test, expect } from "@playwright/test";
import { AcceptCookiesPage } from "../../pages/AcceptCookiesPage";
import { FillFieldsPage } from "../../pages/FillFieldsPage";

test.beforeEach(async ({ page }) => {
  // Uso de Page Object Model para ação de aceitar cookies.

  const acceptCookiesPage = new AcceptCookiesPage(page);
  await acceptCookiesPage.acceptCookies();
});

test("Envio do formulário de cadastro com campos válidos", async ({ page }) => {
  const fillFieldsPage = new FillFieldsPage(page);

  // Preenchimento dos campos "Nome" e "Sobrenome"

  await fillFieldsPage.fillInput({ selector: "#first_name", value: "John" });
  await fillFieldsPage.fillInput({ selector: "#last_name", value: "Doe" });

  // Preenchimento dos campo "Email"

  await fillFieldsPage.fillInput({
    selector: "#email",
    value: "john.doebr01@gmail.com",
  });

  // Preenchimento dos campo "País"

  await fillFieldsPage.fillDropdownSelector({
    selector: 'input[placeholder="Escolha o país"]',
    value: "Brazil",
  });

  // Preenchimento dos campo "Idioma da Família"

  await fillFieldsPage.fillDropdownSelector({
    selector: "span",
    hasText: "Idioma da Família",
    value: "Families in English",
  });

  // Preenchimento dos campo "Área de Atuação"

  await fillFieldsPage.fillCheckbox({ selector: "span", value: "Arquiteto" });
  await page.waitForTimeout(2000);

  await fillFieldsPage.fillCheckbox({
    selector: "span",
    value: "Designer de Interiores",
  });
  await page.waitForTimeout(3000);

  // Preenchimento dos campo "Como você ficou sabendo sobre a Blocks"

  await fillFieldsPage.fillDropdownSelector({
    selector: "span",
    hasText: "Como você ficou sabendo sobre a Blocks?",
    value: "Other",
    exact: true,
  });

  // Preenchimento dos campos "Senha" e "Confirme sua Senha"

  await fillFieldsPage.fillInput({
    selector: "#password",
    value: "123456789Aa!",
  });
  await fillFieldsPage.fillInput({
    selector: "#confirm_password",
    value: "123456789Aa!",
  });

  // Preenchimento dos campo "Termos de Uso"

  await fillFieldsPage.fillCheckbox({
    selector: "span",
    value: "Eu aceito a",
  });
  await page.waitForTimeout(3000);

  // Processo para Click do Botão "Entrar"

  const spanRegisterButton = page.locator("span", {
    hasText: "Entrar",
  });

  const buttonRegister = spanRegisterButton.locator("..").locator("..");

  buttonRegister.click();

  await page.waitForTimeout(3000);

  await page.waitForURL("https://www.blocksrvt.com/en/home", {
    waitUntil: "domcontentloaded",
  });

  await expect(page).toHaveURL("https://www.blocksrvt.com/en/home");
});
