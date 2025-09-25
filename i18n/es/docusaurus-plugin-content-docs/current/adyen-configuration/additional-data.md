---
sidebar_position: 6
title: Datos adicionales
---


Para recibir datos adicionales en los detalles de la transacción (como la respuesta del comprador), debe habilitar campos específicos en su área de cliente de Adyen. Aunque algunos campos básicos están habilitados por defecto, los siguientes son esenciales para la reconciliación y el soporte:

- **Adquirente**
- **Referencia del adquirente**: el NSU (número secuencial único) de la transacción.
-**Referencia PSP**: el TID (ID de la transacción), la única referencia de Adyen para la transacción.

**Para activar estos campos:**

1.  En su **Área de cliente de Adyen**, vaya a **Desarrolladores** > **Datos adicionales**.
2.  En la sección **Transacción**, marque los campos esenciales enumerados arriba, además de cualquier otro que necesite.
3.  Haga clic en **Guardar configuración**.

![Datos Adicionales](https://i.imgur.com/0Q7HpuN.png)

> **Importante**: Es necesario configurar ambos entornos de prueba y producción para que estos datos sean enviados.