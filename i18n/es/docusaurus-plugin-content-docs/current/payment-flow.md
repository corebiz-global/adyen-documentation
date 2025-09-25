---
sidebar_position: 5
title: Fluxo de Pagamento
---


## Autorizando

O fluxo de pagamento começa com a etapa de **Autorização**, que ocorre logo após o checkout. Neste momento, o cliente seleciona o método de pagamento e confirma a compra clicando em **"Finalizar Compra."** A VTEX então coleta todas as informações necessárias — como detalhes do cartão, informações do pedido e outras credenciais — e o conector de pagamento as envia de forma segura para a Adyen. Essa transmissão marca o início da comunicação essencial entre as plataformas, garantindo que todos os elementos da transação sejam corretamente registrados para as próximas etapas.

## Autorizado

Nesta etapa, a Adyen encaminha as informações recebidas aos bancos emissores, que realizam uma série de verificações. Eles checam a autenticidade dos dados, a disponibilidade de fundos e aplicam protocolos de segurança, como os padrões **PCI DSS**, para prevenir fraudes. O sucesso desta etapa é crucial para que a transação prossiga sem problemas, garantindo que o pagamento possa ser processado com segurança.

## Aprovado

Uma vez que o banco emissor autoriza a transação, ela atinge a etapa de **Aprovado**. Isso significa que o pagamento foi oficialmente aceito, e todos os critérios de segurança e validação foram atendidos. O cliente é então redirecionado para a página **"Pedido Realizado"**, confirmando que o pedido foi registrado. Além disso, o sistema pode enviar notificações por e-mail ou SMS para reforçar que a compra foi concluída com sucesso.

## Negado

Se a transação não for autorizada pelo banco emissor, o pagamento é recusado. Isso pode acontecer por várias razões, tais como:
- Fundos insuficientes
- Suspeita de fraude
- Detalhes incorretos
- Restrições no cartão do cliente

Quando isso ocorre, o sistema notifica imediatamente o cliente, sugerindo que ele tente um método de pagamento diferente ou entre em contato com seu banco para mais detalhes.

## Captura

Na etapa de **Captura**, o valor previamente autorizado é retido ou debitado da conta do cliente, dependendo do período de captura configurado. Esse processo pode ocorrer imediatamente ou dentro do prazo estabelecido para cada método de pagamento. Aqui, a **pré-autorização** é convertida em um compromisso financeiro real. O sistema monitora a transação para garantir que o valor debitado corresponda ao valor exato da compra, prevenindo discrepâncias e assegurando a integridade do fluxo de pagamento.

## Cancelado

Uma transação pode ser cancelada antes ou depois da captura por diversas razões:
- A pedido do cliente (se ele decidir cancelar antes da confirmação do pagamento).
- Pelo lojista (em casos de suspeita de fraude, erros de pedido ou problemas operacionais).
- Devido a falhas no processo (como erros técnicos ou irregularidades em qualquer etapa).

Quando uma transação é cancelada, o sistema impede que o valor seja debitado ou reverte imediatamente a autorização, garantindo que o cliente não seja cobrado.

## Liquidação

Após a captura, o pagamento passa para a etapa de **Liquidação**, onde o valor debitado é preparado para transferência ao lojista. A liquidação pode ocorrer imediatamente ou somente após a emissão da fatura, dependendo das regras de negócio. Durante esta etapa, são realizadas conciliações financeiras e aplicadas quaisquer taxas ou descontos aplicáveis, garantindo que o valor final seja preciso antes da transferência.

## Liquidando

Neste ponto, o processo de liquidação é oficialmente iniciado. A Adyen transfere o valor capturado para a conta do lojista, seguindo todos os requisitos contratuais e regulatórios. Esta etapa envolve uma verificação detalhada dos valores, juntamente com a correta aplicação de comissões e deduções conforme descrito no contrato. Essa conclusão reforça a confiabilidade do sistema integrado entre VTEX e Adyen, proporcionando segurança tanto para o lojista quanto para o cliente.

## Liquidado

Na etapa final de **Liquidado**, a liquidação do pagamento é concluída com sucesso. Todos os procedimentos — desde a autorização inicial até a transferência de fundos — foram executados corretamente. Como resultado, o valor devido ao lojista torna-se disponível para uso, finalizando de forma eficaz e segura o processo de pagamento.

## Reembolsado

Se necessário, uma transação capturada pode passar pela etapa de **Reembolsado**, onde o valor debitado é devolvido ao cliente. O reembolso pode ser **total ou parcial**, dependendo da política do lojista e do tipo de compra. Esse processo pode ser iniciado tanto pelo cliente quanto pelo lojista, tipicamente em casos de devoluções de produtos, cancelamentos de serviços ou erros de pagamento. Uma vez processado o reembolso, o cliente recebe o valor de volta através do mesmo método de pagamento utilizado na compra.

![paymentflow](https://i.imgur.com/yWGGPkR.png)