---
sidebar_position: 4
title: Webhooks
---


La configuración del webhook es necesaria para que Adyen pueda enviar actualizaciones de estado de pago de Adyen a su cuenta VTEX.

Para más información, consulte la [documentación de Webhooks de Adyen](https://docs.adyen.com/development-resources/webhooks/).

Para configurar el webhook, siga los pasos que se enumeran a continuación:

1. Abra su [área de cliente de Adyen](https://ca-test.adyen.com/ca/ca/overview/default.shtml);
2. En el menú de la izquierda, ve a **Desarrolladores** y luego **Webhooks**
3. Haga clic en el botón **"Crear nuevo webhook"** en el lado derecho de la pantalla.
4. Seleccione **Webhook por defecto** y luego haga clic en **Agregar**.
5. Añade una descripción a tu webhook en **General** > **Descripción**.
6. Vaya a la sección de **configuración del servidor**. En el campo **URL**, pegue la URL completa del endpoint del webhook para su tienda. Utilice el siguiente formato, sustituyendo `{{account}}` por el nombre de su cuenta VTEX:
   `https://{{account}}.myvtex.com/_v3/api/webhook/notification`

![Configuración del servidor](https://i.imgur.com/T9LXJK9.png)

7. Haga clic en **Aplicar**
8. Vaya a la sección de **Ajustes adicionales**, seleccione todas las casillas y haga clic en **Aplicar** en cada una de las pestañas.
9. Por último, haga clic en **Guardar cambios**.

> **Importante**: Es necesario configurar un webhook para cada tienda, así que si tienes más de una tienda, repite los pasos de configuración para cada una.