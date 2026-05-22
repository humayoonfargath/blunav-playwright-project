# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> Visual Regression >> Checkout button visual snapshot
- Location: tests\visual.spec.ts:5:7

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#checkout-btn')
  Expected an image 300px by 40px, received 302px by 41px. 573 pixels (ratio 0.05 of all image pixels) are different.

  Snapshot: checkout-button.png

Call log:
  - Expect "toHaveScreenshot(checkout-button.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - waiting for locator('#checkout-btn')
    - locator resolved to <button disabled id="checkout-btn">…</button>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - Expected an image 300px by 40px, received 302px by 41px. 573 pixels (ratio 0.05 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#checkout-btn')
    - locator resolved to <button disabled id="checkout-btn">…</button>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - Expected an image 300px by 40px, received 302px by 41px. 573 pixels (ratio 0.05 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - heading "BluNav Checkout" [level=1] [ref=e3]
    - combobox "Select Currency" [ref=e4] [cursor=pointer]:
      - option "USD ($)" [selected]
      - option "EUR (€)"
      - option "GBP (£)"
  - generic [ref=e5]:
    - main [ref=e6]:
      - generic [ref=e7]:
        - heading "Premium Widget" [level=3] [ref=e8]
        - paragraph [ref=e9]: $100.00
        - button "Add to Cart" [ref=e10] [cursor=pointer]
      - generic [ref=e11]:
        - heading "Super Widget" [level=3] [ref=e12]
        - paragraph [ref=e13]: $150.00
        - button "Add to Cart" [ref=e14] [cursor=pointer]
      - generic [ref=e15]:
        - heading "Mega Widget" [level=3] [ref=e16]
        - paragraph [ref=e17]: $200.00
        - button "Add to Cart" [ref=e18] [cursor=pointer]
    - complementary [ref=e19]:
      - heading "Order Summary" [level=2] [ref=e20]
      - paragraph [ref=e22]: Your cart is empty.
      - generic [ref=e23]:
        - generic [ref=e24]: Subtotal
        - generic [ref=e25]: $0.00
      - generic [ref=e26]:
        - generic [ref=e27]: Tax (8%)
        - generic [ref=e28]: $0.00
      - generic [ref=e29]:
        - generic [ref=e30]: Total
        - generic [ref=e31]: $0.00
      - generic [ref=e32] [cursor=pointer]:
        - checkbox "Simulate Payment Failure" [ref=e33]
        - generic [ref=e34]: Simulate Payment Failure
      - button "Proceed to Checkout" [disabled] [ref=e35]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Visual Regression', () => {
  4  | 
  5  |   test('Checkout button visual snapshot', async ({ page }) => {
  6  | 
  7  |     await page.setViewportSize({
  8  |       width: 1280,
  9  |       height: 720
  10 |     });
  11 | 
  12 |     await page.goto('/');
  13 | 
  14 |     await expect(page.locator('#checkout-btn'))
> 15 |       .toHaveScreenshot('checkout-button.png', {
     |        ^ Error: expect(locator).toHaveScreenshot(expected) failed
  16 |         animations: 'disabled'
  17 |       });
  18 | 
  19 |   });
  20 | 
  21 | });
```