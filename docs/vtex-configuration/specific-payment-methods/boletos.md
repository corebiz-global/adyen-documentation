---
title: Boletos (Bank Slips)
description: Boleto is the cash-based payment method used throughout Brazil
hide_title: true
sidebar_custom_props:
  image: /img/icons/boletos.svg
  subtitle: Cash
---

import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

### Set up the payment condition

1. In VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the top search bar.
2. In the **Payment Conditions** tab, click the ![**Add Payment Method**](/img/vtex-add-payment-method-button.png) button.
3. Select **Boleto Bancário** in the Boleto section.
4. Enable the condition in the Status field.
5. In the **Process with provider** field, choose the provider you previously configured.
6. Optionally, configure special payment conditions as needed.
7. Click **Save**.

### Configure Boleto expiration days

1. In VTEX Admin, navigate to **Store Settings > Payments > Providers**, or enter Providers in the top search bar.
2. On the Providers screen, select the Adyen provider.
3. In the details section, click **Edit**.
4. In the **Boleto Expiration Days** field, set the desired expiration period for the boleto. Note that there is an additional processing day required for the payment to be sent to Adyen.

![boleto Expiration Days](/img/vtex-boleto-expiration.png)
