---
sidebar_position: 5
title: Papel PCI
---


Para que los pagos con tarjeta de crédito se procesen correctamente, el usuario del servicio web requiere un permiso específico llamado **papel de pago API PCI**. Si este rol no está habilitado, las transacciones fallarán con un error 403.

Este papel debe ser solicitado al equipo de soporte de Adyen abriendo un ticket.

**Cómo abrir el ticket de soporte:**

1.  Siga las instrucciones en la documentación de Adyen para [ponerse en contacto con el soporte de Adyen](https://docs.adyen.com/support/how-to-reach-adyen-support/).
2.  Al crear el ticket, use los siguientes detalles:
    *   **Tema**: `Habilitar papel de pagos PCI API`
    *   **Descripción**: Informe que está configurando Adyen V3 en VTEX y proporcione el **Usuario de servicio web** que está usando (este es el valor del campo **Nombre de usuario** en el panel de Adyen, por ejemplo, `ws_123456@Company.YourCompany`).

Este es el mismo usuario creado en el paso de [Clave API](./api-key.md).

![Papel del usuario](https://i.imgur.com/yGKCsOH.png)

El nombre de usuario también se puede encontrar siguiendo los siguientes pasos:

Vaya a su [Área de cliente de Adyen](https://ca-live.adyen.com/);
En el menú de la izquierda, haga clic en "Desarrolladores" y luego en "Credencial de API";
Seleccione el nombre de usuario que se está utilizando;
En la sección "Configuración general", encontrará el nombre de usuario completo, copie esta información y compártala con el equipo de soporte de Adyen en el ticket que está creando.

![Configurar Credencial de API](https://i.imgur.com/X4EKrk0.png)
> **Importante**: Este paso se aplica a los entornos de prueba y producción. Cada vez que se crea una nueva credencial, el permiso debe ser concedido a ese nombre de usuario específico también.