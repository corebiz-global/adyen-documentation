---
sidebar_position: 4
title: Webhooks
---


### Configure the Webhook

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
