---
sidebar_position: 6
title: Dados Adicionais
---


Para receber dados extras nos detalhes da transação (como a resposta do adquirente), você deve habilitar campos específicos na sua Área do Cliente Adyen. Embora alguns campos básicos sejam habilitados por padrão, os seguintes são essenciais para reconciliação e suporte:

- **Adquirente**
- **Referência do adquirente**: O NSU (Número Sequencial Único) da transação.
- **Referência PSP**: O TID (ID da Transação), a referência única da Adyen para a transação.

**Para ativar esses campos:**

1.  Na sua **Área do Cliente Adyen**, vá para **Desenvolvedores** > **Dados Adicionais**.
2.  Na seção **Transação**, marque os campos essenciais listados acima, além de quaisquer outros que você necessite.
3.  Clique em **Salvar Configuração**.

![Dados Adicionais](https://i.imgur.com/0Q7HpuN.png)

> **Importante**: É necessário configurar ambos os ambientes de Teste e Produção para que esses dados sejam enviados.