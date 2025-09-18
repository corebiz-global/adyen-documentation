---
sidebar_position: 1
---

# Adyen Connector V3

> **Attention:** This is the only official and valid documentation for the Adyen V3 connector configuration. To ensure a correct setup and avoid errors, please use only the instructions contained here and disregard other sources.

## Payment Provider Integration with VTEX

This documentation provides a comprehensive guide to integrate the Adyen V3 Payment provider with VTEX. It includes detailed steps for setup and configuration, as well as troubleshooting insights for both VTEX and Adyen.

## 1. Introduction

This guide aims to assist users in integrating the Adyen V3 Payment provider with the VTEX platform. By following the steps outlined, you can ensure a seamless payment processing experience for your customers.

## 2. Prerequisites

Before you begin, ensure you have the following:

- A VTEX account
- An Adyen account
- Access to VTEX admin panel
- API credentials from Adyen (see section 3.3 for instructions)

## 3. Adyen Configuration

To set up your Adyen account, follow the steps provided in the [Adyen Documentation](https://docs.adyen.com/account/). This involves creating an account, setting up your business details, and ensuring compliance with Adyen's requirements.

Also, to be able to provide a payment method to your customers, you must first enable it in your Adyen account. To enable a payment method, please follow the steps described in this [documentation](https://docs.adyen.com/payment-methods/add-payment-methods/).

### 3.1 Getting Company and Merchant account credentials

1. Access your [Customer Area](https://ca-test.adyen.com/ca/ca/overview/default.shtml) on Adyen.
2. From the left sidebar, locate and copy the details displayed above "Company." This represents your Company account.
3. In the section beneath "Company," find the Merchant Account intended for use (highlighted in white).
4. Copy and save this information to be used later in the set up process.

### 3.2 Live URL

1. Navigate to Developers > API URLs in the sidebar. Click the Copy button next to the Prefix field and save this information securely.

**Note**: This prefix is only required for the live (production) environment. For test transactions, this field should be left blank.

### 3.3 API Key Configuration

Generate and configure your API key as described in the [Adyen Platforms Documentation](https://docs.adyen.com/development-resources/api-credentials/). Ensure that you store your API key securely and use it for authenticating requests from VTEX to Adyen.

#### 3.3.1 Configure API Credential Screen Details

1. In your [Adyen Customer Area](https://ca-test.adyen.com/ca/ca/overview/default.shtml), in the sidebar menu click on **Developers** and, then, click **API credentials**;
2. Click on the button **Create new credential** on the right side of the screen;
3. Select **Web service user**
4. It will open a pop up with General Settings:
   1. Credential Type
      1. Username: This is your Adyen **Web Service User**. Store this ID as you will need it to open a ticket to Adyen later (e.g., `ws_123456@Company.YourCompany`).
      2. Description: A description for the API key
5. Under **Server Settings**, in the **Authentication** area, select **API Key** and then click on the **Generate API Key** button to create a new key and **store** this information safely.
6. Under **Client Settings**, in the **Authentication** area, select **Client Key** and click on the **Generate Client Key** button.

#### 3.3.1.1 Additional configurations

- **Add allowed origin**: Add all domains that will make client-side requests to Adyen. This includes your VTEX environment and your store's production domain. You must add each domain separately.
  - **Example (VTEX Environment)**: `https://{{account}}.myvtex.com`
  - **Example (Production Domain)**: `https://www.yourstore.com`
- **Permissions**: It is recommended to select all available permissions for the Web Service User to ensure full functionality and avoid potential issues with new features or payment methods.

![API Credentials](https://i.imgur.com/2C6J0FS.png)

7. After configuring all settings for the new credential, scroll to the bottom of the page and click **Save**.

> **Important:** Failing to save the changes after creating the credential will result in authentication errors (Error 401). Always ensure you save the new credential before proceeding. After saving, it is recommended to reopen the credential settings to confirm that all changes have been persisted correctly.

### 3.4 Configure the Webhook

The webhook configuration is needed so Adyen can send Adyen payment status updates to your VTEX account.

For further information, please refer to the Adyen Webhooks [documentation](https://docs.adyen.com/development-resources/webhooks/).

To configure the webhook, please follow the steps listed below:

1. Open your [Adyen Customer area](https://ca-test.adyen.com/ca/ca/overview/default.shtml);
2. In the left side menu, go to **Developers** and then **Webhooks**
3. Click on the button **“Create new webhook”** on the right side of the screen.
4. Select **Standard Webhook** and then click on **Add**.
5. Add some description to your Webhook in **General** > **Description**.
6. Go to the **Server configuration** section. In the **URL** field, paste the full webhook endpoint URL for your store. Use the following format, replacing `{{account}}` with your VTEX account name:
   `https://{{account}}.myvtex.com/_v3/api/webhook/notification`

![Server configuration](https://i.imgur.com/T9LXJK9.png)

7. Click in **Apply**
8. Go to the **Additional settings** section, select all checkboxes, and then click **Apply** in each one of the tabs.
9. Finally, click **Save changes**.

**Important**: It is required to configure one webhook for each store, so if you have more than one store, repeat the configuration steps for each one of them.

### 3.5 Request the “API PCI Payments role” for the Web Service User

For credit card payments to be processed correctly, the Web Service User requires a specific permission called **API PCI Payments role**. If this role is not enabled, transactions will fail with a 403 error.

This role must be requested from the Adyen support team by opening a ticket.

**How to open the support ticket:**

1.  Follow the instructions in the Adyen documentation to [reach Adyen support](https://docs.adyen.com/support/how-to-reach-adyen-support/).
2.  When creating the ticket, use the following details:
    *   **Subject**: `Enable API PCI Payments role`
    *   **Description**: Inform that you are configuring Adyen V3 on VTEX and provide the **Web Service User** you are using (this is the value from the **Username** field in the Adyen panel, e.g., `ws_123456@Company.YourCompany`).

This ID was created in section **3.3.1 Configure API Credential Screen Details**.

![User Role](https://i.imgur.com/yGKCsOH.png)

The username can also be found following the steps below:
Go to your [Adyen Customer Area](https://ca-live.adyen.com/);
In the left side menu, click on “Developers” and then “API credential”;
Select the username being used;
Under the “General Settings” section you will find the full Username, copy this information and share it with the Adyen Support team in the ticket you’re creating.

![Configure API Credential](https://i.imgur.com/X4EKrk0.png)
**Important**: This step applies to Test and Live environments. Every time a new credential is created, the permission will need to be granted for that specific username as well.

### 3.6 Activating Additional Data

To receive extra data in transaction details (such as the acquirer response), you must enable specific fields in your Adyen Customer Area. While some basic fields are enabled by default, the following are essential for reconciliation and support:

- **Acquirer**
- **Acquirer reference**: The NSU (Número Sequencial Único) of the transaction.
- **PSP reference**: The TID (Transaction ID), Adyen's unique reference for the transaction.

**To activate these fields:**

1.  In your **Adyen Customer Area**, go to **Developers** > **Additional Data**.
2.  In the **Transaction** section, check the essential fields listed above, plus any others you require.
3.  Click **Save Configuration**.

![Additional Data](https://i.imgur.com/0Q7HpuN.png)

It is important to say that if you need the data to be sent in Test and Production you have to do this same configuration in both environments.

## 4. VTEX Configuration

### 4.1 Configuring the Payment Provider in VTEX

Once you have completed all the steps listed in the **Adyen Configuration section** you should have all the information needed to be able to activate the Adyen V3 as a payment provider in VTEX.

The **VTEX Payments** module allows several payment providers (gateways, acquirers, sub-acquirers, orchestrators, PSPs, among others) to be configured in your store. This way, you can offer different payment methods and conditions to your customers.

When a purchase is made in your store and the customer makes a payment, data transmission between VTEX and the chosen provider occurs through communication protocols configured in the VTEX Admin.

The payment provider is responsible for processing the payment and returning the result to VTEX. The payment provider can also be responsible for the anti-fraud analysis of the transaction.

Ensure you have the necessary permissions and details of the Adyen payment gateway. To register Adyen gateway affiliation in VTEX, follow the steps below:

1. Go to the store's Admin page `https://{{account}}.myvtex.com/admin/`.
2. In the VTEX Admin, go to **Store Settings > Payments > Providers**, or type **Provedores** in the search bar at the top of the page.
3. On the providers screen, click the New provider button.
   ![Providers](https://i.imgur.com/mjkoQTi.png)
4. Look for **Adyen**.
   ![Adyen](https://i.imgur.com/kIo1GBC.png)
5. Select **AdyenV3** from the list of available payment providers.
6. In **App Key** field, fill in the name of your Merchant account you grabbed during step **3.1 Getting Company and Merchant account credentials**.
7. In the **App Token** field, paste the API Key generated in the step five of the section **3.3.1 Configure API Credential Screen Details**.
   ![API Credentials](https://i.imgur.com/Ih85Tus.png)
8. You may set an identification name filling the **Name** field in **Basic Information**.
9. If the store is not in production and you’re still running tests, In Payment Control you may Enable test mode.
10. In the **Live URL** field, fill in the URL prefix you’ve gotten in section **3.2 Live URL**. **Note:** This field should only be filled for production environments. For testing, it must be left blank.
11. In the **Company name**, place the name of the Company set in the Adyen account, the one you saved in **3.1 Getting Company and Merchant account credentials**.
12. **Live POS URL** will be only used for Sales APP.
13. In **Client key** field, fill in the Client key you got on Step 6 of **3.3.1 Configure API Credential Screen Details**.
    ![API Credentials](https://i.imgur.com/1W8F8FE.png)
14. Click **Save**.

![AdyenV3](https://i.imgur.com/uleOsY1.png)

For further information on the data to be filled in, please refer to the [Adyen API Credentials](https://docs.adyen.com/development-resources/api-credentials/) documentation.

If you need extra help, check the steps outlined in the [VTEX tutorial](https://help.vtex.com/tutorial/registering-gateway-affiliations--tutorials_444) or [VTEX Payments Track](https://help.vtex.com/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)

### Sandbox Mode (required)

Default: Production.

Sandbox Mode allows you to switch between the live (production) environment and the test (sandbox) environment of the Adyen connector. It is designed for validating integrations, simulating transactions, and ensuring that your payment flow configuration is correct before going live.

> **Important:** Sandbox Mode is only available for the e-commerce channel. It is not possible to use sandbox mode in other channels, such as the Sales App (POS).

When Sandbox Mode is enabled, all transactions are sent to Adyen's test environment, with no real financial impact. This enables you to test different payment scenarios, approvals, declines, and error flows, providing greater security and predictability before your store goes live.

When Sandbox Mode is **disabled**, the connector operates in live mode, meaning all transactions are processed in the production environment and have real financial impact. Make sure to use the correct credentials for each environment and to disable Sandbox Mode before processing real

### QR code expiration time to PIX

The QR code expiration time is the time in minutes that the QR code will remain valid. The default value is 10 minutes.

This setting is only applicable to PIX transactions.

the maximum value is 60 minutes and the minimum value is 10 minutes.

### 3DS Authentication Type (required)

Default: FULL 3DS Auhentication.

The Data-Only authentication method is a simplified version of 3D Secure (3DS) that allows transactions to be authenticated using risk data only, without requiring user interaction (such as entering a password or SMS code).

This method is subject to specific restrictions:

Allowed only for credit card transactions.

Limited to transactions in BRL (Brazilian Real) currency.

Using Data-Only can help reduce friction during checkout while still providing a level of fraud protection. However, because it does not involve active user authentication, liability for fraudulent transactions may remain with the merchant.

#### 3DS Authentication Types

- FULL 3DS Auhentication: Performs a complete 3D Secure flow, which includes customer interaction. This method shifts liability to the issuer and provides stronger fraud protection. Recommended for most use cases and required for regulatory compliance in many regions.

- Data Only (currency BRL): Sends risk data to the issuer without requiring customer interaction. This method is only allowed for credit card transactions in BRL (Brazilian Real).

![AdyenV3](https://i.imgur.com/iKndeJI.png)

### Origin URL (optional)

**The origin URL of the page where you are rendering the Component.**

By default, the connector can automatically retrieve this information.  
However, this field may be required in specific cases, such as triggering 3D Secure in franchise or marketplace accounts.

**Format:**

- **Maximum characters:** 80
- **Do not include** subdirectories or a trailing slash.
- **Example:** If you render the Component on `https://your-company.com/checkout/payment`, set to `https://your-company.com`.

### Capture Window

The capture window defines the time between payment authorization and the actual capture of the amount. By default, the payment connector performs immediate capture, meaning that as soon as the payment is authorized, it is automatically captured.
However, there are scenarios where delaying this capture may be necessary, allowing greater flexibility for internal processes such as stock verification, fraud checks, or specific business policies.

#### Types of Capture Windows

There are two available capture windows, allowing merchants to set different capture times for transactions made in digital and physical environments:
**Web Capture** – Applied to payments made in online stores (e-commerce).
**POS Capture** – Applied to transactions made in physical stores using the VTEX Sales App.
Merchants can configure a specific capture window for each type, ensuring greater control over payment flows across different sales channels.

#### Capture Window Options

For both Web and POS capture, the following options are available:
**Automatic Capture Immediately After Payment Authorization (default)** – The payment is captured as soon as authorization occurs.
**Auto Settle Delay: 7 days** – The payment is captured up to 7 days after authorization.
**Auto Settle Delay: 1 hour** – The capture is automatically processed 60 minutes after authorization.
**Auto Settle Delay: 2 hours** – The capture occurs 2 hours after authorization.
**Auto Settle Delay: 4 hours** – The capture occurs 4 hours after authorization.
**Auto Settle Delay: 8 hours** – The capture occurs 8 hours after authorization.
**Auto Settle Delay: 1 day** – The payment is captured 24 hours after authorization.
**Auto Settle Delay: 2 days** – The payment is captured 48 hours after authorization.
**Auto Settle Delay: 3 days** – The payment is captured 72 hours after authorization.
**Auto Settle Delay: 4 days** – The payment is captured 96 hours after authorization.

With this flexibility, merchants can optimize their payment processes according to business needs, differentiating strategies for online and in-store sales.

#### Configuring Auto Capture Windows (Web)

1. In VTEX Admin, navigate to Store Settings > Payments > Providers, or enter Providers in the top search bar.
2. On the Providers screen, select the Adyen provider.
3. In the details section, click Edit.
4. In the Auto Capture Settings field, set the desired capture time for payment methods with separate capture.

![Auto Capture Windows](https://i.imgur.com/jQhcYkf.png)

#### Configuring Auto Capture Windows for POS

1. In VTEX Admin, navigate to Store Settings > Payments > Providers, or enter Providers in the top search bar.
2. On the Providers screen, select the Adyen provider.
3. In the details section, click Edit.
4. In the POS Auto Capture Settings field, set the desired capture time for payment methods with separate capture.

![POS Auto Capture Windows](https://i.imgur.com/4tU6KUb.png)

### Boleto Expiration Days (required)

default: 6 days

This field defines the number of days after issuance before a boleto expires and can no longer be processed. Once a boleto reaches its expiration date, it becomes invalid and customers will need to generate a new payment slip. The value can be configured between 2 and 12 days, and it's important to consider that there is 1 additional day for bank clearing after payment. 
Shorter expiration periods (2-4 days) create urgency but may not provide sufficient time for customers to complete payment, especially considering weekends and holidays. Standard practice in Brazil typically ranges from 4 to 8 days for most transactions, offering a balance between urgency and convenience. Longer periods (8-12 days) are suitable for higher-value transactions or B2B payments where customers may need additional time for internal processing.
Boleto Bancário is a widely-used payment method in Brazil that generates a payment slip with a barcode. Customers can pay at banks, ATMs, online banking, or authorized payment locations. The expiration date ensures payment processing efficiency and reduces reconciliation complexity for merchants. Expired boletos cannot be paid and will require generating a new payment request, making it essential to consider the additional clearing day when setting the expiration period.

#### Configuring Boleto Expiration Days

1. In VTEX Admin, navigate to Store Settings > Payments > Providers, or enter Providers in the top search bar.
2. On the Providers screen, select the Adyen provider.
3. In the details section, click Edit.
4. In the Boleto Expiration Days field, set the desired expiration period for the boleto. Note that there is an additional processing day required for the payment to be sent to Adyen.

![boleto Expiration Days](https://i.imgur.com/mA3VmHy.png)

### 4.2 Configuring Payment Methods in VTEX

1. **Navigate to Payment Methods**: Go to the VTEX admin panel and access the payment methods section `https://{{account}}.myvtex.com/admin/pci-gateway/#/rules` or type **payments** in the Admin search box.
2. **Add Payment Conditions**: Click the ![**Add Payment Method**](https://i.imgur.com/j8KuDvn.png) button at the top right corner of the page to add a new Payment Condition.
3. **Set Payment Provider that will process the Conditions**: Configure the payment condition selecting the Provider created in the preivous step ![provider selection](https://i.imgur.com/xqMT3Ak.png).
4. **Set Payment Conditions** such as installment options as per your business requirements.
5. **Activate Payment Methods**: Ensure that the payment methods are correctly activated so they are visible to customers during checkout.

For detailed steps on configuring payment methods in VTEX, refer to [VTEX Payments Configuration](https://help.vtex.com/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3).

Also, remember that to be able to provide a payment method to your customer, first this must have been enabled in your Adyen account. The instructions on how to do it are in this [documentation](https://docs.adyen.com/payment-methods/add-payment-methods/).

### 4.3 Setting up Credit Card

In order to process credit card payments in your store using AdyenV3, besides performing the previous configurations already described in this article, you must open a ticket at [VTEX support](https://help.vtex.com/en/support), with the following request: "Provider review - Add Endpoint SecureProxy - AdyenV3".

In the ticket you must also send the URL that will be authorized by Adyen to carry out the credit card transaction in your store. The URL format must be `https://{live URL prefix}-checkout-live.adyenpayments.com`, where the information "`{live URL prefix}`" must be the same as that entered by you in the Adyen settings in the VTEX Admin.

→ The full URL address must be written in lowercase letters only, even if the "Live URL prefix" configured in the VTEX Admin has some capital letters.

→ The Live URL prefix is not necessary in the testing environment.

### 4.4 Specific Payment Methods Configurations

#### 4.4.1 Apple Pay

#### 4.4.1.1 Set up Apple Pay in the Adyen Customer Area

Also you will need to set up Apple Pay in your Adyen Customer Area in Payment Methods. To do that, follow the steps below:

1 - In your Adyen Customer Area, go to “Settings”<br/>
2 - Click on “Payment Methods”<br/>
3 - On the right side, click on “Request Payment Method”<br/>
4 - In the “Select Payment Method screen”, select “Apple Pay”
![SelectPaymentScreen](https://i.imgur.com/9TWDm36.png)
5 - Select the Merchant<br/>
![SelectMerchant](https://i.imgur.com/r5M1jNF.png)
6 - Setup the acquirer account<br/>
![SelectAcquirerAccount](https://i.imgur.com/NxE5Wlb.png)
7 - Select the certificate type: “Use Adyen Certificate”.<br/>
![UseAdyenCertificate](https://i.imgur.com/obApo0m.png)
8 - In the “Review and Finish” screen insert the full website domain<br/>
![FullWebsiteDomanin](https://i.imgur.com/r2taBn5.png)

#### 4.4.1.2 Validating the configuration

If the setup is correct, you should see “Apple Pay” when you search for it in the “Payment Methods” screen.
![PaymentMethods](https://i.imgur.com/ryeBp6m.png)

#### 4.4.1.3 Install the certificate

1 - Generate your certificate following the documentation. To generate the certificate, please refer to the following documentation: [Apple Pay Component | Adyen Docs](https://docs.adyen.com/payment-methods/apple-pay/web-component/?tab=adyen-certificate-live_1)

2 - Install the certificate into the VTEX server. To do that, do a POST using Postman or similar tool to the following endpoint: `https://{{PublicStoreDomain}}/.well-known/raw/apple-developer-merchantid-domain-association?persistent=true`

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" />](https://www.postman.com/suportecorebiz/adyen-apple-pay/collection/2y1c8n1/apple-pay?action=share&creator=41098825)

3 - Check if the certificate was correctly installed. To check if the certificate was correctly installed into VTEX servers, use the following url: `https://{{PublicStoreDomain}}/.well-known/apple-developer-merchantid-domain-association`

#### 4.4.2 Google Pay

To process payments with Google Pay on Adyen, set the product or merchant ID of the Google Account on the Adyen platform (it does not apply to the test environment).

1. Create and configure a merchant in Google Pay
2. Link this merchant to Adyen

In case this step is not done, the possible error the merchant will encounter: 
_OR_BIBED_11 This merchant has not completed registration to use Google Pay API.

For further information, please refer to [Google Pay Component](https://docs.adyen.com/payment-methods/google-pay/web-component/#before-you-go-live).

#### 4.4.3 Boletos (Bank Slips)

#### Configuring Bank Slips - Boleto

1. In VTEX Admin, navigate to Store Settings > Payments > Providers, or enter **Providers** in the top search bar.
2. On the Providers screen, click the **New Provider** button.
3. Use the search bar to find the provider responsible for processing the bank slip.
4. Complete the form fields using the data provided by your provider or bank.
5. Click **Save**.

#### Setting Up the Payment Condition

1. In VTEX Admin, go to Store Settings > Payment > Settings, or type **Settings** in the top search bar.
2. In the **Payment Conditions** tab, click the ![**Add Payment Method**](https://i.imgur.com/j8KuDvn.png) button.
3. Select **Boleto Bancário** in the Boleto section.
4. Enable the condition in the Status field.
5. In the **Process with provider** field, choose the provider you previously configured.
6. Optionally, configure special payment conditions as needed.
7. Click **Save**.

#### Configuring Boleto Expiration Days

1. In VTEX Admin, navigate to Store Settings > Payments > Providers, or enter Providers in the top search bar.
2. On the Providers screen, select the Adyen provider.
3. In the details section, click Edit.
4. In the Boleto Expiration Days field, set the desired expiration period for the boleto. Note that there is an additional processing day required for the payment to be sent to Adyen.

![boleto Expiration Days](https://i.imgur.com/mA3VmHy.png)

#### 4.4.4 Bancontact

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

#### 4.4.5 Klarna

#### 4.4.5.1 Klarna Pay Over Time

Allows customers to pay for their purchase in installments. To configure Klarna Pay Over Time, follow these steps:

- **In Adyen**:

  - Enable **Klarna Pay Over Time** in your Adyen account.
  - Configure the payment method settings according to your business requirements.

- **In VTEX**:
  - **Payment Method Configuration**: Go to the VTEX admin panel and access the payment methods section `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` or type **payments** in the Admin search box and click on **Payments**.
  - in the **Payment Methods** screen, click on the ![**Add Payment Method**](https://i.imgur.com/j8KuDvn.png) button at the top right corner of the page.
  - Find the **Klarna Pay Over Time** option in the list of available payment methods and click on it.
  - In the **Add Payment Method** screen, select the **Provider** in the "Process with Provider" selection box.
  - Save the configuration
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

#### 4.4.5.2 Klarna Pay Now

Allows customers to pay for their purchase immediately via bank transfer. To configure Klarna Pay Now, follow these steps:

- **In Adyen**:

  - Enable **Klarna Pay Now** in your Adyen account.
  - Configure the payment method settings according to your business requirements.

- **In VTEX**:
  - **Payment Method Configuration**: Go to the VTEX admin panel and access the payment methods section `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` or type **payments** in the Admin search box and click on **Payments**.
  - in the **Payment Methods** screen, click on the ![**Add Payment Method**](https://i.imgur.com/j8KuDvn.png) button at the top right corner of the page.
  - Find the **Klarna** option in the list of available payment methods and click on it.
  - In the **Add Payment Method** screen, select the **Provider** in the "Process with Provider" selection box.
  - Save the configuration
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

#### 4.4.5.3 Klarna Pay Later

Allows customers to pay for their purchase in 30 days without interest. To configure Klarna Pay Later, follow these steps:

- **In Adyen**:

  - Enable **Klarna Pay Later** in your Adyen account.
  - Configure the payment method settings according to your business requirements.

- **In VTEX**:
  - **Payment Method Configuration**: Go to the VTEX admin panel and access the payment methods section `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` or type **payments** in the Admin search box and click on **Payments**.
  - in the **Payment Methods** screen, click on the ![**Add Payment Method**](https://i.imgur.com/j8KuDvn.png) button at the top right corner of the page.
  - Find the **Klarna Pay Later** option in the list of available payment methods and click on it.
  - In the **Add Payment Method** screen, select the **Provider** in the "Process with Provider" selection box.
  - Save the configuration
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

#### 4.4.6 Ideal

The important information about Ideal is that in the VTEX payment method configuration step, you will find two payment methods when you search for Ideal. Please select “**Ideal V3**". After that follow the steps detailed in the Configuring the Payment Provider in VTEX

![IDeal](https://i.imgur.com/EjnvuSR.png)
![iDeal V3](https://i.imgur.com/3Qt1408.png)

### 4.5 Additional resources

- **Order Tracking**: Utilize VTEX's order tracking features to monitor payment status and order fulfillment [VTEX Order Tracking](https://help.vtex.com/tutorial/order-tracking--et0Ei7F3bjcrEmVAR2kKS).
- **Payment Provider Protocol**: Understand the integration protocol between VTEX and other companies that process payments [Payment Provider Protocol](https://help.vtex.com/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m).
- **Transaction Flow**: Learn about the flow of transactions in VTEX and how payments are processed [VTEX Payments Track - Transaction Flow](https://help.vtex.com/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y).

## 5. Understanding the Payment Flow

### **Authorizing**

The payment flow begins with the **Authorizing** stage, which occurs right after checkout. At this moment, the customer selects the payment method and confirms the purchase by clicking **"Complete Purchase."** VTEX then gathers all necessary information—such as card details, order information, and other credentials—and the payment connector securely sends it to Adyen. This transmission marks the beginning of essential communication between platforms, ensuring that all transaction elements are correctly recorded for the next steps.

### **Authorized**

At this stage, Adyen forwards the received information to issuing banks, which perform a series of verifications. They check the authenticity of the data, the availability of funds, and apply security protocols, such as **PCI DSS** standards, to prevent fraud. The success of this step is crucial for the transaction to proceed smoothly, ensuring that the payment can be securely processed.

### **Approved**

Once the issuing bank authorizes the transaction, it reaches the **Approved** stage. This means the payment has been officially accepted, and all security and validation criteria have been met. The customer is then redirected to the **"Order Placed"** page, confirming that the order has been registered. Additionally, the system may send email or SMS notifications to reinforce that the purchase was successfully completed.

### **Denied**

If the transaction is not authorized by the issuing bank, the payment is declined. This can happen for various reasons, such as insufficient funds, suspected fraud, incorrect details, or restrictions on the customer's card. When this occurs, the system immediately notifies the customer, suggesting they try a different payment method or contact their bank for further details.

### **Capture**

In the **Capture** stage, the previously authorized amount is either held or debited from the customer's account, depending on the configured capture period. This process can occur immediately or within the timeframe set for each payment method. Here, the pre-authorization is converted into a real financial commitment. The system monitors the transaction to ensure that the debited amount matches the exact purchase value, preventing discrepancies and ensuring the integrity of the payment flow.

### **Canceled**

A transaction can be canceled before or after capture for several reasons: at the customer's request (if they decide to cancel before payment confirmation), by the merchant (in cases of suspected fraud, order errors, or operational issues), or due to process failures (such as technical errors or irregularities at any stage).

When a transaction is canceled, the system prevents the amount from being debited or immediately reverses the authorization, ensuring the customer is not charged.

### **Settlement**

After capture, the payment moves to the **Settlement** stage, where the debited amount is prepared for transfer to the merchant. Settlement may occur immediately or only after the invoice is issued, depending on business rules. During this stage, financial reconciliations are carried out, and any applicable fees or discounts are applied, ensuring the final amount is accurate before the transfer.

### **Settling**

At this point, the settlement process is officially initiated. Adyen transfers the captured amount to the merchant's account, following all contractual and regulatory requirements. This stage involves a detailed verification of amounts, along with the correct application of commissions and deductions as outlined in the contract. This conclusion reinforces the reliability of the integrated system between VTEX and Adyen, providing security for both the merchant and the customer.

### **Settled**

In the final **Settled** stage, the payment settlement is successfully completed. All procedures—from initial authorization to the transfer of funds—have been correctly executed. As a result, the amount due to the merchant becomes available for use, effectively and securely finalizing the payment process. This conclusion reinforces the reliability of the integrated system between VTEX and Adyen, providing security for both the merchant and the customer.

### **Refunded**

If necessary, a captured transaction can go through the **Refunded** stage, where the debited amount is returned to the customer. The refund can be full or partial, depending on the merchant's policy and the type of purchase. This process can be initiated by either the customer or the merchant, typically in cases of product returns, service cancellations, or payment errors. Once the refund is processed, the customer receives the amount back through the same payment method used for the purchase.

![paymentflow](https://i.imgur.com/yWGGPkR.png)

## 6. Business Rules for Payment Methods

This document presents the business rules applicable to the different payment methods used on the platform. Each method follows a specific operational flow, with clear rules for authorization, capture, refund, and cancellation. The goal is to ensure a secure and efficient experience for customers and merchants.

### 6.1. Credit and Debit Cards

Payments with credit and debit cards involve multiple steps, from risk analysis to transaction settlement.

#### 6.1.1 Payment Flow

The customer selects a credit or debit card as the payment method at checkout.

The system performs a risk analysis to minimize fraud.

If approved, the payment is authorized by the card issuer.

The capture occurs according to the capture window configured in the connector.

The transaction is settled, and the order is updated in VTEX.

#### 6.1.2 Specific Rules

Authorization: Performed after risk analysis, which can be automatic or manual.

Capture: Can be immediate or occur within the period defined by the connector.

Refund: Allowed in partial or full amounts, depending on the acquirer’s rules.

Cancellation: Can only be done before capture; after that, a refund is required.

3DS (Secure Authentication): Some transactions may require authentication via 3D Secure for increased security. For debit cards, 3DS availability depends on the card network and issuer.

#### 6.1.1 Tokenization

With Adyen, you can securely store one or more payment details per shopper, with the shopper's consent. This allows you to offer subscription payments, automatic top-ups to shopper accounts, and give your shoppers a faster checkout experience by using their stored card.

We refer to these saved payment details as tokens and storing a shopper's payment details as tokenization.

The tokenization is applied in the following scenarios:

- Credit Card Payments
- 3DS Payments
- Subscriptions
- Change Orders

The tokenization process works as follows:

1. When the first credit card order is placed and the save card option is selected, the connector will inform Adyen to tokenize the card.
2. Adyen will then respond with a token that can be used for future transactions.
3. This token is stored in VTEX, so for any later transactions from the same user and credit card, only the CCV and the token are sent to Adyen, and the card information is not transmitted again.

### 6.2. Pix

Pix is an instant payment method that allows quick and direct transfers between bank accounts.

#### 6.2.1 Payment Flow

The customer selects Pix as the payment method at checkout.

The connector generates a dynamic QR Code and displays it to the customer.

The customer makes the payment via a banking app.

The transaction is confirmed within 10 seconds.

Adyen sends a webhook to the connector.

The connector approves the payment and updates VTEX, redirecting the customer to the Order Placed page.

#### 6.2.2 Specific Rules

Capture: Always immediate, with no configurable capture window.

Refund: Only full refunds are allowed; partial refunds are not possible.

Cancellation: A Pix payment cannot be canceled after completion.

QR Code Expiration: The code expires in 10 minutes. If the payment is made after this period, VTEX will not recognize the transaction, and the amount will be automatically refunded.

### 6.3. Bank Slip (Boleto Bancário)

The bank slip is a widely used option for higher-value purchases but depends on bank clearing for payment validation.

#### 6.3.1 Payment Flow

The customer selects Bank Slip at checkout.

The connector generates a PDF file with the bank slip.

The customer makes the payment via bank, lottery house, or banking app.

The clearing occurs within 1 to 3 business days.

Adyen confirms the payment and sends a webhook to the connector.

The connector approves the payment and updates VTEX.

#### 6.3.2 Specific Rules

Refund: Not allowed. If necessary, the merchant must manually refund via bank transfer.

Validity: Defined at the time of generation, ranging from 1 to 30 days, depending on the connector configuration and bank rules.

#### 6.4. Apple Pay

Apple Pay is a digital payment method that enables secure transactions through compatible Apple devices.

#### 6.4.1 Payment Flow

The customer selects Apple Pay as the payment method at checkout.

The app displays the customer’s available cards.

The customer authenticates the transaction via Face ID, Touch ID, or passcode.

The payment follows the rules of the selected card (credit or debit).

Adyen confirms the transaction and sends a webhook to the connector.

The connector approves the payment and updates VTEX.

#### 6.4.2 Specific Rules

Installments: Available only for credit cards.

Authentication: All transactions require biometric or passcode authentication for added security.

### 6.5. Klarna

Klarna offers various payment options, allowing customers to choose between immediate, installment, or deferred payments.

#### 6.5.1 Payment Flow

The customer selects Klarna as the payment method at checkout.

The customer chooses among the available payment options: Pay Now, Pay Over Time, or Pay Later.

The system redirects the customer to Klarna for authentication and transaction approval.

Klarna confirms the payment and sends a webhook to the connector.

The connector approves the payment and updates VTEX.

#### 6.5.2 Specific Rules

Pay Now: The full amount is immediately debited from the customer’s bank account or card.

Pay Over Time: The customer pays in multiple installments according to Klarna's options.

Pay Later: The customer has a set period to make the payment without additional interest (according to Klarna and merchant rules).

Authorization: Performed by Klarna and may be subject to a credit check.

Capture: Automatic after payment approval.

Refund: Allowed in partial or full amounts, depending on Klarna's rules.

Cancellation: Can only be done before capture; after that, a refund is required.

### 6.6. iDEAL

iDEAL is a widely used payment method in the Netherlands, enabling direct bank transfers.

#### 6.6.1 Payment Flow

The customer selects iDEAL as the payment method at checkout.

The system displays a list of participating banks for the customer to choose from.

The customer is redirected to their banking environment for authentication and payment approval.

The bank confirms the transaction, and iDEAL sends a webhook to the connector.

The connector approves the payment and updates VTEX.

#### 6.6.2 Specific Rules

Capture: Always immediate, with no configurable capture window.

Refund: Allowed in partial or full amounts, depending on the issuing bank's rules.

Cancellation: Not possible after payment completion.

Availability: Only for customers with bank accounts in Dutch banks that participate in iDEAL.

Confirmation Time: Typically occurs within seconds, ensuring fast transactions.

### 6.7. P24

P24 is a popular payment method in Poland, allowing direct bank transfers and fast payments.

#### 6.7.1 Payment Flow

The customer selects Przelewy24 (P24) at checkout.

The system displays a list of participating banks for the customer to choose from.

The customer is redirected to their banking environment for authentication and payment approval.

The bank confirms the transaction, and P24 sends a webhook to the connector.

The connector approves the payment and updates VTEX.

#### 6.7.2 Specific Rules

Capture: Always immediate, with no configurable capture window.

Refund: Allowed in partial or full amounts, depending on the issuing bank's rules.

Cancellation: Not possible after payment completion.

Availability: Only for customers with bank accounts in Polish banks that participate in P24.

Confirmation Time: Typically occurs within seconds, ensuring fast transactions.

## 7. Validating the Integration Configuration

### Validation Checklist

Before proceeding with testing, ensure that the following steps have been completed:

1. **Adyen Configuration**:
   - [ ] Adyen account is set up and verified.
   - [ ] API key is generated and configured in VTEX.
   - [ ] Payment methods are enabled and configured in the Adyen account.
2. **VTEX Configuration**:
   - [ ] AdyenV3 payment provider is registered in VTEX.
   - [ ] Payment methods are configured in VTEX admin.
   - [ ] Payment conditions are set up with the AdyenV3 provider.
3. **Testing Environment**:
   - [ ] Ensure that you are using a test environment to validate the integration.
   - [ ] Use test credit card details provided by Adyen for testing purposes.
4. **Order Processing**:
   - [ ] Place a test order in your VTEX store to verify that the payment process is working correctly.
5. **Transaction Status**:
   - [ ] Check the transaction status in both VTEX and Adyen admin panels to ensure that the payment is processed successfully.

### Testing

1. **Create a Test Order**: Add product(s) to the sopping cart and proceed to checkout in your VTEX store.
2. **Select one of the Payment Methods configured to use the Adyen provider**: During checkout, choose the appropriate payment method.
3. **Complete the Payment**: Process the payment and verify that the transaction is completed successfully.

### Checking the Transaction Status

To check the status of the test transaction, follow these steps:

1. **VTEX Admin Panel**: go to `https://{{account}}.myvtex.com/admin/` and navigate to the Orders section or search **orders** in the admin search box. ![orders](https://i.imgur.com/iOPV29h.png)
2. **Order Details**: Click on the **Order Id** to view the details of an Order.
3. **Payment Status**: In the order details, in the right corner, you can see the payment information for that Order. ![payment](https://i.imgur.com/Is2kZn2.png)
4. **Transaction History**: Click **See Details** to go to the **Transaction Details** page. There you can check the details for all the steps of the Payment Processment Flow ![transaction](https://i.imgur.com/B2vkZFB.png)
   - At the top of the page, you can see the **Payment Information**:
     ![payment information](https://i.imgur.com/g24ciyo.png)
   - **IMPORTANT** When a payment is Authorized, you can see the **TID**, which is the ID in the Adyen system for that transaction. In Adyen the **TID** is referred as **PSP Reference** and you can search for this ID to check the transaction details at `https://{{account}}.adyen.com/ca/ca/offers/showList.shtml`
     ![transactions](https://i.imgur.com/in37FYK.png)

## 8. Monitoring Payment Flow

### Following Payment Flow in VTEX Admin

1. **Access VTEX Admin Panel**: Log in to your VTEX admin account.
2. **Navigate to Orders**: Go to the 'Orders' section where you can see all customer orders.
3. **Order Details**: Click on a specific order to view detailed information.
4. **Payment Status**: In the order details, check the payment status which will show whether the payment is approved, pending, or failed.
5. **Transaction History**: For each order, you can view the transaction history, which includes timestamps and details of each payment event.

For more details, refer to the VTEX [Order Tracking](https://help.vtex.com/tutorial/order-tracking--et0Ei7F3bjcrEmVAR2kKS) documentation.

### Following Payment Flow in Adyen Account Admin

1. **Log in to Adyen**: Access your Adyen account admin panel.
2. **Navigate to Transactions**: Go to the 'Transactions' section to view all payment transactions.
3. **Transaction Details**: Click on a specific transaction to view detailed information, including payment method, amount, and status.
4. **Payment Lifecycle**: Check the lifecycle of the payment, which shows all the stages the payment went through from authorization to settlement.
5. **Reports and Analytics**: Use Adyen’s reporting tools to get insights into your payment processing, including successful payments, declines, and chargebacks.

For more information, refer to the Adyen [Customer Area Guide](https://docs.adyen.com/account/customer-area).

## 9. Troubleshooting

Issues with the Adyen Integration Plugin can be related to the one or more of following:

- Vtex Configuration Issues;
- Adyen configuration errors;
- Checkout Customizations;
- Other VTEX service availability errors;

If you encounter any issues during the integration process, refer to the following most common troubleshooting scenarios:

### 9.1 VTEX Configuration Issues

#### 9.1.1 Payment Method Not Appearing

Ensure that the payment method is correctly configured and activated in the VTEX admin panel.

#### 9.1.2 Payment Method Not Available

Check the payment method configuration in the VTEX admin panel and ensure that it is properly configured and enabled.

#### 9.1.3 Transactions Failing

Verify the API credentials and ensure that the AdyenV3 Payment Provider is properly configured in VTEX admin at `https://{{account}}.myvtex.com/admin/affiliations`.

#### 9.1.4 Sub-Accounts Configuration

If you are using sub-accounts in VTEX, ensure that the correct sub-account is selected in the VTEX admin panel and that the complete setup of the Provider and Payment Methods is done for the selected sub-account. Each sub-account can have different configurations and they do not inherit the configurations from the main VTEX account.

#### 9.1.5 Other Common VTEX Issues

Before opening a support ticket with VTEX, please test in a default VTEX Checkout with a standard product to ensure that the issue is not related to the store's customizations.

#### 9.1.6 Testing the purchase flow with a standard product

Choose a product for testing the Purchase Flow that does not require any special or specific configuration such as attachments, accessories, subscritions or kits. This will help to identify if the issue is related to the product configuration or the purchase and payment flow.

#### 9.1.7 Purchase with Two Cards Using SallesApp

To complete a purchase with two cards, you must first finalize the purchase with one card (choosing whether or not to print the payment receipt). This means releasing the terminal for the second transaction with the second card.

### 9.2 VTEX Checkout Customizations

- **Custom Scripts**: Disable any custom scripts or CSS that may be interfering with the payment process using the instructions provided in the next section.
- **Third-party Plugins**: Check for any third-party plugins or integrations that may be causing conflicts with the payment provider.
- **Google Tag Manager**: Ensure that Google Tag Manager or other tracking scripts are not blocking the payment process.

#### 9.2.1 How to test the Payment Flow using the default VTEX Checkout

1. Verify which checkout version is being used in the store.
   - In VTEX Admin search for **checkout** in the search bar.
     - if you only find **Checkout** in the search, your store is using **checkout-ui-settings**
       ![checkout-ui-settings](https://i.imgur.com/YRuIrTg.png)
     - if you find **Checkout** and **Checkout UI Custom**, your store is using **checkout-ui-custom**
       ![checkout-ui](https://i.imgur.com/h0McJSx.png)
2. Disabling Customizations in Checkout for Testing:
   2.a For Stores using **checkout-ui-settings**:

   - Go to `https://{{account}}.myvtex.com/admin/portal/#/sites` or click on the **Checkout** option in the search results list
     ![sites](https://i.imgur.com/9VVU0Hx.png)
   - In the **Checkout** screen, click on the blue gear icon ![settings](https://i.imgur.com/D2PTBuq.png) in the Checkout that is being used by your store to access the **Checkout configurations**
   - In the **Checkout configurations** screen, click on the **Code** or **Código** at the top of the page
   - In the following page look for the file **checkout6-custom.js** file in the right side list
     ![checkout6-custom](https://i.imgur.com/k1Se9js.png)
   - Click on the **checkout6-custom.js** file to open it
     ![checkout6-custom-file](https://i.imgur.com/r2I33l5.png)
   - Copy the content of the file if there is any customization and save it in a safe place
   - Delete all the content of the file and click **Save** to remove any customization
   - Repeat the same process for the file **checkout6-custom.css**
   - Test the checkout process in the store

     2.b For Stores using **checkout-ui-custom**:

   - Go to `https://{{account}}.myvtex.com/admin/vtex-checkout-ui-custom/` or click on the **Checkout UI Custom** option in the search results list
     ![checkout-ui-custom](https://i.imgur.com/oIR1jF7.png)
   - In the **Checkout UI Custom** screen, click on the **Javascript** tab ![settings](https://i.imgur.com/Q4NM7KN.png)
   - In the **Javascript** tab, go to the bottom of the page and deactivate the javascript using the toggle  
     ![toggle](https://i.imgur.com/a4ZByOz.png)
   - Repeat the same process for the **CSS** tab
   - Next, click **PUBLISH** ![publish](https://i.imgur.com/OxXaqUK.png) at the top of the page to reflect the changes in the store
   - Test the checkout process in the store

#### 9.3 Other VTEX Service Availability Errors

- **Service Status**: Check the VTEX status page for any ongoing issues or maintenance that may be affecting the payment processing in their Statuspage [VTEX Status](https://status.vtex.com/). For instructions on how to check the status of VTEX services, refer to the [VTEX Help Center Documentation](https://help.vtex.com/pt/tutorial/pagina-de-status-da-vtex--gPhqDn9IQ3c67wbJEX3JJ).

### 9.4 Adyen Configuration Issues

#### 9.4.1 Invalid API Key

Regenerate the API key in the Adyen admin panel and update it in VTEX.

#### 9.4.2 Payment Processing Errors

Check the Adyen troubleshooting guide for common issues and solutions.

#### 9.4.3 Error 403

There are different scenarios that can generate a 403 error.

#### Scenario 1) Live URL set for test transactions

For test transactions don’t set the live url, otherwise you may face an error 403. The live url should be set only for production transactions.

#### Scenario 2) Wrong Merchant name

Make sure the Merchant Account filled in VTEX is the exact same as seen in your Adyen Customer Area. It is important to follow even the capital letters, spaces and other special characters

#### Scenario 3) Ticket to Adyen Support was not opened yet or the enablement done was not to the correct username

Make sure you open the ticket to the Adyen support following the instruction we provided in step xx and that you inform the correct username. Remember that if for some reason new credentials are created, the permission needs to be granted by the Adyen team again.

## 10. References

- [VTEX Registering Gateway Affiliations](https://help.vtex.com/tutorial/registering-gateway-affiliations--tutorials_444)
- [VTEX Payments Track](https://help.vtex.com/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)
- [VTEX Payments Configuration](https://help.vtex.com/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3)
- [VTEX Order Tracking](https://help.vtex.com/tutorial/order-tracking--et0Ei7F3bjcrEmVAR2kKS)
- [Payment Provider Protocol](https://help.vtex.com/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m)
- [Adyen Documentation](https://docs.adyen.com/)
- [Adyen Platforms Documentation](https://docs.adyen.com/platforms/)
- [Adyen Customer Area Guide](https://docs.adyen.com/account/customer-area)

## 11. Feedback

We welcome your feedback on this documentation. If you have any suggestions or comments, please feel free to reach out to us through the form below.

[Feedback Form](https://forms.gle/PffFimdjU15Hte8N7)

## 12. Contact Adyen Support

If you were not able to solve the problem you’re facing reading the documentation, please reach out to Adyen’s Support team. To open a ticket to Adyen, please follow the steps found in the following documentation:

### How do I reach Adyen support?

- In the “Subject” field we suggest that you place the following: “Adyen Conector V3 VTEX + The topic related to your issue”. In the “Description” field please paste the following template and fill each one of the fields accordingly for a quicker response:

#### Adyen Credentials:

[CompanyAccount, Merchant Account]

#### Description of the issue:

[Text describing the behavior]

#### Vtex Account details:

[Vtex Account name and SubAccount (if any) name]

#### Environment

[Test/ Live/ Both]

#### Capture configuration

[Type of capture configured in VTEX: Automatic Capture Immediately After payment Authorization/ Auto Settle Delay: 7 days]

#### Plugin Version

[Plugin version being used, e.g. v2.24.4]

#### Vtex IDs

[Vtex Order ID, Vtex Transaction ID]

#### TID/ (Adyen)PSP Reference

[Adyen Payment/Offer information]

#### Adyen API calls

[Adyen API requests and Adyen API responses]

#### Adyen Webhooks

[Authorization and Capture Webhook logs]

#### In the attachments you may upload any of the following:

- Vtex Transaction logs
- Checkout Behavior video
- Error Prints

## 13. Previous Documentation

### Adyen's Integration for VTEX

Adyen is a global payment company that offers a platform for processing online and in-store payments. Vtex is an e-commerce platform that allows businesses to build and manage online stores. Integrating Adyen with Vtex allows businesses using the Vtex platform to process payments through Adyen's platform, providing a seamless checkout experience for customers and streamlining the payment process for the business.

### Features

| **Payments Features**                                                                   | Support |
|---------------------------------------------------------------------------------------| ------- |
| Live/Sandbox environment                                                                | Yes     |
| Redirect 3DS2                                                                           | Yes     |
| Risk management for Card Methods                                                        | Yes     |
| Split Payment                                                                           | No      |
| **Wallet payment methods**                                                              |         |
| [Google Pay](https://docs.adyen.com/payment-methods/google-pay)                         | Yes     |
| [Apple Pay](https://docs.adyen.com/payment-methods/apple-pay)                           | Yes     |
| **One-click payment methods**                                                           |         |
| [BLIK](https://docs.adyen.com/payment-methods/blik)                                     | Yes     |
| [Klarna](https://docs.adyen.com/payment-methods/klarna)                                 | Yes     |
| [iDeal](https://docs.adyen.com/payment-methods/ideal)                                   | Yes     |
| **Card payment methods**                                                                |         |
| [Visa](https://docs.adyen.com/payment-methods/cards)                                    | Yes     |
| [American Express](https://docs.adyen.com/payment-methods/cards)                        | Yes     |
| [Diners](https://docs.adyen.com/payment-methods/cards)                                  | Yes     |
| [Elo](https://docs.adyen.com/payment-methods/cards)                                     | Yes     |
| [Hipercard](https://docs.adyen.com/payment-methods/cards)                               | Yes     |
| [Mastercard](https://docs.adyen.com/payment-methods/cards)                              | Yes     |
| [Mastercard Debit](https://docs.adyen.com/payment-methods/cards)                        | Yes     |
| [JCB](https://docs.adyen.com/payment-methods/cards)                                     | Yes     |
| [Discover](https://docs.adyen.com/payment-methods/cards)                                | Yes     |
| **Portugal payment methods**                                                            |         |
| [Multibanco](https://docs.adyen.com/payment-methods/multibanco)                         | Yes     |
| **Brazilian payment methods**                                                           |         |
| [Boleto (Bank Invoice)](https://docs.adyen.com/payment-methods/boleto-bancario)         | Yes     |
| [Pix](https://docs.adyen.com/payment-methods/pix)                                       | Yes     |
| [**Order management**](https://docs.adyen.com/issuing/payment-stages#page-introduction) |         |
| [Authorisation](https://docs.adyen.com/issuing/payment-stages#authorisation)            | Yes     |
| [Capture](https://docs.adyen.com/issuing/payment-stages#captures)                       | Yes     |
| [Refund](https://docs.adyen.com/issuing/payment-stages#refunds)                         | Yes     |
| [Partial Refund](https://docs.adyen.com/issuing/payment-stages#refunds)                 | Yes     |
| **Others**                                                                              |         |
| Point of Sale                                                                           | Yes     |