---
sidebar_position: 6
title: Regras de Negócio
---


Este documento apresenta as regras de negócio aplicáveis aos diferentes métodos de pagamento utilizados na plataforma. Cada método segue um fluxo operacional específico, com regras claras para autorização, captura, reembolso e cancelamento. O objetivo é garantir uma experiência segura e eficiente para clientes e lojistas.

## Cartões de Crédito e Débito

Os pagamentos com cartões de crédito e débito envolvem várias etapas, desde a análise de risco até a liquidação da transação.

### Fluxo de Pagamento

1. O cliente seleciona o cartão de crédito ou débito como método de pagamento no checkout.
2. O sistema realiza uma análise de risco para minimizar fraudes.
3. Se aprovado, o pagamento é autorizado pelo emissor do cartão.
4. A captura ocorre conforme a janela de captura configurada no conector.
5. A transação é liquidada e o pedido é atualizado na VTEX.

### Regras Específicas

- **Autorização**: Realizada após a análise de risco, podendo ser automática ou manual.
- **Captura**: Pode ser imediata ou ocorrer no prazo definido pelo conector.
- **Reembolso**: Permitido em valores parciais ou totais, dependendo das regras da adquirente.
- **Cancelamento**: Só pode ser feito antes da captura; após isso, é necessário realizar um reembolso.
- **3DS (Autenticação Segura)**: Algumas transações podem exigir autenticação via **3D Secure** para maior segurança. Para cartões de débito, a disponibilidade do 3DS depende da bandeira e do emissor. Veja a [documentação do 3D Secure](https://docs.adyen.com/online-payments/3d-secure) da Adyen para mais exemplos.

### Tokenização

> **Importante**: Temos uma versão específica do conector para tokenização. Se optar por trabalhar com tokenização, entre em contato com nossa equipe de suporte para garantir que a versão correta seja instalada em seu ambiente VTEX.

Com a Adyen, você pode armazenar com segurança um ou mais detalhes de pagamento por comprador, com o consentimento dele. Isso permite oferecer pagamentos de assinaturas, recargas automáticas em contas de compradores e dar aos seus compradores uma experiência de checkout mais rápida, usando o cartão armazenado.

Chamamos esses detalhes de pagamento salvos de tokens e o armazenamento dos detalhes de pagamento do comprador de tokenização.

A tokenização é aplicada nos seguintes cenários:

- Pagamentos com Cartão de Crédito
- Pagamentos 3DS
- Assinaturas
- Alteração de Pedidos (Change Order)

O processo de tokenização funciona da seguinte forma:

1. Quando o primeiro pedido com cartão de crédito é feito e a opção de salvar o cartão é selecionada, o conector informará à Adyen para tokenizar o cartão.
2. A Adyen responderá com um token que poderá ser usado para transações futuras.
3. Esse token é armazenado na VTEX, portanto, para qualquer transação posterior do mesmo usuário e cartão de crédito, apenas o CCV e o token são enviados à Adyen, e as informações do cartão não são transmitidas novamente.

## Pix

O Pix é um método de pagamento instantâneo que permite transferências rápidas e diretas entre contas bancárias.

### Fluxo de Pagamento

1. O cliente seleciona o Pix como método de pagamento no checkout.
2. O conector gera um **QR Code** dinâmico e o exibe para o cliente.
3. O cliente realiza o pagamento via aplicativo bancário.
4. A transação é confirmada em até 10 segundos.
5. A Adyen envia um webhook para o conector.
6. O conector aprova o pagamento e atualiza a VTEX, redirecionando o cliente para a página de Pedido Concluído.

### Regras Específicas

- **Captura**: Sempre imediata, sem janela de captura configurável.
- **Reembolso**: Permitido apenas o reembolso total; não é possível realizar reembolsos parciais.
- **Cancelamento**: Não é possível cancelar um pagamento Pix após a sua conclusão.
- **Expiração do QR Code**: Por default é 10minutos de expiração, porém o merchant consegue configurar o tempo de expiração do PIX a partir das configurações do provedor, visto em outra etapa. Se o pagamento for feito após este período, a VTEX não reconhecerá a transação, e o valor será automaticamente reembolsado.

## Boleto Bancário

O boleto bancário é uma opção amplamente utilizada para compras de maior valor, mas depende da compensação bancária para a validação do pagamento.

### Fluxo de Pagamento

1. O cliente seleciona o Boleto Bancário no checkout.
2. O conector gera um arquivo PDF com o boleto.
3. O cliente realiza o pagamento via banco, casa lotérica ou aplicativo bancário.
4. A compensação ocorre em um prazo de 1 a 3 dias úteis.
5. A Adyen confirma o pagamento e envia um webhook para o conector.
6. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Reembolso**: Não permitido. Caso seja necessário, o lojista deve realizar o estorno manualmente via transferência bancária.
- **Validade**: Definida no momento da geração, variando de 1 a 30 dias, conforme configuração do conector e regras bancárias.

## Apple Pay

O Apple Pay é um método de pagamento digital que permite transações seguras através de dispositivos Apple compatíveis.

### Fluxo de Pagamento

1. O cliente seleciona o Apple Pay como método de pagamento no checkout.
2. O aplicativo exibe os cartões disponíveis do cliente.
3. O cliente autentica a transação via Face ID, Touch ID ou senha.
4. O pagamento segue as regras do cartão selecionado (crédito ou débito).
5. A Adyen confirma a transação e envia um webhook para o conector.
6. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Parcelamento**: Disponível apenas para cartões de crédito.
- **Autenticação**: Todas as transações exigem autenticação biométrica ou por senha para maior segurança.

## Google Pay

O Google Pay permite que os clientes paguem utilizando cartões salvos em sua Conta Google.

### Fluxo de Pagamento

1. O cliente seleciona o Google Pay no checkout.
2. O cliente seleciona o cartão desejado em sua Google Wallet.
3. O cliente realiza a autenticação, se solicitado (ex: via biometria ou PIN do dispositivo).
4. A transação é processada através da Adyen.
5. A Adyen confirma a transação e envia um webhook para o conector.
6. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Parcelamento**: Disponível apenas para cartões de crédito.
- **Requisitos de Produção**: Em produção, é necessário possuir um Merchant ID Numérico do Google para evitar erros na integração.

## MultiBanco

O MultiBanco é um método de pós-pagamento popular em Portugal, que permite aos clientes pagar via caixa eletrônico (ATM) ou home banking.

### Fluxo de Pagamento

1. O cliente seleciona o MultiBanco no checkout.
2. O conector gera uma referência de pagamento e entidade.
3. Um e-mail é enviado ao cliente com os detalhes do pagamento.
4. O cliente conclui o pagamento em um ATM ou via home banking utilizando os detalhes fornecidos.
5. A Adyen recebe a confirmação do pagamento e envia um webhook.
6. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Expiração**: A referência de pagamento possui um prazo de validade específico (geralmente 3 dias).
- **Reembolso**: Permitido em valores parciais ou totais.

## BLIK

O BLIK é um sistema de pagamento móvel na Polônia que permite pagamentos instantâneos utilizando um código de 6 dígitos.

### Fluxo de Pagamento

1. O cliente seleciona o BLIK no checkout.
2. O cliente insere o código BLIK de 6 dígitos gerado em seu aplicativo bancário.
3. O cliente confirma o pagamento dentro do seu aplicativo bancário.
4. A Adyen confirma a transação e envia um webhook.
5. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Captura**: Sempre imediata.
- **Timeout**: O cliente possui um tempo limitado (geralmente 2 minutos) para confirmar a transação no aplicativo.

## PayPal

O PayPal é uma carteira digital global que permite aos clientes pagar utilizando seu saldo PayPal ou cartões/contas bancárias vinculados.

### Fluxo de Pagamento

1. O cliente seleciona o PayPal no checkout.
2. O cliente é redirecionado para o ambiente do PayPal para fazer login e aprovar o pagamento.
3. Após a aprovação, o cliente é redirecionado de volta para a loja.
4. A Adyen processa a transação e envia um webhook.
5. O conector atualiza o status do pedido na VTEX.

### Regras Específicas

- **Reembolso**: Suporte para reembolsos totais e parciais diretamente através do conector.

## Affirm

O Affirm é um serviço de "Compre agora, pague depois" (BNPL) que permite aos clientes pagar por compras em parcelas mensais fixas.

### Fluxo de Pagamento

1. O cliente seleciona o Affirm no checkout.
2. O cliente é redirecionado para o Affirm para escolher um plano de pagamento e completar uma verificação de crédito rápida.
3. Uma vez aprovado, o cliente confirma a compra e é redirecionado de volta para a loja.
4. A Adyen confirma a transação e envia um webhook.
5. O conector atualiza o status do pedido na VTEX.

### Regras Específicas

- **Elegibilidade**: A disponibilidade depende da avaliação de crédito do cliente pelo Affirm.

## Bancontact Mobile

O Bancontact Mobile permite que os clientes paguem utilizando o aplicativo Bancontact em seus dispositivos móveis, frequentemente via código QR ou redirecionamento de aplicativo para aplicativo.

### Fluxo de Pagamento

1. O cliente seleciona o Bancontact Mobile no checkout.
2. Um código QR é gerado para o cliente escanear com o aplicativo Bancontact, ou ele é redirecionado para o aplicativo se estiver em um dispositivo móvel.
3. O cliente confirma o pagamento dentro do aplicativo.
4. A Adyen confirma a transação e envia um webhook.
5. O conector atualiza o status do pedido na VTEX.

### Regras Específicas

- **Captura**: Sempre imediata.
- **Reembolso**: Permitido em valores parciais ou totais.

## Klarna

A Klarna oferece várias opções de pagamento, permitindo que os clientes escolham entre pagamento imediato, parcelado ou diferido.

### Fluxo de Pagamento

1. O cliente seleciona a Klarna como método de pagamento no checkout.
2. O cliente escolhe entre as opções de pagamento disponíveis: Pay Now, Pay Over Time ou Pay Later.
3. O sistema redireciona o cliente para a Klarna para autenticação e aprovação da transação.
4. A Klarna confirma o pagamento e envia um webhook para o conector.
5. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Pay Now**: O valor total é debitado imediatamente da conta bancária ou cartão do cliente.
- **Pay Over Time**: O cliente paga em várias parcelas conforme as opções da Klarna.
- **Pay Later**: O cliente possui um prazo definido para realizar o pagamento sem juros adicionais (conforme as regras da Klarna e do lojista).
- **Autorização**: Realizada pela Klarna e pode estar sujeita a uma verificação de crédito.
- **Captura**: Automática após a aprovação do pagamento.
- **Reembolso**: Permitido em valores parciais ou totais, dependendo das regras da Klarna.
- **Cancelamento**: Só pode ser feito antes da captura; após isso, é necessário realizar um reembolso.

## iDEAL

O iDEAL é um método de pagamento amplamente utilizado nos Países Baixos, permitindo transferências bancárias diretas.

### Fluxo de Pagamento

1. O cliente seleciona o iDEAL como método de pagamento no checkout.
2. O sistema exibe uma lista de bancos participantes para o cliente escolher.
3. O cliente é redirecionado para o ambiente do seu banco para autenticação e aprovação do pagamento.
4. O banco confirma a transação e o iDEAL envia um webhook para o conector.
5. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Captura**: Sempre imediata, sem janela de captura configurável.
- **Reembolso**: Permitido em valores parciais ou totais, dependendo das regras do banco emissor.
- **Cancelamento**: Não é possível após a conclusão do pagamento.
- **Disponibilidade**: Apenas para clientes com conta em bancos holandeses participantes do iDEAL.
- **Tempo de Confirmação**: Geralmente ocorre em segundos, garantindo transações rápidas.

## P24

O P24 é um método de pagamento popular na Polônia, permitindo transferências bancárias diretas e pagamentos rápidos.

### Fluxo de Pagamento

1. O cliente seleciona o Przelewy24 (P24) no checkout.
2. O sistema exibe uma lista de bancos participantes para o cliente escolher.
3. O cliente é redirecionado para o ambiente do seu banco para autenticação e aprovação do pagamento.
4. O banco confirma a transação e o P24 envia um webhook para o conector.
5. O conector aprova o pagamento e atualiza a VTEX.

### Specific Rules

- **Captura**: Sempre imediata, sem janela de captura configurável.
- **Reembolso**: Permitido em valores parciais ou totais, dependendo das regras do banco emissor.
- **Cancelamento**: Não é possível após a conclusão do pagamento.
- **Disponibilidade**: Apenas para clientes com conta em bancos poloneses participantes do P24.
- **Tempo de Confirmação**: Geralmente ocorre em segundos, garantindo transações rápidas.