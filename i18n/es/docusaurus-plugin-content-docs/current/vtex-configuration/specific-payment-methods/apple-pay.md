---
title: Apple Pay
description: Apple Pay es la billetera digital preferida por millones de usuarios de iOS
sidebar_custom_props:
  image: /img/icons/apple-pay.svg
  subtitle: Billeteras digitales, Tarjetas
---

### Configurar Apple Pay en el Área del Cliente de Adyen

También necesitará configurar Apple Pay en su Área del Cliente de Adyen en Métodos de Pago. Para hacer eso, siga los pasos a continuación:

1. En su Área del Cliente de Adyen, vaya a “Configuración”<br/>
2. Haga clic en “Métodos de Pago”<br/>
3. En el lado derecho, haga clic en “Solicitar Método de Pago”<br/>
4. En la pantalla “Seleccionar Método de Pago”, seleccione “Apple Pay”
![SeleccionarPantallaPago](/img/vtex-select-payment-screen.png)
5. Seleccione el Comercio<br/>
![SeleccionarComercio](/img/vtex-select-merchant.png)
6. Configure la cuenta del adquirente<br/>
![SeleccionarCuentaAdquirente](/img/vtex-select-acquirer-account.png)
7. Seleccione el tipo de certificado: “Usar Certificado de Adyen”.<br/>
![UsarCertificadoAdyen](/img/vtex-use-adyen-certificate.png)
8. En la pantalla “Revisar y Finalizar” inserte el dominio completo del sitio web<br/>
![DominioSitioWebCompleto](/img/vtex-full-website-domain.png)

### Validar la configuración

Si la configuración es correcta, debería ver “Apple Pay” cuando lo busque en la pantalla “Métodos de Pago”.
![MetodosPago](/img/vtex-payment-methods-list.png)

### Instalar el certificado

1. Genere su certificado siguiendo la documentación. Para generar el certificado, consulte la siguiente documentación: [Componente Apple Pay | Adyen Docs](https://docs.adyen.com/payment-methods/apple-pay/web-component/?tab=adyen-certificate-live_1)

2. Instale el certificado en el servidor VTEX. Para hacer eso, realice un POST usando Postman o una herramienta similar al siguiente endpoint: `https://{{DominioPublicoTienda}}/.well-known/raw/apple-developer-merchantid-domain-association?persistent=true`

[<img src="/img/postman-button.svg" alt="Ejecutar en Postman" />](https://www.postman.com/suportecorebiz/adyen-apple-pay/collection/2y1c8n1/apple-pay?action=share&creator=41098825)

3. Verifique si el certificado se instaló correctamente. Para verificar si el certificado se instaló correctamente en los servidores VTEX, use la siguiente url: `https://{{DominioPublicoTienda}}/.well-known/apple-developer-merchantid-domain-association`
