---
sidebar_position: 6
title: Reglas de Negocio
---


Este documento presenta las reglas de negocio aplicables a los diferentes métodos de pago utilizados en la plataforma. Cada método sigue un flujo de trabajo específico, con reglas claras para la autorización, captura, reembolso y cancelación. El objetivo es garantizar una experiencia segura y eficiente para clientes y comerciantes.

## Tarjetas de Crédito y Débito

Los pagos con tarjetas de crédito y débito implican múltiples pasos, desde el análisis de riesgo hasta la liquidación de la transacción.

### Flujo de Pagos

1. El cliente selecciona una tarjeta de crédito o débito como método de pago en la caja.
2. El sistema realiza un análisis de riesgos para minimizar los fraudes.
3. Si se aprueba, el pago es autorizado por la entidad emisora de la tarjeta.
4. La captura ocurre de acuerdo con la ventana de captura configurada en el conector.
5. La transacción se liquida, y el pedido se actualiza en VTEX.

### Reglas Específicas

- **Autorización**: Realizado después del análisis de riesgo, que puede ser automático o manual.
- **Captura**: Puede ser inmediato o dentro del período definido por el conector.
- **Reembolso**: Permitido en valores parciales o totales, dependiendo de las reglas del comprador.
- **Cancelación**: Solo se puede hacer antes de la captura; después de eso, un reembolso es necesario.
- **3DS (Autenticación Segura)**: Algunas transacciones pueden requerir autenticación vía **3D Secure** para mayor seguridad. Para las tarjetas de débito, la disponibilidad del 3DS depende de la red de la tarjeta y del emisor.

### Tokenización

Con Adyen, puede almacenar de forma segura uno o más detalles de pago por comprador, con el consentimiento del comprador. Esto le permite ofrecer pagos por suscripción, recargas automáticas en las cuentas de los compradores y proporcionar a sus compradores una experiencia de pago más rápida usando la tarjeta almacenada.

Nos referimos a estos detalles de pago guardados como tokens y al almacenamiento de los detalles de pago de un comprador como tokenización.

La tokenización se aplica en los siguientes escenarios:

- Pagos con Tarjeta de Crédito
- Pagos con 3DS
- Subscripciones
- Cambiar pedidos

El proceso de tokenización funciona de la siguiente manera:

1. Cuando se hace la primera solicitud con tarjeta de crédito y se selecciona la opción para guardar la tarjeta, el conector informará a Adyen para tokenizar la tarjeta.
2. Adyen entonces responderá con un token que puede ser utilizado para futuras transacciones.
3. Este token se almacena en VTEX, por lo que para cualquier transacción posterior del mismo usuario y tarjeta de crédito, solo el CCV y el token se envían a Adyen, y la información de la tarjeta no se transmite de nuevo.

## Pix

Pix es un método de pago instantáneo que permite transferencias rápidas y directas entre cuentas bancarias.

### Flujo de Pagos

1. El cliente selecciona Pix como método de pago en la compra.
2. El conector genera un **QR Code** dinámico y lo muestra al cliente.
3. El cliente realiza el pago a través de la aplicación bancaria.
4. La transacción se confirma en 10 segundos.
5. Adyen envía un webhook al conector.
6. El conector aprueba o paga y actualiza a VTEX, redireccionando o cliente a la página de Pedido Realizado.

### Reglas Específicas

- **Captura**: Siempre inmediata, sin ventana de captura configurable.
- **Reembolso**: Solo se permiten reembolsos totales; no son posibles reembolsos parciales.
- **Cancelación**: Un pago Pix no puede ser cancelado una vez completado.
- **Caducidad del código QR**: El código expira en 10 minutos. Si el pago se hace después de este período, VTEX no reconocerá la transacción, y el valor será automáticamente reembolsado.

## Boleto Bancario

El boleto bancario es una opción ampliamente utilizada para compras de mayor valor, pero depende de la compensación bancaria para la validación del pago.

### Flujo de Pagos

1. El cliente selecciona Boleto Bancario en la caja.
2. El conector genera un archivo PDF con el boleto.
3. El cliente realiza el pago vía banco, casa de lotería o aplicación bancaria.
4. La compensación se produce en 1 a 3 días hábiles.
5. Adyen confirma el pago y envía un webhook al conector.
6. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Reembolso**: No permitido. Si es necesario, el comerciante debe reembolsar manualmente vía transferencia bancaria.
- **Validez**: definida en el momento de la generación, variando de 1 a 30 días, dependiendo de la configuración del conector y las reglas bancarias.

## Apple Pay

Apple Pay es un método de pago digital que permite transacciones seguras a través de dispositivos Apple compatibles.

### Flujo de Pagos

1. El cliente selecciona Apple Pay como método de pago en la caja.
2. La aplicación muestra las tarjetas disponibles del cliente.
3. El cliente autentica la transacción vía Face ID, Touch ID o contraseña.
4. El pago sigue las reglas de la tarjeta seleccionada (crédito o débito).
5. Adyen confirma la transacción y envía un webhook al conector.
6. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Pago a plazos**: Disponible solo para tarjetas de crédito.
- **Autentificación**: todas las transacciones requieren autentificación biométrica o por contraseña para mayor seguridad.

## Klarna

Klarna ofrece varias opciones de pago, permitiendo a los clientes elegir entre pagos inmediatos, a plazos o diferidos.

### Flujo de Pagos

1. El cliente selecciona Klarna como método de pago en la caja.
2. El cliente elige entre las opciones de pago disponibles: Pagar ahora, Pagar a lo largo del tiempo o Pagar más tarde.
3. El sistema redirige al cliente a Klarna para la autenticación y aprobación de la transacción.
4. Klarna confirma el pago y envía un webhook al conector.
5. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Pagar ahora**: el importe total se carga inmediatamente de la cuenta bancaria o tarjeta del cliente.
- **Pagar a lo largo del tiempo**: el cliente paga en múltiples cuotas de acuerdo con las opciones de Klarna.
- ***Pagar más tarde**: El cliente tiene un plazo definido para hacer el pago sin intereses adicionales (de acuerdo con las reglas de Klarna y del comerciante).
- ***Autorización**: realizada por Klarna y puede estar sujeta a una verificación de crédito.
- **Captura**: automática tras la aprobación del pago.
- **Reembolso**: permitido en valores parciales o totales, dependiendo de las reglas de Klarna.
- *** Cancelación**: Solo se puede hacer antes de la captura; después de eso, un reembolso es necesario.

## iDEAL

iDEAL es un método de pago ampliamente utilizado en los Países Bajos, permitiendo transferencias bancarias directas.

### Flujo de Pagos

1. El cliente selecciona iDEAL como método de pago en la compra.
2. El sistema muestra una lista de bancos participantes para que el cliente elija.
3. El cliente es redirigido a su entorno bancario para autentificación y aprobación del pago.
4. El banco confirma la transacción, y iDEAL envía un webhook al conector.
5. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Captura**: siempre instantánea, sin ventana de captura configurable.
- **Reembolso**: permitido en valores parciales o totales, dependiendo de las reglas del banco emisor.
- **Cancelación**: No es posible después de completar el pago.
- **Disponibilidad**: Solo para clientes con cuentas bancarias en bancos holandeses que participan en iDEAL.
- **Tiempo de confirmación**: normalmente en segundos, lo que garantiza transacciones rápidas.

## P24

P24 es un método de pago popular en Polonia, que permite transferencias bancarias directas y pagos rápidos.

### Flujo de Pagos

1. El cliente selecciona Przelewy24 (P24) en la caja.
2. El sistema muestra una lista de bancos participantes para que el cliente elija.
3. El cliente es redirigido a su entorno bancario para autentificación y aprobación del pago.
4. El banco confirma la transacción, y P24 envía un webhook al conector.
5. El conector aprueba el pago y actualiza VTEX.

### Reglas Específicas

- **Captura**: siempre instantánea, sin ventana de captura configurable.
- **Reembolso**: permitido en valores parciales o totales, dependiendo de las reglas del banco emisor.
- **Cancelación**: No es posible después de completar el pago.
- **Disponibilidad**: Solo para clientes con cuentas bancarias en bancos polacos que participan en P24.
- **Tiempo de confirmación**: normalmente en segundos, lo que garantiza transacciones rápidas.