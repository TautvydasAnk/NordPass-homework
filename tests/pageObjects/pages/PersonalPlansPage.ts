import { Locator, Page } from '@playwright/test';

export class PersonalPlansPage {
  readonly page: Page;
  readonly pageUrl = 'https://nordpass.com/plans/';

  constructor(page: Page) {
    this.page = page;
  }

  public get personalPricingTabButton(): Locator {
    return this.page.getByTestId('tab-personal-in-pricing-cards');
  }
}
