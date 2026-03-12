---
sidebar_position: 6
title: Business Rules
---


This document presents the business rules applicable to the different payment methods used on the platform. Each method follows a specific operational flow, with clear rules for authorization, capture, refund, and cancellation. The goal is to ensure a secure and efficient experience for customers and merchants.

## Credit and Debit Cards

Payments with credit and debit cards involve multiple steps, from risk analysis to transaction settlement.

### Payment Flow

1. The customer selects a credit or debit card as the payment method at checkout.
2. The system performs a risk analysis to minimize fraud.
3. If approved, the payment is authorized by the card issuer.
4. The capture occurs according to the capture window configured in the connector.
5. The transaction is settled, and the order is updated in VTEX.

### Specific Rules

- **Authorization**: Performed after risk analysis, which can be automatic or manual.
- **Capture**: Can be immediate or occur within the period defined by the connector.
- **Refund**: Allowed in partial or full amounts, depending on the acquirer’s rules.
- **Cancellation**: Can only be done before capture; after that, a refund is required.
- **3DS (Secure Authentication)**: Some transactions may require authentication via **3D Secure** for increased security. For debit cards, 3DS availability depends on the card network and issuer.

### Tokenization

With Adyen, you can securely store one or more payment details per shopper, with the shopper's consent. This allows you to offer subscription payments, automatic top-ups to shopper accounts, and give your shoppers a faster checkout experience by using their stored card.

We refer to these saved payment details as tokens and storing a shopper's payment details as tokenization.

The tokenization is applied in the following scenarios:

- Credit Card Payments
- 3DS Payments
- Subscriptions
- Change Orders

The tokenization process works as follows:

1. When the first credit card order is placed and the save card option is selected, the connector will inform Adyen to tokenize the card.
2. Adyen will then respond with a token that can be used for future transactions.
3. This token is stored in VTEX, so for any later transactions from the same user and credit card, only the CCV and the token are sent to Adyen, and the card information is not transmitted again.

## Pix

Pix is an instant payment method that allows quick and direct transfers between bank accounts.

### Payment Flow

1. The customer selects Pix as the payment method at checkout.
2. The connector generates a dynamic **QR Code** and displays it to the customer.
3. The customer makes the payment via a banking app.
4. The transaction is confirmed within 10 seconds.
5. Adyen sends a webhook to the connector.
6. The connector approves the payment and updates VTEX, redirecting the customer to the Order Placed page.

### Specific Rules

- **Capture**: Always immediate, with no configurable capture window.
- **Refund**: Only full refunds are allowed; partial refunds are not possible.
- **Cancellation**: A Pix payment cannot be canceled after completion.
- **QR Code Expiration**: The code expires in 10 minutes. If the payment is made after this period, VTEX will not recognize the transaction, and the amount will be automatically refunded.

## Bank Slip (Boleto Bancário)

The bank slip is a widely used option for higher-value purchases but depends on bank clearing for payment validation.

### Payment Flow

1. The customer selects Bank Slip at checkout.
2. The connector generates a PDF file with the bank slip.
3. The customer makes the payment via bank, lottery house, or banking app.
4. The clearing occurs within 1 to 3 business days.
5. Adyen confirms the payment and sends a webhook to the connector.
6. The connector approves the payment and updates VTEX.

### Specific Rules

- **Refund**: Not allowed. If necessary, the merchant must manually refund via bank transfer.
- **Validity**: Defined at the time of generation, ranging from 1 to 30 days, depending on the connector configuration and bank rules.

## Apple Pay

Apple Pay is a digital payment method that enables secure transactions through compatible Apple devices.

### Payment Flow

1. The customer selects Apple Pay as the payment method at checkout.
2. The app displays the customer’s available cards.
3. The customer authenticates the transaction via Face ID, Touch ID, or passcode.
4. The payment follows the rules of the selected card (credit or debit).
5. Adyen confirms the transaction and sends a webhook to the connector.
6. The connector approves the payment and updates VTEX.

### Specific Rules

- **Installments**: Available only for credit cards.
- **Authentication**: All transactions require biometric or passcode authentication for added security.

## Google Pay

Google Pay allows customers to pay using cards saved to their Google Account.

### Payment Flow

1. The customer selects Google Pay at checkout.
2. The customer selects the desired card from their Google Wallet.
3. The customer authenticates if required (e.g., via biometrics or device PIN).
4. The transaction is processed through Adyen.
5. Adyen confirms the transaction and sends a webhook to the connector.
6. The connector approves the payment and updates VTEX.

### Specific Rules

- **Installments**: Available only for credit cards.
- **Production Requirements**: In production, a Numeric Merchant ID from Google is required to avoid integration errors.

## MultiBanco

MultiBanco is a popular post-payment method in Portugal that allows customers to pay via ATM or online banking.

### Payment Flow

1. The customer selects MultiBanco at checkout.
2. The connector generates a payment reference and entity.
3. An email is sent to the customer with the payment details.
4. The customer completes the payment at an ATM or via online banking using the provided details.
5. Adyen receives the payment confirmation and sends a webhook.
6. The connector approves the payment and updates VTEX.

### Specific Rules

- **Expiration**: The payment reference has a specific validity period (usually 3 days).
- **Refund**: Allowed in partial or full amounts.

## BLIK

BLIK is a mobile payment system in Poland that allows for instant payments using a 6-digit code.

### Payment Flow

1. The customer selects BLIK at checkout.
2. The customer enters a 6-digit BLIK code generated in their banking app.
3. The customer confirms the payment within their banking app.
4. Adyen confirms the transaction and sends a webhook.
5. The connector approves the payment and updates VTEX.

### Specific Rules

- **Capture**: Always immediate.
- **Timeout**: The customer has a limited time (usually 2 minutes) to confirm the transaction in the app.

## PayPal

PayPal is a global digital wallet that allows customers to pay using their PayPal balance or linked cards/bank accounts.

### Payment Flow

1. The customer selects PayPal at checkout.
2. The customer is redirected to the PayPal environment to log in and approve the payment.
3. After approval, the customer is redirected back to the store.
4. Adyen processes the transaction and sends a webhook.
5. The connector updates the order status in VTEX.

### Specific Rules

- **Refund**: Full and partial refunds are supported directly through the connector.

## Affirm

Affirm is a "Buy Now, Pay Later" (BNPL) service that allows customers to pay for purchases in fixed monthly installments.

### Payment Flow

1. The customer selects Affirm at checkout.
2. The customer is redirected to Affirm to choose a payment plan and complete a quick credit check.
3. Once approved, the customer confirms the purchase and is redirected back to the store.
4. Adyen confirms the transaction and sends a webhook.
5. The connector updates the order status in VTEX.

### Specific Rules

- **Eligibility**: Availability depends on the customer's credit evaluation by Affirm.

## Bancontact Mobile

Bancontact Mobile allows customers to pay using the Bancontact app on their mobile devices, often via a QR code or app-to-app redirect.

### Payment Flow

1. The customer selects Bancontact Mobile at checkout.
2. A QR code is generated for the customer to scan with the Bancontact app, or they are redirected to the app if on a mobile device.
3. The customer confirms the payment within the app.
4. Adyen confirms the transaction and sends a webhook.
5. The connector updates the order status in VTEX.

### Specific Rules

- **Capture**: Always immediate.
- **Refund**: Allowed in partial or full amounts.

## Klarna

Klarna offers various payment options, allowing customers to choose between immediate, installment, or deferred payments.

### Payment Flow

1. The customer selects Klarna as the payment method at checkout.
2. The customer chooses among the available payment options: Pay Now, Pay Over Time, or Pay Later.
3. The system redirects the customer to Klarna for authentication and transaction approval.
4. Klarna confirms the payment and sends a webhook to the connector.
5. The connector approves the payment and updates VTEX.

### Specific Rules

- **Pay Now**: The full amount is immediately debited from the customer’s bank account or card.
- **Pay Over Time**: The customer pays in multiple installments according to Klarna's options.
- **Pay Later**: The customer has a set period to make the payment without additional interest (according to Klarna and merchant rules).
- **Authorization**: Performed by Klarna and may be subject to a credit check.
- **Capture**: Automatic after payment approval.
- **Refund**: Allowed in partial or full amounts, depending on Klarna's rules.
- **Cancellation**: Can only be done before capture; after that, a refund is required.

## iDEAL

iDEAL is a widely used payment method in the Netherlands, enabling direct bank transfers.

### Payment Flow

1. The customer selects iDEAL as the payment method at checkout.
2. The system displays a list of participating banks for the customer to choose from.
3. The customer is redirected to their banking environment for authentication and payment approval.
4. The bank confirms the transaction, and iDEAL sends a webhook to the connector.
5. The connector approves the payment and updates VTEX.

### Specific Rules

- **Capture**: Always immediate, with no configurable capture window.
- **Refund**: Allowed in partial or full amounts, depending on the issuing bank's rules.
- **Cancellation**: Not possible after payment completion.
- **Availability**: Only for customers with bank accounts in Dutch banks that participate in iDEAL.
- **Confirmation Time**: Typically occurs within seconds, ensuring fast transactions.

## P24

P24 is a popular payment method in Poland, allowing direct bank transfers and fast payments.

### Payment Flow

1. The customer selects Przelewy24 (P24) at checkout.
2. The system displays a list of participating banks for the customer to choose from.
3. The customer is redirected to their banking environment for authentication and payment approval.
4. The bank confirms the transaction, and P24 sends a webhook to the connector.
5. The connector approves the payment and updates VTEX.

### Specific Rules

- **Capture**: Always immediate, with no configurable capture window.
- **Refund**: Allowed in partial or full amounts, depending on the issuing bank's rules.
- **Cancellation**: Not possible after payment completion.
- **Availability**: Only for customers with bank accounts in Polish banks that participate in P24.
- **Confirmation Time**: Typically occurs within seconds, ensuring fast transactions.