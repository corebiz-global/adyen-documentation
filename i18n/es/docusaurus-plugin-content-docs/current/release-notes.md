---
title: Notas de Lanzamiento
sidebar_label: Notas de Lanzamiento
sidebar_position: 14
slug: /release-notes
---

# Adyen Connector - Notas de Lanzamiento

## [v2.39.1]
### Nuevas Funcionalidades
- mensaje añadido para el comercio cuando falla la cancelación y la transacción tiene PSP

### Correcciones de Errores
- cancelación en todos los flujos


---

## [v2.39.0]
### Nuevas Funcionalidades
- corrección en la configuración del web-component de google pay y cambio de clave para verificar reintento
- paypal
- añadiendo riskData y shopperConversionId al payload de /payments de adyen
- añadiendo campo captureDelayHours para googlepay e applepay
- **card**: añadiendo campo captureDelayHours en el cuerpo de la solicitud de creación de pago con tarjeta
- función de utilidad para calcular captureOptions en horas
- añadiendo supabaseTransport ao log de webhook
- registro de falla de autorización de adyen
- añadir logs para webhook, redirección, detalles, reembolso y cancelación
- añadir límite de caracteres para idempotencia

### Correcciones de Errores
- resolver conflictos
- eliminar async en la función y corregir logs
- deshacer modificación en configuration.js
- eliminando llamadas de flush de supabase en wintslogger. esto provoca tiempo de espera en la transacción si la respuesta de supabase tarda demasiado
- error al reembolsar al enviar idempotencykey con caracteres especiales
- añadir límite de caracteres en la clave de idempotencia
- mejorar robustez de los logs, observabilidad y tratamiento de errores
- rechazo explícito para errores de adyen 101/905 y corrección de error en el cliente pci
- tratar errores de tarjeta inválida 101 y 905_x como rechazados y actualizar gitignore
- logs de cuenta/workspace


---

## [v2.38.2]
### Nuevas Funcionalidades
- Mejorar logs con origen del archivo y detalles del error
- Añadir winstonLogger al servicio de creación de POS
- Añadir configuración inicial de Winston logger
- añadir enlace al documento

### Correcciones de Errores
- Ajustar posición del logger en healthcheck
- eliminar nombre del conector en el webhook
- eliminar recurringProcessingModel y mejorar idempotencia de reembolso y cancelación
- eliminar tokenización, mejorar algunos logs, proteger algunos vbase
- añadir vbase para guardar datos en el flujo de pos
- tiempo de espera para obtener terminales e intento de deviceout

### Mejoras Técnicas y de Rendimiento
- obtener orderformId y tiempo de espera para la API de gestión
- **pos**: Estandarizar implementación de winston logger en create.service
- **adyen/terminal**: refactorización de la función getAllData para usar Promise.all()


---

## [v2.38.1]
### Correcciones de Errores
- try-catch en el vbase de api-key


---

## [v2.37.0]
### Nuevas Funcionalidades
- añadir oney a la configuración


---

## [v2.36.6]
### Nuevas Funcionalidades
- cambiar versión


---

## [v2.36.5]
### Nuevas Funcionalidades
- actualizar con master
- añadir corrección de pos y actualización de la api de pos
- token en 3DS
- token en 3DS
- cambiar versión para prueba
- cambiar versión para prueba
- token en 3DS

### Correcciones de Errores
- añadir lógica de no store
- mejorar lógica
- mejorar lógica
- eliminar modificación de opciones
- eliminar lógica de configuración de tokenización
- devolver tiempo de espera fijo para api de sincronización
- añadir api de acceso de salida
- actualizar la API de terminal obsoleta
- guardar/escribir token
- tokenización de suscripción
- paymentMethodRequest
- Ajustar tokenName de 3DS
- guardar/escribir token
- Ajustar guardado de token en la primera compra pos
- tokenización de suscripción
- rollback del código GetTransaction
- paymentMethodRequest
- tratar solicitud OPTIONS en POS Submit Terminal
- crear versión beta para probar logs
- Ajustar tokenName de 3DS
- guardar/escribir token
- Ajustar guardado de token en la primera compra pos
- tokenización de suscripción
- rollback del código GetTransaction
- paymentMethodRequest
- actualizar con master


---

## [v2.32.0]
### Nuevas Funcionalidades
- añadir configuración de tokenización y cambiar versión
- cambiar versión
- merge con master
- cambiar versión para beta
- añadir proxy al método de detalles
- cambiar docs de apple pay
- añadir condición para cancelar una transacción con error
- eliminar prueba y actualizar algunas áreas
- añadir readme al proyecto
- merge master
- actualizar front-end y corregir payload builder
- crear servicio affirm y crear configuración de la payment app
- añadir proxy al mkt
- añadir flujo de reintento en la api de redirección
- añadir flujo de reintento para pagos webcomponent
- simular error y autenticar en el reintento

### Correcciones de Errores
- eliminar enlaces
- ajustar sintaxis y eliminar caracteres
- ajustar texto en la Configuración VTEX
- eliminar console.log
- añadir Affirm real
- añadir filtro para errores 409
- respuesta de autorización de pago y tratamiento de errores en la payment app
- eliminar axios y refactorizar código
- versión para prueba


---

## [v2.30.13]
### Nuevas Funcionalidades
- añadir paypal y affirm en el manifest
- cambiar versión para crear una versión beta para prueba
- cambiar tiempo de espera y añadir logs

### Correcciones de Errores
- rollback de la versión 2.30.12


---

## [v2.30.12]
### Nuevas Funcionalidades
- primera versión funcional


---

## [v2.30.6]
### Correcciones de Errores
- añadir mensaje de error
- añadir función de denegación cuando falla una solicitud


---

## [v2.30.5]
### Nuevas Funcionalidades
- respuestas de error

### Correcciones de Errores
- tarjeta de crédito
- 3ds
- mensajes de error


---

## [v2.30.4]
### Correcciones de Errores
- añadir función para cancelar transiciones ya canceladas en VTEX


---

## [v2.28.1]
### Nuevas Funcionalidades
- añadir validaciones en la api de browserinfo
- añadir validación en una api de POS

### Correcciones de Errores
- cnpj


---

## [v2.27.2]
### Nuevas Funcionalidades
- añadir atributo paymentId para guardar transacciones


---

## [v2.27.1]
### Nuevas Funcionalidades
- corregir cancelación sin tid


---

## [v2.26.9]
### Correcciones de Errores
- eliminar cosas de prueba
- eliminar cosas de prueba
- eliminar cosas de prueba
- primera versión de la corrección de tiempo de espera


---

## [v2.26.6]
### Correcciones de Errores
- error de looping en POS


---

## [v2.26.4]
### Nuevas Funcionalidades
- añadir logs de POS


---

## [v2.26.1]
### Correcciones de Errores
- eliminar browserInfo por api para 3ds


---

## [v2.26.0]
### Nuevas Funcionalidades
- añadir adquiriente en la respuesta de payments-detail
- merge con master
- añadir información del adquiriente en la respuesta del conector vía webhook
- implementa un segundo flujo de suscripción para obtener el token de la transacción anterior
- añadiendo flujo networkTxReference en los detalles del pago
- añadiendo flujo networkTxReference en el webhook
- nuevo flujo de suscripciones añadiendo token networkTxReference

### Correcciones de Errores
- nombre de la clase en el webhook


---

## [v2.25.1]
### Correcciones de Errores
- volver a versión estable en el manifest
- actualizar payment-details para funcionar con dos cuentas
- origin https en browser info viniendo de los datos de la api


---

## [v2.24.15]
### Nuevas Funcionalidades
- añadir OriginalReference en el payload de POS
- añadir OriginalReference en el payload de POS
- añadir OriginalReference en el payload de klarna
- añadir OriginalReference en el payload de tarjetas

### Correcciones de Errores
- eliminar cosas de phonehouse
- cambiar package.json para el nuevo nombre de la app


---

## [v2.24.11]
### Correcciones de Errores
- resolver conflictos de merge
- versión
- añadir authCode
- añadir datos ficticios
- verificar precio indefinido


---

## [v2.24.10]
### Nuevas Funcionalidades
- cambiar integrador en la información de la app
- cambiar integrador en la información de la app
- añadir atributos al payload de klarna
- añadir atributos al payload de solicitud de boleto
- actualizar versión de boleto
- añadir atributos al tipo de solicitud de boleto
- actualizar versión de klarna
- añadir atributos al tipo lineItem
- añadir atributos al payload estándar
- actualizar versión de la clase de pago estándar
- añadir adaptador de ítems de línea a las utilidades
- añadir shopperStatement al payload de tarjeta
- actualizar versión a 71
- añadir ítems de formato a la tarjeta
- añadir atributos al payload
- añadir atributos al tipo de payload de tarjeta
- downgrade de la versión de pago pix
- actualizar adaptador de ítems de línea de vouchers
- upgrade de la versión de pago pix
- añadir atributos al payload pix
- añadir atributos devueltos en la lista de ítems
- añadir atributos al tipo pix

### Correcciones de Errores
- prueba de suscripción dentro del getOrderFormIf


---

## [v2.24.7]
### Nuevas Funcionalidades
- actualizado apple pay y modelo de email de contacto de adyen
- nueva información añadida al Readme

### Correcciones de Errores
- añadir nuevo atributo accept a los headers de getImageBase64FromUrl
- implementa una validación si el documento tiene más de tres caracteres en klarna
- implementa una validação si el documento tiene más de tres caracteres


---

## [v2.24.5]
### Nuevas Funcionalidades
- docs actualizados
- nuevo archivo de doc

### Correcciones de Errores
- versión
- datos de detalles de pago enviados
- versión


---

## [v2.24.4]
### Nuevas Funcionalidades
- merge con master
- añadir propiedad amountExcludingTax
- beta
- añadir tipo cartes bancaires
- añadir cartes bancaires a la configuración

### Correcciones de Errores
- versión
- actualizando análisis de errores
- decimal de impuestos
- decimal de impuestos


---

## [v2.24.3]
### Nuevas Funcionalidades
- añadidos logs y docs para el próximo lanzamiento
- logs y jsdocs


---

## [v2.24.2]
### Nuevas Funcionalidades
- añadir nuevo pago al switch
- añadir nuevo pago al switch
- añadir logs al POS
- añadir klarna pay now al conector
- añadir controller klarna pay later
- añadir carpeta klarna pay later

### Correcciones de Errores
- resolver conflictos
- eliminar país mockeado
- cambiar busy para devolver denegación


---

## [v2.24.0]
### Nuevas Funcionalidades
- añadir ruta de healthcheck en la API
- recargar 10 segundos después de falla de pago
- guardar pago solo en los detalles del pago y devolver paymentId/transactionId/orderId al web component

### Correcciones de Errores
- error de lint
- error de lint
- cambiar atributo amountIncludingTax en el get line items
- cambiar URLs de las solicitudes
- eliminar guardado en vbase de auth/payment
- solo guardar transacción en vbase de notificación
- añadir datos de pago en vbase por orderId e cambiar versión de la API
- añadir metadatos en el payload de bancontact
- Bancontact Mobile en las configuraciones


---

## [v2.23.16]
### Nuevas Funcionalidades
- añadir pagos klarna a la configuración

### Correcciones de Errores
- eliminar verificación de prueba de producción

### Mejoras Técnicas y de Rendimiento
- cambiar clase klarna para añadir código de país en alpha 2 en el payload de la solicitud
- mover código antiguo de klarna a carpeta legacy


---

## [v2.23.15]
### Correcciones de Errores
- probar configuración de apple pay en la payment app


---

## [v2.23.14]
### Nuevas Funcionalidades
- añadir cuenta klarna en el conector
- añadir carpeta cuenta klarna
- añadir controller Apple Pay v2 al flujo de autenticación del conector
- crear un nuevo controller apple pay basado en el estándar de adyen
- añadir Tipo Apple Pay
- añadir configuración applepay a la payment app
- añadir carpeta utils a la payment app con función de conversor iso de país

### Correcciones de Errores
- versión
- css en el botón de cerrar
- función get country
- if en el on submit
- pasar conversor iso de país al backend
- tipo de pagamento
- atributo svg
- añadir autorización y countryCode a la función Create Payment
- actualizar versión beta para pruebas

### Mejoras Técnicas y de Rendimiento
- eliminar moneda falsa en ambiente de desarrollo
- eliminar moneda falsa en ambiente de desarrollo
- eliminar función no utilizada del pago iDeal


---

## [v2.23.13]
### Correcciones de Errores
- añadir metadatos al payload de la solicitud


---

## [v2.23.8]
### Correcciones de Errores
- algunas correcciones de lint


---

## [v2.23.6]
### Correcciones de Errores
- cambiar estilo en el modal de iDeal


---

## [v2.23.2]
### Nuevas Funcionalidades
- añadir configuración Bancontact Mobile


---

## [v2.22.1]
### Correcciones de Errores
- cambiar tipo de Client key a password
- ApplePay a Apple Pay


---

## [v2.22.0]
### Correcciones de Errores
- corrección de la caja de ideal


---

## [v2.21.7]
### Nuevas Funcionalidades
- eliminar emisores aleatorios de iDeal
- actualizar app front-end para estilizar selección de emisores
- crear servicio IdealV2 extendiendo AdyenStandardService e modificar componente react para renderizar props de iDeal
- crear módulo IdealV2 y añadirlo a connector.ts e @types/connector
- añadir IdealV2 en configuration.json

### Correcciones de Errores
- cambiar v2 a v3
- cambiar v2 a v3
- cambiar v2 a v3


---

## [v2.21.5]
### Nuevas Funcionalidades
- **SalesAppTransaction**: añadiendo verificación de transacciones pos en el proceso de cancelación


---

## [v0.0.3]
### Correcciones de Errores
- eliminar cosas de phonehouse
- cambiar package.json para el nuevo nombre de la app


---
