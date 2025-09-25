---
sidebar_position: 4
title: Métodos de Pagamento Específicos
---


## Apple Pay

### Configure o Apple Pay na Área do Cliente Adyen

Você também precisará configurar o Apple Pay em sua Área do Cliente Adyen em Métodos de Pagamento. Para fazer isso, siga os passos abaixo:

1. Em sua Área do Cliente Adyen, vá para “Configurações”<br/>
2. Clique em “Métodos de Pagamento”<br/>
3. No lado direito, clique em “Solicitar Método de Pagamento”<br/>
4. Na tela “Selecionar Método de Pagamento”, selecione “Apple Pay”
![TelaSelecionarPagamento](https://i.imgur.com/9TWDm36.png)
5. Selecione o Comerciante<br/>
![SelecionarComerciante](https://i.imgur.com/r5M1jNF.png)
6. Configure a conta do adquirente<br/>
![ConfigurarContaAdquirente](https://i.imgur.com/NxE5Wlb.png)
7. Selecione o tipo de certificado: “Usar Certificado Adyen”.<br/>
![UsarCertificadoAdyen](https://i.imgur.com/obApo0m.png)
8. Na tela “Revisar e Finalizar”, insira o domínio completo do site<br/>
![DominioCompletoSite](https://i.imgur.com/r2taBn5.png)

### Validando a configuração

Se a configuração estiver correta, você deverá ver “Apple Pay” ao pesquisar na tela “Métodos de Pagamento”.
![MetodosPagamento](https://i.imgur.com/ryeBp6m.png)

### Instale o certificado

1. Gere seu certificado seguindo a documentação. Para gerar o certificado, consulte a seguinte documentação: [Componente Apple Pay | Adyen Docs](https://docs.adyen.com/payment-methods/apple-pay/web-component/?tab=adyen-certificate-live_1)

2. Instale o certificado no servidor VTEX. Para fazer isso, faça um POST usando o Postman ou ferramenta similar para o seguinte endpoint: `https://{{PublicStoreDomain}}/.well-known/raw/apple-developer-merchantid-domain-association?persistent=true`

[<img src="https://run.pstmn.io/button.svg" alt="Executar no Postman" />](https://www.postman.com/suportecorebiz/adyen-apple-pay/collection/2y1c8n1/apple-pay?action=share&creator=41098825)

3. Verifique se o certificado foi instalado corretamente. Para verificar se o certificado foi instalado corretamente nos servidores VTEX, use a seguinte url: `https://{{PublicStoreDomain}}/.well-known/apple-developer-merchantid-domain-association`

## Google Pay

Para processar pagamentos com Google Pay na Adyen, defina o ID do produto ou comerciante da Conta Google na plataforma Adyen (não se aplica ao ambiente de teste).

1. Crie e configure um comerciante no Google Pay
2. Vincule este comerciante à Adyen

> **Aviso**: Caso esta etapa não seja feita, o possível erro que o comerciante encontrará:
> _OR_BIBED_11 Este comerciante não concluiu o registro para usar a API do Google Pay.

Para mais informações, consulte [Componente Google Pay](https://docs.adyen.com/payment-methods/google-pay/web-component/#before-you-go-live).

## Boletos

### Configurando Boletos

1. No Admin VTEX, navegue para Configurações da Loja > Pagamentos > Provedores, ou digite **Provedores** na barra de pesquisa superior.
2. Na tela de Provedores, clique no botão **Novo Provedor**.
3. Use a barra de pesquisa para encontrar o provedor responsável por processar o boleto.
4. Preencha os campos do formulário com os dados fornecidos pelo seu provedor ou banco.
5. Clique em **Salvar**.

### Configurando a Condição de Pagamento

1. No Admin VTEX, vá para Configurações da Loja > Pagamentos > Configurações, ou digite **Configurações** na barra de pesquisa superior.
2. Na aba **Condições de Pagamento**, clique no botão ![**Adicionar Condição de Pagamento**](https://i.imgur.com/j8KuDvn.png).
3. Selecione **Boleto Bancário** na seção Boleto.
4. Habilite a condição no campo Status.
5. No campo **Processar com o provedor**, escolha o provedor que você configurou anteriormente.
6. Opcionalmente, configure condições de pagamento especiais conforme necessário.
7. Clique em **Salvar**.

### Configurando Dias de Vencimento do Boleto

1. No Admin VTEX, navegue para Configurações da Loja > Pagamentos > Provedores, ou digite Provedores na barra de pesquisa superior.
2. Na tela de Provedores, selecione o provedor Adyen.
3. Na seção de detalhes, clique em Editar.
4. No campo Dias para Vencimento do Boleto, defina o período de vencimento desejado para o boleto. Note que há um dia de processamento adicional necessário para que o pagamento seja enviado à Adyen.

![dias de vencimento do boleto](https://i.imgur.com/mA3VmHy.png)

## Bancontact

- Para que este método de pagamento funcione, você precisa fazer algumas configurações específicas no Painel de Administração da VTEX:
  - **Configuração do Método de Pagamento**: Vá para o painel de administração da VTEX e acesse a seção de métodos de pagamento `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` ou digite **pagamentos** na caixa de pesquisa do Admin e clique na aba **Pagamentos Personalizados**.
  - Na aba **Pagamentos Personalizados**, clique em uma **Config** disponível em **Cartões de Marca Própria** ![cartoes-marca-propria](https://i.imgur.com/IJvqQOJ.png).
  - Na próxima tela, preencha o campo **Nome** com "Bancontact" (certifique-se de que a sintaxe está correta, pois este é o nome do método de pagamento que será enviado nas Transações)
  - no campo **Número de Dígitos do CVV**, defina como **não obrigatório**
    ![bancontact](https://i.imgur.com/SkvSV8g.png)
  - Deixe os outros campos com seus valores inalterados.
  - Clique em **Salvar** para salvar a configuração.
  - Após salvar a configuração, você será redirecionado automaticamente para finalizar a configuração na tela seguinte **Condição de Pagamento**:
    ![bancontact-2](https://i.imgur.com/pD1FMYu.png)
  - Na tela **Condição de Pagamento**, preencha o **Nome da Condição**
  - Selecione o **Provedor** para Adyen no menu suspenso **Processar com o provedor**
  - Altere o **Status** para "ativo"
  - Clique em **Salvar** no canto inferior direito da tela
  - Após salvar a Condição de Pagamento, **"Bancontact"** estará disponível para uso nas opções **"Cartão de Crédito"** e **"Cartão de Débito"** no checkout.

## Klarna

### Klarna Pay Over Time

Permite que os clientes paguem por suas compras em parcelas. Para configurar o Klarna Pay Over Time, siga estes passos:

- **Na Adyen**:

  - Habilite o **Klarna Pay Over Time** em sua conta Adyen.
  - Configure as configurações do método de pagamento de acordo com os requisitos do seu negócio.

- **Na VTEX**:
  - **Configuração do Método de Pagamento**: Vá para o painel de administração da VTEX e acesse a seção de métodos de pagamento `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` ou digite **pagamentos** na caixa de pesquisa do Admin e clique em **Pagamentos**.
  - na tela **Métodos de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](https://i.imgur.com/j8KuDvn.png) no canto superior direito da página.
  - Encontre a opção **Klarna Pay Over Time** na lista de métodos de pagamento disponíveis e clique nela.
  - Na tela **Adicionar Método de Pagamento**, selecione o **Provedor** na caixa de seleção "Processar com o Provedor".
  - Salve a configuração. Depois disso, siga os passos detalhados em [Configurando o Provedor de Pagamento na VTEX](configuring-provider)
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

### Klarna Pay Now

Permite que os clientes paguem por suas compras imediatamente via transferência bancária. Para configurar o Klarna Pay Now, siga estes passos:

- **Na Adyen**:

  - Habilite o **Klarna Pay Now** em sua conta Adyen.
  - Configure as configurações do método de pagamento de acordo com os requisitos do seu negócio.

- **Na VTEX**:
  - **Configuração do Método de Pagamento**: Vá para o painel de administração da VTEX e acesse a seção de métodos de pagamento `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` ou digite **pagamentos** na caixa de pesquisa do Admin e clique em **Pagamentos**.
  - na tela **Métodos de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](https://i.imgur.com/j8KuDvn.png) no canto superior direito da página.
  - Encontre a opção **Klarna** na lista de métodos de pagamento disponíveis e clique nela.
  - Na tela **Adicionar Método de Pagamento**, selecione o **Provedor** na caixa de seleção "Processar com o Provedor".
  - Salve a configuração. Depois disso, siga os passos detalhados em [Configurando o Provedor de Pagamento na VTEX](configuring-provider)
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

### Klarna Pay Later

Permite que os clientes paguem por suas compras em 30 dias sem juros. Para configurar o Klarna Pay Later, siga estes passos:

- **Na Adyen**:

  - Habilite o **Klarna Pay Later** em sua conta Adyen.
  - Configure as configurações do método de pagamento de acordo com os requisitos do seu negócio.

- **Na VTEX**:
  - **Configuração do Método de Pagamento**: Vá para o painel de administração da VTEX e acesse a seção de métodos de pagamento `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` ou digite **pagamentos** na caixa de pesquisa do Admin e clique em **Pagamentos**.
  - na tela **Métodos de Pagamento**, clique no botão ![**Adicionar Método de Pagamento**](https://i.imgur.com/j8KuDvn.png) no canto superior direito da página.
  - Encontre a opção **Klarna Pay Later** na lista de métodos de pagamento disponíveis e clique nela.
  - Na tela **Adicionar Método de Pagamento**, selecione o **Provedor** na caixa de seleção "Processar com o Provedor".
  - Salve a configuração. Depois disso, siga os passos detalhados em [Configurando o Provedor de Pagamento na VTEX](configuring-provider)
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

## Ideal

> **Importante**: A informação importante sobre o Ideal é que na etapa de configuração do método de pagamento da VTEX, você encontrará dois métodos de pagamento ao pesquisar por Ideal. Por favor, selecione “**Ideal V3**". Depois disso, siga os passos detalhados em [Configurando o Provedor de Pagamento na VTEX](configuring-provider)

![IDeal](https://i.imgur.com/EjnvuSR.png)
![iDeal V3](https://i.imgur.com/3Qt1408.png)
