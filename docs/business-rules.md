---
sidebar_position: 6
title: Business Rules
---


## Business Rules for Payment Methods

This document presents the business rules applicable to the different payment methods used on the platform. Each method follows a specific operational flow, with clear rules for authorization, capture, refund, and cancellation. The goal is to ensure a secure and efficient experience for customers and merchants.

### 6.1. Credit and Debit Cards

Payments with credit and debit cards involve multiple steps, from risk analysis to transaction settlement.

#### 6.1.1 Payment Flow

The customer selects a credit or debit card as the payment method at checkout.

The system performs a risk analysis to minimize fraud.

If approved, the payment is authorized by the card issuer.

The capture occurs according to the capture window configured in the connector.

The transaction is settled, and the order is updated in VTEX.

#### 6.1.2 Specific Rules

Authorization: Performed after risk analysis, which can be automatic or manual.

Capture: Can be immediate or occur within the period defined by the connector.

Refund: Allowed in partial or full amounts, depending on the acquirer’s rules.

Cancellation: Can only be done before capture; after that, a refund is required.

3DS (Secure Authentication): Some transactions may require authentication via 3D Secure for increased security. For debit cards, 3DS availability depends on the card network and issuer.

#### 6.1.1 Tokenization

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

### 6.2. Pix

Pix is an instant payment method that allows quick and direct transfers between bank accounts.

#### 6.2.1 Payment Flow

The customer selects Pix as the payment method at checkout.

The connector generates a dynamic QR Code and displays it to the customer.

The customer makes the payment via a banking app.

The transaction is confirmed within 10 seconds.

Adyen sends a webhook to the connector.

The connector approves the payment and updates VTEX, redirecting the customer to the Order Placed page.

#### 6.2.2 Specific Rules

Capture: Always immediate, with no configurable capture window.

Refund: Only full refunds are allowed; partial refunds are not possible.

Cancellation: A Pix payment cannot be canceled after completion.

QR Code Expiration: The code expires in 10 minutes. If the payment is made after this period, VTEX will not recognize the transaction, and the amount will be automatically refunded.

### 6.3. Bank Slip (Boleto Bancário)

The bank slip is a widely used option for higher-value purchases but depends on bank clearing for payment validation.

#### 6.3.1 Payment Flow

The customer selects Bank Slip at checkout.

The connector generates a PDF file with the bank slip.

The customer makes the payment via bank, lottery house, or banking app.

The clearing occurs within 1 to 3 business days.

Adyen confirms the payment and sends a webhook to the connector.

The connector approves the payment and updates VTEX.

#### 6.3.2 Specific Rules

Refund: Not allowed. If necessary, the merchant must manually refund via bank transfer.

Validity: Defined at the time of generation, ranging from 1 to 30 days, depending on the connector configuration and bank rules.

#### 6.4. Apple Pay

Apple Pay is a digital payment method that enables secure transactions through compatible Apple devices.

#### 6.4.1 Payment Flow

The customer selects Apple Pay as the payment method at checkout.

The app displays the customer’s available cards.

The customer authenticates the transaction via Face ID, Touch ID, or passcode.

The payment follows the rules of the selected card (credit or debit).

Adyen confirms the transaction and sends a webhook to the connector.

The connector approves the payment and updates VTEX.

#### 6.4.2 Specific Rules

Installments: Available only for credit cards.

Authentication: All transactions require biometric or passcode authentication for added security.

### 6.5. Klarna

Klarna offers various payment options, allowing customers to choose between immediate, installment, or deferred payments.

#### 6.5.1 Payment Flow

The customer selects Klarna as the payment method at checkout.

The customer chooses among the available payment options: Pay Now, Pay Over Time, or Pay Later.

The system redirects the customer to Klarna for authentication and transaction approval.

Klarna confirms the payment and sends a webhook to the connector.

The connector approves the payment and updates VTEX.

#### 6.5.2 Specific Rules

Pay Now: The full amount is immediately debited from the customer’s bank account or card.

Pay Over Time: The customer pays in multiple installments according to Klarna's options.

Pay Later: The customer has a set period to make the payment without additional interest (according to Klarna and merchant rules).

Authorization: Performed by Klarna and may be subject to a credit check.

Capture: Automatic after payment approval.

Refund: Allowed in partial or full amounts, depending on Klarna's rules.

Cancellation: Can only be done before capture; after that, a refund is required.

### 6.6. iDEAL

iDEAL is a widely used payment method in the Netherlands, enabling direct bank transfers.

#### 6.6.1 Payment Flow

The customer selects iDEAL as the payment method at checkout.

The system displays a list of participating banks for the customer to choose from.

The customer is redirected to their banking environment for authentication and payment approval.

The bank confirms the transaction, and iDEAL sends a webhook to the connector.

The connector approves the payment and updates VTEX.

#### 6.6.2 Specific Rules

Capture: Always immediate, with no configurable capture window.

Refund: Allowed in partial or full amounts, depending on the issuing bank's rules.

Cancellation: Not possible after payment completion.

Availability: Only for customers with bank accounts in Dutch banks that participate in iDEAL.

Confirmation Time: Typically occurs within seconds, ensuring fast transactions.

### 6.7. P24

P24 is a popular payment method in Poland, allowing direct bank transfers and fast payments.

#### 6.7.1 Payment Flow

The customer selects Przelewy24 (P24) at checkout.

The system displays a list of participating banks for the customer to choose from.

The customer is redirected to their banking environment for authentication and payment approval.

The bank confirms the transaction, and P24 sends a webhook to the connector.

The connector approves the payment and updates VTEX.

#### 6.7.2 Specific Rules

Capture: Always immediate, with no configurable capture window.

Refund: Allowed in partial or full amounts, depending on the issuing bank's rules.

Cancellation: Not possible after payment completion.

Availability: Only for customers with bank accounts in Polish banks that participate in P24.

Confirmation Time: Typically occurs within seconds, ensuring fast transactions.
