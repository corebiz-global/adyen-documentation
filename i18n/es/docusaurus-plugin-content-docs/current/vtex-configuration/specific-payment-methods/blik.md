---
title: BLIK
description: BLIK es el método de pago móvil dominante en Polonia
hide_title: true
sidebar_custom_props:
  image: /img/icons/blik.svg
  subtitle: Banca Online
---
import PaymentMethodHeader from "@site/src/components/PaymentMethodHeader";

<PaymentMethodHeader 
  title={frontMatter.title} 
  description={frontMatter.description} 
  image={frontMatter.sidebar_custom_props.image} 
  subtitle={frontMatter.sidebar_custom_props.subtitle}
/>

1. **En Adyen**:
   - Habilite **BLIK** en su Área del Cliente de Adyen.

2. **En VTEX**:
   - Vaya a **Configuración de la tienda > Pago > Configuración**.
   - En la pestaña **Condiciones de Pago**, haga clic en el botão ![**Agregar Método de Pago**](/img/vtex-add-payment-method-button.png).
   - Busque **BLIK** y selecciónelo.
   - Asócielo con o proveedor de Adyen.
   - Guarde la configuración.
