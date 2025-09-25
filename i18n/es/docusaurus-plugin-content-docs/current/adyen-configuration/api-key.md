---
sidebar_position: 3
title: Chave de API
---


## Configuração de Credenciais de API

Gere e configure sua chave de API conforme descrito na [Documentação de Plataformas da Adyen](https://docs.adyen.com/development-resources/api-credentials/). Certifique-se de armazenar sua chave de API com segurança e usá-la para autenticar solicitações da VTEX para a Adyen.

1. Em sua [Área do Cliente Adyen](https://ca-test.adyen.com/ca/ca/overview/default.shtml), no menu lateral, clique em **Desenvolvedores** e, em seguida, clique em **Credenciais de API**;
2. Clique no botão **Criar nova credencial** no lado direito da tela;
3. Selecione **Usuário de serviço da Web**
4. Abrirá um pop-up com as Configurações Gerais:
   1. Tipo de Credencial
      1. Nome de usuário: Este é o seu **Usuário de Serviço da Web** da Adyen. Guarde este ID, pois você precisará dele para abrir um ticket para a Adyen mais tarde (por exemplo, `ws_123456@Company.YourCompany`).
      2. Descrição: Uma descrição para a chave de API
5. Em **Configurações do Servidor**, na área de **Autenticação**, selecione **Chave de API** e, em seguida, clique no botão **Gerar Chave de API** para criar uma nova chave e **armazene** esta informação com segurança.
6. Em **Configurações do Cliente**, na área de **Autenticação**, selecione **Chave do Cliente** e clique no botão **Gerar Chave do Cliente**.

### Configurações Adicionais

- **Adicionar origem permitida**: Adicione todos os domínios que farão solicitações do lado do cliente para a Adyen. Isso inclui seu ambiente VTEX e o domínio de produção de sua loja. Você deve adicionar cada domínio separadamente.
  - **Exemplo (Ambiente VTEX)**: `https://{{account}}.myvtex.com`
  - **Exemplo (Domínio de Produção)**: `https://www.yourstore.com`
- **Permissões**: Recomenda-se selecionar todas as permissões disponíveis para o Usuário de Serviço da Web para garantir a funcionalidade completa e evitar possíveis problemas com novos recursos ou métodos de pagamento.

![Credenciais de API](https://i.imgur.com/2C6J0FS.png)

7. Após configurar todas as configurações para a nova credencial, role até o final da página e clique em **Salvar**.

> **Importante:** Deixar de salvar as alterações após criar a credencial resultará em erros de autenticação (Erro 401). Sempre garanta que você salve a nova credencial antes de prosseguir. Após salvar, recomenda-se reabrir as configurações da credencial para confirmar que todas as alterações foram persistidas corretamente.
