# Intentional Edge Cases 

## 1. Refresh after selecting the other currencies
User refreshes after selecting other currencies going back to USD.

Expected:
The page should stay in the selected currency.

---

## 2. No limits in Order summary
No matter how many times we select "Add to Cart", products are adding in order summary endlessly.

Expected:
Should keep a order limit.

---

## 3. Success! message is still displayed after adding other products
After "Success! Order ID: ORD-9921" message displayed, then adding the other products in order summary still displays the same message.

Expected:
"Success! Order ID: ORD-9921" should be removed in order summary when adding new products.

---

## 4. Same order ID displayed 
Same order ID "ORD-9921" displayed for every products

Expected:
Different order ID's should display for every products