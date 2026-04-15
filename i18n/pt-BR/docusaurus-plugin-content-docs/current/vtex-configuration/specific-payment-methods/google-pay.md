---
title: Google Pay Wallet (VTEX Native)
description: O Google Pay™️ permite que milhões de pessoas adicionem cartões de pagamento às suas Contas do Google
sidebar_custom_props:
  image: /img/icons/google-pay.svg
  subtitle: Carteiras digitais, Cartões
---

### Configurar o Google Pay na Área do Cliente Adyen

Você também precisará configurar o Google Pay em sua Área do Cliente Adyen em Métodos de Pagamento. Para fazer isso, siga as etapas abaixo:

#### Solicitar ativação

1. Em sua Área do Cliente, mude para sua conta de comerciante (Merchant Account).
2. Vá em **Configurações > Métodos de pagamento**.
3. Selecione **Solicitar métodos de pagamento** para visualizar todos os métodos de pagamento disponíveis.

![Configurações Adyen](/img/adyen-googlepay-request.png)

4. Use as listas suspensas para filtrar os métodos de pagamento por local e tipo.
5. Selecione o método de pagamento **Google Pay (paywithgoogle)**.
6. Selecione **Adicionar**.
7. Aplique o(s) método(s) de pagamento a **Esta conta de comerciante**.
8. Se solicitado, preencha as informações necessárias.
9. Revise suas solicitações.
10. Selecione **Enviar solicitação**.

![Enviar Solicitação](/img/adyen-googlepay-submit.png)

Mais informações: [Adicionar métodos de pagamento | Adyen Docs](https://docs.adyen.com/payment-methods/add-payment-methods)

> **Informação**: Se o método de pagamento Google Pay (paywithgoogle) não estiver ativo em sua conta, entre em contato com [support@adyen.com](mailto:support@adyen.com) para solicitar o acesso.

#### Validar configuração

Após a ativação, verifique:
* **Google Pay (paywithgoogle)** está disponível nos métodos de pagamento da sua conta.
* A conta de comerciante está configurada corretamente.

![Status Ativo](/img/adyen-googlepay-active.png)

### Configurar o Google Pay no Admin da VTEX

#### Acessar Carteira (Wallet)

1. No Admin da VTEX, vá em **Configurações da loja > Pagamentos > Carteiras** ou digite **Carteiras** na barra de busca no topo da página.
2. Selecione **Ativar** para incluir a extensão do Google Pay.

![Carteira VTEX](/img/vtex-googlepay-wallet.png)

**As bandeiras de cartão suportadas pela extensão do Google Pay são aquelas configuradas nas condições de pagamento.**

Mais informações: [Google Pay | Ajuda VTEX](https://help.vtex.com/pt/tracks/google-pay)

#### Condições de exibição
O Google Pay só aparecerá no checkout quando:
* O dispositivo for compatível (Android ou navegador suportado).
* O usuário tiver uma conta do Google com um cartão configurado.
* A carteira estiver ativa na VTEX.
