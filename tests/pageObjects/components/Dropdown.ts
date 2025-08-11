import { Locator } from '@playwright/test';

export class Dropdown<OPTIONS extends string> {
  readonly locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  async toggleDropdown(): Promise<void> {
    await this.locator.click();
  }

  async selectByValue(value: OPTIONS): Promise<void> {
    await this.locator.selectOption(value);
  }
}
