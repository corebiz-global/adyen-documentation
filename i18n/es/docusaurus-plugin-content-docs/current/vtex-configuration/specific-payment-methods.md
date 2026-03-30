---
sidebar_position: 4
title: Métodos de Pago Específicos
---


## Apple Pay

### Configurar Apple Pay en el Área del Cliente de Adyen

También necesitará configurar Apple Pay en su Área del Cliente de Adyen en Métodos de Pago. Para hacer eso, siga los pasos a continuación:

1. En su Área del Cliente de Adyen, vaya a “Configuración”<br/>
2. Haga clic en “Métodos de Pago”<br/>
3. En el lado derecho, haga clic en “Solicitar Método de Pago”<br/>
4. En la pantalla “Seleccionar Método de Pago”, seleccione “Apple Pay”
![SeleccionarPantallaPago](/img/vtex-select-payment-screen.png)
5. Seleccione el Comercio<br/>
![SeleccionarComercio](/img/vtex-select-merchant.png)
6. Configure la cuenta del adquirente<br/>
![SeleccionarCuentaAdquirente](/img/vtex-select-acquirer-account.png)
7. Seleccione el tipo de certificado: “Usar Certificado de Adyen”.<br/>
![UsarCertificadoAdyen](/img/vtex-use-adyen-certificate.png)
8. En la pantalla “Revisar y Finalizar” inserte el dominio completo del sitio web<br/>
![DominioSitioWebCompleto](/img/vtex-full-website-domain.png)

### Validando la configuración

Si la configuración es correcta, debería ver “Apple Pay” cuando lo busque en la pantalla “Métodos de Pago”.
![MetodosPago](/img/vtex-payment-methods-list.png)

### Instalar el certificado

1. Genere su certificado siguiendo la documentación. Para generar el certificado, consulte la siguiente documentación: [Componente Apple Pay | Adyen Docs](https://docs.adyen.com/payment-methods/apple-pay/web-component/?tab=adyen-certificate-live_1)

2. Instale el certificado en el servidor VTEX. Para hacer eso, realice un POST usando Postman o una herramienta similar al siguiente endpoint: `https://{{DominioPublicoTienda}}/.well-known/raw/apple-developer-merchantid-domain-association?persistent=true`

[<img src="/img/postman-button.svg" alt="Ejecutar en Postman" />](https://www.postman.com/suportecorebiz/adyen-apple-pay/collection/2y1c8n1/apple-pay?action=share&creator=41098825)

3. Verifique si el certificado se instaló correctamente. Para verificar si el certificado se instaló correctamente en los servidores VTEX, use la siguiente url: `https://{{DominioPublicoTienda}}/.well-known/apple-developer-merchantid-domain-association`

## Google Pay

Para procesar pagos con Google Pay en Adyen, configure el ID del producto o del comercio de la Cuenta de Google en la plataforma de Adyen (no se aplica al entorno de prueba).

1. Cree y configure un comercio en Google Pay
2. Vincule este comercio a Adyen
3. En el Admin de VTEX, navegue a **Configuración de la tienda > Pagos > Proveedores** y edite el proveedor de Adyen.
4. Complete el **Google Merchant ID** (ID numérico obtenido de Google) y el **Google Merchant Name**.

> **Advertencia**: En caso de que el ID numérico del comercio no esté configurado correctamente en producción, el cliente encontrará el error: 
> _OR_BIBED_11 Este comercio no ha completado el registro para usar la API de Google Pay.

Para más información, consulte [Componente de Google Pay](https://docs.adyen.com/payment-methods/google-pay/web-component/#before-you-go-live).

## PayPal

Para ofrecer PayPal a través de Adyen en VTEX, siga estos pasos:

1. **En Adyen**:
   - Habilite PayPal en su Área del Cliente de Adyen en **Configuración > Métodos de Pago**.
   - Asegúrese de que su PayPal Merchant ID esté vinculado a su cuenta de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png).
   - Busque **PayPal** y selecciónelo.
   > **Atención**: Al buscar PayPal en VTEX, encontrará varias opciones. Asegúrese de seleccionar la opción llamada simplemente **PayPal**.

   ![Selección de PayPal](/img/vtex-paypal-selection.png)

   - Seleccione el proveedor de Adyen en el campo **Procesar con el proveedor**.
   - Cambie el estado a **Ativo** y haga clic en **Guardar**.

## Affirm

Affirm se configura como un método de pago estándar en VTEX:

1. **En Adyen**:
   - Habilite **Affirm** en su Área del Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png).
   - Busque **AdyenAffirm** y selecciónelo.
   > **Atención**: Al buscar Affirm en VTEX, encontrará dos opciones (**Affirm** y **AdyenAffirm**). Asegúrese de seleccionar la opción **AdyenAffirm** para que o proveedor de Adyen se use correctamente.

   ![Selección de Affirm](/img/vtex-affirm-selection.png)

   - Seleccione o proveedor de Adyen en el campo **Procesar con el proveedor**.
   - Haga clic en **Guardar**.

## BLIK

1. **En Adyen**:
   - Habilite **BLIK** en su Área del Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png).
   - Busque **BLIK** y selecciónelo.
   - Asócielo con o proveedor de Adyen.
   - Guarde la configuración.

## MultiBanco

1. **En Adyen**:
   - Habilite **MultiBanco** en su Área del Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png).
   - Busque **MultiBanco** y selecciónelo.
   - Asócielo con o proveedor de Adyen.
   - Guarde la configuración.
   - **Nota**: Asegúrese de que su tienda tenga la plantilla de correo electrónico `multibanco-payment-information` configurada para enviar los detalles del pago a los clientes.

## Bancontact Mobile

Este método permite a los clientes pagar utilizando la aplicación Bancontact en sus dispositivos móviles a través de un código QR o redirección de aplicación.

1. **En Adyen**:
   - Habilite **Bancontact Mobile** en su Área del Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png).
   - Busque **Bancontact Mobile** y selecciónelo.
   - Asócielo con o proveedor de Adyen.
   - Guarde la configuración.

## Boletos (Bank Slips)

### Configuración de la Condición de Pago

1. En el Admin de VTEX, vaya a Configuración de la tienda > Pago > Configuración, o ingrese **Configuración** en la barra de búsqueda superior.
2. En la pestaña **Condiciones de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png).
3. Seleccione **Boleto Bancário** en la sección Boleto.
4. Habilite la condición en el campo Estado.
5. En el campo **Procesar con el proveedor**, elija o proveedor que configuró anteriormente.
6. Opcionalmente, configure condiciones de pago especiales según sea necesario.
7. Haga clic en **Guardar**.

### Configuración de los Días de Vencimiento del Boleto

1. En el Admin de VTEX, navegue a Configuración de la tienda > Pagos > Proveedores, o ingrese Proveedores en la barra de búsqueda superior.
2. En la pantalla de Proveedores, seleccione o proveedor de Adyen.
3. En la sección de detalles, haga clic en Editar.
4. En el campo Días de vencimiento del boleto (Boleto Expiration Days), establezca el período de vencimiento deseado para el boleto. Tenga en cuenta que se requiere un día de procesamiento adicional para que el pago se envíe a Adyen.

![Boleto Expiration Days](/img/vtex-boleto-expiration.png)

## Bancontact

- Para que este método de pago funcione, debe realizar algunas configuraciones específicas en el Panel de Administración de VTEX:
  - **Configuración del Método de Pago**: Vaya al panel de administración de VTEX y acceda a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway#/rules` o ingrese **pagos** en el cuadro de búsqueda del Admin y haga clic en la pestaña **Pagos customizados**.
  - En la pestaña **Pagos customizados**, haga clic en uma **Config** disponible en **Tarjetas de Marca Propia** ![private-label-cards](/img/vtex-private-label-cards.png).
  - En la siguiente pantalla complete el campo **Nombre** con "Bancontact" (asegúrese de que la sintaxis sea correcta ya que este es el nombre del método de pago que se enviará en las Transacciones)
  - en el campo **Número de dígitos de CVV**, establézcalo en **no requerido**
    ![bancontact](/img/vtex-bancontact-config.png)
  - Deje los valores de los demás campos sin alterar.
  - Haga clic en **Guardar** para guardar la configuración.
  - Después de guardar la configuración, será redirigido automáticamente para finalizar la configuración en la siguiente pantalla **Condición de Pago**:
    ![bancontact-2](/img/vtex-bancontact-details.png)
  - En la pantalla de **Condición de Pago**, complete el **Nombre de la Condición**
  - Seleccione o **Proveedor** de Adyen en el menú desplegable **Procesar con el proveedor**
  - Cambie el **Estado** a "activo"
  - Haga clic en **Guardar en la parte inferior derecha de la pantalla**
  - Después de guardar la Condición de Pago, **"Bancontact"** estará disponible para su uso bajo las opciones **"Tarjeta de Crédito"** y **"Tarjeta de Débito"** en el checkout.

## Klarna

### Klarna Pay Over Time

Permite que los clientes paguen sus compras en cuotas. Para configurar Klarna Pay Over Time, siga estos pasos:

- **En Adyen**:

  - Habilite **Klarna Pay Over Time** en su cuenta de Adyen.
  - Configure los ajustes del método de pago de acuerdo con sus requisitos comerciales.

- **En VTEX**:
  - **Configuración del Método de Pago**: Vaya al panel de administración de VTEX e acceda a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway#/rules` o ingrese **pagos** en el cuadro de búsqueda del Admin y haga clic en **Pagos**.
  - En la pantalla de **Métodos de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png) en la esquina superior derecha de la página.
  - Busque la opción **Klarna Pay Over Time** en la lista de métodos de pago disponibles y haga clic en ella.
  - En la pantalla **Agregar Método de Pago**, seleccione o **Proveedor** en el cuadro de selección "Procesar con el proveedor".
  - Guarde la configuración. Después de eso, siga los pasos detallados en [Configuración del Proveedor de Pagos en VTEX](configuring-provider)

### Klarna Pay Now

Permite que los clientes paguen sus compras de inmediato mediante transferencia bancaria. Para configurar Klarna Pay Now, siga estos pasos:

- **En Adyen**:

  - Habilite **Klarna Pay Now** en su cuenta de Adyen.
  - Configure los ajustes del método de pago de acuerdo con sus requisitos comerciales.

- **En VTEX**:
  - **Configuración del Método de Pago**: Vaya al panel de administración de VTEX e acceda a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway#/rules` o ingrese **pagos** en el cuadro de búsqueda del Admin y haga clic en **Pagos**.
  - En la pantalla de **Métodos de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png) en la esquina superior derecha de la página.
  - Busque la opção **Klarna** na lista de métodos de pagamento disponíveis e clique nela.
  - En la pantalla **Agregar Método de Pago**, seleccione o **Proveedor** em o quadro de seleção "Procesar com o provedor".
  - Guarde la configuração. Depois disso, siga os passos detalhados em [Configuración del Proveedor de Pagos en VTEX](configuring-provider)
    ![#klarna](/img/vtex-klarna-animation.gif)

### Klarna Pay Later

Permite que los clientes paguen sus compras en 30 días sin intereses. Para configurar Klarna Pay Later, siga estos pasos:

- **En Adyen**:

  - Habilite **Klarna Pay Later** en su cuenta de Adyen.
  - Configure los ajustes del método de pago de acuerdo con sus requisitos comerciales.

- **En VTEX**:
  - **Configuración del Método de Pago**: Vaya al panel de administración de VTEX e acceda a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway#/rules` o ingrese **pagos** en el cuadro de búsqueda del Admin y haga clic en **Pagos**.
  - En la pantalla de **Métodos de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png) en la esquina superior derecha de la página.
  - Busque la opción **Klarna Pay Later** en la lista de métodos de pago disponibles y haga clic en ella.
  - En la pantalla **Agregar Método de Pago**, seleccione o **Proveedor** en el cuadro de selección "Procesar con el proveedor".
  - Guarde la configuración. Después de eso, siga los pasos detallados en [Configuración del Proveedor de Pagos en VTEX](configuring-provider)

## Ideal

> **Importante**: La información importante sobre Ideal es que en el paso de configuración del método de pago de VTEX, encontrará dos métodos de pago cuando busque Ideal. Seleccione “**Ideal V3**". Después de eso, siga los pasos detallados en [Configuración del Proveedor de Pagos en VTEX](configuring-provider)

![IDeal](/img/vtex-ideal-config.png)
![iDeal V3](/img/vtex-ideal-v3.png)
