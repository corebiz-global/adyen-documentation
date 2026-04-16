---
title: Affirm
description: Affirm offers buy now, pay later to millions of shoppers in North America
hide_title: true
sidebar_custom_props:
  image: /img/icons/affirm.svg
  subtitle: Buy now pay later
---

import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

Affirm is configured as a standard payment method in VTEX:

1. **In Adyen**:
   - Enable **Affirm** in your Adyen Customer Area.

2. **In VTEX**:
   - Go to **Store Settings > Payment > Settings**.
   - In the **Payment Conditions** tab, click the ![**Add Payment Method**](/img/vtex-add-payment-method-button.png) button.
   - Search for **AdyenAffirm** and select it.
   > **Attention**: When searching for Affirm in VTEX, you will find two options (**Affirm** and **AdyenAffirm**). Make sure to select the **AdyenAffirm** option so that the Adyen provider is used correctly.

   ![Affirm Selection](/img/vtex-affirm-selection.png)

   - Select the Adyen provider in the **Process with provider** field.
   - Click **Save**.
