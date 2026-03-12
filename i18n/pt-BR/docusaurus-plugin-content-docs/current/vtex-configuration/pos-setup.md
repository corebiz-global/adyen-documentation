---
sidebar_position: 5
title: Configuração de POS (Point of Sale)
---

O conector Adyen para VTEX suporta transações de **Ponto de Venda (POS)**, permitindo uma integração perfeita entre suas lojas físicas e a plataforma VTEX.

## Pré-requisitos

Antes de configurar o POS na VTEX, certifique-se de que:
1. Você tem uma conta Adyen com POS habilitado.
2. Seus terminais POS estão registrados e atribuídos às lojas corretas na Área do Cliente Adyen.
3. Você tem a **URL do POS ao vivo (Live POS URL)** se estiver em um ambiente de produção.

## Configurando o Provedor POS na VTEX

1. No Admin VTEX, vá para **Configurações da Loja > Pagamentos > Provedores**.
2. Edite seu provedor **AdyenV3**.
3. No campo **Live POS URL**, insira o endpoint da API do terminal fornecido pela Adyen (ex: `https://terminal-api-live.adyen.com`).
4. Clique em **Salvar**.

## Condições de Pagamento para POS

Para oferecer o POS como uma opção de pagamento:
1. Vá para **Configurações da Loja > Pagamentos > Configurações**.
2. Na aba **Condições de Pagamento**, clique no botão **+**.
3. Pesquise os métodos de pagamento POS específicos (ex: **Venda Direta Debito**, **Venda Direta Credito** ou **Pix POS**).
4. Associe-os ao provedor **AdyenV3**.
5. Defina o status como **Ativo** e clique em **Salvar**.

## Lógica de Seleção de Terminal

Quando um cliente seleciona um método de pagamento POS no checkout (geralmente usado em cenários de "Prateleira Infinita" ou Sales App), o conector precisa saber qual terminal deve processar o pagamento.

### Como funciona:

1. **Descoberta de Terminal**: O conector busca automaticamente todos os terminais e lojas disponíveis vinculados à sua conta Adyen.
2. **Seleção do Usuário**: Se o terminal não estiver pré-configurado ou reconhecido, o conector redirecionará o usuário para uma tela de seleção (formulário JSON Schema).
3. **Formulário de Seleção**:
   - **Loja**: O usuário seleciona a loja física onde a transação está ocorrendo.
   - **Terminal**: O usuário seleciona o terminal específico (pelo Número de Série/POIID) da lista de terminais atribuídos àquela loja.
4. **Processamento**: Uma vez selecionado, o conector envia a solicitação de pagamento diretamente para o terminal escolhido.

> **Nota Técnica**: A lista de terminais e lojas é buscada em tempo real da API de Gerenciamento da Adyen. Em contas com um grande número de lojas/terminais, este processo pode levar alguns segundos, pois o conector itera por todos os resultados paginados para garantir que a lista esteja completa.

## Solução de Problemas POS

- **Terminal Não Encontrado**: Certifique-se de que o terminal está online e atribuído corretamente a uma loja na Área do Cliente Adyen.
- **Timeout**: Se a lista de seleção de terminais demorar muito para carregar, verifique as permissões da sua Chave de API Adyen e o número de lojas/terminais em sua conta.
- **Pagamento Negado no Terminal**: Verifique a conexão do terminal e certifique-se de que o método de pagamento está habilitado para aquele terminal específico.
