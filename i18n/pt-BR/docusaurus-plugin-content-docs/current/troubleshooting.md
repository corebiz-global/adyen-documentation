---
sidebar_position: 9
title: Solução de Problemas
---


Problemas com o Plugin de Integração Adyen podem estar relacionados a um ou mais dos seguintes:

- Problemas de configuração da Vtex;
- Erros de configuração da Adyen;
- Customizações do Checkout;
- Outros erros de disponibilidade de serviço da VTEX;

Se você encontrar algum problema durante o processo de integração, consulte os seguintes cenários de solução de problemas mais comuns:

## Problemas de Configuração VTEX

### Método de Pagamento Não Aparece

Garanta que o método de pagamento está corretamente configurado e ativado no painel de administração da VTEX. (Veja: [Configurando Métodos de Pagamento](vtex-configuration/payment-methods))

### Método de Pagamento Não Disponível

Verifique a configuração do método de pagamento no painel de administração da VTEX e garanta que ele está devidamente configurado e habilitado. (Veja: [Configurando Métodos de Pagamento](vtex-configuration/payment-methods))

### Falha nas Transações

Verifique as credenciais da API e garanta que o Provedor de Pagamento AdyenV3 está devidamente configurado no admin da VTEX em `https://{{account}}.myvtex.com/admin/affiliations`. (Veja: [Configurando o Provedor](vtex-configuration/configuring-provider) e [Configuração da Chave de API](adyen-configuration/api-key))

### Configuração de Subcontas

Se você estiver usando subcontas na VTEX, garanta que a subconta correta está selecionada no painel de administração da VTEX e que a configuração completa do Provedor e dos Métodos de Pagamento seja feita para a subconta selecionada. Cada subconta pode ter configurações diferentes e elas não herdam as configurações da conta principal da VTEX.

### Outros Problemas Comuns da VTEX

Antes de abrir um ticket de suporte com a VTEX, por favor, teste em um Checkout padrão da VTEX com um produto padrão para garantir que o problema não está relacionado às customizações da loja.

### Testando o fluxo de compra com um produto padrão

Escolha um produto para testar o Fluxo de Compra que não requer nenhuma configuração especial ou específica, como anexos, acessórios, assinaturas ou kits. Isso ajudará a identificar se o problema está relacionado à configuração do produto ou ao fluxo de compra e pagamento.

### Compra com Dois Cartões Usando SallesApp

Para concluir uma compra com dois cartões, você deve primeiro finalizar a compra com um cartão (escolhendo se deseja ou não imprimir o recibo de pagamento). Isso significa liberar o terminal para a segunda transação com o segundo cartão.

## Customizações do Checkout VTEX

- **Scripts Personalizados**: Desabilite quaisquer scripts personalizados ou CSS que possam estar interferindo no processo de pagamento usando as instruções fornecidas na próxima seção.
- **Plugins de Terceiros**: Verifique se há plugins ou integrações de terceiros que possam estar causando conflitos com o provedor de pagamento.
- **Google Tag Manager**: Garanta que o Google Tag Manager ou outros scripts de rastreamento não estão bloqueando o processo de pagamento.

### Como testar o Fluxo de Pagamento usando o Checkout padrão da VTEX

1. Verifique qual versão do checkout está sendo usada na loja.
   - No Admin da VTEX, procure por **checkout** na barra de pesquisa.
     - se você encontrar apenas **Checkout** na pesquisa, sua loja está usando **checkout-ui-settings**
       ![checkout-ui-settings](https://i.imgur.com/YRuIrTg.png)
     - se você encontrar **Checkout** e **Checkout UI Custom**, sua loja está usando **checkout-ui-custom**
       ![checkout-ui](https://i.imgur.com/h0McJSx.png)
2. Desabilitando Customizações no Checkout para Teste:
   2.a Para Lojas usando **checkout-ui-settings**:

   - Vá para `https://{{account}}.myvtex.com/admin/portal/#/sites` ou clique na opção **Checkout** na lista de resultados da pesquisa
     ![sites](https://i.imgur.com/9VVU0Hx.png)
   - Na tela **Checkout**, clique no ícone de engrenagem azul ![settings](https://i.imgur.com/D2PTBuq.png) no Checkout que está sendo usado pela sua loja para acessar as **configurações do Checkout**
   - Na tela de **configurações do Checkout**, clique em **Código** no topo da página
   - Na página seguinte, procure pelo arquivo **checkout6-custom.js** na lista do lado direito
     ![checkout6-custom](https://i.imgur.com/k1Se9js.png)
   - Clique no arquivo **checkout6-custom.js** para abri-lo
     ![checkout6-custom-file](https://i.imgur.com/r2I33l5.png)
   - Copie o conteúdo do arquivo se houver alguma customização e salve-o em um lugar seguro
   - Apague todo o conteúdo do arquivo e clique em **Salvar** para remover qualquer customização
   - Repita o mesmo processo para o arquivo **checkout6-custom.css**
   - Teste o processo de checkout na loja

     2.b Para Lojas usando **checkout-ui-custom**:

   - Vá para `https://{{account}}.myvtex.com/admin/vtex-checkout-ui-custom/` ou clique na opção **Checkout UI Custom** na lista de resultados da pesquisa
     ![checkout-ui-custom](https://i.imgur.com/oIR1jF7.png)
   - Na tela **Checkout UI Custom**, clique na aba **Javascript** ![settings](https://i.imgur.com/Q4NM7KN.png)
   - Na aba **Javascript**, vá até o final da página e desative o javascript usando o botão de alternância
     ![toggle](https://i.imgur.com/a4ZByOz.png)
   - Repita o mesmo processo para a aba **CSS**
   - Em seguida, clique em **PUBLICAR** ![publish](https://i.imgur.com/OxXaqUK.png) no topo da página para refletir as mudanças na loja
   - Teste o processo de checkout na loja

## Outros Erros de Disponibilidade de Serviço VTEX

- **Status do Serviço**: Verifique a página de status da VTEX para quaisquer problemas ou manutenções em andamento que possam estar afetando o processamento de pagamentos em sua Statuspage [VTEX Status](https://status.vtex.com/). Para instruções sobre como verificar o status dos serviços da VTEX, consulte a [Documentação da Central de Ajuda da VTEX](https://help.vtex.com/pt/tutorial/pagina-de-status-da-vtex--gPhqDn9IQ3c67wbJEX3JJ).

## Problemas de Configuração Adyen

### Chave de API Inválida

Regenere a chave de API no painel de administração da Adyen e atualize-a na VTEX. (Veja: [Configuração da Chave de API](adyen-configuration/api-key))

### Erros de Processamento de Pagamento

Consulte o guia de solução de problemas da Adyen para problemas e soluções comuns.

### Erro 403

Existem diferentes cenários que podem gerar um erro 403.

#### Cenário 1) URL Live definida para transações de teste

Para transações de teste, não defina a URL live, caso contrário, você pode enfrentar um erro 403. A URL live deve ser definida apenas para transações de produção. (Veja: [URL Live](adyen-configuration/live-url))

#### Cenário 2) Nome do Comerciante errado

Certifique-se de que a Conta do Comerciante preenchida na VTEX é exatamente a mesma que aparece na sua Área do Cliente Adyen. É importante seguir até mesmo as letras maiúsculas, espaços e outros caracteres especiais (Veja: [Obtendo Credenciais](adyen-configuration/getting-credentials))

#### Cenário 3) O ticket para o Suporte da Adyen ainda não foi aberto ou a habilitação não foi feita para o nome de usuário correto

Certifique-se de abrir o ticket para o suporte da Adyen seguindo as instruções que fornecemos no passo xx e que você informa o nome de usuário correto. Lembre-se de que, se por algum motivo novas credenciais forem criadas, a permissão precisa ser concedida pela equipe da Adyen novamente. (Veja: [Papel PCI](adyen-configuration/pci-role))
