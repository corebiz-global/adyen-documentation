---
sidebar_position: 7
title: Validando a Integração
---


## Checklist de Validação

Antes de prosseguir com os testes, garanta que os seguintes passos foram concluídos:

1.  **Configuração da Adyen**:
    *   [ ] A conta Adyen está configurada e verificada.
    *   [ ] A chave de API é gerada e configurada na VTEX. (Veja: [Configuração da Chave de API](adyen-configuration/api-key))
    *   [ ] Os métodos de pagamento estão habilitados e configurados na conta Adyen. (Veja: [Configurando Métodos de Pagamento](vtex-configuration/payment-methods))
2.  **Configuração da VTEX**:
    *   [ ] O provedor de pagamento AdyenV3 está registrado na VTEX. (Veja: [Configurando o Provedor](vtex-configuration/configuring-provider))
    *   [ ] Os métodos de pagamento estão configurados no admin da VTEX. (Veja: [Configurando Métodos de Pagamento](vtex-configuration/payment-methods))
    *   [ ] As condições de pagamento estão configuradas com o provedor AdyenV3. (Veja: [Configurando o Provedor](vtex-configuration/configuring-provider))
3.  **Ambiente de Teste**:
    *   [ ] Garanta que você está usando um ambiente de teste para validar a integração.
    *   [ ] Use detalhes de cartão de crédito de teste fornecidos pela Adyen para fins de teste.
4.  **Processamento de Pedidos**:
    *   [ ] Faça um pedido de teste na sua loja VTEX para verificar se o processo de pagamento está funcionando corretamente.
5.  **Status da Transação**:
    *   [ ] Verifique o status da transação nos painéis de administração da VTEX e da Adyen para garantir que o pagamento seja processado com sucesso.

## Testando

1.  **Criar um Pedido de Teste**: Adicione produto(s) ao carrinho de compras e prossiga para o checkout na sua loja VTEX.
2.  **Selecione um dos Métodos de Pagamento configurados para usar o provedor Adyen**: Durante o checkout, escolha o método de pagamento apropriado.
3.  **Concluir o Pagamento**: Processe o pagamento e verifique se a transação é concluída com sucesso.

## Verificando o Status da Transação

Para verificar o status da transação de teste, siga estes passos:

1.  **Painel de Administração da VTEX**: vá para `https://{{account}}.myvtex.com/admin/` e navegue até a seção Pedidos ou pesquise por **pedidos** na caixa de pesquisa do admin. ![orders](https://i.imgur.com/iOPV29h.png)
2.  **Detalhes do Pedido**: Clique no **Id do Pedido** para ver os detalhes de um Pedido.
3.  **Status do Pagamento**: Nos detalhes do pedido, no canto direito, você pode ver as informações de pagamento para aquele Pedido. ![payment](https://i.imgur.com/Is2kZn2.png)
4.  **Histórico da Transação**: Clique em **Ver Detalhes** para ir para a página de **Detalhes da Transação**. Lá você pode verificar os detalhes de todos os passos do [Fluxo de Processamento de Pagamento](payment-flow) ![transaction](https://i.imgur.com/B2vkZFB.png)
    *   No topo da página, você pode ver as **Informações de Pagamento**:
        ![payment information](https://i.imgur.com/g24ciyo.png)
    > **IMPORTANTE**: Quando um pagamento é Autorizado, você pode ver o **TID**, que é o ID no sistema da Adyen para essa transação. Na Adyen, o **TID** é referido como **Referência PSP** e você pode pesquisar por este ID para verificar os detalhes da transação em `https://{{account}}.adyen.com/ca/ca/offers/showList.shtml`
        ![transactions](https://i.imgur.com/in37FYK.png)