---
title: Google Pay Wallet (VTEX Native)
sidebar_custom_props:
  image: /img/icons/google-pay.svg
---

### Configurar Google Pay en el Área del Cliente de Adyen

También necesitará configurar Google Pay en su Área del Cliente de Adyen en Métodos de Pago. Para hacer eso, siga los pasos a continuación:

#### Solicitar activación

1. En su Área del Cliente, cambie a su cuenta de comerciante (Merchant Account).
2. Vaya a **Configuración > Métodos de pago**.
3. Seleccione **Solicitar métodos de pago** para ver todos los métodos de pago disponibles.

![Configuración de Adyen](/img/adyen-googlepay-request.png)

4. Use las listas desplegables para filtrar los métodos de pago por ubicación y tipo.
5. Seleccione el método de pago **Google Pay (paywithgoogle)**.
6. Seleccione **Agregar**.
7. Aplique los métodos de pago a **Esta cuenta de comerciante**.
8. Si se le solicita, complete la información requerida.
9. Revise sus solicitudes.
10. Seleccione **Enviar solicitud**.

![Enviar solicitud](/img/adyen-googlepay-submit.png)

Más información: [Agregar métodos de pago | Adyen Docs](https://docs.adyen.com/payment-methods/add-payment-methods)

> **Información**: Si el método de pago Google Pay (paywithgoogle) no está activo en su cuenta, comuníquese con [support@adyen.com](mailto:support@adyen.com) para solicitar el acceso.

#### Validar configuración

Después de la activación, verifique:
* **Google Pay (paywithgoogle)** está disponible en los métodos de pago de su cuenta.
* La cuenta de comerciante está configurada correctamente.

![Estado activo](/img/adyen-googlepay-active.png)

### Configurar Google Pay en el Admin de VTEX

#### Acceder a Billetera (Wallet)

1. En el Admin de VTEX, vaya a **Configuración de la tienda > Pagos > Billeteras** o escriba **Billeteras** en la barra de búsqueda en la parte superior de la página.
2. Seleccione **Activar** para incluir la extensión de Google Pay.

![Billetera VTEX](/img/vtex-googlepay-wallet.png)

**Las marcas de tarjetas admitidas por la extensión de Google Pay son aquellas configuradas en las condiciones de pago.**

Más información: [Google Pay | Ayuda VTEX](https://help.vtex.com/es/tracks/google-pay)

#### Condiciones de visualización
Google Pay solo aparecerá en el checkout cuando:
* El dispositivo sea compatible (Android o navegador compatible).
* El usuario tenga una cuenta de Google con una tarjeta configurada.
* La billetera esté activa en VTEX.
