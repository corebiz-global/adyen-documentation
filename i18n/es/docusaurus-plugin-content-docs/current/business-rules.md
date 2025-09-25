---
sidebar_position: 6
title: Regras de Negócio
---


Este documento apresenta as regras de negócio aplicáveis aos diferentes métodos de pagamento utilizados na plataforma. Cada método segue um fluxo operacional específico, com regras claras para autorização, captura, reembolso e cancelamento. O objetivo é garantir uma experiência segura e eficiente para clientes e lojistas.

## Cartões de Crédito e Débito

Pagamentos com cartões de crédito e débito envolvem múltiplas etapas, desde a análise de risco até a liquidação da transação.

### Fluxo de Pagamento

1. O cliente seleciona um cartão de crédito ou débito como método de pagamento no checkout.
2. O sistema realiza uma análise de risco para minimizar fraudes.
3. Se aprovado, o pagamento é autorizado pela emissora do cartão.
4. A captura ocorre de acordo com a janela de captura configurada no conector.
5. A transação é liquidada, e o pedido é atualizado na VTEX.

### Regras Específicas

- **Autorização**: Realizada após a análise de risco, que pode ser automática ou manual.
- **Captura**: Pode ser imediata ou ocorrer dentro do período definido pelo conector.
- **Reembolso**: Permitido em valores parciais ou totais, dependendo das regras da adquirente.
- **Cancelamento**: Só pode ser feito antes da captura; após isso, um reembolso é necessário.
- **3DS (Autenticação Segura)**: Algumas transações podem exigir autenticação via **3D Secure** para maior segurança. Para cartões de débito, a disponibilidade do 3DS depende da rede do cartão e da emissora.

### Tokenização

Com a Adyen, você pode armazenar com segurança um ou mais detalhes de pagamento por comprador, com o consentimento do comprador. Isso permite que você ofereça pagamentos por assinatura, recargas automáticas nas contas dos compradores e proporcione aos seus compradores uma experiência de checkout mais rápida usando o cartão armazenado.

Referimo-nos a esses detalhes de pagamento salvos como tokens e ao armazenamento dos detalhes de pagamento de um comprador como tokenização.

A tokenização é aplicada nos seguintes cenários:

- Pagamentos com Cartão de Crédito
- Pagamentos 3DS
- Assinaturas
- Alterar Pedidos

O processo de tokenização funciona da seguinte forma:

1. Quando o primeiro pedido com cartão de crédito é feito e a opção de salvar cartão é selecionada, o conector informará a Adyen para tokenizar o cartão.
2. A Adyen então responderá com um token que pode ser usado para futuras transações.
3. Este token é armazenado na VTEX, de modo que para quaisquer transações posteriores do mesmo usuário e cartão de crédito, apenas o CCV e o token são enviados para a Adyen, e as informações do cartão não são transmitidas novamente.

## Pix

Pix é um método de pagamento instantâneo que permite transferências rápidas e diretas entre contas bancárias.

### Fluxo de Pagamento

1. O cliente seleciona Pix como método de pagamento no checkout.
2. O conector gera um **QR Code** dinâmico e o exibe ao cliente.
3. O cliente realiza o pagamento via aplicativo bancário.
4. A transação é confirmada em até 10 segundos.
5. A Adyen envia um webhook para o conector.
6. O conector aprova o pagamento e atualiza a VTEX, redirecionando o cliente para a página de Pedido Realizado.

### Regras Específicas

- **Captura**: Sempre imediata, sem janela de captura configurável.
- **Reembolso**: Apenas reembolsos totais são permitidos; reembolsos parciais não são possíveis.
- **Cancelamento**: Um pagamento Pix não pode ser cancelado após a conclusão.
- **Expiração do QR Code**: O código expira em 10 minutos. Se o pagamento for feito após este período, a VTEX não reconhecerá a transação, e o valor será automaticamente reembolsado.

## Boleto Bancário

O boleto bancário é uma opção amplamente utilizada para compras de maior valor, mas depende da compensação bancária para validação do pagamento.

### Fluxo de Pagamento

1. O cliente seleciona Boleto Bancário no checkout.
2. O conector gera um arquivo PDF com o boleto.
3. O cliente realiza o pagamento via banco, casa lotérica ou aplicativo bancário.
4. A compensação ocorre em 1 a 3 dias úteis.
5. A Adyen confirma o pagamento e envia um webhook para o conector.
6. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Reembolso**: Não permitido. Se necessário, o lojista deve reembolsar manualmente via transferência bancária.
- **Validade**: Definida no momento da geração, variando de 1 a 30 dias, dependendo da configuração do conector e das regras bancárias.

## Apple Pay

Apple Pay é um método de pagamento digital que permite transações seguras através de dispositivos Apple compatíveis.

### Fluxo de Pagamento

1. O cliente seleciona Apple Pay como método de pagamento no checkout.
2. O aplicativo exibe os cartões disponíveis do cliente.
3. O cliente autentica a transação via Face ID, Touch ID ou senha.
4. O pagamento segue as regras do cartão selecionado (crédito ou débito).
5. A Adyen confirma a transação e envia um webhook para o conector.
6. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Parcelamento**: Disponível apenas para cartões de crédito.
- **Autenticação**: Todas as transações exigem autenticação biométrica ou por senha para maior segurança.

## Klarna

Klarna oferece várias opções de pagamento, permitindo que os clientes escolham entre pagamentos imediatos, parcelados ou diferidos.

### Fluxo de Pagamento

1. O cliente seleciona Klarna como método de pagamento no checkout.
2. O cliente escolhe entre as opções de pagamento disponíveis: Pagar Agora, Pagar ao Longo do Tempo ou Pagar Mais Tarde.
3. O sistema redireciona o cliente para a Klarna para autenticação e aprovação da transação.
4. A Klarna confirma o pagamento e envia um webhook para o conector.
5. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Pagar Agora**: O valor total é debitado imediatamente da conta bancária ou cartão do cliente.
- **Pagar ao Longo do Tempo**: O cliente paga em múltiplas parcelas de acordo com as opções da Klarna.
- **Pagar Mais Tarde**: O cliente tem um período definido para efetuar o pagamento sem juros adicionais (de acordo com as regras da Klarna e do lojista).
- **Autorização**: Realizada pela Klarna e pode estar sujeita a uma verificação de crédito.
- **Captura**: Automática após a aprovação do pagamento.
- **Reembolso**: Permitido em valores parciais ou totais, dependendo das regras da Klarna.
- **Cancelamento**: Só pode ser feito antes da captura; após isso, um reembolso é necessário.

## iDEAL

iDEAL é um método de pagamento amplamente utilizado na Holanda, permitindo transferências bancárias diretas.

### Fluxo de Pagamento

1. O cliente seleciona iDEAL como método de pagamento no checkout.
2. O sistema exibe uma lista de bancos participantes para o cliente escolher.
3. O cliente é redirecionado para seu ambiente bancário para autenticação e aprovação do pagamento.
4. O banco confirma a transação, e o iDEAL envia um webhook para o conector.
5. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Captura**: Sempre imediata, sem janela de captura configurável.
- **Reembolso**: Permitido em valores parciais ou totais, dependendo das regras do banco emissor.
- **Cancelamento**: Não é possível após a conclusão do pagamento.
- **Disponibilidade**: Apenas para clientes com contas bancárias em bancos holandeses que participam do iDEAL.
- **Tempo de Confirmação**: Geralmente ocorre em segundos, garantindo transações rápidas.

## P24

P24 é um método de pagamento popular na Polônia, permitindo transferências bancárias diretas e pagamentos rápidos.

### Fluxo de Pagamento

1. O cliente seleciona Przelewy24 (P24) no checkout.
2. O sistema exibe uma lista de bancos participantes para o cliente escolher.
3. O cliente é redirecionado para seu ambiente bancário para autenticação e aprovação do pagamento.
4. O banco confirma a transação, e o P24 envia um webhook para o conector.
5. O conector aprova o pagamento e atualiza a VTEX.

### Regras Específicas

- **Captura**: Sempre imediata, sem janela de captura configurável.
- **Reembolso**: Permitido em valores parciais ou totais, dependendo das regras do banco emissor.
- **Cancelamento**: Não é possível após a conclusão do pagamento.
- **Disponibilidade**: Apenas para clientes com contas bancárias em bancos poloneses que participam do P24.
- **Tempo de Confirmação**: Geralmente ocorre em segundos, garantindo transações rápidas.