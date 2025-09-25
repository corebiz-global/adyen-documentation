---
sidebar_position: 1
title: Configurando el proveedor
---


Después de completar todos los pasos enumerados en la sección **Configuración de Adyen**, debe tener toda la información necesaria para activar Adyen V3 como proveedor de pago en VTEX.

El módulo **Pagos VTEX** permite que varios proveedores de pago (gateways, adquirentes, subadquirentes, orquestadores, PSPs, entre otros) sean configurados en su tienda. De esta manera, puede ofrecer diferentes métodos y condiciones de pago a sus clientes.

Cuando se realiza una compra en su tienda y el cliente efectúa el pago, la transmisión de datos entre VTEX y el proveedor elegido tiene lugar a través de protocolos de comunicación configurados en Admin VTEX.

El proveedor del pago es responsable de procesar el pago y devolver el resultado a VTEX. El proveedor de pagos también puede ser responsable del análisis antifraude de la transacción.

Asegúrese de tener los permisos y detalles necesarios de la pasarela de pago de Adyen. Para registrar la afiliación de la pasarela Adyen en VTEX, siga los siguientes pasos:

1. Ir a la página de administración de la tienda `https://{{account}}.myvtex.com/admin/`.
2. En VTEX Admin, ve a **Configuración de la tienda > Pagos > Proveedores** o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
3. En la pantalla de proveedores, haga clic en el botón Nuevo proveedor.
   ![Proveedores](https://i.imgur.com/mjkoQTi.png)
4. Busca **Adyen**.
   ![Adyen](https://i.imgur.com/kIo1GBC.png)
5. Seleccione **AdyenV3** de la lista de proveedores de pago disponibles.
6. En el campo **Clave de aplicación** (nombre de su cuenta comercial), complete el nombre de su cuenta comercial que obtuvo en el paso [Obtención de credenciales de la cuenta comercial y de la empresa](../adyen-configuration/getting-credentials.md).
7. En el campo **Token de la Aplicación** (clave de API), pegue la clave de API generada en el paso [Clave de API](../adyen-configuration/api-key.md).
   ![Credenciales de API](https://i.imgur.com/Ih85Tus.png)
8. Opcionalmente, defina un nombre de identificación rellenando el campo **Nombre** en **Información básica**.
9. Si su tienda aún no está en producción y está realizando pruebas, puede **Habilitar modo de prueba** en Control de pagos.
10. En el campo **URL Live**, rellene el prefijo de la URL que obtuvo en la sección [URL Live](../adyen-configuration/live-url.md).
    > **Nota:** Este campo debe rellenarse solo para entornos de producción. Para pruebas, debe dejarse en blanco.
11. En el campo **Nombre de la empresa**, ingrese el nombre de la empresa según lo definido en la cuenta de Adyen, el que guardó en el paso [Obteniendo credenciales de la cuenta de la empresa y del comerciante](../adyen-configuration/getting-credentials.md).
12. El campo **URL del POS Live** se usa solo para Sales APP.
13. En el campo **Clave del cliente**, rellene la clave del cliente que obtuvo en el paso 6 de la sección [Clave de API](../adyen-configuration/api-key.md).
    ![Credenciales de API](https://i.imgur.com/1W8F8FE.png)
14. Haga clic en **Guardar**.

![AdyenV3](https://i.imgur.com/uleOsY1.png)

Para más información sobre los datos a rellenar, consulte la documentación de [Credenciales API de Adyen](https://docs.adyen.com/development-resources/api-credentials/).

Si necesitas ayuda extra, revisa los pasos descritos en el [tutorial de VTEX](https://help.vtex.com/tutorial/registering-gateway-affiliations--tutorials_444) o en la [Ruta de pagos de VTEX](https://help.vtex.com/tracks/payments--6GAS7zGzAm7AAGoEAwDbwWJG/7pAEMAo4iqNHwOYarZ3zgm)