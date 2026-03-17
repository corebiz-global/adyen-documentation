---
sidebar_position: 4
title: Webhooks
---

A configuração do webhook é necessária para que a Adyen possa enviar atualizações de status de pagamento para sua conta VTEX.

Para mais informações, consulte a [documentação de Webhooks da Adyen](https://docs.adyen.com/development-resources/webhooks/).

Para configurar o webhook, siga os passos listados abaixo:

1. Abra sua [Área do Cliente Adyen](https://ca-test.adyen.com/ca/ca/overview/default.shtml);
2. No menu lateral esquerdo, vá em **Developers** e depois em **Webhooks**.
3. Clique no botão **“Create new webhook”** no lado direito da tela.

![Create new webhook](/img/webhooks-1.png)

4. Clique em **Add** para a seção de **Standard Webhook**.

![Add Standard Webhook](/img/webhooks-2.png)

## Geral (General)

Defina uma descrição que ajude você a identificar a conta merchant e a conta VTEX. No campo **Merchant Accounts**, selecione **“Include only specific merchant accounts”**. Uma nova seção aparecerá, selecione a conta merchant desejada.

![General Settings](/img/webhooks-3.png)

## Configuração do Servidor (Server Configuration)

Em **Server configuration**, defina a URL da seguinte forma, substituindo `{{accountName}}` pelo nome da sua conta VTEX:

`https://{{accountName}}.myvtex.com/_v3/api/webhook/notification`

![Server Configuration](/img/webhooks-4.png)

## Segurança (Security)

Selecione **“No Authentication”**.

![Security Settings](/img/webhooks-5.png)

## Eventos (Events)

Marque as seguintes flags: `AUTHORISATION` / `CANCELLATION` / `CANCEL_OR_REFUND` / `CAPTURE` / `CAPTURE_FAILED` / `MANUAL_REVIEW_REJECT` / `MANUAL_REVIEW_ACCEPT` / `OFFER_CLOSED` / `REFUND` / `REFUND_FAILED`

![Events Settings](/img/webhooks-6.png)

## Configurações Adicionais (Additional settings)

Marque todas as flags em cada seção.

![Additional settings](/img/webhooks-7.png)

## Testando o webhook

Clique em **‘Test configuration’**.

![Test configuration](/img/webhooks-8.png)

Selecione a conta merchant e o evento `AUTHORISATION`, então clique em **‘Test’**.

![Select test account and event](/img/webhooks-9.png)

### Comparação de resultados

Se você receber uma resposta **‘200 - OK’**, seu webhook está quase pronto. Se você não recebeu **‘200 - OK’**, significa que algo está errado na configuração. Verifique todos os passos novamente, principalmente a URL do webhook definida na seção de Configuração do Servidor.

<div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', textAlign: 'center' }}>
  <div style={{ flex: 1 }}>
    <img src="/img/webhooks-10.png" alt="Sucesso" />
    <p><strong>Sucesso:</strong> 200 OK</p>
  </div>
  <div style={{ flex: 1 }}>
    <img src="/img/webhooks-11.png" alt="Falha" />
    <p><strong>Falha:</strong> Erro de configuração</p>
  </div>
</div>

## Salvar Configuração (Save Configuration)

Por fim, clique em **“Save configuration”**.

![Save Configuration](/img/webhooks-12.png)

> **Importante**: É necessário configurar um webhook para cada loja. Portanto, se você tiver mais de uma loja, repita os passos de configuração para cada uma delas.
