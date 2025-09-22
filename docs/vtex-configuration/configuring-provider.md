---
sidebar_position: 1
title: Configuring the Provider
---


### Configuring the Payment Provider in VTEX

Once you have completed all the steps listed in the **Adyen Configuration section** you should have all the information needed to be able to activate the Adyen V3 as a payment provider in VTEX.

The **VTEX Payments** module allows several payment providers (gateways, acquirers, sub-acquirers, orchestrators, PSPs, among others) to be configured in your store. This way, you can offer different payment methods and conditions to your customers.

When a purchase is made in your store and the customer makes a payment, data transmission between VTEX and the chosen provider occurs through communication protocols configured in the VTEX Admin.

The payment provider is responsible for processing the payment and returning the result to VTEX. The payment provider can also be responsible for the anti-fraud analysis of the transaction.

Ensure you have the necessary permissions and details of the Adyen payment gateway. To register Adyen gateway affiliation in VTEX, follow the steps below:

1. Go to the store's Admin page `https://{{account}}.myvtex.com/admin/`.
2. In the VTEX Admin, go to **Store Settings > Payments > Providers**, or type **Providers** in the search bar at the top of the page.
3. On the providers screen, click the New provider button.
   ![Providers](https://i.imgur.com/mjkoQTi.png)
4. Look for **Adyen**.
   ![Adyen](https://i.imgur.com/kIo1GBC.png)
5. Select **AdyenV3** from the list of available payment providers.
6. In **App Key** (your Merchant Account Name) field, fill in the name of your Merchant account you grabbed during the [Getting Company and Merchant account credentials](../adyen-configuration/getting-credentials.md) step.
7. In the **App Token** (API Key) field, paste the API Key generated in the [API Key](../adyen-configuration/api-key.md) step.
   ![API Credentials](https://i.imgur.com/Ih85Tus.png)
8. Optionally, set an identification name by filling the **Name** field in **Basic Information**.
9. If your store is not yet in production and you are running tests, you may **Enable test mode** in Payment Control.
10. In the **Live URL** field, fill in the URL prefix you’ve gotten in the [Live URL](../adyen-configuration/live-url.md) section.
    > **Note:** This field should only be filled for production environments. For testing, it must be left blank.
11. In the **Company name**, enter the Company name as set in the Adyen account, the one you saved in the [Getting Company and Merchant account credentials](../adyen-configuration/getting-credentials.md) step.
12. The **Live POS URL** field is used only for Sales APP.
13. In **Client key** field, fill in the Client key you got on Step 6 of the [API Key](../adyen-configuration/api-key.md) section.
    ![API Credentials](https://i.imgur.com/1W8F8FE.png)
14. Click **Save**.

![AdyenV3](https://i.imgur.com/uleOsY1.png)

For further information on the data to be filled in, please refer to the [Adyen API Credentials](https://docs.adyen.com/development-resources/api-credentials/) documentation.

If you need extra help, check the steps outlined in the [VTEX tutorial](https://help.vtex.com/tutorial/registering-gateway-affiliations--tutorials_444) or [VTEX Payments Track](https://help.vtex.com/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)
