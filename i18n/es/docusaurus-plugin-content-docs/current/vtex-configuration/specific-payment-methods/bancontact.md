---
title: Bancontact
---

- Para que este método de pago funcione, debe realizar algunas configuraciones específicas en el Panel de Administración de VTEX:
  - **Configuración del Método de Pago**: Vaya al panel de administración de VTEX y acceda a la sección de métodos de pago `https://{{account}}.myvtex.com/admin/pci-gateway#/rules` o ingrese **pagos** en el cuadro de búsqueda del Admin y haga clic en la pestaña **Pagos customizados**.
  - En la pestaña **Pagos customizados**, haga clic en uma **Config** disponible en **Tarjetas de Marca Propia** ![private-label-cards](/img/vtex-private-label-cards.png).
  - En la siguiente pantalla complete el campo **Nombre** con "Bancontact" (asegúrese de que la sintaxis sea correcta ya que este es el nombre del método de pago que se enviará en las Transacciones)
  - en el campo **Número de dígitos de CVV**, establézcalo en **no requerido**
    ![bancontact](/img/vtex-bancontact-config.png)
  - Deje los valores de los demás campos sin alterar.
  - Haga clic en **Guardar** para guardar la configuración.
  - Después de guardar la configuración, será redirigido automáticamente para finalizar la configuración en la siguiente pantalla **Condición de Pago**:
    ![bancontact-2](/img/vtex-bancontact-details.png)
  - En la pantalla de **Condición de Pago**, complete el **Nombre de la Condición**
  - Seleccione o **Proveedor** de Adyen en el menú desplegable **Procesar con el proveedor**
  - Cambie el **Estado** a "activo"
  - Haga clic en **Guardar en la parte inferior derecha de la pantalla**
  - Después de guardar la Condición de Pago, **"Bancontact"** estará disponible para su uso bajo las opciones **"Tarjeta de Crédito"** y **"Tarjeta de Débito"** en el checkout.
