## Mock payment checkout failure using API interception

### Steps
1. Open website
2. Select "Premium Widget" and proceed to order summary
3. Select "Simulate Payment Failure" checkbox and then select "Proceed to Checkout"
4. Verify that status : 400 (bad request) is thrown in console and "Payment Processor Error" displayed in order summary

### Expected Result
User should see error message "Payment Processor Error" with this mock API set-up