---
sidebar_position: 3
title: Configuración de la tarjeta de crédito
---


Para procesar pagos con tarjeta de crédito en su tienda usando AdyenV3, además de realizar las configuraciones anteriores ya descritas en este artículo, debe abrir un ticket en [soporte de VTEX](https://help.vtex.com/pt/support), con la siguiente solicitud: "Revisión del proveedor - Añadir Endpoint SecureProxy - AdyenV3".

En el ticket, también debes enviar la URL que será autorizada por Adyen para realizar la transacción con tarjeta de crédito en tu tienda. El formato de la URL debe ser `https://{prefijo de la URL live}-checkout-live.adyenpayments.com`, donde la información "`{prefijo de la URL live}`" debe ser la misma que la introducida por usted en las configuraciones de Adyen en el Admin de VTEX (vea [URL Live](../adyen-configuration/live-url.md)).

> **Importante**: La dirección completa de la URL debe ser escrita solo con letras minúsculas, incluso si el "prefijo de la URL Live" configurado en el Admin de la VTEX tiene algunas letras mayúsculas. El prefijo de URL Live no es necesario en el entorno de prueba.