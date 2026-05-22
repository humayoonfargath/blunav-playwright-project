import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Payment Failure Handling', () => {

  test('Mock payment failure using API interception', async ({ page }) => {

    const home = new HomePage(page);

    // INTERCEPT API REQUEST
    await page.route('**/api/checkout', async route => {

      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          message: 'Payment Processor Error'
        })
      });

    });

    await home.goto();

    await home.addProduct('Premium Widget');

    await home.checkout();

    await expect(page.locator('#status-container')).toContainText('Payment Processor Error');

  });

});