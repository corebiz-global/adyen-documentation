---
title: Google Pay Wallet (VTEX Native)
description: Google Pay™️ lets millions of people add payment cards to their Google Accounts
sidebar_custom_props:
  image: /img/icons/google-pay.svg
  subtitle: Digital wallets, Cards
---

### Set up Google Pay in the Adyen Customer Area

Also you will need to set up Google Pay in your Adyen Customer Area in Payment Methods. To do that, follow the steps below:

#### Request activation

1. In your Customer Area, switch to your merchant account.
2. Go to **Settings > Payment methods**.
3. Select **Request payment methods** to view all available payment methods.

![Adyen Settings](/img/adyen-googlepay-request.png)

4. Use the dropdown lists to filter payment methods by location and type.
5. Select the **Google Pay (paywithgoogle)** payment method.
6. Select **Add**.
7. Apply the payment method(s) to **This merchant account**.
8. If prompted, fill in the required information.
9. Review your requests.
10. Select **Submit request**.

![Submit Request](/img/adyen-googlepay-submit.png)

More info: [Add payment methods | Adyen Docs](https://docs.adyen.com/payment-methods/add-payment-methods)

> **Information**: If the Google Pay (paywithgoogle) payment method is not active on your account, please contact [support@adyen.com](mailto:support@adyen.com) to request access.

#### Validate configuration

After activation, check:
* **Google Pay (paywithgoogle)** is available in your account’s payment methods.
* Merchant Account is correctly configured.

![Active Status](/img/adyen-googlepay-active.png)

### Configure Google Pay in VTEX Admin

#### Access Wallet

1. In the VTEX Admin, go to **Store Settings > Payments > Wallets** or type **Wallets** in the search bar at the top of the page.
2. Select **Activate** to include the Google Pay extension.

![VTEX Wallet](/img/vtex-googlepay-wallet.png)

**The card brands supported by the Google Pay extension are those configured in the payment conditions.**

More info: [Google Pay | VTEX Help](https://help.vtex.com/docs/tracks/google-pay)

#### Display conditions
Google Pay will only appear at checkout when:
* The device is compatible (Android or supported browser).
* The user has a Google account with a card configured.
* The wallet is active in VTEX.
