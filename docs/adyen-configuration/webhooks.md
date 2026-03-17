---
sidebar_position: 4
title: Webhooks
---

The webhook configuration is needed so Adyen can send Adyen payment status updates to your VTEX account.

For further information, please refer to the Adyen Webhooks [documentation](https://docs.adyen.com/development-resources/webhooks/).

To configure the webhook, please follow the steps listed below:

1. Open your [Adyen Customer area](https://ca-test.adyen.com/ca/ca/overview/default.shtml);
2. In the left side menu, go to **Developers** and then **Webhooks**.
3. Click on the button **“Create new webhook”** on the right side of the screen.

![Create new webhook](/img/webhooks-1.png)

4. Click on **Add** for the Standard Webhook section.

![Add Standard Webhook](/img/webhooks-2.png)

## General

Set a description that helps you to identify the merchant account and VTEX account. In **Merchant Accounts** field, set **“Include only specific merchant accounts”**. A new section is going to appear, select the desired merchant account.

![General Settings](/img/webhooks-3.png)

## Server Configuration

In **Server configuration** set the URL like this, replacing `{{accountName}}` with your VTEX account name:

`https://{{accountName}}.myvtex.com/_v3/api/webhook/notification`

![Server Configuration](/img/webhooks-4.png)

## Security

Select **“No Authentication”**.

![Security Settings](/img/webhooks-5.png)

## Events

Check the following flags: `AUTHORISATION` / `CANCELLATION` / `CANCEL_OR_REFUND` / `CAPTURE` / `CAPTURE_FAILED` / `MANUAL_REVIEW_REJECT` / `MANUAL_REVIEW_ACCEPT` / `OFFER_CLOSED` / `REFUND` / `REFUND_FAILED`

![Events Settings](/img/webhooks-6.png)

## Additional settings

Check all flags in every section.

![Additional settings](/img/webhooks-7.png)

## Testing the webhook

Click on **‘Test configuration’**.

![Test configuration](/img/webhooks-8.png)

Select the merchant account and `AUTHORISATION` event, then click on **‘Test’**.

![Select test account and event](/img/webhooks-9.png)

### Results comparison

If you receive a **‘200 - OK’** response, your webhook is almost done. If you didn’t receive **‘200 - OK’**, it means something is wrong in the configuration. Check all steps again, mainly your webhook URL set in the Server Configuration section.

<div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', textAlign: 'center' }}>
  <div style={{ flex: 1 }}>
    <img src="/img/webhooks-10.png" alt="Success" />
    <p><strong>Success:</strong> 200 OK</p>
  </div>
  <div style={{ flex: 1 }}>
    <img src="/img/webhooks-11.png" alt="Fail" />
    <p><strong>Fail:</strong> Configuration error</p>
  </div>
</div>

## Save Configuration

Finally, click on **“Save configuration”**.

![Save Configuration](/img/webhooks-12.png)

> **Important**: It is required to configure one webhook for each store, so if you have more than one store, repeat the configuration steps for each one of them.
