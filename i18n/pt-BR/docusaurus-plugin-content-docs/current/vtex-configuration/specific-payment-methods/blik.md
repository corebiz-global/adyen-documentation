---
title: BLIK
description: O BLIK é o método de pagamento móvel dominante na Polônia
hide_title: true
sidebar_custom_props:
  image: /img/icons/blik.svg
  subtitle: Banco Online
---
import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

1. **Na Adyen**:
   - Ative o **BLIK** em sua Área do Cliente Adyen.

2. **Na VTEX**:
   - Vá para **Configurações da loja > Pagamento > Configurações**.
   - Na aba **Condições de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png).
   - Pesquise por **BLIK** e selecione-o.
   - Associe-o ao provedor Adyen.
   - Salve a configuração.
