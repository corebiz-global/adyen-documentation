---
title: MultiBanco
description: O método de pagamento mais popular em Portugal
hide_title: true
sidebar_custom_props:
  image: /img/icons/multibanco.svg
  subtitle: Vouchers, pré-pagos e cartões-presente
---
import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

1. **Na Adyen**:
   - Ative o **MultiBanco** em sua Área do Cliente Adyen.

2. **Na VTEX**:
   - Vá para **Configurações da loja > Pagamento > Configurações**.
   - Na aba **Condições de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png).
   - Pesquise por **MultiBanco** e selecione-o.
   - Associe-o ao provedor Adyen.
   - Salve a configuração.
   - **Nota**: Certifique-se de que sua loja tenha o template de e-mail `multibanco-payment-information` configurado para enviar os detalhes do pagamento aos clientes.
