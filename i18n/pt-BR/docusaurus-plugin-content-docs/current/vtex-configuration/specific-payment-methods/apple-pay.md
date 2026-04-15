---
title: Apple Pay
description: Apple Pay é a carteira digital de escolha para milhões de usuários iOS
sidebar_custom_props:
  image: /img/icons/apple-pay.svg
  subtitle: Carteiras digitais, Cartões
---

### Configure o Apple Pay na Área do Cliente Adyen

Você também precisará configurar o Apple Pay em sua Área do Cliente Adyen em Métodos de Pagamento. Para fazer isso, siga as etapas abaixo:

1. Em sua Área do Cliente Adyen, vá em “Configurações”<br/>
2. Clique em “Métodos de Pagamento”<br/>
3. No lado direito, clique em “Solicitar Método de Pagamento”<br/>
4. Na tela “Selecionar Método de Pagamento”, selecione “Apple Pay”
![SelecionarTelaPagamento](/img/vtex-select-payment-screen.png)
5. Selecione o Merchant<br/>
![SelecionarMerchant](/img/vtex-select-merchant.png)
6. Configure a conta do adquirente<br/>
![SelecionarContaAdquirente](/img/vtex-select-acquirer-account.png)
7. Selecione o tipo de certificado: “Usar Certificado Adyen”.<br/>
![UsarCertificadoAdyen](/img/vtex-use-adyen-certificate.png)
8. Na tela “Revisar e Concluir” insira o domínio completo do site<br/>
![DominioSiteCompleto](/img/vtex-full-website-domain.png)

### Validar a configuração

Se a configuração estiver correta, você deverá ver “Apple Pay” ao pesquisá-lo na tela “Métodos de Pagamento”.
![MetodosPagamento](/img/vtex-payment-methods-list.png)

### Instale o certificado

1. Gere seu certificado seguindo a documentação. Para gerar o certificado, consulte a seguinte documentação: [Apple Pay Component | Adyen Docs](https://docs.adyen.com/payment-methods/apple-pay/web-component/?tab=adyen-certificate-live_1)

2. Instale o certificado no servidor VTEX. Para fazer isso, faça um POST usando o Postman ou ferramenta similar para o seguinte endpoint: `https://{{DominioPublicoDaLoja}}/.well-known/raw/apple-developer-merchantid-domain-association?persistent=true`

[<img src="/img/postman-button.svg" alt="Executar no Postman" />](https://www.postman.com/suportecorebiz/adyen-apple-pay/collection/2y1c8n1/apple-pay?action=share&creator=41098825)

3. Verifique se o certificado foi instalado corretamente. Para verificar se o certificado foi instalado corretamente nos servidores VTEX, use a seguinte url: `https://{{DominioPublicoDaLoja}}/.well-known/apple-developer-merchantid-domain-association`
