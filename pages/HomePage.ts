import { Page, expect } from '@playwright/test';

export class HomePage {

  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async addProduct(productName: string) {

    const productCard = this.page.locator('.product-card').filter({ hasText: productName });

    await productCard.getByRole('button', { name: 'Add to Cart' }).click();
  }

  async changeCurrency(currency: string) {

    await this.page.locator('#currency-selector').selectOption(currency);
  }

  async enablePaymentFailure() {

    await this.page.locator('#mock-failure-toggle').check();
  }

  async checkout() {

    await this.page.getByRole('button', {name: 'Proceed to Checkout'}).click();
  }
}