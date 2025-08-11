import { Locator, Page } from '@playwright/test';

export class BusinessPlansPage {
  readonly page: Page;
  readonly pageUrl = 'https://nordpass.com/plans/business/';

  constructor(page: Page) {
    this.page = page;
  }

  public get businessPricingTabButton(): Locator {
    return this.page.getByTestId('tab-business-in-pricing-cards');
  }
}
