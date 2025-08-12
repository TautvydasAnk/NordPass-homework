import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class BusinessPlansPage extends BasePage {
  constructor(page: Page) {
    super(page, 'plans/business/');
  }

  public get businessPricingTabButton(): Locator {
    return this.page.getByTestId('tab-business-in-pricing-cards');
  }
}
