---
sidebar_position: 4
title: Métodos de Pago Específicos
---

## Apple Pay

### Configurar Apple Pay en el Área de Cliente de Adyen

También deberá configurar Apple Pay en su Área de Cliente de Adyen en Métodos de Pago. Para hacerlo, siga los pasos a continuación:

1. En su Área de Cliente de Adyen, vaya a “Configuración”<br/>
2. Haga clic en “Métodos de Pago”<br/>
3. En el lado derecho, haga clic en “Solicitar Método de Pago”<br/>
4. En la pantalla “Seleccionar Método de Pago”, seleccione “Apple Pay”
![PantallaSeleccionarPago](https://i.imgur.com/9TWDm36.png)
5. Seleccione el Comerciante<br/>
![SeleccionarComerciante](https://i.imgur.com/r5M1jNF.png)
6. Configure la cuenta del adquirente<br/>
![ConfigurarCuentaAdquirente](https://i.imgur.com/NxE5Wlb.png)
7. Seleccione el tipo de certificado: “Usar Certificado de Adyen”.<br/>
![UsarCertificadoAdyen](https://i.imgur.com/obApo0m.png)
8. En la pantalla “Revisar y Finalizar”, ingrese el dominio completo del sitio web<br/>
![DominioCompletoSitio](https://i.imgur.com/r2taBn5.png)

### Validando la configuración

Si la configuración es correcta, debería ver “Apple Pay” al buscar en la pantalla “Métodos de Pago”.
![MetodosPago](https://i.imgur.com/ryeBp6m.png)

### Instalar el certificado

1. Genere su certificado siguiendo la documentación. Para generar el certificado, consulte la siguiente documentación: [Componente Apple Pay | Adyen Docs](https://docs.adyen.com/payment-methods/apple-pay/web-component/?tab=adyen-certificate-live_1)

2. Instale el certificado en el servidor de VTEX. Para hacerlo, realice un POST utilizando Postman o una herramienta similar al siguiente endpoint: `https://{{PublicStoreDomain}}/.well-known/raw/apple-developer-merchantid-domain-association?persistent=true`

[<img src="https://run.pstmn.io/button.svg" alt="Ejecutar en Postman" />](https://www.postman.com/suportecorebiz/adyen-apple-pay/collection/2y1c8n1/apple-pay?action=share&creator=41098825)

3. Verifique si el certificado se instaló correctamente. Para verificar si o certificado se instaló correctamente nos servidores VTEX, use a seguinte url: `https://{{PublicStoreDomain}}/.well-known/apple-developer-merchantid-domain-association`

## Google Pay

Para procesar pagos con Google Pay en Adyen, configure el ID de producto o comerciante de la Cuenta de Google en la plataforma Adyen (no se aplica al entorno de prueba).

1. Cree y configure un comerciante en Google Pay.
2. Vincule este comerciante a Adyen.
3. En el Admin de VTEX, navegue a **Configuración de la tienda > Pagos > Proveedores** y edite el proveedor Adyen.
4. Complete el **Google Merchant ID** (ID numérico obtenido de Google) y el **Google Merchant Name**.

> **Advertencia**: En caso de que el ID numérico del comerciante no esté configurado correctamente en producción, el cliente encontrará el error: 
> _OR_BIBED_11 Este comerciante no ha completado el registro para usar la API de Google Pay.

Para más información, consulte [Componente Google Pay](https://docs.adyen.com/payment-methods/google-pay/web-component/#before-you-go-live).

## PayPal

Para ofrecer PayPal a través de Adyen en VTEX, siga estos pasos:

1. **En Adyen**:
   - Habilite PayPal en su Área de Cliente de Adyen en **Configuración > Métodos de pago**.
   - Asegúrese de que su ID de comerciante de PayPal esté vinculado a su cuenta de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de pago**, haga clic en el botón ![**Agregar Método de Pago**](https://i.imgur.com/j8KuDvn.png).
   - Busque **PayPal** y selecciónelo.
   > **Atención**: Al buscar PayPal en VTEX, encontrará varias opciones. Asegúrese de seleccionar la opción llamada simplemente **PayPal**.

   ![Selección PayPal](/img/vtex-paypal-selection.png)

   - Selecione el proveedor Adyen en el campo **Procesar con el proveedor**.
   - Establezca el estado como **Activo** e haga clic en **Guardar**.

## Affirm

Affirm se configura como un método de pago estándar en VTEX:

1. **En Adyen**:
   - Habilite **Affirm** en su Área de Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de pago**, haga clic en el botón ![**Agregar Método de Pago**](https://i.imgur.com/j8KuDvn.png).
   - Busque **Affirm** y selecciónelo.
   - Seleccione el proveedor Adyen en el campo **Procesar con el proveedor**.
   - Haga clic en **Guardar**.

## BLIK

1. **En Adyen**:
   - Habilite **BLIK** en su Área de Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de pago**, haga clic en el botón ![**Agregar Método de Pago**](https://i.imgur.com/j8KuDvn.png).
   - Busque **BLIK** y selecciónelo.
   - Asócielo con el proveedor Adyen.
   - Guarde la configuración.

## MultiBanco

1. **En Adyen**:
   - Habilite **MultiBanco** en su Área de Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de pago**, haga clic en el botón ![**Agregar Método de Pago**](https://i.imgur.com/j8KuDvn.png).
   - Busque **MultiBanco** y selecciónelo.
   - Asócielo con el proveedor Adyen.
   - Guarde la configuración.
   - **Nota**: Asegúrese de que su tienda tenga la plantilla de correo electrónico `multibanco-payment-information` configurada para enviar los detalles del pago a los clientes.

## Bancontact Mobile

Este método permite que los clientes paguem utilizando a aplicação Bancontact em seus dispositivos móveis mediante um código QR ou redirecionamento de aplicação.

1. **En Adyen**:
   - Habilite **Bancontact Mobile** en su Área de Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de pago**, haga clic en el botón ![**Agregar Método de Pago**](https://i.imgur.com/j8KuDvn.png).
   - Busque **Bancontact Mobile** y selecciónelo.
   - Asócielo con el proveedor Adyen.
   - Guarde la configuración.

## Boletos

### Configurando Boletos

1. En el Admin de VTEX, navegue a Configuración de la tienda > Pagos > Proveedores, o ingrese **Proveedores** en la barra de búsqueda superior.
2. En la pantalla de Proveedores, haga clic en el botón **Nuevo Proveedor**.
3. Use la barra de búsqueda para encontrar el proveedor responsable de procesar el boleto.
4. Complete los campos del formulario con los datos proporcionados por su proveedor o banco.
5. Haga clic en **Guardar**.

### Configurando la Condição de Pago

1. En el Admin de VTEX, vaya a Configuración de la tienda > Pagos > Configuración, o ingrese **Configuración** en la barra de búsqueda superior.
2. En la pestaña **Condiciones de Pago**, haga clic en el botón ![**Agregar Condición de Pago**](https://i.imgur.com/j8KuDvn.png).
3. Seleccione **Boleto Bancário** en la sección Boleto.
4. Habilite la condición en el campo Estado.
5. En el campo **Procesar con el proveedor**, elija el proveedor que configuró anteriormente.
6. Opcionalmente, configure condiciones de pago especiales según sea necesario.
7. Haga clic en **Guardar**.

### Configurando Días de Vencimiento del Boleto

1. En el Admin de VTEX, navegue a Configuración de la tienda > Pagos > Proveedores, o ingrese Proveedores en la barra de búsqueda superior.
2. En la pantalla de Proveedores, seleccione el proveedor Adyen.
3. En la sección de detalles, haga clic en Editar.
4. En el campo Días para el Vencimiento del Boleto, defina el período de vencimiento deseado para el boleto. Tenga en cuenta que se requiere un día de procesamiento adicional para que el pago se envíe a Adyen.

![días de vencimiento del boleto](https://i.imgur.com/mA3VmHy.png)

## Bancontact

- Para que este método de pago funcione, debe realizar algunas configuraciones específicas en el Panel de Administración de VTEX:
  - **Configuración del Método de Pago**: Vaya al panel de administración de VTEX y acceda a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` o ingrese **pagos** en el cuadro de búsqueda del Admin y haga clic en la pestaña **Pagos Personalizados**.
  - En la pestaña **Pagos Personalizados**, haga clic en una **Config** disponible en **Tarjetas de Marca Propia** ![tarjetas-marca-propia](https://i.imgur.com/IJvqQOJ.png).
  - En la siguiente pantalla, complete el campo **Nombre** con "Bancontact" (asegúrese de que la sintaxis sea correcta, ya que este es el nombre del método de pago que se enviará en las Transacciones).
  - En el campo **Número de Dígitos del CVV**, establézcalo como **no requerido**.
    ![bancontact](https://i.imgur.com/SkvSV8g.png)
  - Deje los otros campos con sus valores sin cambios.
  - Haga clic en **Guardar** para guardar la configuración.
  - Después de guardar la configuración, se le redirigirá automáticamente para finalizar la configuración en la siguiente pantalla **Condición de Pago**:
    ![bancontact-2](https://i.imgur.com/pD1FMYu.png)
  - En la pantalla **Condición de Pago**, complete el **Nombre de la Condición**.
  - Seleccione el **Proveedor** de Adyen en el menú desplegable **Procesar con el proveedor**.
  - Cambie el **Estado** a "activo".
  - Haga clic en **Guardar** en la parte inferior derecha de la pantalla.
  - Después de guardar la Condición de Pago, **"Bancontact"** estará disponible para su uso en las opciones de **"Tarjeta de Crédito"** y **"Tarjeta de Débito"** en la caja.

## Klarna

### Klarna Pay Over Time

Permite que los clientes paguen sus compras en cuotas. Para configurar Klarna Pay Over Time, siga estos pasos:

- **En Adyen**:

  - Habilite **Klarna Pay Over Time** en su cuenta de Adyen.
  - Configure los ajustes del método de pago de acuerdo con sus requisitos comerciales.

- **En VTEX**:
  - **Configuración del Método de Pago**: Vaya al panel de administración de VTEX y acceda a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` o ingrese **pagos** en el cuadro de búsqueda del Admin y haga clic en **Pagos**.
  - En la pantalla **Métodos de Pago**, haga clic en el botón ![**Agregar Método de Pago**](https://i.imgur.com/j8KuDvn.png) en la esquina superior derecha de la página.
  - Busque la opción **Klarna Pay Over Time** en la lista de métodos de pago disponibles y haga clic en ella.
  - En la pantalla **Agregar Método de Pago**, seleccione el **Proveedor** en el cuadro de selección "Procesar con el Proveedor".
  - Guarde la configuración. Después de eso, siga los pasos detallados en [Configuración del Proveedor de Pago en VTEX](configuring-provider).
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

### Klarna Pay Now

Permite que los clientes paguen sus compras de inmediato mediante transferencia bancaria. Para configurar Klarna Pay Now, siga estos pasos:

- **En Adyen**:

  - Habilite **Klarna Pay Now** en su cuenta de Adyen.
  - Configure los ajustes del método de pago de acuerdo con sus requisitos comerciales.

- **En VTEX**:
  - **Configuración del Método de Pago**: Vaya al panel de administración de VTEX y acceda a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` o ingrese **pagos** en el cuadro de búsqueda del Admin y haga clic en **Pagos**.
  - En la pantalla **Métodos de Pago**, haga clic en el botón ![**Agregar Método de Pago**](https://i.imgur.com/j8KuDvn.png) en la esquina superior derecha de la página.
  - Busque la opción **Klarna** en la lista de métodos de pago disponibles y haga clic en ella.
  - En la pantalla **Agregar Método de Pago**, seleccione el **Proveedor** en el cuadro de selección "Procesar con el Proveedor".
  - Guarde la configuración. Después de eso, siga los pasos detallados en [Configuración del Proveedor de Pago en VTEX](configuring-provider).
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

### Klarna Pay Later

Permite que los clientes paguen sus compras en 30 días sin intereses. Para configurar Klarna Pay Later, siga estos pasos:

- **En Adyen**:

  - Habilite **Klarna Pay Later** en su cuenta de Adyen.
  - Configure los ajustes del método de pago de acuerdo con sus requisitos comerciales.

- **En VTEX**:
  - **Configuración del Método de Pago**: Vaya al panel de administración de VTEX y acceda a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` o ingrese **pagos** en el cuadro de búsqueda del Admin y haga clic en **Pagos**.
  - En la pantalla **Métodos de Pago**, haga clic en el botón ![**Agregar Método de Pago**](https://i.imgur.com/j8KuDvn.png) en la esquina superior derecha de la página.
  - Busque la opção **Klarna Pay Later** na lista de métodos de pago disponíveis e clique nela.
  - Na tela **Agregar Método de Pago**, selecione o **Proveedor** no quadro de seleção "Procesar con el Proveedor".
  - Guarde a configuração. Depois disso, siga os passos detalhados em [Configuración del Proveedor de Pago en VTEX](configuring-provider).
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

## Ideal

> **Importante**: La información importante sobre Ideal es que en el paso de configuración del método de pago de VTEX, encontrará dos métodos de pago al buscar Ideal. Por favor, seleccione “**Ideal V3**". Después de eso, siga los pasos detallados en [Configuración del Proveedor de Pago en VTEX](configuring-provider).

![IDeal](https://i.imgur.com/EjnvuSR.png)
![iDeal V3](https://i.imgur.com/3Qt1408.png)
