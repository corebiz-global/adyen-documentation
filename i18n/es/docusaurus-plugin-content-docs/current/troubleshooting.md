---
sidebar_position: 9
title: Solución de problemas
---


Los problemas con el plugin de integración de Adyen pueden estar relacionados con uno o más de los siguientes:

- Problemas de configuración de Vtex;
- Errores de configuración de Adyen;
- Personalización del checkout;
- Otros errores de disponibilidad del servicio VTEX;

Si encuentra algún problema durante el proceso de integración, consulte los siguientes escenarios de solución de problemas más comunes:

## Problemas de configuración VTEX

### Método de pago no aparece

Asegúrese de que el método de pago está correctamente configurado y activado en el panel de administración de VTEX. (Vea: [Configurando métodos de pago](vtex-configuration/payment-methods))

### Método de pago no disponible

Compruebe la configuración del método de pago en el panel de administración de VTEX y asegúrese de que está correctamente configurado y habilitado. (Vea: [Configurando métodos de pago](vtex-configuration/payment-methods))

### Falla en las transacciones

Compruebe las credenciales de la API y asegúrese de que el proveedor de pagos AdyenV3 está correctamente configurado en el administrador de VTEX en `https://{{account}}.myvtex.com/admin/affiliations`. (Vea: [Configurando el proveedor](vtex-configuration/configuring-provider) y [Configuración de la clave API](adyen-configuration/api-key))

### Configuración de subcuentas

Si está usando subcuentas en VTEX, asegúrese de que la subcuenta correcta esté seleccionada en el panel de administración de VTEX y que la configuración completa del proveedor y los métodos de pago se hagan para la subcuenta seleccionada. Cada subcuenta puede tener diferentes configuraciones y no heredan las configuraciones de la cuenta principal de VTEX.

### Otros problemas comunes de VTEX

Antes de abrir un ticket de soporte con VTEX, por favor, prueba en una caja estándar de VTEX con un producto estándar para asegurar que el problema no está relacionado con las personalizaciones de la tienda.

### Probando el flujo de compra con un producto estándar

Elija un producto para probar el flujo de compra que no requiere ninguna configuración especial o específica, como archivos adjuntos, accesorios, suscripciones o kits. Esto ayudará a identificar si el problema está relacionado con la configuración del producto o el flujo de compra y pago.

### Compra con dos tarjetas usando SallesApp

Para completar una compra con dos tarjetas, primero debe finalizar la compra con una tarjeta (eligiendo si desea o no imprimir el recibo de pago). Esto significa liberar el terminal para la segunda transacción con la segunda tarjeta.

## Personalizaciones de Checkout VTEX

- **Scripts personalizados**: desactive cualquier script personalizado o CSS que pueda interferir con el proceso de pago usando las instrucciones proporcionadas en la siguiente sección.
- **Plugins de terceros**: comprueba si hay plugins o integraciones de terceros que puedan estar causando conflictos con el proveedor de pagos.
- **Google Tag Manager**: Asegúrate de que Google Tag Manager u otros scripts de rastreo no bloqueen el proceso de pago.

### Cómo probar el flujo de pago usando la salida estándar de VTEX

1. Comprueba qué versión de pago se está usando en la tienda.
   - En VTEX Admin, busca **checkout** en la barra de búsqueda.
     - si solo encuentras **Checkout** en la búsqueda, tu tienda está usando **checkout-ui-settings**
       ![checkout-ui-settings](https://i.imgur.com/YRuIrTg.png)
     - si encuentras **Checkout** y **Checkout UI Custom**, tu tienda está usando **checkout-ui-custom**
       ![checkout-ui](https://i.imgur.com/h0McJSx.png)
2. Desactivación de personalizaciones no Checkout para prueba:
   2.a Para Tiendas usando **checkout-ui-settings**:

   - Vaya a `https://{{account}}.myvtex.com/admin/portal/#/sites` o haga clic en la opción **Checkout** en la lista de resultados de búsqueda
     ![sites](https://i.imgur.com/9VVU0Hx.png)
   - En la pantalla **Checkout**, haga clic en el icono de engranaje azul! [settings](https://i.imgur.com/D2PTBuq.png) en el Checkout que está usando su tienda para acceder a las **configuraciones del Checkout**
   - En la pantalla de **configuración del pago**, haga clic en **código** en la parte superior de la página
   - En la siguiente página, busque el archivo **checkout6-custom.js** en la lista de la derecha
     ![checkout6-custom](https://i.imgur.com/k1Se9js.png)
   - Haga clic en el archivo **checkout6-custom.js** para abrirlo
     ![checkout6-custom-file](https://i.imgur.com/r2I33l5.png)
   - Copia el contenido del archivo si hay alguna personalización y guárdalo en un lugar seguro
   - Borra todo el contenido del archivo y haz clic en **Guardar** para eliminar cualquier personalización
   - Repita el mismo proceso para el archivo **checkout6-custom.css**
   - Prueba el proceso de pago en la tienda

     2.b Para tiendas usando **checkout-ui-custom**:

   - Vaya a `https://{{account}}.myvtex.com/admin/vtex-checkout-ui-custom/` o haga clic en la opción **Checkout UI Custom** en la lista de resultados de búsqueda
     ![checkout-ui-custom](https://i.imgur.com/oIR1jF7.png)
   - En la pantalla **Checkout UI Custom**, haga clic en la pestaña **Javascript** ! [ajustes](https://i.imgur.com/Q4NM7KN.png)
   - En la pestaña **Javascript**, ve al final de la página y desactiva el javascript usando el botón
     ![toggle](https://i.imgur.com/a4ZByOz.png)
   - Repita el mismo proceso para la pestaña **CSS**
   - Luego haga clic en **PUBLICAR** ! [publish](https://i.imgur.com/OxXaqUK.png) en la parte superior de la página para reflejar los cambios en la tienda
   - Prueba el proceso de pago en la tienda

## Otros errores de disponibilidad del servicio VTEX

- **Estado del servicio**: Revisa la página de estado de VTEX para cualquier problema o mantenimiento en curso que pueda estar afectando el procesamiento de pagos en tu Statuspage [VTEX Status](https://status.vtex.com/). Para instrucciones sobre cómo verificar el estado de los servicios de VTEX, consulte [Documentación del Centro de ayuda de VTEX](https://help.vtex.com/pt/tutorial/pagina-de-status-da-vtex--gPhqDn9IQ3c67wbJEX3JJ).

## Problemas de configuración de Adyen

### Clave de API no válida

Regenere la clave API en el panel de administración de Adyen y actualícela en VTEX. (Vea: [Configuración de la clave API](adyen-configuration/api-key))

### Errores de procesamiento de pago

Consulte la guía de solución de problemas de Adyen para problemas comunes y soluciones.

### Error 403

Hay diferentes escenarios que pueden generar un error 403.

#### Escenario 1) URL Live definida para las transacciones de prueba

Para las transacciones de prueba, no defina la URL en vivo, de lo contrario puede enfrentar un error 403. La URL live debe ser definida solo para las transacciones de producción. (Vea: [URL Live](adyen-configuration/live-url))

#### Escenario 2) Nombre del comerciante equivocado

Asegúrese de que la cuenta del comerciante rellenada en VTEX es exactamente la misma que aparece en su área de cliente de Adyen. Es importante seguir incluso las letras mayúsculas, espacios y otros caracteres especiales (Ver: [Obtención de credenciales](adyen-configuration/getting-credentials))

##### Escenario 3) El ticket para el soporte de Adyen aún no ha sido abierto o la habilitación no se ha hecho para el nombre de usuario correcto

Asegúrese de abrir el ticket para el soporte de Adyen siguiendo las instrucciones que le proporcionamos en el paso xx e introduzca el nombre de usuario correcto. Recuerde que si por alguna razón se crean nuevas credenciales, el permiso debe ser otorgado nuevamente por el equipo de Adyen. (Vea: [papel PCI](adyen-configuration/pci-role))
