---
title: MultiBanco
description: El método de pago más popular en Portugal
hide_title: true
sidebar_custom_props:
  image: /img/icons/multibanco.svg
  subtitle: Vouchers, prepagos y tarjetas de regalo
---
import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

1. **En Adyen**:
   - Habilite **MultiBanco** en su Área del Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de Pago**, haga clic en el botón ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png).
   - Busque **MultiBanco** y selecciónelo.
   - Asócielo con o proveedor de Adyen.
   - Guarde la configuración.
   - **Nota**: Asegúrese de que su tienda tenga la plantilla de correo electrónico `multibanco-payment-information` configurada para enviar los detalles del pago a los clientes.
