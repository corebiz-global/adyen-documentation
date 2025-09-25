---
sidebar_position: 4
title: Webhooks
---


A configuração do webhook é necessária para que a Adyen possa enviar atualizações de status de pagamento da Adyen para sua conta VTEX.

Para mais informações, consulte a [documentação](https://docs.adyen.com/development-resources/webhooks/) de Webhooks da Adyen.

Para configurar o webhook, siga os passos listados abaixo:

1. Abra sua [área do Cliente Adyen](https://ca-test.adyen.com/ca/ca/overview/default.shtml);
2. No menu do lado esquerdo, vá para **Desenvolvedores** e depois **Webhooks**
3. Clique no botão **“Criar novo webhook”** no lado direito da tela.
4. Selecione **Webhook Padrão** e depois clique em **Adicionar**.
5. Adicione uma descrição ao seu Webhook em **Geral** > **Descrição**.
6. Vá para a seção de **configuração do Servidor**. No campo **URL**, cole a URL completa do endpoint do webhook para sua loja. Use o seguinte formato, substituindo `{{account}}` pelo nome da sua conta VTEX:
   `https://{{account}}.myvtex.com/_v3/api/webhook/notification`

![Configuração do servidor](https://i.imgur.com/T9LXJK9.png)

7. Clique em **Aplicar**
8. Vá para a seção de **configurações Adicionais**, selecione todas as caixas de seleção e clique em **Aplicar** em cada uma das abas.
9. Finalmente, clique em **Salvar alterações**.

> **Importante**: É necessário configurar um webhook para cada loja, então se você tiver mais de uma loja, repita os passos de configuração para cada uma delas.