import { BusinessPlansPage } from '../pageObjects/pages/BusinessPlansPage';
import { LandingPage } from '../pageObjects/pages/LandingPage';
import { PersonalPlansPage } from '../pageObjects/pages/PersonalPlansPage';
import { QuotePage } from '../pageObjects/pages/QuotePage';
import { test as base } from '@playwright/test';

interface CustomFixtures {
  landingPage: LandingPage;
  quotePage: QuotePage;
  businessPlansPage: BusinessPlansPage;
  personalPlansPage: PersonalPlansPage;
}

export const test = base.extend<CustomFixtures>({
  page: async ({ baseURL, page }, use) => {
    if (!baseURL) {
      throw new Error('Incorrect baseURL variable!');
    }
    await page.goto(baseURL);
    await use(page);
  },

  landingPage: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await use(landingPage);
  },

  quotePage: async ({ page }, use) => {
    const quotePage = new QuotePage(page);
    await use(quotePage);
  },

  businessPlansPage: async ({ page }, use) => {
    const businessPlansPage = new BusinessPlansPage(page);
    await use(businessPlansPage);
  },

  personalPlansPage: async ({ page }, use) => {
    const personalPlansPage = new PersonalPlansPage(page);
    await use(personalPlansPage);
  },
});
