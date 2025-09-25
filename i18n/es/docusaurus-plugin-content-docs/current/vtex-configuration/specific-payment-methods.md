---
sidebar_position: 4
title: Métodos de pago específicos
---


## Apple Pay

### Configurar Apple Pay en el área de clientes de Adyen

También necesitarás configurar Apple Pay en tu Área de cliente de Adyen en Métodos de pago. Para hacerlo, sigue los siguientes pasos:

1. En su área de cliente Adyen, vaya a "Configuración"<br/>
2. Haga clic en "Métodos de pago"<br/>
3. En el lado derecho, haga clic en "Solicitar método de pago"<br/>
4. En la pantalla "Seleccionar método de pago", seleccione "Apple Pay"
![TelaSelecionarPagamento](https://i.imgur.com/9TWDm36.png)
5. Seleccione el comerciante<br/>
![SelecionarComerciante](https://i.imgur.com/r5M1jNF.png)
6. Configurar la cuenta del adquirente<br/>
![ConfigurarContaAdquirente](https://i.imgur.com/NxE5Wlb.png)
7. Seleccione el tipo de certificado: “Usar Certificado Adyen”.<br/>
![UsarCertificadoAdyen](https://i.imgur.com/obApo0m.png)
8. En la pantalla "Revisar y finalizar", ingrese el dominio completo del sitio<br/>
![DominioCompletoSite](https://i.imgur.com/r2taBn5.png)

### Validando la configuración

Si la configuración es correcta, deberías ver "Apple Pay" al buscar en la pantalla "Métodos de pago".
![MetodosPagamento](https://i.imgur.com/ryeBp6m.png)

### Instalar el certificado

1. Genera tu certificado siguiendo la documentación. Para generar el certificado, consulte la siguiente documentación: [Componente de Apple Pay | Adyen Docs](https://docs.adyen.com/payment-methods/apple-pay/web-component/?tab=adyen-certificate-live_1)

2. Instale el certificado en el servidor VTEX. Para hacer esto, haga un POST usando Postman o una herramienta similar para el siguiente punto final: `https://{{PublicStoreDomain}}/.well-known/raw/apple-developer-merchantid-domain-association?persistent=true`

[<img src="https://run.pstmn.io/button.svg" alt="Ejecutar en el Postman" />](https://www.postman.com/suportecorebiz/adyen-apple-pay/collection/2y1c8n1/apple-pay?action=share&creator=41098825)

3. Compruebe que el certificado se ha instalado correctamente. Para verificar si el certificado ha sido instalado correctamente en los servidores VTEX, utilice la siguiente url: `https://{{PublicStoreDomain}}/.well-known/apple-developer-merchantid-domain-association`

## Google Pay

Para procesar pagos con Google Pay en Adyen, establezca el ID de producto o comerciante de la cuenta de Google en la plataforma de Adyen (no se aplica al entorno de prueba).

1. Cree y configure un comerciante en Google Pay
2. Vincular este comerciante a Adyen

> **Aviso**: Si este paso no se realiza, el posible error que encontrará el comerciante:
> _OR_BIBED_11 Este comerciante no ha completado el registro para usar la API de Google Pay.

Para más información, consulte [Componente Google Pay](https://docs.adyen.com/payment-methods/google-pay/web-component/#before-you-go-live).

## Boletos

### Configurando Boletos

1. En VTEX Admin, ve a Configuración de la tienda > Pagos > Proveedores o escribe **Proveedores** en la barra de búsqueda superior.
2. En la pantalla de proveedores, haga clic en el botón **Nuevo proveedor**.
3. Usa la barra de búsqueda para encontrar al proveedor responsable de procesar el boleto.
4. Rellene los campos del formulario con los datos proporcionados por su proveedor o banco.
5. Haga clic en **Guardar**.

### Configurando la condición de pago

1. En VTEX Admin, ve a Configuración de la tienda > Pagos > Configuración o escribe **Configuración** en la barra de búsqueda superior.
2. En la pestaña **Condiciones de pago**, haga clic en el botón ![**Añadir condición de pago**](https://i.imgur.com/j8KuDvn.png).
3. Seleccione **Boleto Bancario** en la sección Boleto.
4. Habilite la condición en el campo Status.
5. En el campo **Procesar con proveedor**, elige el proveedor que configuraste anteriormente.
6. Opcionalmente, configure condiciones de pago especiales según sea necesario.
7. Haga clic en **Guardar**.

### Configurando los días de vencimiento del boleto

1. En VTEX Admin, ve a Configuración de la tienda > Pagos > Proveedores o escribe Proveedores en la barra de búsqueda superior.
2. En la pantalla de proveedores, seleccione el proveedor Adyen.
3. En la sección de detalles, haga clic en Editar.
4. En el campo Días de vencimiento del boleto, establezca el período de vencimiento deseado para el boleto. Tenga en cuenta que hay un día de procesamiento adicional necesario para que el pago se envíe a Adyen.

![días de vencimiento del boleto](https://i.imgur.com/mA3VmHy.png)

## Bancontact

- Para que este método de pago funcione, necesitas hacer algunas configuraciones específicas en el Panel de Administración de VTEX:
  - **Configuración del método de pago**: Vaya al panel de administración de VTEX y vaya a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` o escribe **pagos** en el cuadro de búsqueda del administrador y haz clic en la pestaña **Pagos personalizados**.
  - En la pestaña **Pagos personalizados**, haga clic en un **Config** disponible en **Tarjetas de marca propia**![cartoes-marca-propia](https://i.imgur.com/IJvqQOJ.png).
  - En la siguiente pantalla, rellene el campo **Nombre** con "Bancontact" (asegúrese de que la sintaxis es correcta, ya que este es el nombre del método de pago que se enviará en las transacciones)
  - en el campo **Número de dígitos del CVV**, defina como **no obligatorio**
    ![bancontact](https://i.imgur.com/SkvSV8g.png)
  - Deja los otros campos con sus valores inalterados.
  - Haga clic en **Guardar** para guardar la configuración.
  - Después de guardar la configuración, usted será redirigido automáticamente para finalizar la configuración en la siguiente pantalla **Condición de pago**:
    ![bancontact-2](https://i.imgur.com/pD1FMYu.png)
  - En la pantalla **Condición de pago**, rellene el **Nombre de la condición**
  - Seleccione el **Proveedor** para Adyen en el menú desplegable **Procesar con el proveedor**
  - Cambie el **Status** a "activo"
  - Haga clic en **Guardar** en la esquina inferior derecha de la pantalla
  - Después de guardar la Condición de Pago, **"Bancontact"** estará disponible para su uso en las opciones **"Tarjeta de Crédito"** y **"Tarjeta de Débito"** al finalizar la compra.

## Klarna

### Klarna Pay Over Time

Permite a los clientes pagar por sus compras en cuotas. Para configurar Klarna Pay Over Time, siga estos pasos:

- **En Adyen**:

  - Habilite **Klarna Pay Over Time** en su cuenta de Adyen.
  - Configure las configuraciones del método de pago según los requisitos de su negocio.

- **En VTEX**:
  - **Configuración del método de pago**: Vaya al panel de administración de VTEX y vaya a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` o escribe **pagos** en el cuadro de búsqueda del administrador y haz clic en **Pagos**.
  - en la pantalla **Métodos de pago**, haga clic en el botón ![**Añadir método de pago**](https://i.imgur.com/j8KuDvn.png) en la esquina superior derecha de la página.
  - Encuentra la opción **Klarna Pay Over Time** en la lista de métodos de pago disponibles y haz clic en ella.
  - En la pantalla **Agregar método de pago**, seleccione **Proveedor** en la casilla "Procesar con el proveedor".
  - Guardar la configuración. Después de eso, siga los pasos detallados en [Configurar el proveedor de pagos en VTEX](configuring-provider)
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

### Klarna Pay Now

Permite a los clientes pagar sus compras inmediatamente por transferencia bancaria. Para configurar Klarna Pay Now, siga estos pasos:

- **En Adyen**:

  - Habilite **Klarna Pay Now** en su cuenta de Adyen.
  - Configure las configuraciones del método de pago según los requisitos de su negocio.

- **En VTEX**:
  - **Configuración del método de pago**: Vaya al panel de administración de VTEX y vaya a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` o escribe **pagos** en el cuadro de búsqueda del administrador y haz clic en **Pagos**.
  - en la pantalla **Métodos de pago**, haga clic en el botón ![**Añadir método de pago**](https://i.imgur.com/j8KuDvn.png) en la esquina superior derecha de la página.
  - Encuentra la opción **Klarna** en la lista de métodos de pago disponibles y haz clic en ella.
  - En la pantalla **Agregar método de pago**, seleccione **Proveedor** en la casilla "Procesar con el proveedor".
  - Guardar la configuración. Después de eso, siga los pasos detallados en [Configurar el proveedor de pagos en VTEX](configuring-provider)
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

### Klarna Pay Later

Permite a los clientes pagar sus compras en 30 días sin intereses. Para configurar Klarna Pay Later, siga estos pasos:

- **En Adyen**:

  - Habilite **Klarna Pay Later** en su cuenta de Adyen.
  - Configure las configuraciones del método de pago según los requisitos de su negocio.

- **En VTEX**:
  - **Configuración del método de pago**: Vaya al panel de administración de VTEX y vaya a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway/#/custom-payments` o escribe **pagos** en el cuadro de búsqueda del administrador y haz clic en **Pagos**.
  - en la pantalla **Métodos de pago**, haga clic en el botón ![**Añadir método de pago**](https://i.imgur.com/j8KuDvn.png) en la esquina superior derecha de la página.
  - Encuentra la opción **Klarna Pay Later** en la lista de métodos de pago disponibles y haz clic en ella.
  - En la pantalla **Agregar método de pago**, seleccione **Proveedor** en la casilla "Procesar con el proveedor".
  - Guardar la configuración. Después de eso, siga los pasos detallados en [Configurar el proveedor de pagos en VTEX](configuring-provider)
    ![#klarna](https://i.imgur.com/JRlpO7p.gif)

## Ideal

> **Importante**: La información importante sobre el Ideal es que en el paso de configuración del método de pago de VTEX, usted encontrará dos métodos de pago al buscar por Ideal. Por favor seleccione "**Ideal V3**". Después de eso, siga los pasos detallados en [Configurar el proveedor de pagos en VTEX](configuring-provider)

![IDeal](https://i.imgur.com/EjnvuSR.png)
![iDeal V3](https://i.imgur.com/3Qt1408.png)
