---
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 14
slug: /release-notes
---

# Adyen Connector - Release Notes

## [v2.39.7]
### Mejoras Técnicas y de Rendimiento
- Memoria del servicio aumentada de 256MB a 512MB para mejorar la estabilidad y soportar mayores volúmenes de transacciones sin degradación del rendimiento.


---

## [v2.39.6]
### Nuevas Funcionalidades
- Introducida la integración de Google Pay a través de VTEX Wallet con integración headless, permitiendo el procesamiento fluido de transacciones Google Pay con soporte 3DS dataOnly y visualización precisa del origen del pago en Adyen CA.
- Mejoras en la autorización de PayPal con campos enriquecidos en el payload y logs de error detallados para mejor diagnóstico y soporte.
- Implementado enrutamiento vía proxy de URL de workspace y añadido el campo orderformId en la ruta saveCheckoutInfo, mejorando el seguimiento de sesión y la fiabilidad de la integración.
- Añadidos logs de transacción Pix y de pago rechazado para mayor observabilidad en los flujos de pago.

### Correcciones de Errores
- Corregido el código de respuesta del proxy de payment-details para garantizar la correcta propagación del estado HTTP a VTEX.
- Corregida la estructura del payload authenticationData y el campo additionalData en el cuerpo de solicitud de tarjeta para mejorar la compatibilidad con 3DS.

### Mejoras Técnicas y de Rendimiento
- Habilitada la autenticación 3DS forzada como opción configurable para mayor cumplimiento de seguridad.
- Atributos de log actualizados en los servicios de pago para consistencia y mejor depuración.


---

## [v2.39.5]
### Mejoras Técnicas y de Rendimiento
- Release de estabilidad interna sin cambios visibles para el usuario.


---

## [v2.39.4]
### Nuevas Funcionalidades
- Mejorada la generación del ID de masterdata para tokenización: el identificador de tarjeta ahora utiliza merchantId+accountId en lugar de userId+cardBin, evitando conflictos cuando múltiples tarjetas con el mismo BIN son utilizadas por el mismo cliente.

### Correcciones de Errores
- Corregida la configuración de interacción del comprador para transacciones tokenizadas para garantizar el correcto procesamiento del pago.
- Corrigida la referencia de versión del cliente de payment-details y alineado el campo vtexUserId con el identificador de token en masterdata.


---

## [v2.39.3]
### Correcciones de Errores
- Corregidos los flujos de reembolso y cancelación en la versión de tokenización para garantizar la correcta finalización de las transacciones.
- Resuelto el procesamiento de tokenización activa para evitar fallos en intentos de pago tokenizados.
- Corregida la configuración de timeout a 5 segundos y alineada la nomenclatura de atributos de log (usando transactionId) para consistencia entre los servicios.

### Mejoras Técnicas y de Rendimiento
- Añadidos logs de observabilidad en el flujo de tokenización para diagnósticos mejorados.


---

## [v2.39.2]
### Nuevas Funcionalidades
- Añadido soporte para la configuración de tokenización, permitiendo a los comerciantes configurar la tokenización de tarjeta guardada para clientes recurrentes.


---

## [v2.39.1]
### Nuevas Funcionalidades
- Mejorado el mensaje para comerciantes que experimentan fallas de cancelación cuando está involucrado un Proveedor de Servicio de Pagos (PSP).

### Correcciones de Errores
- Proceso de cancelación mejorado en todos los flujos de pago.


---
## [v2.39.0]
### Nuevas Funcionalidades
- Se agregó soporte para PayPal y se mejoraron los payloads de pago con riskData y shopperConversionId. Se introdujo la configuración de retraso de captura para tarjetas, Google Pay y Apple Pay, junto con mejoras en la observabilidad de los logs en Webhooks, reembolsos y cancelaciones.

### Correcciones de Errores
- Mejora en la robustez de los logs y manejo de errores para escenarios de tarjeta inválida (errores Adyen 101/905). Se resolvieron los tiempos de espera de las transacciones optimizando las llamadas de Supabase y agregando límites de caracteres en las claves de idempotencia para garantizar la compatibilidad con la API.


---

## [v2.38.2]
### Nuevas Funcionalidades
- Sistema de registro mejorado con la introducción de Winston logger, incluyendo detalles del origen del archivo e implementación en los servicios de POS. Se agregaron enlaces a la documentación para una mejor orientación del comerciante.

### Correcciones de Errores
- Mejora en los flujos de Webhook y POS mediante el refinamiento del almacenamiento de datos en VBase, optimización de la idempotencia para reembolsos y cancelaciones, y resolución de tiempos de espera en la sincronización de terminales.

### Mejoras Técnicas y de Rendimiento
- Estandarización de las implementaciones del registrador y optimización de la recuperación de datos de terminales utilizando procesamiento paralelo para un mejor rendimiento.


---

## [v2.38.1]
### Correcciones de Errores
- Se agregó manejo de errores para la recuperación de la clave API de VBase para evitar fallas en la integración.


---

## [v2.36.6]
### Nuevas Funcionalidades
- Actualización de versión interna para estabilidad y mantenimiento.


---

## [v2.36.5]
### Nuevas Funcionalidades
- Introducción de soporte para tokenización 3DS y actualización de la API de POS para mejores interacciones con terminales.

### Correcciones de Errores
- Mejoras integrales en la gestión de tokens para suscripciones y compras POS, incluyendo correcciones en la denominación de tokens 3DS y manejo de sesiones. Se actualizaron las APIs de terminales obsoletas y se optimizaron los tiempos de espera de las APIs para una mejor confiabilidad.


---

## [v2.32.0]
### Nuevas Funcionalidades
- Se amplió el soporte de métodos de pago con la introducción de Affirm y configuraciones mejoradas para Apple Pay. Se mejoró la experiencia de pago con un nuevo flujo de reintento para componentes web y APIs de redirección, y se implementó un proxy para los métodos de marketing y detalles de pago.

### Correcciones de Errores
- Se refactorizó el motor de pago principal reemplazando dependencias obsoletas, optimizando el manejo de errores para conflictos 409 y mejorando la consistencia general de la interfaz en la configuración de VTEX.


---

## [v2.30.13]
### Nuevas Funcionalidades
- Se agregó soporte para PayPal y Affirm, junto con mejoras en los tiempos de espera de la API y registros mejorados para una mejor observabilidad.

### Correcciones de Errores
- Resolución de problemas de integración mediante la reversión a una versión estable.


---

## [v2.30.12]
### Nuevas Funcionalidades
- Lanzamiento funcional inicial del conector.


---

## [v2.30.6]
### Correcciones de Errores
- Mejora en el manejo de errores con la adición de mensajes descriptivos e implementación de funciones de denegación para solicitudes fallidas.


---

## [v2.30.5]
### Nuevas Funcionalidades
- Estandarización de las respuestas de error de la API para una mayor claridad en la integración.

### Correcciones de Errores
- Resolución de problemas en los flujos de Tarjeta de Crédito y 3DS, y mejora en la claridad de los mensajes de error.


---

## [v2.30.4]
### Correcciones de Errores
- Se agregó lógica de sincronización para manejar transacciones ya canceladas dentro del entorno VTEX.


---

## [v2.28.1]
### Nuevas Funcionalidades
- Mejora en la seguridad e integridad de los datos con la adición de validaciones en las API de BrowserInfo y POS.

### Correcciones de Errores
- Resolución de problemas de validación relacionados con el formato de CNPJ.


---

## [v2.27.2]
### Nuevas Funcionalidades
- Mejora en el seguimiento de las transacciones al incluir el atributo paymentId en el almacenamiento de datos.


---

## [v2.27.1]
### Nuevas Funcionalidades
- Mejora en el flujo de cancelación para admitir solicitudes sin el ID de transacción (TID).


---

## [v2.26.9]
### Correcciones de Errores
- Se realizó una limpieza de código y se implementaron optimizaciones inicialis para resolver problemas de tiempo de espera de la API.


---

## [v2.26.6]
### Correcciones de Errores
- Resolución de un problema crítico que causaba bucles infinitos en los flujos de transacciones POS.


---

## [v2.26.4]
### Nuevas Funcionalidades
- Se agregaron registros detallados para las operaciones de POS para facilitar la resolución de problemas y el monitoreo.


---

## [v2.26.1]
### Correcciones de Errores
- Optimización de los flujos 3DS mediante la eliminación de requisitos redundantes de BrowserInfo de la API.


---

## [v2.26.0]
### Nuevas Funcionalidades
- Gestión de suscripciones mejorada mediante la introducción de nuevos flujos utilizando el token networkTxReference. Visibilidad de las transacciones mejorada al agregar información del adquirente a los detalles del pago y las respuestas de Webhook.

### Correcciones de Errores
- Se corrigieron las convenciones de nomenclatura de clases en los controladores de Webhook para una mejor consistencia del código.


---

## [v2.25.1]
### Correcciones de Errores
- Se restauró la estabilidad de la integración al volver a una versión estable y se actualizaron los detalles del pago para admitir varias cuentas. Se estandarizaron los datos de BrowserInfo para usar HTTPS de forma predeterminada.


---

## [v2.24.15]
### Nuevas Funcionalidades
- Se agregó el atributo OriginalReference en los payloads de POS, Klarna y tarjetas para mejorar la conciliación de transacciones.

### Correcciones de Errores
- Se realizó un mantenimiento general con la eliminación de código heredado y la actualización de los identificadores del proyecto.


---

## [v2.24.11]
### Correcciones de Errores
- Mejora en la confiabilidad de los pagos al agregar soporte para authCode e implementar verificaciones para precios indefinidos.


---

## [v2.24.10]
### Nuevas Funcionalidades
- Actualización exhaustiva de los payloads de pago para transacciones de Klarna, Boleto, Pix y tarjetas, incluida la adición de adaptadores de artículos de línea y soporte para shopperStatement.

### Correcciones de Errores
- Optimización de la lógica de suscripción mediante el refinamiento de las verificaciones condicionales en el proceso de recuperación del formulario de pedido.


---

## [v2.24.7]
### Nuevas Funcionalidades
- Se actualizaron los modelos de contacto para Apple Pay y se mejoró la documentación del proyecto.

### Correcciones de Errores
- Mejora en la validación de datos para Klarna y otros métodos de pago mediante la implementación de verificaciones de longitud de caracteres en documentos sensibles.


---

## [v2.24.5]
### Nuevas Funcionalidades
- Se amplió la documentación para proporcionar pautas de integración más claras.

### Correcciones de Errores
- Se corrigieron los problemas de transmisión de datos en las solicitudes de detalles de pago.


---

## [v2.24.4]
### Nuevas Funcionalidades
- Se introdujo el soporte para Cartes Bancaires y se agregó la propiedad amountExcludingTax a los payloads de pago.

### Correcciones de Errores
- Resolución de problemas de precisión decimal en los cálculos de impuestos.


---

## [v2.24.3]
### Nuevas Funcionalidades
- Mejora en la experiencia del desarrollador con la adición de comentarios JSDoc y registros mejorados en toda la base de código.


---

## [v2.24.2]
### Nuevas Funcionalidades
- Se amplió el soporte de Klarna con las opciones "Pagar ahora" y "Pagar después", y se agregaron registros mejorados para las transacciones POS.

### Correcciones de Errores
- Mejora en la confiabilidad de la API mediante el refinamiento del manejo de estados y la eliminación de datos de país codificados.


---

## [v2.24.0]
### Nuevas Funcionalidades
- Mejora en la robustez de la integración con una nueva ruta de healthcheck y recuperación automatizada de la interfaz para pagos fallidos. Optimización del almacenamiento de datos centralizando el guardado de transacciones en los detalles del pago.

### Correcciones de Errores
- Se agregó soporte para Bancontact Mobile y se refinó la lógica de almacenamiento de VBase para evitar la duplicación de datos.


---

## [v2.23.16]
### Nuevas Funcionalidades
- Se agregó soporte para pagos de Klarna en la configuración.

### Mejoras Técnicas y de Rendimiento
- Optimización de la integración de Klarna mediante la implementación de soporte para códigos de país ISO Alpha-2 y la refactorización de código heredado.


---

## [v2.23.15]
### Correcciones de Errores
- Validación de las configuraciones de Apple Pay en la aplicación de pago para una mayor estabilidad.


---

## [v2.23.14]
### Nuevas Funcionalidades
- Introducción de soporte para Klarna Account e implementación del controlador Apple Pay v2 basado en los estándares de Adyen. Adición de funciones de utilidad para la conversión de ISO de país.

### Correcciones de Errores
- Mejora en la interfaz de pago y refinamiento de la lógica de backend para el manejo de códigos de país y autorización de pagos.

### Mejoras Técnicas y de Rendimiento
- Limpieza de artefactos del entorno de desarrollo y eliminación de funciones de pago no utilizadas.


---

## [v2.23.13]
### Correcciones de Errores
- Mejora de los datos de transacción mediante la inclusión de metadados en los payloads de solicitud.


---

## [v2.23.8]
### Correcciones de Errores
- Mejora de la calidad del código mediante linting y refinamiento del estilo visual del modal de selección de iDeal.


---

## [v2.23.2]
### Nuevas Funcionalidades
- Se agregó soporte de configuración para Bancontact Mobile.


---

## [v2.22.1]
### Correcciones de Errores
- Estandarización de las convenciones de nomenclatura para Apple Pay y mejora de la seguridad mediante el enmascaramiento de la Client Key en la interfaz de configuración.


---

## [v2.22.0]
### Correcciones de Errores
- Resolución de problemas de diseño en el cuadro de selección de pago de iDeal.


---

## [v2.21.7]
### Nuevas Funcionalidades
- Introducción del servicio IdealV2 con un estilo de selección de emisores mejorado y una integración más sólida basada en los estándares de Adyen.

### Correcciones de Errores
- Estandarización del control de versiones interno para alinearlo con la arquitectura más reciente del conector.


---

## [v2.21.5]
### Nuevas Funcionalidades
- Mejora del flujo de la Sales App con la adición de la verificación de transacciones POS durante el proceso de cancelación.


---

## [v0.0.3]
### Correcciones de Errores
- Finalización del rebranding del proyecto y limpieza de código para las etapas iniciales de lanzamiento.


---

