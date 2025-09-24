---
sidebar_position: 4
title: Specific Payment Methods
---


## Apple Pay

### Set up Apple Pay in the Adyen Customer Area

Also you will need to set up Apple Pay in your Adyen Customer Area in Payment Methods. To do that, follow the steps below:

1. In your Adyen Customer Area, go to “Settings”<br/>
2. Click on “Payment Methods”<br/>
3. On the right side, click on “Request Payment Method”<br/>
4. In the “Select Payment Method screen”, select “Apple Pay”
![SelectPaymentScreen](https://i.imgur.com/9TWDm36.png)
5. Select the Merchant<br/>
![SelectMerchant](https://i.imgur.com/r5M1jNF.png)
6. Setup the acquirer account<br/>
![SelectAcquirerAccount](https://i.imgur.com/NxE5Wlb.png)
7. Select the certificate type: “Use Adyen Certificate”.<br/>
![UseAdyenCertificate](https://i.imgur.com/obApo0m.png)
8. In the “Review and Finish” screen insert the full website domain<br/>
![FullWebsiteDomanin](https://i.imgur.com/r2taBn5.png)

### Validating the configuration

If the setup is correct, you should see “Apple Pay” when you search for it in the “Payment Methods” screen.
![PaymentMethods](https://i.imgur.com/ryeBp6m.png)

### Install the certificate

1. Generate your certificate following the documentation. To generate the certificate, please refer to the following documentation: [Apple Pay Component | Adyen Docs](https://docs.adyen.com/payment-methods/apple-pay/web-component/?tab=adyen-certificate-live_1)

2. Install the certificate into the VTEX server. To do that, do a POST using Postman or similar tool to the following endpoint: `https://{{PublicStoreDomain}}/.well-known/raw/apple-developer-merchantid-domain-association?persistent=true`

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" />](https://www.postman.com/suportecorebiz/adyen-apple-pay/collection/2y1c8n1/apple-pay?action=share&creator=41098825)

3. Check if the certificate was correctly installed. To check if the certificate was correctly installed into VTEX servers, use the following url: `https://{{PublicStoreDomain}}/.well-known/apple-developer-merchantid-domain-association`

## Google Pay

To process payments with Google Pay on Adyen, set the product or merchant ID of the Google Account on the Adyen platform (it does not apply to the test environment).

1. Create and configure a merchant in Google Pay
2. Link this merchant to Adyen

> **Warning**: In case this step is not done, the possible error the merchant will encounter: 
> _OR_BIBED_11 This merchant has not completed registration to use Google Pay API.

For further information, please refer to [Google Pay Component](https://docs.adyen.com/payment-methods/google-pay/web-component/#before-you-go-live).

## Boletos (Bank Slips)

### Configuring Bank Slips - Boleto

1. In VTEX Admin, navigate to Store Settings > Payments > Providers, or enter **Providers** in the top search bar.
2. On the Providers screen, click the **New Provider** button.
3. Use the search bar to find the provider responsible for processing the bank slip.
4. Complete the form fields using the data provided by your provider or bank.
5. Click **Save**.

### Setting Up the Payment Condition

1. In VTEX Admin, go to Store Settings > Payment > Settings, or type **Settings** in the top search bar.
2. In the **Payment Conditions** tab, click the ![**Add Payment Method**](https://i.imgur.com/j8KuDvn.png) button.
3. Select **Boleto Bancário** in the Boleto section.
4. Enable the condition in the Status field.
5. In the **Process with provider** field, choose the provider you previously configured.
6. Optionally, configure special payment conditions as needed.
7. Click **Save**.

### Configuring Boleto Expiration Days

1. In VTEX Admin, navigate to Store Settings > Payments > Providers, or enter Providers in the top search bar.
2. On the Providers screen, select the Adyen provider.
3. In the details section, click Edit.
4. In the Boleto Expiration Days field, set the desired expiration period for the boleto. Note that there is an additional processing day required for the payment to be sent to Adyen.

![boleto Expiration Days](https://i.imgur.com/mA3VmHy.png)

## Bancontact

- For this payment method to work, you need to make some specific configurations in the VTEX Admin Panel:
  - **Payment Method Configuration**: Go to the VTEX admin panel and access the payment methods section `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` or type **payments** in the Admin search box and click on **Custom Payments** tab.
  - In the **Custom Payments** tab, click on a **Config** available under **Private Label Cards** ![private-label-cards](https://i.imgur.com/IJvqQOJ.png).
  - On the next scren fill the **Name** field with "Bancontact" (make sure the syntax is correct as this is the name of the payment method that will be sent in the Transactions)
  - in **Number of CVV Digits** field, set to **not required**
    ![bancontact](https://i.imgur.com/SkvSV8g.png)
  - Leave the other fields values unaltered.
  - Click **Save** to save the configuration.
  - After saving the configuration, you will be automatically redirected to finish the setup in the following screen **Payment Condition**:
    ![bancontact-2](https://i.imgur.com/pD1FMYu.png)
  - In the **Payment Condition** screen, fill the **Condition Name**
  - Select the **Provider** for Adyen in the **Process with provider** dropdown
  - Change the **Status** to "active"
  - Click **Save** at the bottom right of the screen
  - After saving the Payment Condition,**"Bancontact"** will be available for use under the **"Credit Card"** and **"Debit Card"** options in the checkout.

## Klarna

### Klarna Pay Over Time

Allows customers to pay for their purchase in installments. To configure Klarna Pay Over Time, follow these steps:

- **In Adyen**:

  - Enable **Klarna Pay Over Time** in your Adyen account.
  - Configure the payment method settings according to your business requirements.

- **In VTEX**:
  - **Payment Method Configuration**: Go to the VTEX admin panel and access the payment methods section `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` or type **payments** in the Admin search box and click on **Payments**.
  - in the **Payment Methods** screen, click on the ![**Add Payment Method**](https://i.imgur.com/j8KuDvn.png) button at the top right corner of the page.
  - Find the **Klarna Pay Over Time** option in the list of available payment methods and click on it.
  - In the **Add Payment Method** screen, select the **Provider** in the "Process with Provider" selection box.
  - Save the configuration. After that follow the steps detailed in the [Configuring the Payment Provider in VTEX](configuring-provider)
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

### Klarna Pay Now

Allows customers to pay for their purchase immediately via bank transfer. To configure Klarna Pay Now, follow these steps:

- **In Adyen**:

  - Enable **Klarna Pay Now** in your Adyen account.
  - Configure the payment method settings according to your business requirements.

- **In VTEX**:
  - **Payment Method Configuration**: Go to the VTEX admin panel and access the payment methods section `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` or type **payments** in the Admin search box and click on **Payments**.
  - in the **Payment Methods** screen, click on the ![**Add Payment Method**](https://i.imgur.com/j8KuDvn.png) button at the top right corner of the page.
  - Find the **Klarna** option in the list of available payment methods and click on it.
  - In the **Add Payment Method** screen, select the **Provider** in the "Process with Provider" selection box.
  - Save the configuration. After that follow the steps detailed in the [Configuring the Payment Provider in VTEX](configuring-provider)
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

### Klarna Pay Later

Allows customers to pay for their purchase in 30 days without interest. To configure Klarna Pay Later, follow these steps:

- **In Adyen**:

  - Enable **Klarna Pay Later** in your Adyen account.
  - Configure the payment method settings according to your business requirements.

- **In VTEX**:
  - **Payment Method Configuration**: Go to the VTEX admin panel and access the payment methods section `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` or type **payments** in the Admin search box and click on **Payments**.
  - in the **Payment Methods** screen, click on the ![**Add Payment Method**](https://i.imgur.com/j8KuDvn.png) button at the top right corner of the page.
  - Find the **Klarna Pay Later** option in the list of available payment methods and click on it.
  - In the **Add Payment Method** screen, select the **Provider** in the "Process with Provider" selection box.
  - Save the configuration. After that follow the steps detailed in the [Configuring the Payment Provider in VTEX](configuring-provider)
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

## Ideal

> **Important**: The important information about Ideal is that in the VTEX payment method configuration step, you will find two payment methods when you search for Ideal. Please select “**Ideal V3**". After that follow the steps detailed in the [Configuring the Payment Provider in VTEX](configuring-provider)

![IDeal](https://i.imgur.com/EjnvuSR.png)
![iDeal V3](https://i.imgur.com/3Qt1408.png)