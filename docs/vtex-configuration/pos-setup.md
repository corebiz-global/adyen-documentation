---
sidebar_position: 5
title: POS (Point of Sale) Setup
---

The Adyen connector for VTEX supports **Point of Sale (POS)** transactions, allowing for a seamless integration between your physical stores and the VTEX platform.

## Prerequisites

Before configuring POS in VTEX, ensure that:
1. You have an Adyen account with POS enabled.
2. Your POS terminals are registered and assigned to the correct stores in the Adyen Customer Area.
3. You have the **Live POS URL** if you are in a production environment.

## Configuring the POS Provider in VTEX

1. In the VTEX Admin, go to **Store Settings > Payments > Providers**.
2. Edit your **AdyenV3** provider.
3. In the **Live POS URL** field, enter the terminal API endpoint provided by Adyen (e.g., `https://terminal-api-live.adyen.com`).
4. Click **Save**.

## Payment Conditions for POS

To offer POS as a payment option:
1. Go to **Store Settings > Payment > Settings**.
2. In the **Payment Conditions** tab, click the **+** button.
3. Search for the specific POS payment methods (e.g., **Venda Direta Debito**, **Venda Direta Credito**, or **Pix POS**).
4. Associate them with the **AdyenV3** provider.
5. Set the status to **Active** and click **Save**.

## Terminal Selection Logic

When a customer selects a POS payment method at checkout (often used in "Infinite Aisle" or Sales App scenarios), the connector needs to know which terminal should process the payment.

### How it works:

1. **Terminal Discovery**: The connector automatically fetches all available terminals and stores linked to your Adyen account.
2. **User Selection**: If the terminal is not pre-configured or recognized, the connector will redirect the user to a selection screen (JSON Schema form).
3. **Selection Form**:
   - **Store**: The user selects the physical store where the transaction is taking place.
   - **Terminal**: The user selects the specific terminal (by Serial Number/POIID) from the list of terminals assigned to that store.
4. **Processing**: Once selected, the connector sends the payment request directly to the chosen terminal.

> **Technical Note**: The list of terminals and stores is fetched in real-time from Adyen's Management API. In accounts with a large number of stores/terminals, this process may take a few seconds as the connector iterates through all paginated results to ensure the list is complete.

## Troubleshooting POS

- **Terminal Not Found**: Ensure the terminal is online and correctly assigned to a store in the Adyen Customer Area.
- **Timeout**: If the terminal selection list takes too long to load, verify your Adyen API Key permissions and the number of stores/terminals in your account.
- **Payment Denied on Terminal**: Check the terminal's connection and ensure the payment method is enabled for that specific terminal.
