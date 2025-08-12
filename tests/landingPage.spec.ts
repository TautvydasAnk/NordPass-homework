import { test } from './fixtures/fixtures';
import { expect } from '@playwright/test';

test.describe('Landing Page flow', () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.loadPage();
  });

  test('should correctly load landing page navigation components with dropdown', async ({
    landingPage,
  }) => {
    for (const element of landingPage.allDropdownNavigationButtons) {
      await expect(element.locator).toBeVisible();
      await expect(element.locator.locator('//span[contains(@class, "text-md")]')).toHaveText(
        element.name
      );
    }
  });

  test('should correctly load landing page navigation static components', async ({
    landingPage,
  }) => {
    for (const element of landingPage.allStaticNavigationButtons) {
      await expect(element.locator).toBeVisible();
      await expect(element.locator.locator('//a[@type="link"]')).toHaveText(element.name);
    }
  });

  test('business plans link should work correctly', async ({
    page,
    landingPage,
    businessPlansPage,
  }) => {
    await landingPage.businessPlansButton.click();
    await page.waitForURL(businessPlansPage.getFullPageUrl());
    expect(page.url()).toEqual(businessPlansPage.getFullPageUrl());
    await expect(businessPlansPage.businessPricingTabButton).toBeVisible();
  });

  test('personal plans link should work correctly', async ({
    page,
    landingPage,
    personalPlansPage,
  }) => {
    await landingPage.personalPlansButton.click();
    await page.waitForURL(personalPlansPage.getFullPageUrl());
    expect(page.url()).toEqual(personalPlansPage.getFullPageUrl());
    await expect(personalPlansPage.personalPricingTabButton).toBeVisible();
  });

  test('@visual landing page should have all elements loaded correctly', async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });
});
