import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {

  test('Checkout button visual snapshot', async ({ page }) => {

    await page.goto('/');

    await expect(page.locator('#checkout-btn')).toHaveScreenshot('checkout-button.png');
  });

});