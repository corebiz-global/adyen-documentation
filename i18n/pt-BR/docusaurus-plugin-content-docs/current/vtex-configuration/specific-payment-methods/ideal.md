---
title: Ideal
description: o iDEAL é um sistema interbancário holandês para banco online
hide_title: true
sidebar_custom_props:
  image: /img/icons/ideal.svg
  subtitle: Banco Online
---
import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

> **Importante**: A informação importante sobre o Ideal é que na etapa de configuração do método de pagamento da VTEX, você encontrará dois métodos de pagamento ao pesquisar por Ideal. Por favor, selecione “**Ideal V3**". Depois disso, siga os passos detalhados em [Configurando o Provedor de Pagamento na VTEX](../configuring-provider)

![IDeal](/img/vtex-ideal-config.png)
![iDeal V3](/img/vtex-ideal-v3.png)
