---
title: Bancontact Mobile
description: Permite a los clientes pagar utilizando la aplicación Bancontact a través de un código QR o redirección de aplicación.
hide_title: true
sidebar_custom_props:
  image: /img/icons/bancontact.svg
  subtitle: Mobile
---
import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

1. **En Adyen**:
   - Habilite **Bancontact Mobile** en su Área del Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png).
   - Busque **Bancontact Mobile** y selecciónelo.
   - Asócielo con o proveedor de Adyen.
   - Guarde la configuración.
