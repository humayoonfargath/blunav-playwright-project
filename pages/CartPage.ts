import { Page, expect } from '@playwright/test';

export class CartPage {

  constructor(private page: Page) {}

  subtotal = this.page.locator('#subtotal');

  tax = this.page.locator('#tax-amount');

  total = this.page.locator('#total-amount');

  statusMessage = this.page.locator('#status-container');

  async verifySubtotal(value: string) {
    await expect(this.subtotal).toContainText(value);
  }

  async verifyTax(value: string) {
    await expect(this.tax).toContainText(value);
  }

  async verifyTotal(value: string) {
    await expect(this.total).toContainText(value);
  }
}