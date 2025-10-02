---
sidebar_position: 5
title: Papel PCI
---


Para que os pagamentos com cartão de crédito sejam processados corretamente, o usuário do serviço da web requer uma permissão específica chamada **papel de pagamento API PCI**. Se essa função não estiver habilitada, as transações falharão com um erro 403.

Essa função deve ser solicitada à equipe de suporte da Adyen abrindo um ticket.

**Como abrir o ticket de suporte:**

1.  Siga as instruções na documentação da Adyen para [entrar em contato com o suporte da Adyen](../support.md).
2.  Ao criar o ticket, use os seguintes detalhes:
    *   **Assunto**: `Habilitar papel de pagamentos PCI API`
    *   **Descrição**: Informe que você está configurando o Adyen V3 na VTEX e forneça o **Usuário do Serviço Web** que você está usando (este é o valor do campo **Nome de usuário** no painel da Adyen, por exemplo, `ws_123456@Company.YourCompany`).

Este é o mesmo usuário criado na etapa de [Chave de API](./api-key.md).

![Papel do Usuário](https://i.imgur.com/yGKCsOH.png)

O nome de usuário também pode ser encontrado seguindo os seguintes passos:

Vá para a sua [Área do Cliente Adyen](https://ca-test.adyen.com/ca/ca/overview/default.shtml);
No menu à esquerda, clique em "Desenvolvedores" e depois em "Credencial de API";
Selecione o nome de usuário que está sendo usado;
Na seção "Configurações Gerais", você encontrará o nome de usuário completo, copie esta informação e compartilhe com a equipe de suporte da Adyen no ticket que você está criando.

![Configurar Credencial de API](https://i.imgur.com/X4EKrk0.png)
> **Importante**: Este passo se aplica aos ambientes de teste e produção. Cada vez que uma nova credencial é criada, a permissão deve ser concedida a esse nome de usuário específico também.