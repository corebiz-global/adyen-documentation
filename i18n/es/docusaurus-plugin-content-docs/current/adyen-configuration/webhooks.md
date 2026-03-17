---
sidebar_position: 4
title: Webhooks
---

La configuración del webhook es necesaria para que Adyen pueda enviar actualizaciones de estado de pago a su cuenta VTEX.

Para obtener más información, consulte la [documentación de Webhooks de Adyen](https://docs.adyen.com/development-resources/webhooks/).

Para configurar el webhook, siga los pasos que se enumeran a continuación:

1. Abra su [Área del Cliente de Adyen](https://ca-test.adyen.com/ca/ca/overview/default.shtml);
2. En el menú lateral izquierdo, vaya a **Developers** y luego a **Webhooks**.
3. Haga clic en el botón **“Create new webhook”** en el lado derecho de la pantalla.

![Create new webhook](/img/webhooks-1.png)

4. Haga clic en **Add** para la sección de **Standard Webhook**.

![Add Standard Webhook](/img/webhooks-2.png)

## General

Establezca una descripción que le ayude a identificar la cuenta merchant y la cuenta VTEX. En el campo **Merchant Accounts**, seleccione **“Include only specific merchant accounts”**. Aparecerá una nueva sección, seleccione la cuenta merchant deseada.

![General Settings](/img/webhooks-3.png)

## Configuración del servidor (Server Configuration)

En **Server configuration**, establezca la URL de la siguiente manera, reemplazando `{{accountName}}` con el nombre de su cuenta VTEX:

`https://{{accountName}}.myvtex.com/_v3/api/webhook/notification`

![Server Configuration](/img/webhooks-4.png)

## Seguridad (Security)

Seleccione **“No Authentication”**.

![Security Settings](/img/webhooks-5.png)

## Eventos (Events)

Marque las siguientes flags: `AUTHORISATION` / `CANCELLATION` / `CANCEL_OR_REFUND` / `CAPTURE` / `CAPTURE_FAILED` / `MANUAL_REVIEW_REJECT` / `MANUAL_REVIEW_ACCEPT` / `OFFER_CLOSED` / `REFUND` / `REFUND_FAILED`

![Events Settings](/img/webhooks-6.png)

## Configuración adicional (Additional settings)

Marque todas las flags en cada sección.

![Additional settings](/img/webhooks-7.png)

## Probando el webhook

Haga clic en **‘Test configuration’**.

![Test configuration](/img/webhooks-8.png)

Seleccione la cuenta merchant y el evento `AUTHORISATION`, luego haga clic en **‘Test’**.

![Select test account and event](/img/webhooks-9.png)

### Comparación de resultados

Si recibe una respuesta **‘200 - OK’**, su webhook está casi listo. Si no recibió **‘200 - OK’**, significa que algo anda mal en la configuración. Verifique todos los pasos nuevamente, especialmente la URL del webhook definida en la sección de Configuração do Servidor.

<div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', textAlign: 'center' }}>
  <div style={{ flex: 1 }}>
    <img src="/img/webhooks-10.png" alt="Éxito" />
    <p><strong>Éxito:</strong> 200 OK</p>
  </div>
  <div style={{ flex: 1 }}>
    <img src="/img/webhooks-11.png" alt="Fallo" />
    <p><strong>Fallo:</strong> Error de configuración</p>
  </div>
</div>

## Guardar configuración (Save Configuration)

Finalmente, haga clic en **“Save configuration”**.

![Save Configuration](/img/webhooks-12.png)

> **Importante**: Es necesario configurar un webhook para cada tienda. Por lo tanto, si tiene más de una tienda, repita los pasos de configuración para cada una.
