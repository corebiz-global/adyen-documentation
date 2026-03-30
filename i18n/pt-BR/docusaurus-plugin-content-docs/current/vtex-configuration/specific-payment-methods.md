---
sidebar_position: 4
title: Métodos de Pagamento Específicos
---


## Apple Pay

### Configure o Apple Pay na Área do Cliente Adyen

Você também precisará configurar o Apple Pay em sua Área do Cliente Adyen em Métodos de Pagamento. Para fazer isso, siga as etapas abaixo:

1. Em sua Área do Cliente Adyen, vá em “Configurações”<br/>
2. Clique em “Métodos de Pagamento”<br/>
3. No lado direito, clique em “Solicitar Método de Pagamento”<br/>
4. Na tela “Selecionar Método de Pagamento”, selecione “Apple Pay”
![SelecionarTelaPagamento](/img/vtex-select-payment-screen.png)
5. Selecione o Merchant<br/>
![SelecionarMerchant](/img/vtex-select-merchant.png)
6. Configure a conta do adquirente<br/>
![SelecionarContaAdquirente](/img/vtex-select-acquirer-account.png)
7. Selecione o tipo de certificado: “Usar Certificado Adyen”.<br/>
![UsarCertificadoAdyen](/img/vtex-use-adyen-certificate.png)
8. Na tela “Revisar e Concluir” insira o domínio completo do site<br/>
![DominioSiteCompleto](/img/vtex-full-website-domain.png)

### Validando a configuração

Se a configuração estiver correta, você deverá ver “Apple Pay” ao pesquisá-lo na tela “Métodos de Pagamento”.
![MetodosPagamento](/img/vtex-payment-methods-list.png)

### Instale o certificado

1. Gere seu certificado seguindo a documentação. Para gerar o certificado, consulte a seguinte documentação: [Apple Pay Component | Adyen Docs](https://docs.adyen.com/payment-methods/apple-pay/web-component/?tab=adyen-certificate-live_1)

2. Instale o certificado no servidor VTEX. Para fazer isso, faça um POST usando o Postman ou ferramenta similar para o seguinte endpoint: `https://{{DominioPublicoDaLoja}}/.well-known/raw/apple-developer-merchantid-domain-association?persistent=true`

[<img src="/img/postman-button.svg" alt="Executar no Postman" />](https://www.postman.com/suportecorebiz/adyen-apple-pay/collection/2y1c8n1/apple-pay?action=share&creator=41098825)

3. Verifique se o certificado foi instalado corretamente. Para verificar se o certificado foi instalado corretamente nos servidores VTEX, use a seguinte url: `https://{{DominioPublicoDaLoja}}/.well-known/apple-developer-merchantid-domain-association`

## Google Pay

Para processar pagamentos com o Google Pay na Adyen, defina o ID do produto ou do comerciante da Conta do Google na plataforma da Adyen (não se aplica ao ambiente de teste).

1. Crie e configure um comerciante no Google Pay
2. Vincule este comerciante à Adyen
3. No Admin da VTEX, navegue até **Configurações da loja > Pagamentos > Provedores** e edite o provedor Adyen.
4. Preencha o **Google Merchant ID** (ID numérico obtido no Google) e o **Google Merchant Name**.

> **Aviso**: Caso o ID numérico do comerciante não esteja configurado corretamente em produção, o cliente encontrará o erro: 
> _OR_BIBED_11 Este comerciante não concluiu o registro para usar a API do Google Pay.

Para mais informações, consulte [Componente do Google Pay](https://docs.adyen.com/payment-methods/google-pay/web-component/#before-you-go-live).

## PayPal

Para oferecer PayPal através da Adyen na VTEX, siga estes passos:

1. **Na Adyen**:
   - Ative o PayPal em sua Área do Cliente Adyen em **Configurações > Métodos de Pagamento**.
   - Certifique-se de que seu ID de comerciante do PayPal esteja vinculado à sua conta Adyen.

2. **Na VTEX**:
   - Vá para **Configurações da loja > Pagamento > Configurações**.
   - Na aba **Condições de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png).
   - Pesquise por **PayPal** e selecione-o.
   > **Atenção**: Ao pesquisar por PayPal na VTEX, você encontrará várias opções. Certifique-se de selecionar a opção chamada simplesmente **PayPal**.

   ![Seleção PayPal](/img/vtex-paypal-selection.png)

   - Selecione o provedor Adyen no campo **Processar com o provedor**.
   - Altere o status para **Ativo** e clique em **Salvar**.

## Affirm

O Affirm é configurado como um método de pagamento padrão na VTEX:

1. **Na Adyen**:
   - Ative o **Affirm** em sua Área do Cliente Adyen.

2. **Na VTEX**:
   - Vá para **Configurações da loja > Pagamento > Configurações**.
   - Na aba **Condições de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png).
   - Pesquise por **AdyenAffirm** e selecione-o.
   > **Atenção**: Ao pesquisar por Affirm na VTEX, você encontrará duas opções (**Affirm** e **AdyenAffirm**). Certifique-se de selecionar a opção **AdyenAffirm** para que o provedor Adyen seja usado corretamente.

   ![Seleção Affirm](/img/vtex-affirm-selection.png)

   - Selecione o provedor Adyen no campo **Processar com o provedor**.
   - Clique em **Salvar**.

## BLIK

1. **Na Adyen**:
   - Ative o **BLIK** em sua Área do Cliente Adyen.

2. **Na VTEX**:
   - Vá para **Configurações da loja > Pagamento > Configurações**.
   - Na aba **Condições de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png).
   - Pesquise por **BLIK** e selecione-o.
   - Associe-o ao provedor Adyen.
   - Salve a configuração.

## MultiBanco

1. **Na Adyen**:
   - Ative o **MultiBanco** em sua Área do Cliente Adyen.

2. **Na VTEX**:
   - Vá para **Configurações da loja > Pagamento > Configurações**.
   - Na aba **Condições de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png).
   - Pesquise por **MultiBanco** e selecione-o.
   - Associe-o ao provedor Adyen.
   - Salve a configuração.
   - **Nota**: Certifique-se de que sua loja tenha o template de e-mail `multibanco-payment-information` configurado para enviar os detalhes do pagamento aos clientes.

## Bancontact Mobile

Este método permite que os clientes paguem usando o aplicativo Bancontact em seus dispositivos móveis via código QR ou redirecionamento de aplicativo.

1. **Na Adyen**:
   - Ative o **Bancontact Mobile** em sua Área do Cliente Adyen.

2. **Na VTEX**:
   - Vá para **Configurações da loja > Pagamento > Configurações**.
   - Na aba **Condições de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png).
   - Pesquise por **Bancontact Mobile** e selecione-o.
   - Associe-o ao provedor Adyen.
   - Salve a configuração.

## Boletos

### Configurando a Condição de Pagamento

1. No Admin VTEX, vá em Configurações da loja > Pagamento > Configurações, ou digite **Configurações** na barra de busca superior.
2. Na aba **Condições de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png).
3. Selecione **Boleto Bancário** na seção Boleto.
4. Ative a condição no campo Status.
5. No campo **Processar com o provedor**, escolha o provedor configurado anteriormente.
6. Opcionalmente, configure condições especiais de pagamento conforme necessário.
7. Clique em **Salvar**.

### Configurando os Dias de Expiração do Boleto

1. No Admin VTEX, navegue até Configurações da loja > Pagamentos > Provedores, ou digite Provedores na barra de busca superior.
2. Na tela de Provedores, selecione o provedor Adyen.
3. Na seção de detalhes, clique em Editar.
4. No campo Dias de Expiração do Boleto (Boleto Expiration Days), defina o período de expiração desejado para o boleto. Observe que há um dia de processamento adicional necessário para que o pagamento seja enviado à Adyen.

![boleto Expiration Days](/img/vtex-boleto-expiration.png)

## Bancontact

- Para que este método de pagamento funcione, você precisa fazer algumas configurações específicas no Painel Administrativo da VTEX:
  - **Configuração do Método de Pagamento**: Vá para o painel de administração da VTEX e acesse a seção de métodos de pagamento `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` ou digite **pagamentos** na caixa de pesquisa do Admin e clique na aba **Pagamentos customizados**.
  - Na aba **Pagamentos customizados**, clique em uma **Configuração** disponível em **Cartões de Loja (Private Label)** ![private-label-cards](/img/vtex-private-label-cards.png).
  - Na próxima tela preencha o campo **Nome** com "Bancontact" (certifique-se de que a sintaxe está correta, pois este é o nome do método de pagamento que será enviado nas Transações)
  - No campo **Número de dígitos do CVV**, defina como **não obrigatório**
    ![bancontact](/img/vtex-bancontact-config.png)
  - Deixe os valores dos outros campos inalterados.
  - Clique em **Salvar** para salvar a configuração.
  - Após salvar a configuração, você será redirecionado automaticamente para finalizar a configuração na seguinte tela **Condição de Pagamento**:
    ![bancontact-2](/img/vtex-bancontact-details.png)
  - Na tela de **Condição de Pagamento**, preencha o **Nome da Condição**
  - Selecione o **Provedor** da Adyen no menu suspenso **Processar com o provedor**
  - Altere o **Status** para "ativo"
  - Clique em **Salvar no canto inferior direito da tela**
  - Após salvar a Condição de Pagamento, o **"Bancontact"** estará disponível para uso nas opções **"Cartão de Crédito"** e **"Cartão de Débito"** no checkout.

## Klarna

### Klarna Pay Over Time

Permite que os clientes paguem por suas compras em parcelas. Para configurar o Klarna Pay Over Time, siga estes passos:

- **Na Adyen**:

  - Habilite o **Klarna Pay Over Time** em sua conta Adyen.
  - Configure as definições do método de pagamento de acordo com os requisitos do seu negócio.

- **Na VTEX**:
  - **Configuração do Método de Pagamento**: Vá para o painel de administração da VTEX e acesse a seção de métodos de pagamento `https://{{account}}.myvtex.com/admin/pci-gateway#/rules` ou digite **pagamentos** na caixa de pesquisa do Admin e clique em **Pagamentos**.
  - Na tela de **Métodos de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png) no canto superior direito da página.
  - Encontre a opção **Klarna Pay Over Time** na lista de métodos de pagamento disponíveis e clique nela.
  - Na tela **Adicionar Método de Pagamento**, selecione o **Provedor** na caixa de seleção "Processar com o provedor".
  - Salve a configuração. Depois disso, siga os passos detalhados em [Configurando o Provedor de Pagamento na VTEX](configuring-provider)

### Klarna Pay Now

Permite que os clientes paguem por suas compras imediatamente via transferência bancária. Para configurar o Klarna Pay Now, siga estes passos:

- **Na Adyen**:

  - Habilite o **Klarna Pay Now** em sua conta Adyen.
  - Configure as definições do método de pagamento de acordo com os requisitos do seu negócio.

- **Na VTEX**:
  - **Configuração do Método de Pagamento**: Vá para o painel de administração da VTEX e acesse a seção de métodos de pagamento `https://{{account}}.myvtex.com/admin/pci-gateway#/rules` ou digite **pagamentos** na caixa de pesquisa do Admin e clique em **Pagamentos**.
  - Na tela de **Métodos de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png) no canto superior direito da página.
  - Encontre a opção **Klarna** na lista de métodos de pagamento disponíveis e clique nela.
  - Na tela **Adicionar Método de Pagamento**, selecione o **Provedor** na caixa de seleção "Processar com o provedor".
  - Salve a configuração. Depois disso, siga os passos detalhados em [Configurando o Provedor de Pagamento na VTEX](configuring-provider)
    ![#klarna](/img/vtex-klarna-animation.gif)

### Klarna Pay Later

Permite que os clientes paguem por suas compras em 30 dias sem juros. Para configurar o Klarna Pay Later, siga estes passos:

- **Na Adyen**:

  - Habilite o **Klarna Pay Later** em sua conta Adyen.
  - Configure as definições do método de pagamento de acordo com os requisitos do seu negócio.

- **Na VTEX**:
  - **Configuração do Método de Pagamento**: Vá para o painel de administração da VTEX e acesse a seção de métodos de pagamento `https://{{account}}.myvtex.com/admin/pci-gateway#/rules` ou digite **pagamentos** na caixa de pesquisa do Admin e clique em **Pagamentos**.
  - Na tela de **Métodos de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](/img/vtex-add-payment-method-button.png) no canto superior direito da página.
  - Encontre a opção **Klarna Pay Later** na lista de métodos de pagamento disponíveis e clique nela.
  - Na tela **Adicionar Método de Pagamento**, selecione o **Provedor** na caixa de seleção "Processar com o provedor".
  - Salve a configuração. Depois disso, siga os passos detalhados em [Configurando o Provedor de Pagamento na VTEX](configuring-provider)

## Ideal

> **Importante**: A informação importante sobre o Ideal é que na etapa de configuração do método de pagamento da VTEX, você encontrará dois métodos de pagamento ao pesquisar por Ideal. Por favor, selecione “**Ideal V3**". Depois disso, siga os passos detalhados em [Configurando o Provedor de Pagamento na VTEX](configuring-provider)

![IDeal](/img/vtex-ideal-config.png)
![iDeal V3](/img/vtex-ideal-v3.png)
