---
sidebar_position: 5
title: Configuración de POS (Point of Sale)
---

El conector Adyen para VTEX admite transacciones de **Punto de Venta (POS)**, lo que permite una integración fluida entre sus tiendas físicas y la plataforma VTEX.

## Requisitos previos

Antes de configurar el POS en VTEX, asegúrese de que:
1. Tiene una cuenta de Adyen con POS habilitado.
2. Sus terminales POS están registrados y asignados a las tiendas correctas en el Área de Cliente de Adyen.
3. Tiene la **URL de POS en vivo (Live POS URL)** si se encuentra en un entorno de producción.

## Configuración del proveedor de POS en VTEX

1. En el Admin de VTEX, vaya a **Configuración de la tienda > Pagos > Proveedores**.
2. Edite su proveedor **AdyenV3**.
3. En el campo **Live POS URL**, ingrese el endpoint de la API del terminal proporcionado por Adyen (ej: `https://terminal-api-live.adyen.com`).
4. Haga clic en **Guardar**.

## Condiciones de pago para POS

Para ofrecer el POS como opción de pago:
1. Vaya a **Configuración de la tienda > Pago > Configuración**.
2. En la pestaña **Condiciones de pago**, haga clic en el botón **+**.
3. Busque los métodos de pago POS específicos (ej: **Venda Direta Debito** o **Venda Direta Credito**).
4. Asócielos con el proveedor **AdyenV3**.
5. Establezca el estado como **Activo** y haga clic en **Guardar**.

## Lógica de selección de terminal

Cuando un cliente selecciona un método de pago POS en la caja (comúnmente usado en escenarios de "Pasillo Infinito" o Sales App), el conector necesita saber qué terminal debe procesar el pago.

### Cómo funciona:

1. **Descubrimiento de terminales**: El conector busca automáticamente todos los terminales y tiendas disponibles vinculados a su cuenta de Adyen.
2. **Selección del usuario**: Si el terminal no está preconfigurado o no es reconocido, el conector redirigirá al usuario a una pantalla de selección (formulario JSON Schema).
3. **Formulario de selección**:
   - **Tienda**: El usuario selecciona la tienda física donde se realiza la transacción.
   - **Terminal**: El usuario selecciona el terminal específico (por número de serie/POIID) de la lista de terminales asignados a esa tienda.
4. **Procesamiento**: Una vez seleccionado, el conector envía la solicitud de pago directamente al terminal elegido.

> **Nota técnica**: La lista de terminales y tiendas se obtiene en tiempo real de la API de administración de Adyen. En cuentas con una gran cantidad de tiendas/terminales, este proceso puede tardar unos segundos, ya que el conector itera a través de todos los resultados paginados para asegurar que la lista esté completa.

## Solución de problemas de POS

- **Terminal no encontrado**: Asegúrese de que el terminal esté en línea y correctamente asignado a una tienda en el Área de Cliente de Adyen.
- **Tiempo de espera (Timeout)**: Si la lista de selección de terminales tarda demasiado en cargarse, verifique las permisos de su clave de API de Adyen y la cantidad de tiendas/terminales en su cuenta.
- **Pago denegado en el terminal**: Verifique la conexión del terminal y asegúrese de que el método de pago esté habilitado para ese terminal específico.
