import { Page } from "@playwright/test";

type FillInputAndCheckboxFieldsProps = {
  selector: string;
  value: string;
};

type FillDropdownFieldsProps = FillInputAndCheckboxFieldsProps & {
  hasText?: string;
  exact?: boolean;
};
{
}

export class FillFieldsPage {
  constructor(private page: Page) {}

  async fillInput({ selector, value }: FillInputAndCheckboxFieldsProps) {
    const input = this.page.locator(selector);
    await input.fill(value);
  }

  async fillDropdownSelector({
    selector,
    value,
    hasText,
    exact = false,
  }: FillDropdownFieldsProps) {
    const dropdown = this.page.locator(selector, { hasText });
    await dropdown.click();

    const button = this.page.getByRole("button", { name: value, exact });
    await button.click();
  }

  async fillCheckbox({ selector, value }: FillInputAndCheckboxFieldsProps) {
    const spanCheckbox = this.page.locator(selector, { hasText: value });
    await spanCheckbox.locator("..").locator("div").click();
  }
}
