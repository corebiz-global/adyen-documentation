---
title: PayPal
description: PayPal es una de las principales billeteras digitales, con más de 300 millones de consumidores activos
hide_title: true
sidebar_custom_props:
  image: /img/icons/paypal.svg
  subtitle: Billeteras digitales
---
import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

Para ofrecer PayPal a través de Adyen en VTEX, siga estos pasos:

1. **En Adyen**:
   - Habilite PayPal en su Área del Cliente de Adyen en **Configuración > Métodos de Pago**.
   - Asegúrese de que su PayPal Merchant ID esté vinculado a su cuenta de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png).
   - Busque **PayPal** y selecciónelo.
   > **Atención**: Al buscar PayPal en VTEX, encontrará varias opciones. Asegúrese de seleccionar la opción llamada simplemente **PayPal**.

   ![Selección de PayPal](/img/vtex-paypal-selection.png)

   - Seleccione el proveedor de Adyen en el campo **Procesar con el proveedor**.
   - Cambie el estado a **Ativo** y haga clic en **Guardar**.
