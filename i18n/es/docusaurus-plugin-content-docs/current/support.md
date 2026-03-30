---
sidebar_position: 12
title: Soporte
---


## Cómo contactar con el Soporte de Adyen

Si no ha podido resolver el problema que experimenta leyendo la documentación, póngase en contacto con el equipo de Soporte de Adyen. Siga los pasos a continuación para abrir un ticket con Adyen:

> **Importante**: Recuerde incluir los archivos adjuntos enumerados debajo de la plantilla, ya que son esenciales para una resolución rápida.

1.  **Prepare los detalles de su ticket**: Use la siguiente plantilla para recopilar toda la información necesaria para una respuesta más rápida:

    ```
    Asunto: Adyen V3 VTEX Connector + [Tema relacionado con su problema]

    Descripción:
    Credenciales de Adyen: [Su Company Account, Su Merchant Account] (Consulte: [Obtención de credenciales](./adyen-configuration/getting-credentials.md))
    Descripción del problema: [Texto que describe el comportamiento]
    Detalles de la cuenta VTEX: [Nombre de su cuenta VTEX y nombre de la subcuenta (si hay)]
    Entorno: [Prueba/ Producción/ Ambos]
    Configuración de captura: [Tipo de captura configurada en VTEX: Captura automática inmediatamente después de la autorización del pago/ Retraso de liquidación automática: 7 días]
    Versión del complemento: [Versión del complemento en uso, ej: v2.24.4]
    IDs de VTEX: [ID de pedido de VTEX, ID de transacción de VTEX] (Consulte: [Monitoreo](./monitoring.md))
    TID / Referencia PSP (Adyen): [Información de pago/oferta de Adyen] (Consulte: [Monitoreo](./monitoring.md))
    Llamadas a la API de Adyen: [Solicitudes y respuestas de la API de Adyen]
    Webhooks de Adyen: [Logs de webhooks de autorización y captura] (Consulte: [Webhooks](./adyen-configuration/webhooks.md))

    Adjuntos:
    - Logs de transacciones de VTEX
    - Video del comportamiento del pago
    - Capturas de pantalla del error
    - Logs de red (archivo .HAR)
    - Información de depuración del navegador (sesión JAM)
    ```

    > **Nota sobre los archivos adjuntos**:
    > - Aprenda [cómo generar un archivo HAR](https://help.vtex.com/es/tutorial/como-generar-archivo-har--tutorials_4318).
    > - Aprenda [cómo crear una sesión JAM](https://jam.dev/).

2.  **Abrir el ticket de soporte**: envíe un correo electrónico a support@adyen.com.
