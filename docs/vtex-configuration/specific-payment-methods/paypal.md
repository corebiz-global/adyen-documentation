---
title: PayPal
description: PayPal is a major digital wallet, with over 300 million active consumers
hide_title: true
sidebar_custom_props:
  image: /img/icons/paypal.svg
  subtitle: Digital wallets
---

import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

1. **In Adyen**:
   - Enable PayPal in your Adyen Customer Area under **Settings > Payment Methods**.
   - Ensure your PayPal Merchant ID is linked to your Adyen account.

2. **In VTEX**:
   - Go to **Store Settings > Payment > Settings**.
   - In the **Payment Conditions** tab, click the ![**Add Payment Method**](/img/vtex-add-payment-method-button.png) button.
   - Search for **PayPal** and select it.
   > **Attention**: When searching for PayPal in VTEX, you will find several options. Make sure to select the option named simply **PayPal**.

   ![PayPal Selection](/img/vtex-paypal-selection.png)

   - Select the Adyen provider in the **Process with provider** field.
   - Set the status to **Active** and click **Save**.
