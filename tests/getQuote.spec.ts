import { CompanySize, ContactWay } from './enums/QuotePageEnums';
import { test } from './fixtures/fixtures';
import { expect } from '@playwright/test';

test.describe('Get Quote flow', () => {
  test.beforeEach(async ({ page, landingPage, quotePage }) => {
    await landingPage.quoteButton.click();
    await page.waitForURL(quotePage.pageUrl);
  });

  test('should validate all required fields', async ({ quotePage }) => {
    await quotePage.sendButton.click();
    for (const validationError of quotePage.validationErrorLocators) {
      await expect(validationError).toBeVisible();
    }
  });

  test('should successfully send filled form', async ({ quotePage }) => {
    await quotePage.fillForm(
      'Full Name',
      'homeworkTestNord@proton.me',
      'Company Name',
      CompanySize.S,
      ContactWay.EMAIL
    );
    await quotePage.sendButton.click();
    //Test is flaky due to captcha, proper Test environment is required to pass this test
    await expect(quotePage.successfulSubmitionMessage).toBeVisible();
  });
});
