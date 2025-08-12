import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class PersonalPlansPage extends BasePage {
  constructor(page: Page) {
    super(page, 'plans/');
  }

  public get personalPricingTabButton(): Locator {
    return this.page.getByTestId('tab-personal-in-pricing-cards');
  }
}
