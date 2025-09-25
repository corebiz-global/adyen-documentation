---
sidebar_position: 5
title: Flujo de Pago
---


## Autorizando

El flujo de pago comienza con el paso **Autorización**, que ocurre justo después del pago. En este momento, el cliente selecciona el método de pago y confirma la compra haciendo clic en **"Finalizar Compra."** VTEX luego recopila toda la información necesaria - como los detalles de la tarjeta, información de pedido y otras credenciales - y el conector de pago los envía de forma segura a Adyen. Esta transmisión marca el comienzo de la comunicación esencial entre las plataformas, asegurando que todos los elementos de la transacción se registren correctamente para los próximos pasos.

## Autorizado

En esta etapa, Adyen envía la información recibida a los bancos emisores, que realizan una serie de verificaciones. Verifican la autenticidad de los datos, la disponibilidad de fondos y aplican protocolos de seguridad como los estándares **PCI DSS** para prevenir el fraude. El éxito de este paso es crucial para que la transacción se lleve a cabo sin problemas, asegurando que el pago pueda procesarse con seguridad.

## Aprobado

Una vez que el banco emisor autoriza la transacción, ésta alcanza el paso de **Aprobado**. Esto significa que el pago ha sido aceptado oficialmente, y todos los criterios de seguridad y validación se han cumplido. El cliente es entonces redirigido a la página **"Pedido realizado"** confirmando que el pedido ha sido registrado. Además, el sistema puede enviar notificaciones por correo electrónico o SMS para reforzar que la compra se ha completado con éxito.

## Denegado

Si la transacción no está autorizada por el banco emisor, el pago es rechazado. Esto puede suceder por varias razones, tales como:
- Fondos insuficientes
- Sospecha de fraude
- Detalles incorrectos
- Restricciones en la tarjeta del cliente

Cuando esto ocurre, el sistema inmediatamente notifica al cliente, sugiriendo que intente un método de pago diferente o póngase en contacto con su banco para más detalles.

## Captura

En el paso de **Captura**, la cantidad previamente autorizada es retenida o debitada de la cuenta del cliente, dependiendo del período de captura configurado. Este proceso puede tener lugar inmediatamente o dentro del plazo establecido para cada método de pago. Aquí, la **pre-autorización** se convierte en un compromiso financiero real. El sistema monitorea la transacción para asegurar que el monto cargado corresponda al valor exacto de la compra, previniendo discrepancias y asegurando la integridad del flujo de pagos.

## Cancelado

Una transacción puede ser cancelada antes o después de la captura por varias razones:
- A petición del cliente (si decide cancelar antes de confirmar el pago).
- Por el comerciante (en casos de sospecha de fraude, errores de pedido o problemas operativos).
- Debido a fallas en el proceso (como errores técnicos o irregularidades en cualquier etapa).

Cuando una transacción es cancelada, el sistema impide que se cargue el importe o revierte inmediatamente la autorización, asegurando que el cliente no sea cobrado.

## Liquidación

Después de la captura, el pago pasa a la etapa de **Liquidación**, donde el valor debitado se prepara para transferencia al tendero. La liquidación puede ocurrir inmediatamente o sólo después de la emisión de la factura, dependiendo de las reglas del negocio. Durante esta etapa, se realizan conciliaciones financieras y se aplican las tasas o descuentos aplicables, asegurando que el valor final sea preciso antes de la transferencia.

## Liquidando

En este punto, el proceso de liquidación se inicia oficialmente. Adyen transfiere el valor capturado a la cuenta del comerciante, siguiendo todos los requisitos contractuales y regulatorios. Este paso implica una verificación detallada de los valores, junto con la correcta aplicación de comisiones y deducciones como se describe en el contrato. Esta conclusión refuerza la confiabilidad del sistema integrado entre VTEX y Adyen, proporcionando seguridad tanto para el comerciante como para el cliente.

## Liquidado

En el último paso de **Liquidado**, la liquidación del pago se completa con éxito. Todos los procedimientos - desde la autorización inicial hasta la transferencia de fondos - se ejecutaron correctamente. Como resultado, el valor adeudado al comerciante se pone a disposición para su uso, finalizando de manera eficaz y segura el proceso de pago.

## Reembolsado

Si es necesario, una transacción capturada puede pasar por la etapa de **Reembolsado**, donde el importe debitado se devuelve al cliente. El reembolso puede ser **total o parcial**, dependiendo de la política del comerciante y el tipo de compra. Este proceso puede ser iniciado tanto por el cliente como por el comerciante, típicamente en casos de devoluciones de productos, cancelaciones de servicios o errores de pago. Una vez procesado el reembolso, el cliente recibe el valor de vuelta a través del mismo método de pago utilizado en la compra.

![paymentflow](https://i.imgur.com/yWGGPkR.png)