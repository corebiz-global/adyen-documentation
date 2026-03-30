---
sidebar_position: 6
title: Terminal POS
---

Para utilizar a integração do terminal POS com o VTEX SalesApp, você deve habilitar permissões específicas para sua credencial de API na Área do Cliente Adyen.

Essas permissões permitem que o conector descubra os terminais e lojas disponíveis vinculados à sua conta, garantindo que eles apareçam corretamente na tela de seleção do SalesApp.

### Configurando Permissões de POS

1. Na Área do Cliente Adyen, vá em **Developers > API credentials**.
2. Selecione a credencial de API usada para a integração com a VTEX.
3. Role até a seção **Roles** e encontre a categoria **POS**.
4. Habilite as seguintes permissões:
   - **Management API - Stores read**
   - **Management API - Stores read and write**
   - **Management API - Terminal actions read**
   - **Cloud Device API role**
   - **Allow SDK download for POS Developers**

![Permissões do Terminal POS](/img/adyen-pos-terminal-roles.png)

5. Clique em **Save changes** no final da página.

Uma vez habilitadas essas permissões, o terminal deverá estar disponível para configuração e uso dentro da plataforma VTEX.
