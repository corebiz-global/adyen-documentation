---
title: BLIK
description: BLIK is Poland's dominant mobile payment method
hide_title: true
sidebar_custom_props:
  image: /img/icons/blik.svg
  subtitle: Online banking
---

import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

1. **In Adyen**:
   - Enable **BLIK** in your Adyen Customer Area.

2. **In VTEX**:
   - Go to **Store Settings > Payment > Settings**.
   - In the **Payment Conditions** tab, click the ![**Add Payment Method**](/img/vtex-add-payment-method-button.png) button.
   - Search for **BLIK** and select it.
   - Associate it with the Adyen provider.
   - Save the configuration.
