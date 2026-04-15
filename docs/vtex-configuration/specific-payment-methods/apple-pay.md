---
title: Apple Pay
description: Apple Pay is the digital wallet of choice for millions of iOS users
sidebar_custom_props:
  image: /img/icons/apple-pay.svg
  subtitle: Digital wallets, Cards
---

### Set up Apple Pay in the Adyen Customer Area

Also you will need to set up Apple Pay in your Adyen Customer Area in Payment Methods. To do that, follow the steps below:

1. In your Adyen Customer Area, go to **Settings**.<br/>
2. Click on **Payment Methods**.<br/>
3. On the right side, click on **Request Payment Method**.<br/>
4. In the **Select Payment Method** screen, select **Apple Pay**.
![SelectPaymentScreen](/img/vtex-select-payment-screen.png)
5. Select the Merchant.<br/>
![SelectMerchant](/img/vtex-select-merchant.png)
6. Set up the acquirer account.<br/>
![SelectAcquirerAccount](/img/vtex-select-acquirer-account.png)
7. Select the certificate type: **Use Adyen Certificate**.<br/>
![UseAdyenCertificate](/img/vtex-use-adyen-certificate.png)
8. In the **Review and Finish** screen, insert the full website domain.<br/>
![FullWebsiteDomanin](/img/vtex-full-website-domain.png)

### Validate the configuration

If the setup is correct, you should see **Apple Pay** when you search for it in the **Payment Methods** screen.
![PaymentMethods](/img/vtex-payment-methods-list.png)

### Install the certificate

1. Generate your certificate following the documentation. To generate the certificate, please refer to the following documentation: [Apple Pay Component | Adyen Docs](https://docs.adyen.com/payment-methods/apple-pay/web-component/?tab=adyen-certificate-live_1)

2. Install the certificate into the VTEX server. To do that, do a POST using Postman or similar tool to the following endpoint: `https://{{PublicStoreDomain}}/.well-known/raw/apple-developer-merchantid-domain-association?persistent=true`

[<img src="/img/postman-button.svg" alt="Run In Postman" />](https://www.postman.com/suportecorebiz/adyen-apple-pay/collection/2y1c8n1/apple-pay?action=share&creator=41098825)

3. Check if the certificate was correctly installed. To check if the certificate was correctly installed into VTEX servers, use the following url: `https://{{PublicStoreDomain}}/.well-known/apple-developer-merchantid-domain-association`
