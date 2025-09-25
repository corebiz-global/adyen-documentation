---
sidebar_position: 5
title: Papel PCI
---


Para que os pagamentos com cartão de crédito sejam processados corretamente, o Usuário de Serviço da Web requer uma permissão específica chamada **papel de Pagamentos API PCI**. Se este papel não estiver habilitado, as transações falharão com um erro 403.

Este papel deve ser solicitado à equipe de suporte da Adyen abrindo um ticket.

**Como abrir o ticket de suporte:**

1.  Siga as instruções na documentação da Adyen para [entrar em contato com o suporte da Adyen](https://docs.adyen.com/support/how-to-reach-adyen-support/).
2.  Ao criar o ticket, use os seguintes detalhes:
    *   **Assunto**: `Habilitar papel de Pagamentos API PCI`
    *   **Descrição**: Informe que você está configurando o Adyen V3 na VTEX e forneça o **Usuário de Serviço da Web** que você está usando (este é o valor do campo **Nome de usuário** no painel da Adyen, por exemplo, `ws_123456@Company.YourCompany`).

Este é o mesmo usuário criado na etapa de [Chave de API](./api-key.md).

![Papel do Usuário](https://i.imgur.com/yGKCsOH.png)

O nome de usuário também pode ser encontrado seguindo os passos abaixo:

Vá para a sua [Área do Cliente Adyen](https://ca-live.adyen.com/);
No menu do lado esquerdo, clique em “Desenvolvedores” e depois em “Credencial de API”;
Selecione o nome de usuário que está sendo usado;
Na seção “Configurações Gerais”, você encontrará o Nome de Usuário completo, copie esta informação e compartilhe com a equipe de Suporte da Adyen no ticket que você está criando.

![Configurar Credencial de API](https://i.imgur.com/X4EKrk0.png)
> **Importante**: Este passo se aplica aos ambientes de Teste e Produção. Toda vez que uma nova credencial for criada, a permissão precisará ser concedida para aquele nome de usuário específico também.