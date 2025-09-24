---
sidebar_position: 5
title: Payment Flow
---


## Authorizing

The payment flow begins with the **Authorizing** stage, which occurs right after checkout. At this moment, the customer selects the payment method and confirms the purchase by clicking **"Complete Purchase."** VTEX then gathers all necessary information—such as card details, order information, and other credentials—and the payment connector securely sends it to Adyen. This transmission marks the beginning of essential communication between platforms, ensuring that all transaction elements are correctly recorded for the next steps.

## Authorized

At this stage, Adyen forwards the received information to issuing banks, which perform a series of verifications. They check the authenticity of the data, the availability of funds, and apply security protocols, such as **PCI DSS** standards, to prevent fraud. The success of this step is crucial for the transaction to proceed smoothly, ensuring that the payment can be securely processed.

## Approved

Once the issuing bank authorizes the transaction, it reaches the **Approved** stage. This means the payment has been officially accepted, and all security and validation criteria have been met. The customer is then redirected to the **"Order Placed"** page, confirming that the order has been registered. Additionally, the system may send email or SMS notifications to reinforce that the purchase was successfully completed.

## Denied

If the transaction is not authorized by the issuing bank, the payment is declined. This can happen for various reasons, such as:
- Insufficient funds
- Suspected fraud
- Incorrect details
- Restrictions on the customer's card

When this occurs, the system immediately notifies the customer, suggesting they try a different payment method or contact their bank for further details.

## Capture

In the **Capture** stage, the previously authorized amount is either held or debited from the customer's account, depending on the configured capture period. This process can occur immediately or within the timeframe set for each payment method. Here, the **pre-authorization** is converted into a real financial commitment. The system monitors the transaction to ensure that the debited amount matches the exact purchase value, preventing discrepancies and ensuring the integrity of the payment flow.

## Canceled

A transaction can be canceled before or after capture for several reasons:
- At the customer's request (if they decide to cancel before payment confirmation).
- By the merchant (in cases of suspected fraud, order errors, or operational issues).
- Due to process failures (such as technical errors or irregularities at any stage).

When a transaction is canceled, the system prevents the amount from being debited or immediately reverses the authorization, ensuring the customer is not charged.

## Settlement

After capture, the payment moves to the **Settlement** stage, where the debited amount is prepared for transfer to the merchant. Settlement may occur immediately or only after the invoice is issued, depending on business rules. During this stage, financial reconciliations are carried out, and any applicable fees or discounts are applied, ensuring the final amount is accurate before the transfer.

## Settling

At this point, the settlement process is officially initiated. Adyen transfers the captured amount to the merchant's account, following all contractual and regulatory requirements. This stage involves a detailed verification of amounts, along with the correct application of commissions and deductions as outlined in the contract. This conclusion reinforces the reliability of the integrated system between VTEX and Adyen, providing security for both the merchant and the customer.

## Settled

In the final **Settled** stage, the payment settlement is successfully completed. All procedures—from initial authorization to the transfer of funds—have been correctly executed. As a result, the amount due to the merchant becomes available for use, effectively and securely finalizing the payment process.

## Refunded

If necessary, a captured transaction can go through the **Refunded** stage, where the debited amount is returned to the customer. The refund can be **full or partial**, depending on the merchant's policy and the type of purchase. This process can be initiated by either the customer or the merchant, typically in cases of product returns, service cancellations, or payment errors. Once the refund is processed, the customer receives the amount back through the same payment method used for the purchase.

![paymentflow](https://i.imgur.com/yWGGPkR.png)
