---
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 14
slug: /release-notes
---

# Adyen Connector - Release Notes

## [v2.39.7]
### Melhorias Técnicas e de Performance
- Memória do serviço aumentada de 256MB para 512MB para melhorar a estabilidade e suportar maiores volumes de transações sem degradação de performance.


---

## [v2.39.6]
### Novas Funcionalidades
- Introduzida a integração do Google Pay via VTEX Wallet com integração headless, permitindo o processamento fluido de transações Google Pay com suporte a 3DS dataOnly e exibição precisa da origem do pagamento no Adyen CA.
- Melhorias na autorização do PayPal com campos enriquecidos no payload e logs de erro detalhados para melhor diagnóstico e suporte.
- Implementado roteamento via proxy de URL de workspace e adicionado o campo orderformId na rota saveCheckoutInfo, melhorando o rastreamento de sessão e a confiabilidade da integração.
- Adicionados logs de transação Pix e de pagamento recusado para maior observabilidade nos fluxos de pagamento.

### Correções de Bugs
- Corrigido o código de resposta do proxy de payment-details para garantir a correta propagação do status HTTP para a VTEX.
- Corrigida a estrutura do payload authenticationData e o campo additionalData no corpo da requisição de cartão para melhorar a compatibilidade com 3DS.

### Melhorias Técnicas e de Performance
- Habilitada autenticação 3DS forçada como opção configurável para maior conformidade de segurança.
- Atributos de log atualizados nos serviços de pagamento para consistência e melhor depuração.


---

## [v2.39.5]
### Melhorias Técnicas e de Performance
- Release de estabilidade interna sem alterações visíveis ao usuário.


---

## [v2.39.4]
### Novas Funcionalidades
- Aprimorada a geração do ID de masterdata para tokenização: o identificador de cartão agora utiliza merchantId+accountId em vez de userId+cardBin, evitando conflitos quando múltiplos cartões com o mesmo BIN são utilizados pelo mesmo cliente.

### Correções de Bugs
- Corrigida a configuração de interação do comprador para transações tokenizadas para garantir o correto processamento do pagamento.
- Corrigida a referência de versão do cliente de payment-details e alinhado o campo vtexUserId com o identificador de token no masterdata.


---

## [v2.39.3]
### Correções de Bugs
- Corrigidos os fluxos de reembolso e cancelamento na versão de tokenização para garantir a correta finalização das transações.
- Resolvido o processamento de tokenização ativa para evitar falhas em tentativas de pagamento tokenizadas.
- Corrigida a configuração de timeout para 5 segundos e alinhada a nomenclatura de atributos de log (usando transactionId) para consistência entre os serviços.

### Melhorias Técnicas e de Performance
- Adicionados logs de observabilidade no fluxo de tokenização para diagnósticos aprimorados.


---

## [v2.39.2]
### Novas Funcionalidades
- Adicionado suporte à configuração de tokenização, permitindo que lojistas configurem a tokenização de cartão salvo para clientes recorrentes.


---

## [v2.39.1]
### Novas Funcionalidades
- Mensagens aprimoradas para lojistas que experimentam falhas de cancelamento envolvendo um Provedor de Serviço de Pagamento (PSP).

### Correções de Bugs
- Processo de cancelamento aprimorado em todos os fluxos de pagamentos.


---

## [v2.39.0]
### Novas Funcionalidades
- Adição de suporte ao PayPal e enriquecimento dos payloads de pagamento com riskData e shopperConversionId. Introduzida a configuração de atraso na captura para Cartão, Google Pay e Apple Pay, além de melhorias na observabilidade dos logs em Webhooks, reembolsos e cancelamentos.

### Correções de Bugs
- Melhoria na robustez dos logs e tratamento de erros para cenários de cartão inválido (erros Adyen 101/905). Resolução de timeouts de transação através da otimização de chamadas Supabase e adição de limites de caracteres em chaves de idempotência para garantir compatibilidade com a API.


---

## [v2.38.2]
### Novas Funcionalidades
- Sistema de logs aprimorado com a introdução do Winston logger, incluindo detalhes da origem do arquivo e implementação nos serviços de POS. Adição de links para documentação para melhor orientação do lojista.

### Correções de Bugs
- Melhoria nos fluxos de Webhook e POS através do refinamento do armazenamento de dados no VBase, otimização da idempotência para reembolsos e cancelamentos, e resolução de timeouts na sincronização de terminais.

### Melhorias Técnicas e de Performance
- Padronização da implementação do logger e otimização da recuperação de dados de terminais utilizando processamento paralelo para melhor desempenho.


---

## [v2.38.1]
### Correções de Bugs
- Adição de tratamento de erros na recuperação da chave de API do VBase para evitar falhas na integração.


---

## [v2.36.6]
### Novas Funcionalidades
- Atualização de versão interna para estabilidade e manutenção.


---

## [v2.36.5]
### Novas Funcionalidades
- Introdução de suporte à tokenização 3DS e atualização da API de POS para melhores interações com terminais.

### Correções de Bugs
- Melhorias abrangentes no gerenciamento de tokens para assinaturas e compras POS, incluindo correções na nomeação de tokens 3DS e manipulação de sessões. Atualização de APIs de terminais legadas e otimização de timeouts de API para maior confiabilidade.


---
## [v2.32.0]
### Novas Funcionalidades
- Suporte expandido a métodos de pagamento com a introdução do Affirm e configurações aprimoradas para o Apple Pay. Melhoria na experiência de pagamento com um novo fluxo de retentativa para componentes web e APIs de redirecionamento, além da implementação de um proxy para métodos de marketing e detalhes de pagamento.

### Correções de Bugs
- Refatoração do motor principal de pagamentos com a substituição de dependências legadas, otimização do tratamento de erros para conflitos 409 e melhoria da consistência geral da interface na configuração da VTEX.


---

## [v2.30.13]
### Novas Funcionalidades
- Adição de suporte para PayPal e Affirm, juntamente com melhorias nos timeouts de API e logs aprimorados para melhor observabilidade.

### Correções de Bugs
- Resolução de problemas de integração através do rollback para uma versão estável.


---

## [v2.30.12]
### Novas Funcionalidades
- Lançamento funcional inicial do conector.


---

## [v2.30.6]
### Correções de Bugs
- Melhoria no tratamento de erros com a adição de mensagens descritivas e implementação de funções de negação para requisições falhas.


---

## [v2.30.5]
### Novas Funcionalidades
- Padronização das respostas de erro da API para maior clareza na integração.

### Correções de Bugs
- Resolução de problemas nos fluxos de Cartão de Crédito e 3DS, e melhoria na clareza das mensagens de erro.


---

## [v2.30.4]
### Correções de Bugs
- Adição de lógica de sincronização para lidar com transações já canceladas no ambiente VTEX.


---

## [v2.28.1]
### Novas Funcionalidades
- Melhoria na segurança e integridade de dados com a adição de validações nas APIs de BrowserInfo e POS.

### Correções de Bugs
- Resolução de problemas de validação relacionados à formatação de CNPJ.


---

## [v2.27.2]
### Novas Funcionalidades
- Melhoria no rastreamento de transações com a inclusão do atributo paymentId no armazenamento de dados.


---

## [v2.27.1]
### Novas Funcionalidades
- Melhoria no fluxo de cancelamento para suportar requisições sem o ID de Transação (TID).


---

## [v2.26.9]
### Correções de Bugs
- Realizada limpeza de código e implementadas otimizações iniciais para resolver problemas de timeout de API.


---

## [v2.26.6]
### Correções de Bugs
- Resolução de um problema crítico que causava loops infinitos nos fluxos de transação POS.


---

## [v2.26.4]
### Novas Funcionalidades
- Adição de logs detalhados para operações POS para facilitar a resolução de problemas e monitoramento.


---

## [v2.26.1]
### Correções de Bugs
- Otimização dos fluxos 3DS com a remoção de requisitos redundantes de BrowserInfo da API.


---
## [v2.26.0]
### Novas Funcionalidades
- Gerenciamento de assinaturas aprimorado com a introdução de novos fluxos utilizando o token networkTxReference. Melhoria na visibilidade das transações com a adição de informações do adquirente nos detalhes de pagamento e respostas de Webhook.

### Correções de Bugs
- Correção das convenções de nomenclatura de classes nos manipuladores de Webhook para melhor consistência do código.


---

## [v2.25.1]
### Correções de Bugs
- Restauração da estabilidade da integração através do retorno para uma versão estável e atualização dos detalhes de pagamento para suportar múltiplas contas. Padronização dos dados de BrowserInfo para utilizar HTTPS por padrão.


---

## [v2.24.15]
### Novas Funcionalidades
- Adição do atributo OriginalReference nos payloads de POS, Klarna e Cartão para melhorar a conciliação de transações.

### Correções de Bugs
- Realizada manutenção geral com a remoção de código legado e atualização dos identificadores do projeto.


---

## [v2.24.11]
### Correções de Bugs
- Melhoria na confiabilidade dos pagamentos com a adição de suporte ao authCode e implementação de verificações para preços indefinidos.


---

## [v2.24.10]
### Novas Funcionalidades
- Atualização abrangente nos payloads de pagamento para transações Klarna, Boleto, Pix e Cartão, incluindo a adição de adaptadores de itens de linha e suporte ao shopperStatement.

### Correções de Bugs
- Otimização da lógica de assinaturas através do refinamento das verificações condicionais no processo de recuperação do formulário de pedido.


---

## [v2.24.7]
### Novas Funcionalidades
- Atualização dos modelos de contato para Apple Pay e melhorias na documentação do projeto.

### Correções de Bugs
- Melhoria na validação de dados para Klarna e outros métodos de pagamento através da implementação de verificações de comprimento de caracteres em documentos sensíveis.


---

## [v2.24.5]
### Novas Funcionalidades
- Expansão da documentação para fornecer diretrizes de integração mais claras.

### Correções de Bugs
- Correção de problemas na transmissão de dados em requisições de detalhes de pagamento.


---

## [v2.24.4]
### Novas Funcionalidades
- Introdução de suporte para Cartes Bancaires e adição da propriedade amountExcludingTax nos payloads de pagamento.

### Correções de Bugs
- Resolução de problemas de precisão decimal em cálculos de taxas.


---

## [v2.24.3]
### Novas Funcionalidades
- Melhoria na experiência do desenvolvedor com a adição de comentários JSDoc e logs aprimorados em toda a base de código.


---

## [v2.24.2]
### Novas Funcionalidades
- Expansão do suporte Klarna com as opções "Pagar Agora" e "Pagar Depois", e adição de logs aprimorados para transações POS.

### Correções de Bugs
- Melhoria na confiabilidade da API com o refinamento do tratamento de estados e remoção de dados de país fixos no código.


---

## [v2.24.0]
### Novas Funcionalidades
- Melhoria na robustez da integração com uma nova rota de healthcheck e recuperação automatizada da interface para pagamentos falhos. Otimização do armazenamento de dados centralizando a gravação de transações nos detalhes de pagamento.

### Correções de Bugs
- Adição de suporte para Bancontact Mobile e refinamento da lógica de armazenamento no VBase para evitar duplicidade de dados.


---

## [v2.23.16]
### Novas Funcionalidades
- Adição de suporte para pagamentos Klarna na configuração.

### Melhorias Técnicas e de Performance
- Otimização da integração Klarna com a implementação de suporte ao código de país ISO Alpha-2 e refatoração de código legado.


---

## [v2.23.15]
### Correções de Bugs
- Validação das configurações do Apple Pay no aplicativo de pagamento para maior estabilidade.


---

## [v2.23.14]
### Novas Funcionalidades
- Introdução de suporte para Klarna Account e implementação do controlador Apple Pay v2 baseado nos padrões da Adyen. Adição de funções utilitárias para conversão de ISO de país.

### Correções de Bugs
- Melhoria na interface do checkout e refinamento da lógica de backend para tratamento de códigos de país e autorização de pagamento.

### Melhorias Técnicas e de Performance
- Limpeza de artefatos do ambiente de desenvolvimento e remoção de funções de pagamento não utilizadas.


---

## [v2.23.13]
### Correções de Bugs
- Melhoria nos dados de transação com a inclusão de metadados nos payloads de requisição.


---

## [v2.23.8]
### Correções de Bugs
- Melhoria na qualidade do código através de linting e refinamento do estilo visual do modal de seleção do iDeal.


---

## [v2.23.2]
### Novas Funcionalidades
- Adição de suporte de configuração para Bancontact Mobile.


---

## [v2.22.1]
### Correções de Bugs
- Padronização das convenções de nomenclatura para o Apple Pay e melhoria na segurança com a ocultação da Client Key na interface de configuração.


---

## [v2.22.0]
### Correções de Bugs
- Resolução de problemas de layout na caixa de seleção de pagamento do iDeal.


---

## [v2.21.7]
### Novas Funcionalidades
- Introdução do serviço IdealV2 com estilo aprimorado de seleção de emissores e uma integração mais robusta baseada nos padrões da Adyen.

### Correções de Bugs
- Padronização do versionamento interno para alinhar com a arquitetura mais recente do conector.


---

## [v2.21.5]
### Novas Funcionalidades
- Melhoria no fluxo do Sales App com a adição de verificação de transações POS durante o processo de cancelamento.


---

## [v0.0.3]
### Correções de Bugs
- Finalização do rebranding do projeto e limpeza de código para as etapas iniciais de lançamento.


---

