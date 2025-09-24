---
sidebar_position: 3
title: Configuração de Cartão de Crédito
---


Para processar pagamentos com cartão de crédito em sua loja usando o AdyenV3, além de realizar as configurações anteriores já descritas neste artigo, você deve abrir um ticket no [suporte da VTEX](https://help.vtex.com/pt/support), com a seguinte solicitação: "Revisão do provedor - Adicionar Endpoint SecureProxy - AdyenV3".

No ticket, você também deve enviar a URL que será autorizada pela Adyen para realizar a transação com cartão de crédito em sua loja. O formato da URL deve ser `https://{prefixo da URL live}-checkout-live.adyenpayments.com`, onde a informação "`{prefixo da URL live}`" deve ser a mesma que a inserida por você nas configurações da Adyen no Admin da VTEX (veja [URL Live](../adyen-configuration/live-url.md)).

> **Importante**: O endereço completo da URL deve ser escrito apenas com letras minúsculas, mesmo que o "prefixo da URL Live" configurado no Admin da VTEX tenha algumas letras maiúsculas. O prefixo da URL Live não é necessário no ambiente de teste.