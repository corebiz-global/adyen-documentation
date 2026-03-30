---
sidebar_position: 6
title: Terminal POS
---

Para utilizar la integración del terminal POS con VTEX SalesApp, debe habilitar permisos específicos para su credencial de API en el Área de Cliente de Adyen.

Estos permisos permiten que el conector descubra los terminales y tiendas disponibles vinculados a su cuenta, asegurando que aparezcan correctamente en la pantalla de selección de SalesApp.

### Configuración de Permisos de POS

1. En el Área de Cliente de Adyen, vaya a **Developers > API credentials**.
2. Seleccione la credencial de API utilizada para la integración con VTEX.
3. Desplácese hasta la sección **Roles** y busque la categoría **POS**.
4. Habilite los siguientes permisos:
   - **Management API - Stores read**
   - **Management API - Stores read and write**
   - **Management API - Terminal actions read**
   - **Cloud Device API role**
   - **Allow SDK download for POS Developers**

![Permisos del Terminal POS](/img/adyen-pos-terminal-roles.png)

5. Haga clic en **Save changes** al final de la página.

Una vez habilitados estos permisos, el terminal debería estar disponible para su configuración y uso dentro de la plataforma VTEX.
