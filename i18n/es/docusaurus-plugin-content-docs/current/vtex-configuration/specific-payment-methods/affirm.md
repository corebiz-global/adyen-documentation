---
title: Affirm
description: Affirm ofrece compras financiadas (BNPL) para millones de compradores en Norteamérica.
hide_title: true
sidebar_custom_props:
  image: /img/icons/affirm.svg
  subtitle: Compre ahora, pague después
---

import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

Affirm se configura como um método de pago estándar en VTEX:

1. **En Adyen**:
   - Habilite **Affirm** en su Area de Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de pago**, haga clic en el botão ![**Agregar método de pago**](/img/vtex-add-payment-method-button.png).
   - Busque **AdyenAffirm** e selecciónelo.
   > **Atención**: Al buscar Affirm en VTEX, encontrará dos opciones (**Affirm** y **AdyenAffirm**). Asegúrese de seleccionar la opción **AdyenAffirm** para que el proveedor Adyen se use correctamente.

   ![Selección de Affirm](/img/vtex-affirm-selection.png)

   - Seleccione el proveedor Adyen en el campo **Procesar com el proveedor**.
   - Haga clic en **Guardar**.


