---
title: Ideal
description: iDEAL is a Dutch interbank system for online banking
hide_title: true
sidebar_custom_props:
  image: /img/icons/ideal.svg
  subtitle: Online banking
---

import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

> **Important**: The important information about Ideal is that in the VTEX payment method configuration step, you will find two payment methods when you search for Ideal. Please select “**Ideal V3**". After that follow the steps detailed in the [Configuring the Payment Provider in VTEX](../configuring-provider)

![IDeal](/img/vtex-ideal-config.png)
![iDeal V3](/img/vtex-ideal-v3.png)
