import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {

  test('Layout changes on mobile viewport', async ({ page }) => {

    await page.setViewportSize({
      width: 375,
      height: 812
    });

    await page.goto('/');

    await expect(page.locator('.container')).toBeVisible();
  });

});