---
title: Bancontact Mobile
description: Bancontact Mobile allows customers to pay using the Bancontact app on their mobile devices via QR code or app redirect.
hide_title: true
sidebar_custom_props:
  image: /img/icons/bancontact.svg
  subtitle: Mobile
---

import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

1. **In Adyen**:
   - Enable **Bancontact Mobile** in your Adyen Customer Area.

2. **In VTEX**:
   - Go to **Store Settings > Payment > Settings**.
   - In the **Payment Conditions** tab, click the ![**Add Payment Method**](/img/vtex-add-payment-method-button.png) button.
   - Search for **Bancontact Mobile** and select it.
   - Associate it with the Adyen provider.
   - Save the configuration.
