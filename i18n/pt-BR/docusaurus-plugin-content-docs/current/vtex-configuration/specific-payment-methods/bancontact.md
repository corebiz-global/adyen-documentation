---
title: Bancontact
---

- Para que este método de pagamento funcione, você precisa fazer algumas configurações específicas no Painel Administrativo da VTEX:
  - **Configuração do Método de Pagamento**: Vá para o painel de administração da VTEX e acesse a seção de métodos de pagamento `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` ou digite **pagamentos** na caixa de pesquisa do Admin e clique na aba **Pagamentos customizados**.
  - Na aba **Pagamentos customizados**, clique em uma **Configuração** disponível em **Cartões de Loja (Private Label)** ![private-label-cards](/img/vtex-private-label-cards.png).
  - Na próxima tela preencha o campo **Nome** com "Bancontact" (certifique-se de que a sintaxe está correta, pois este é o nome do método de pagamento que será enviado nas Transações)
  - No campo **Número de dígitos do CVV**, defina como **não obrigatório**
    ![bancontact](/img/vtex-bancontact-config.png)
  - Deixe os valores dos outros campos inalterados.
  - Clique em **Salvar** para salvar a configuração.
  - Após salvar a configuração, você será redirecionado automaticamente para finalizar a configuração na seguinte tela **Condição de Pagamento**:
    ![bancontact-2](/img/vtex-bancontact-details.png)
  - Na tela de **Condição de Pagamento**, preencha o **Nome da Condição**
  - Selecione o **Provedor** da Adyen no menu suspenso **Processar com o provedor**
  - Altere o **Status** para "ativo"
  - Clique em **Salvar no canto inferior direito da tela**
  - Após salvar a Condição de Pagamento, o **"Bancontact"** estará disponível para uso nas opções **"Cartão de Crédito"** e **"Cartão de Débito"** no checkout.
