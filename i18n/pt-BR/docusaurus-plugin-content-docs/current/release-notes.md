---
title: Notas de Lançamento
sidebar_label: Notas de Lançamento
sidebar_position: 14
slug: /release-notes
---

# Adyen Connector - Notas de Lançamento

## [v2.39.1]
### Novas Funcionalidades
- adicionada mensagem para o lojista quando o cancelamento falha e a transação possui PSP

### Correções de Bugs
- cancelamento em todos os fluxos


---

## [v2.39.0]
### Novas Funcionalidades
- correção na configuração do web-component do google pay e alteração da chave para verificar tentativa
- paypal
- adicionando riskData e shopperConversionId ao payload de /payments da adyen
- adicionando campo captureDelayHours para googlepay e applepay
- **card**: adicionando campo captureDelayHours no corpo da requisição de criação de pagamento com cartão
- função utilitária para calcular captureOptions em horas
- adicionando supabaseTransport ao log de webhook
- log de falha de autorização adyen
- adicionar logs para webhook, redirecionamento, detalhes, reembolso e cancelamento
- adicionar limite de caracteres para idempotência

### Correções de Bugs
- resolver conflitos
- remover async na função e corrigir logs
- desfazer modificação em configuration.js
- removendo chamadas de flush do supabase no wintslogger. isso provoca timeout na transação se a resposta do supabase demorar muito
- erro ao reembolsar ao enviar idempotencykey com caracteres especiais
- adicionar limite de caracteres na chave de idempotência
- melhorar robustez dos logs, observabilidade e tratamento de erros
- recusa explícita para erros adyen 101/905 e correção de bug no cliente pci
- tratar erros de cartão inválido 101 e 905_x como recusados e atualizar gitignore
- logs de conta/workspace


---

## [v2.38.2]
### Novas Funcionalidades
- Melhorar logs com origem do arquivo e detalhes do erro
- Adicionar winstonLogger ao serviço de criação de POS
- Adicionar configuração inicial do Winston logger
- adicionar link para documento

### Correções de Bugs
- Ajustar posição do logger no healthcheck
- remover nome do conector no webhook
- remover recurringProcessingModel e melhorar idempotência de reembolso e cancelamento
- remover tokenização, melhorar alguns logs, proteger alguns vbase
- adicionar vbase para salvar dados no fluxo de pos
- timeout para obter terminais e tentativa de deviceout

### Melhorias Técnicas e de Performance
- obter orderformId e timeout para API de gerenciamento
- **pos**: Padronizar implementação do winston logger no create.service
- **adyen/terminal**: refatoração da função getAllData para usar Promise.all()


---

## [v2.38.1]
### Correções de Bugs
- try-catch no vbase da api-key


---

## [v2.37.0]
### Novas Funcionalidades
- adicionar oney à configuração


---

## [v2.36.6]
### Novas Funcionalidades
- alterar versão


---

## [v2.36.5]
### Novas Funcionalidades
- atualizar com master
- adicionar correção de pos e atualização da api de pos
- token no 3DS
- token no 3DS
- alterar versão para teste
- alterar versão para teste
- token no 3DS

### Correções de Bugs
- adicionar lógica de no store
- melhorar lógica
- melhorar lógica
- remover modificação de opções
- remover lógica de configuração de tokenização
- retornar timeout fixo para api de sincronização
- adicionar api de acesso de saída
- atualizar a API de terminal obsoleta
- salvar/escrever token
- tokenização de assinatura
- paymentMethodRequest
- Ajustar tokenName do 3DS
- salvar/escrever token
- Ajustar salvamento de token na primeira compra pos
- tokenização de assinatura
- rollback do código GetTransaction
- paymentMethodRequest
- tratar requisição OPTIONS no POS Submit Terminal
- criar versão beta para testar logs
- Ajustar tokenName do 3DS
- salvar/escrever token
- Ajustar salvamento de token na primeira compra pos
- tokenização de assinatura
- rollback do código GetTransaction
- paymentMethodRequest
- atualizar com master


---

## [v2.32.0]
### Novas Funcionalidades
- adicionar configuração de tokenização e alterar versão
- alterar versão
- merge com master
- alterar versão para beta
- adicionar proxy ao método de detalhes
- alterar docs do apple pay
- adicionar condição para cancelar uma transação com erro
- remover teste e atualizar algumas áreas
- adicionar readme ao projeto
- merge master
- atualizar front-end e corrigir payload builder
- criar serviço affirm e criar configuração do payment app
- adicionar proxy ao mkt
- adicionar fluxo de tentativa na api de redirecionamento
- adicionar fluxo de tentativa para pagamentos webcomponent
- simular erro e autenticar na tentativa

### Correções de Bugs
- remover links
- ajustar sintaxe e remover caracteres
- ajustar texto na Configuração VTEX
- remover console.log
- adicionar Affirm real
- adicionar filtro para erros 409
- resposta de autorização de pagamento e tratamento de erro no payment app
- remover axios e refatorar código
- versão para teste


---

## [v2.30.13]
### Novas Funcionalidades
- adicionar paypal e affirm no manifest
- alterar versão para criar uma versão beta para teste
- alterar tempo de timeout e adicionar logs

### Correções de Bugs
- rollback da versão 2.30.12


---

## [v2.30.12]
### Novas Funcionalidades
- primeira versão funcional


---

## [v2.30.6]
### Correções de Bugs
- adicionar mensagem de erro
- adicionar função de negação quando uma requisição falha


---

## [v2.30.5]
### Novas Funcionalidades
- respostas de erro

### Correções de Bugs
- cartão de crédito
- 3ds
- mensagens de erro


---

## [v2.30.4]
### Correções de Bugs
- adicionar função para cancelar transições já canceladas na VTEX


---

## [v2.28.1]
### Novas Funcionalidades
- adicionar validações na api de browserinfo
- adicionar validação em uma api de POS

### Correções de Bugs
- cnpj


---

## [v2.27.2]
### Novas Funcionalidades
- adicionar atributo paymentId para salvar transações


---

## [v2.27.1]
### Novas Funcionalidades
- corrigir cancelamento sem tid


---

## [v2.26.9]
### Correções de Bugs
- remover coisas de teste
- remover coisas de teste
- remover coisas de teste
- primeira versão da correção de timeout


---

## [v2.26.6]
### Correções de Bugs
- erro de looping no POS


---

## [v2.26.4]
### Novas Funcionalidades
- adicionar logs de POS


---

## [v2.26.1]
### Correções de Bugs
- remover browserInfo por api para 3ds


---

## [v2.26.0]
### Novas Funcionalidades
- adicionar adquirente na resposta de payments-detail
- merge com master
- adicionar informações do adquirente na resposta do conector via webhook
- implementa um segundo fluxo de assinatura para obter o token da transação anterior
- adicionando fluxo networkTxReference nos detalhes do pagamento
- adicionando fluxo networkTxReference no webhook
- novo fluxo de assinaturas adicionando token networkTxReference

### Correções de Bugs
- nome da classe no webhook


---

## [v2.25.1]
### Correções de Bugs
- retornar para versão estável no manifest
- atualizar payment-details para funcionar com duas contas
- origin https no browser info vindo dos dados da api


---

## [v2.24.15]
### Novas Funcionalidades
- adicionar OriginalReference no payload de POS
- adicionar OriginalReference no payload de POS
- adicionar OriginalReference no payload de klarna
- adicionar OriginalReference no payload de cartões

### Correções de Bugs
- remover coisas de phonehouse
- alterar package.json para novo nome da app


---

## [v2.24.11]
### Correções de Bugs
- resolver conflitos de merge
- versão
- adicionar authCode
- adicionar dados fictícios
- verificar preço indefinido


---

## [v2.24.10]
### Novas Funcionalidades
- alterar integrador nas informações da app
- alterar integrador nas informações da app
- adicionar atributos ao payload de klarna
- adicionar atributos ao payload de requisição de boleto
- atualizar versão do boleto
- adicionar atributos ao tipo de requisição de boleto
- atualizar versão do klarna
- adicionar atributos ao tipo lineItem
- adicionar atributos ao payload padrão
- atualizar versão da classe de pagamento padrão
- adicionar adaptador de itens de linha aos utilitários
- adicionar shopperStatement ao payload de cartão
- atualizar versão para 71
- adicionar itens de formato ao cartão
- adicionar atributos ao payload
- adicionar atributos ao tipo de payload de cartão
- downgrade da versão de pagamento pix
- atualizar adaptador de itens de linha de vouchers
- upgrade da versão de pagamento pix
- adicionar atributos ao payload pix
- adicionar atributos retornados na lista de itens
- adicionar atributos ao tipo pix

### Correções de Bugs
- teste de assinatura dentro do getOrderFormIf


---

## [v2.24.7]
### Novas Funcionalidades
- atualizado apple pay e modelo de email de contato adyen
- novas informações adicionadas ao Readme

### Correções de Bugs
- adicionar novo atributo accept aos headers de getImageBase64FromUrl
- implementa uma validação se o documento tem mais de três caracteres no klarna
- implementa uma validação se o documento tem mais de três caracteres


---

## [v2.24.5]
### Novas Funcionalidades
- docs atualizados
- novo arquivo de doc

### Correções de Bugs
- versão
- dados de detalhes de pagamento enviados
- versão


---

## [v2.24.4]
### Novas Funcionalidades
- merge com master
- adicionar propriedade amountExcludingTax
- beta
- adicionar tipo cartes bancaires
- adicionar cartes bancaires à configuração

### Correções de Bugs
- versão
- atualizando análise de bug
- decimal de taxa
- decimal de taxa


---

## [v2.24.3]
### Novas Funcionalidades
- adicionados logs e docs para o próximo lançamento
- logs e jsdocs


---

## [v2.24.2]
### Novas Funcionalidades
- adicionar novo pagamento ao switch
- adicionar novo pagamento ao switch
- adicionar logs ao POS
- adicionar klarna pay now ao conector
- adicionar controller klarna pay later
- adicionar pasta klarna pay later

### Correções de Bugs
- resolver conflitos
- remover país mockado
- alterar busy para retornar negação


---

## [v2.24.0]
### Novas Funcionalidades
- adicionar rota de healthcheck na API
- recarregar 10 segundos após falha de pagamento
- salvar pagamento apenas nos detalhes do pagamento e retornar paymentId/transactionId/orderId para o web component

### Correções de Bugs
- erro de lint
- erro de lint
- alterar atributo amountIncludingTax no getLineItems
- alterar URLs das requisições
- remover salvamento no vbase de auth/payment
- apenas salvar transação no vbase de notificação
- adicionar dados de pagamento no vbase por orderId e alterar versão da API
- adicionar metadados no payload de bancontact
- Bancontact Mobile nas configurações


---

## [v2.23.16]
### Novas Funcionalidades
- adicionar pagamentos klarna à configuração

### Correções de Bugs
- remover verificação de teste de produção

### Melhorias Técnicas e de Performance
- alterar classe klarna para adicionar código do país em alpha 2 no payload da requisição
- mover código antigo do klarna para pasta legacy


---

## [v2.23.15]
### Correções de Bugs
- testar configuração do apple pay no payment app


---

## [v2.23.14]
### Novas Funcionalidades
- adicionar conta klarna no conector
- adicionar pasta conta klarna
- adicionar controller Apple Pay v2 ao fluxo de autenticação do conector
- criar um novo controller apple pay baseado no padrão adyen
- adicionar Tipo Apple Pay
- adicionar configuração applepay ao payment app
- adicionar pasta utils ao payment app com função de conversor iso de país

### Correções de Bugs
- versão
- css no botão de fechar
- função get country
- if no on submit
- passar conversor iso de país para o backend
- tipo de pagamento
- atributo svg
- adicionar autorização e countryCode à função Create Payment
- atualizar versão beta para testes

### Melhorias Técnicas e de Performance
- remover moeda falsa em ambiente de desenvolvimento
- remover moeda falsa em ambiente de desenvolvimento
- remover função não utilizada do pagamento ideal


---

## [v2.23.13]
### Correções de Bugs
- adicionar metadados ao payload da requisição


---

## [v2.23.8]
### Correções de Bugs
- algumas correções de lint


---

## [v2.23.6]
### Correções de Bugs
- alterar estilo no modal do iDeal


---

## [v2.23.2]
### Novas Funcionalidades
- adicionar configuração Bancontact Mobile


---

## [v2.22.1]
### Correções de Bugs
- alterar tipo de Client key para password
- ApplePay para Apple Pay


---

## [v2.22.0]
### Correções de Bugs
- correção da caixa do ideal


---

## [v2.21.7]
### Novas Funcionalidades
- remover emissores aleatórios do iDeal
- atualizar app front-end para estilizar seleção de emissores
- criar serviço IdealV2 estendendo AdyenStandardService e modificar componente react para renderizar props do ideal
- criar módulo IdealV2 e adicioná-lo ao connector.ts e @types/connector
- adicionar IdealV2 em configuration.json

### Correções de Bugs
- alterar v2 para v3
- alterar v2 para v3
- alterar v2 para v3


---

## [v2.21.5]
### Novas Funcionalidades
- **SalesAppTransaction**: adicionando verificação de transações pos no processo de cancelamento


---

## [v0.0.3]
### Correções de Bugs
- remover coisas de phonehouse
- alterar package.json para novo nome da app


---
