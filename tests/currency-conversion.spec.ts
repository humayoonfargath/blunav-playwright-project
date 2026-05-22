import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Localization Tests', () => {

  test('Currency conversion USD to EUR', async ({ page }) => {

    const home = new HomePage(page);

    await home.goto();

    await home.changeCurrency('EUR');

    await expect(page.locator('.price').first()).toContainText('€92.00');
  });

});