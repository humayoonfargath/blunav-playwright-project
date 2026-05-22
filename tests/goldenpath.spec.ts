import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test.describe('Golden Path Checkout Flow', () => {

  test('Guest user completes purchase successfully', async ({ page }) => {

    const home = new HomePage(page);
    const cart = new CartPage(page);

    await home.goto();

    await home.addProduct('Premium Widget');

    await home.addProduct('Super Widget');

    await cart.verifySubtotal('$250.00');

    await cart.verifyTax('$20.00');

    await cart.verifyTotal('$270.00');

    await home.checkout();

    await expect(cart.statusMessage).toContainText('Success!');
  });
});