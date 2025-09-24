---
sidebar_position: 3
title: Credit Card Setup
---


In order to process credit card payments in your store using AdyenV3, besides performing the previous configurations already described in this article, you must open a ticket at [VTEX support](https://help.vtex.com/en/support), with the following request: "Provider review - Add Endpoint SecureProxy - AdyenV3".

In the ticket you must also send the URL that will be authorized by Adyen to carry out the credit card transaction in your store. The URL format must be `https://{live URL prefix}-checkout-live.adyenpayments.com`, where the information "`{live URL prefix}`" must be the same as that entered by you in the Adyen settings in the VTEX Admin (see [Live URL](../adyen-configuration/live-url.md)).

> **Important**: The full URL address must be written in lowercase letters only, even if the "Live URL prefix" configured in the VTEX Admin has some capital letters. The Live URL prefix is not necessary in the testing environment.
