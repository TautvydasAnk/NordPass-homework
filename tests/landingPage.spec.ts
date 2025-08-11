import { test } from './fixtures/fixtures';
import { expect } from '@playwright/test';

test.describe('Landing Page flow', () => {
  test.beforeEach(async ({ page, landingPage }) => {
    await page.waitForURL(landingPage.pageUrl);
  });

  test('should correctly load landing page navigation components', async ({ landingPage }) => {
    for (const element of landingPage.allNavigationButtons) {
      await expect(element.locator).toBeVisible();
      await expect(element.locator).toContainText(element.name);
    }
  });

  test('business plans link should work correctly', async ({
    page,
    landingPage,
    businessPlansPage,
  }) => {
    await landingPage.businessPlansButton.click();
    await page.waitForURL(businessPlansPage.pageUrl);
    await expect(businessPlansPage.businessPricingTabButton).toBeVisible();
  });

  test('personal plans link should work correctly', async ({
    page,
    landingPage,
    personalPlansPage,
  }) => {
    await landingPage.personalPlansButton.click();
    await page.waitForURL(personalPlansPage.pageUrl);
    await expect(personalPlansPage.personalPricingTabButton).toBeVisible();
  });
});
