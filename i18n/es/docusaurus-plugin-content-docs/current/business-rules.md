---
sidebar_position: 6
title: Reglas de Negocio
---


Este documento presenta las reglas de negocio aplicables a los diferentes métodos de pago utilizados en la plataforma. Cada método sigue un flujo operativo específico, con reglas claras para autorización, captura, reembolso y cancelación. El objetivo es garantizar una experiencia segura y eficiente para clientes y comercios.

## Tarjetas de Crédito y Débito

Los pagos con tarjetas de crédito y débito involucran varios pasos, desde el análisis de riesgo hasta la liquidación de la transacción.

### Flujo de Pago

1. El cliente selecciona la tarjeta de crédito o débito como método de pago en el checkout.
2. El sistema realiza un análisis de riesgo para minimizar fraudes.
3. Si se aprueba, el pago es autorizado por el emisor de la tarjeta.
4. La captura ocurre según la ventana de captura configurada en el conector.
5. La transacción se liquida y el pedido se actualiza en VTEX.

### Reglas Específicas

- **Autorización**: Realizada tras el análisis de riesgo, pudiendo ser automática o manual.
- **Captura**: Puede ser inmediata o ocurrir en el plazo definido por el conector.
- **Reembolso**: Permitido en montos parciales o totales, dependiendo de las reglas de la adquirente.
- **Cancelación**: Solo puede hacerse antes de la captura; después de eso, es necesario realizar un reembolso.
- **3DS (Autenticación Segura)**: Algunas transacciones pueden requerir autenticación a través de **3D Secure** para mayor seguridad. Para tarjetas de débito, la disponibilidad de 3DS depende de la red de la tarjeta y del emisor. Consulte la [documentación de 3D Secure](https://docs.adyen.com/online-payments/3d-secure) de Adyen para ver más ejemplos.

### Tokenización

> **Importante**: Tenemos una versión específica del conector para tokenización. Si elige trabajar con tokenización, comuníquese con nuestro equipo de soporte para asegurarse de que la versión correcta esté instalada en su entorno VTEX.

Con Adyen, puede almacenar de forma segura uno o más detalles de pago por comprador, con su consentimiento. Esto le permite ofrecer pagos de suscripciones, recargas automáticas en las cuentas de los compradores y brindarles una experiencia de pago más rápida al usar su tarjeta almacenada.

Llamamos a estos detalles de pago guardados tokens y al almacenamiento de los detalles de pago del comprador tokenización.

La tokenización se aplica en los siguientes escenarios:

- Pagos con Tarjeta de Crédito
- Pagos 3DS
- Suscripciones
- Cambio de Pedidos (Change Order)

El proceso de tokenización funciona de la siguiente manera:

1. Cuando se realiza el primer pedido con tarjeta de crédito y se selecciona la opción de guardar tarjeta, el conector informará a Adyen para tokenizar la tarjeta.
2. Adyen responderá con un token que podrá usarse para futuras transacciones.
3. Este token se almacena en VTEX, por lo que para cualquier transacción posterior del mismo usuario y tarjeta de crédito, solo se envían el CCV y el token a Adyen, y la información de la tarjeta no se transmite nuevamente.

## Pix

Pix es un método de pago instantáneo que permite transferencias rápidas y directas entre cuentas bancarias.

### Flujo de Pago

1. El cliente selecciona Pix como método de pago en el checkout.
2. El conector genera un **QR Code** dinámico y lo muestra al cliente.
3. El cliente realiza el pago a través de una aplicación bancaria.
4. La transacción se confirma en un máximo de 10 segundos.
5. Adyen envía un webhook al conector.
6. El conector aprueba el pago y actualiza VTEX, redirigiendo al cliente a la página de Pedido Realizado.

### Reglas Específicas

- **Captura**: Siempre inmediata, sin ventana de captura configurable.
- **Reembolso**: Solo se permiten reembolsos totales; no es posible realizar reembolsos parciales.
- **Cancelación**: No es posible cancelar un pago Pix después de su finalización.
- **Expiración del QR Code**: Por defecto es de 10 minutos de expiración, sin embargo, el comerciante puede configurar el tiempo de expiración de PIX desde la configuración del proveedor, como se ve en otro paso. Si el pago se realiza después de este período, VTEX no reconocerá la transacción y el monto será reembolsado automáticamente.

## Boleto Bancário

El boleto bancario es una opción ampliamente utilizada para compras de mayor valor, pero depende de la compensación bancaria para la validación del pago.

### Flujo de Pago

1. El cliente selecciona Boleto Bancário en el checkout.
2. El conector genera un archivo PDF con el boleto.
3. El cliente realiza el pago a través de un banco, casa de lotería o aplicación bancaria.
4. La compensación ocurre en un plazo de 1 a 3 días hábiles.
5. Adyen confirma el pago y envía un webhook al conector.
6. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Reembolso**: No permitido. Si es necesario, el comerciante debe realizar el reembolso manualmente mediante transferencia bancaria.
- **Validez**: Definida en el momento de la generación, variando de 1 a 30 días, según la configuración del conector y las reglas bancarias.

## Apple Pay

Apple Pay es un método de pago digital que permite transacciones seguras a través de dispositivos Apple compatibles.

### Flujo de Pago

1. El cliente selecciona Apple Pay como método de pago en el checkout.
2. La aplicación muestra las tarjetas disponibles del cliente.
3. El cliente autentica la transacción mediante Face ID, Touch ID o código de acceso.
4. El pago sigue las reglas de la tarjeta seleccionada (crédito o débito).
5. Adyen confirma la transacción y envía un webhook al conector.
6. El conector aprueba el pago y devuelve VTEX.

### Reglas Específicas

- **Cuotas**: Disponible solo para tarjetas de crédito.
- **Autenticación**: Todas las transacciones requieren autenticación biométrica o por código de acceso para mayor seguridad.

## Google Pay

Google Pay permite a los clientes pagar utilizando tarjetas guardadas en su Cuenta de Google.

### Flujo de Pago

1. El cliente selecciona Google Pay en el checkout.
2. El cliente selecciona la tarjeta deseada de su Google Wallet.
3. El cliente se autentica si se le solicita (por ejemplo, mediante biometría o PIN del dispositivo).
4. La transacción se procesa a través de Adyen.
5. Adyen confirma la transacción y envía un webhook al conector.
6. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Cuotas**: Disponible solo para tarjetas de crédito.
- **Requisitos de Producción**: En producción, se requiere un Merchant ID numérico de Google para evitar errores en la integración.

## MultiBanco

MultiBanco es un método de pospago popular en Portugal que permite a los clientes pagar a través de un cajero automático (ATM) o banca en línea.

### Flujo de Pago

1. El cliente selecciona MultiBanco en el checkout.
2. El conector genera una referencia de pago y entidad.
3. Se envía un correo electrónico al cliente con los detalles del pago.
4. El cliente completa el pago en un cajero automático o mediante banca en línea utilizando los detalles proporcionados.
5. Adyen recibe la confirmación del pago y envía un webhook.
6. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Expiración**: La referencia de pago tiene un período de validez específico (generalmente 3 días).
- **Reembolso**: Permitido en montos parciales o totales.

## BLIK

BLIK es un sistema de pago móvil en Polonia que permite pagos instantáneos mediante un código de 6 dígitos.

### Flujo de Pago

1. El cliente selecciona BLIK en el checkout.
2. El cliente ingresa un código BLIK de 6 dígitos generado en su aplicación bancaria.
3. El cliente confirma el pago dentro de su aplicación bancaria.
4. Adyen confirma la transacción y envía un webhook.
5. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Captura**: Siempre inmediata.
- **Tiempo de espera**: El cliente tiene un tiempo limitado (generalmente 2 minutos) para confirmar la transacción en la aplicación.

## PayPal

PayPal es una billetera digital global que permite a los clientes pagar utilizando su saldo de PayPal o tarjetas/cuentas bancarias vinculadas.

### Flujo de Pago

1. El cliente selecciona PayPal en el checkout.
2. El cliente es redirigido al entorno de PayPal para iniciar sesión y aprobar el pago.
3. Tras la aprobación, el cliente es redirigido de vuelta a la tienda.
4. Adyen procesa la transacción y envía un webhook.
5. El conector envía el estado del pedido en VTEX.

### Reglas Específicas

- **Reembolso**: Se admiten reembolsos totales y parciales directamente a través del conector.

## Affirm

Affirm es un servicio de "Compre ahora, pague después" (BNPL) que permite a los clientes pagar sus compras en cuotas mensuales fijas.

### Flujo de Pago

1. El cliente selecciona Affirm en el checkout.
2. El cliente es redirigido a Affirm para elegir un plan de pago y completar una verificación de crédito rápida.
3. Una vez aprobado, el cliente confirma la compra y es redirigido de vuelta a la tienda.
4. Adyen confirma la transacción y envía un webhook.
5. El conector actualiza el estado del pedido en VTEX.

### Reglas Específicas

- **Elegibilidad**: La disponibilidad depende de la evaluación crediticia del cliente por parte de Affirm.

## Bancontact Mobile

Bancontact Mobile permite a los clientes pagar utilizando la aplicación Bancontact en sus dispositivos móviles, a menudo a través de un código QR o redirección de aplicación a aplicación.

### Flujo de Pago

1. El cliente selecciona Bancontact Mobile en el checkout.
2. Se genera un código QR para que el cliente lo escanee con la aplicación Bancontact, o se le redirige a la aplicación si está en un dispositivo móvil.
3. El cliente confirma el pago dentro de la aplicación.
4. Adyen confirma la transacción y envía un webhook.
5. El conector actualiza el estado del pedido en VTEX.

### Reglas Específicas

- **Captura**: Siempre inmediata.
- **Reembolso**: Permitido en montos parciales o totales.

## Klarna

Klarna ofrece varias opciones de pago, lo que permite a los clientes elegir entre pagos inmediatos, en cuotas o diferidos.

### Flujo de Pago

1. El cliente selecciona Klarna como método de pago en el checkout.
2. El cliente elige entre las opciones de pago disponibles: Pay Now, Pay Over Time o Pay Later.
3. El sistema redirige al cliente a Klarna para la autenticación y aprobación de la transacción.
4. Klarna confirma el pago y envía un webhook al conector.
5. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Pay Now**: El monto total se debita inmediatamente de la cuenta bancaria o tarjeta del cliente.
- **Pay Over Time**: El cliente paga en varias cuotas según las opciones de Klarna.
- **Pay Later**: El cliente tiene un período establecido para realizar el pago sin intereses adicionales (según las reglas de Klarna y del comercio).
- **Autorización**: Realizada por Klarna y puede estar sujeta a una verificación de crédito.
- **Captura**: Automática tras la aprobación del pago.
- **Reembolso**: Permitido en montos parciales o totales, según las reglas de Klarna.
- **Cancelación**: Solo puede hacerse antes de la captura; después de eso, es necesario realizar un reembolso.

## iDEAL

iDEAL es un método de pago ampliamente utilizado en los Países Bajos, que permite transferencias bancarias directas.

### Flujo de Pago

1. El cliente selecciona iDEAL como método de pago en el checkout.
2. El sistema muestra una lista de bancos participantes para que el cliente elija.
3. El cliente es redirigido a su entorno bancario para la autenticación y aprobación del pago.
4. El banco confirma la transacción e iDEAL envía un webhook al conector.
5. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Captura**: Siempre inmediata, sin ventana de captura configurable.
- **Reembolso**: Permitido en montos parciales o totales, según las reglas del banco emisor.
- **Cancelación**: No es posible tras la finalización del pago.
- **Disponibilidad**: Solo para clientes con cuentas en bancos holandeses que participan en iDEAL.
- **Tiempo de confirmación**: Generalmente ocurre en segundos, lo que garantiza transacciones rápidas.

## P24

P24 es un método de pago popular en Polonia, que permite transferencias bancarias directas y pagos rápidos.

### Flujo de Pago

1. El cliente selecciona Przelewy24 (P24) en el checkout.
2. El sistema muestra una lista de bancos participantes para que el cliente elija.
3. El cliente es redirigido a su entorno bancario para la autenticación y aprobación del pago.
4. El banco confirma la transacción y P24 envía un webhook al conector.
5. El conector aprueba el pago y devuelve VTEX.

### Specific Rules

- **Captura**: Siempre inmediata, sin ventana de captura configurable.
- **Reembolso**: Permitido en montos parciales o totales, según las reglas del banco emisor.
- **Cancelación**: No es posible tras la finalización del pago.
- **Disponibilidad**: Solo para clientes con cuentas en bancos polacos que participan en P24.
- **Tiempo de confirmación**: Generalmente ocurre en segundos, lo que garantiza transacciones rápidas.