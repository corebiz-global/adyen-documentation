---
title: Ideal
description: iDEAL es un sistema interbancario holandés para banca online
hide_title: true
sidebar_custom_props:
  image: /img/icons/ideal.svg
  subtitle: Banca Online
---
import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

> **Importante**: La información importante sobre Ideal es que en el paso de configuración del método de pago de VTEX, encontrará dos métodos de pago cuando busque Ideal. Seleccione “**Ideal V3**". Después de eso, siga los pasos detallados en [Configuración del Proveedor de Pagos en VTEX](../configuring-provider)

![IDeal](/img/vtex-ideal-config.png)
![iDeal V3](/img/vtex-ideal-v3.png)
