---
sidebar_position: 3
title: Clave de API
---


## Configuración de credenciales API

Genere y configure su clave de API como se describe en [Documentación de plataformas de Adyen](https://docs.adyen.com/development-resources/api-credentials/). Asegúrate de almacenar tu clave API de forma segura y usarla para autenticar las solicitudes de VTEX a Adyen.

1. En su [Área de cliente de Adyen](https://ca-test.adyen.com/ca/ca/overview/default.shtml), en el menú lateral, haga clic en **Desarrolladores** y luego haga clic en **Credenciales de API**;
2. Haga clic en el botón **Crear nueva credencial** en el lado derecho de la pantalla;
3. Seleccionar **Usuario del servicio web**
4. Se abrirá una ventana emergente con la configuración general:
   1. Tipo de Credencial
      1. Nombre de usuario: Este es su **Usuario del servicio web** de Adyen. Guarde este ID porque lo necesitará para abrir un ticket a Adyen más tarde (por ejemplo, ws_123456@Company.YourCompany).
      2. Descripción: Una descripción de la clave API
5. En **Configuración del servidor**, en el área de **Autenticación**, seleccione **Clave API** y luego haga clic en el botón **Generar clave API** para crear una nueva clave y **almacenar** esta información de forma segura.
6. En **Configuración del cliente**, en el área de **Autenticación**, seleccione **Clave del cliente** y haga clic en el botón **Generar clave del cliente**.

### Configuraciones adicionales

- ***Añadir origen permitido**: Añade todos los dominios que harán solicitudes del lado del cliente a Adyen. Esto incluye su entorno VTEX y el dominio de producción de su tienda. Debe agregar cada dominio por separado.
  - **Ejemplo (entorno VTEX)**: `https://{{account}}.myvtex.com`
  - **Ejemplo (Dominio de producción)**: `https://www.yourstore.com`
- **Permisos**: se recomienda seleccionar todos los permisos disponibles para el usuario del servicio web para garantizar la funcionalidad completa y evitar posibles problemas con nuevos recursos o métodos de pago.

![Credenciales de API](https://i.imgur.com/2C6J0FS.png)

7. Después de configurar todas las configuraciones para la nueva credencial, desplácese hasta el final de la página y haga clic en **Guardar**.

> **Importante:** Dejar de guardar los cambios después de crear la credencial resultará en errores de autenticación (error 401). Asegúrese siempre de guardar la nueva credencial antes de continuar. Después de guardar, se recomienda volver a abrir la configuración de credenciales para confirmar que todos los cambios se han persistido correctamente.
