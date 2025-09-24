---
sidebar_position: 1
title: Configurando o Provedor
---


Depois de concluir todas as etapas listadas na seção **Configuração da Adyen**, você deverá ter todas as informações necessárias para ativar o Adyen V3 como provedor de pagamento na VTEX.

O módulo **Pagamentos VTEX** permite que vários provedores de pagamento (gateways, adquirentes, subadquirentes, orquestradores, PSPs, entre outros) sejam configurados em sua loja. Dessa forma, você pode oferecer diferentes métodos e condições de pagamento aos seus clientes.

Quando uma compra é feita em sua loja e o cliente efetua o pagamento, a transmissão de dados entre a VTEX e o provedor escolhido ocorre por meio de protocolos de comunicação configurados no Admin VTEX.

O provedor de pagamento é responsável por processar o pagamento e retornar o resultado para a VTEX. O provedor de pagamento também pode ser responsável pela análise antifraude da transação.

Certifique-se de ter as permissões e os detalhes necessários do gateway de pagamento Adyen. Para registrar a afiliação do gateway Adyen na VTEX, siga as etapas abaixo:

1. Acesse a página de administração da loja `https://{{account}}.myvtex.com/admin/`.
2. No Admin VTEX, acesse **Configurações da Loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de pesquisa no topo da página.
3. Na tela de provedores, clique no botão Novo provedor.
   ![Provedores](https://i.imgur.com/mjkoQTi.png)
4. Procure por **Adyen**.
   ![Adyen](https://i.imgur.com/kIo1GBC.png)
5. Selecione **AdyenV3** na lista de provedores de pagamento disponíveis.
6. No campo **Chave do Aplicativo** (nome da sua conta de comerciante), preencha o nome da sua conta de comerciante que você obteve na etapa [Obtendo credenciais da conta da empresa e do comerciante](../adyen-configuration/getting-credentials.md).
7. No campo **Token do Aplicativo** (chave de API), cole a chave de API gerada na etapa [Chave de API](../adyen-configuration/api-key.md).
   ![Credenciais de API](https://i.imgur.com/Ih85Tus.png)
8. Opcionalmente, defina um nome de identificação preenchendo o campo **Nome** em **Informações Básicas**.
9. Se sua loja ainda não estiver em produção e você estiver realizando testes, poderá **Habilitar modo de teste** em Controle de Pagamentos.
10. No campo **URL Live**, preencha o prefixo da URL que você obteve na seção [URL Live](../adyen-configuration/live-url.md).
    > **Nota:** Este campo deve ser preenchido apenas para ambientes de produção. Para testes, ele deve ser deixado em branco.
11. No campo **Nome da empresa**, insira o nome da empresa conforme definido na conta Adyen, aquele que você salvou na etapa [Obtendo credenciais da conta da empresa e do comerciante](../adyen-configuration/getting-credentials.md).
12. O campo **URL do POS Live** é usado apenas para o Sales APP.
13. No campo **Chave do cliente**, preencha a chave do cliente que você obteve na Etapa 6 da seção [Chave de API](../adyen-configuration/api-key.md).
    ![Credenciais de API](https://i.imgur.com/1W8F8FE.png)
14. Clique em **Salvar**.

![AdyenV3](https://i.imgur.com/uleOsY1.png)

Para mais informações sobre os dados a serem preenchidos, consulte a documentação de [Credenciais de API da Adyen](https://docs.adyen.com/development-resources/api-credentials/).

Se precisar de ajuda extra, verifique as etapas descritas no [tutorial da VTEX](https://help.vtex.com/tutorial/registering-gateway-affiliations--tutorials_444) ou na [Trilha de Pagamentos da VTEX](https://help.vtex.com/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)