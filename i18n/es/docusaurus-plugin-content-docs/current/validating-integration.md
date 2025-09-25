---
sidebar_position: 7
title: Validando la integración
---


## Lista de verificación de validación

Antes de continuar con las pruebas, asegúrese de que los siguientes pasos se han completado:

1.  **Configuración de Adyen**:
    *   [ ] La cuenta de Adyen está configurada y verificada.
    *   [ ] La clave API se genera y configura en VTEX. (Ver: [Configuración de la clave API](adyen-configuration/api-key))
    *   [ ] Los métodos de pago están habilitados y configurados en la cuenta de Adyen. (Vea: [Configurando métodos de pago](vtex-configuration/payment-methods))
2.  **Configuración de VTEX**:
    *   [ ] El proveedor de pagos AdyenV3 está registrado en VTEX. (Vea: [Configurando el proveedor](vtex-configuration/configuring-provider))
    *   [ ] Los métodos de pago están configurados en el admin de VTEX. (Vea: [Configurando Métodos de Pago](vtex-configuration/payment-methods))
    *   [ ] Las condiciones de pago están configuradas con el proveedor AdyenV3. (Vea: [Configuración del proveedor](vtex-configuration/configuring-provider))
3.  **Entorno de prueba**:
    *   [ ] Asegúrese de que está usando un entorno de prueba para validar la integración.
    *   [ ] Use los detalles de la tarjeta de crédito de prueba proporcionados por Adyen para fines de prueba.
4.  ***Procesamiento de pedidos**:
    *   [ ] Haga un pedido de prueba en su tienda VTEX para verificar si el proceso de pago está funcionando correctamente.
5.  *** Estado de la transacción**:
    *   [ ] Compruebe el estado de la transacción en los paneles de administración de VTEX y Adyen para asegurarse de que el pago se procesa con éxito.

## Probando

1.  ***Crear un pedido de prueba**: Añadir producto(s) a la cesta y proceder al pago en su tienda VTEX.
2.  **Seleccione uno de los métodos de pago configurados para usar el proveedor Adyen**: Durante la comprobación, elija el método de pago apropiado.
3.  ***Completar el pago**: Procese el pago y compruebe si la transacción se ha completado con éxito.

## Comprobando el estado de la transacción

Para verificar el estado de la transacción de prueba, siga estos pasos:

1.  **Panel de administración de VTEX**: ve a `https://{{account}}.myvtex.com/admin/`y navega hasta la sección Pedidos o busca **pedidos** en el cuadro de búsqueda del admin. ! [orders](https://i.imgur.com/iOPV29h.png)
2.  ***Detalles del pedido**: Haga clic en el **ID del pedido** para ver los detalles de un pedido.
3.  ***Estado del pago**: En los detalles de la orden, en la esquina derecha, puedes ver la información de pago para esa orden. ! [payment](https://i.imgur.com/Is2kZn2.png)
4.  ***Historial de la transacción**: Haga clic en **Ver detalles** para ir a la página de **Detalles de la transacción**. Allí puedes comprobar los detalles de todos los pasos del [Flujo de Procesamiento de Pagos](payment-flow)! [transaction](https://i.imgur.com/B2vkZFB.png)
    *   En la parte superior de la página, puede ver **Información de pago**:
        ![payment information](https://i.imgur.com/g24ciyo.png)
    > **IMPORTANTE**: Cuando un pago es autorizado, usted puede ver el **TID**, que es el ID en el sistema de Adyen para esa transacción. En Adyen, el **TID** se conoce como **Referencia PSP** y usted puede buscar este ID para verificar los detalles de la transacción en `https://{{account}}.adyen.com/ca/ca/offers/showList.shtml`
        ![transactions](https://i.imgur.com/in37FYK.png)