---
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 14
slug: /release-notes
---

# Adyen Connector - Release Notes

## [v2.39.1]
### New Features
- add msg to merchant when cancel fail and the transaction have PSP

### Bug Fixes
- cancelation in all flows


---

## [v2.39.0]
### New Features
- fix google pay web-component setup and change key to check retry
- paypal
- adding riskData and shopperConversionId to adyen /payments payload
- adicionando campo captureDelayHours para googlepay e applepay
- **card**: adding captureDelayHours field in create card payment request body
- util function to calculate captureOptions in hours
- adding supabaseTransport to webhook log
- adyen failed authorization logging
- add logs to webhook, redirect, details, refund and cancel
- add character limit to idempotence

### Bug Fixes
- resolve conflicts
- remove async in function and faix logs
- undo configuration.js modification
- removing wintslogger supabase flush calls. it provokes transaction timeout if supabase response takes too long
- error to refund when sending idempotencykey with special char
- add character limit  in the idempotency key
- enhance logging robustness, observability and error handling
- explicit refusal for adyen errors 101/905 and pci client bug fix
- handle invalid card errors 101 and 905_x as refused and update gitignore
- logs account/workspace


---

## [v2.38.2]
### New Features
- Enhance logging with file origin and error details
- Add winstonLogger to POS create service
- Add initial Winston logger configuration
- add link to doc

### Bug Fixes
- Adjust logger position in healthcheck
- remove connector name in the webhook
- remove recurringProcessingModel and improve idempotency from refund and cancel
- remove tokenization, improve some logs, protect some vbase
- add vbase to save data in the pos flow
- timeout to get terminals and deviceout retry

### Technical & Performance Improvements
- get orderformId and timeout to manangement api
- **pos**: Standardize winston logger implementation in create.service
- **adyen/terminal**: refactoring getAllData function to use Promise.all()


---

## [v2.38.1]
### Bug Fixes
- try-catch in api-key vbase


---

## [v2.37.0]
### New Features
- add oney to configuration


---

## [v2.36.6]
### New Features
- change version


---

## [v2.36.5]
### New Features
- update with master
- add pos fix and pos api update
- token on 3DS
- token on 3DS
- change version to test
- change version to test
- token on 3DS

### Bug Fixes
- add no store logic
- improve logic
- improve logic
- remove options modification
- remove tokenization config logic
- return fixed timeout to sync api
- add outbound access api
- update the deprecated terminal API
- token save/write
- subscription tokenization
- paymentMethodRequest
- Adjust 3DS tokenName
- token save/write
- Adjust save token pos first purchase
- subscription tokenization
- rollback GetTransaction code
- paymentMethodRequest
- handle with OPTIONS request in POS Submit Terminal
- create version beta to test logs
- Adjust 3DS tokenName
- token save/write
- Adjust save token pos first purchase
- subscription tokenization
- rollback GetTransaction code
- paymentMethodRequest
- update with master


---

## [v2.32.0]
### New Features
- add tokenization config and change version
- change version
- merge with master
- change version to beta
- add proxy to details method
- change apple pay docs
- add a condition to cancel a transaction with error
- remove teste and update some areas
- add readme to project
- merge master
- update front-end and fix payload builder
- create affirm service and create payment app config
- add proxy to mkt
- add retry flow in the redirect api
- add retry flow to webcomponent payments
- simulate a error and auth at retry

### Bug Fixes
- remove links
- adjust syntax and remove characters
- adjust the text in VTEX Configuration
- remove console.log
- add real Affirm
- add filter to errors 409
- payment-authorization response and handle with error at payment app
- remove axios and refactor code
- version to test


---

## [v2.30.13]
### New Features
- add paypal and affirm in manifest
- change version to create a beta verson to test
- change timeout time and add logs

### Bug Fixes
- version 2.30.12 rollback


---

## [v2.30.12]
### New Features
- first version working


---

## [v2.30.6]
### Bug Fixes
- add error message
- add denied function when a request fail


---

## [v2.30.5]
### New Features
- error responses

### Bug Fixes
- credit card
- 3ds
- error messages


---

## [v2.30.4]
### Bug Fixes
- add function to cancel transitions already cancelled in VTEX


---

## [v2.28.1]
### New Features
- add validations in browserinfo api
- add validation in a POS api

### Bug Fixes
- cnpj


---

## [v2.27.2]
### New Features
- add paymentId attribute to save transactions


---

## [v2.27.1]
### New Features
- fix cancel without tid


---

## [v2.26.9]
### Bug Fixes
- remove test things
- remove test things
- remove test things
- first version of timeout fix


---

## [v2.26.6]
### Bug Fixes
- POS looping error


---

## [v2.26.4]
### New Features
- add POS logs


---

## [v2.26.1]
### Bug Fixes
- remove browserInfo by api to 3ds


---

## [v2.26.0]
### New Features
- add acquirer in payments-detail response
- merge with master
- add acquirer info in connector response from webhook
- implements a second subscription flow to get the token from prev transiction
- adding networkTxReference flow in payment details
- adding networkTxReference flow in webhook
- new subscriptions flow adding networkTxReference token

### Bug Fixes
- class name in webhook


---

## [v2.25.1]
### Bug Fixes
- return to stable version in manifest
- update payment-details to work with two accounts
- origin https in browser info comming from api data


---

## [v2.24.15]
### New Features
- add OriginalReference in POS payload
- add OriginalReference in POS payload
- add OriginalReference in klarna payload
- add OriginalReference in cards payload

### Bug Fixes
- remove phonehouse stuffs
- change package.json to new app name


---

## [v2.24.11]
### Bug Fixes
- resolve merge conflicts
- version
- add authCode
- add dummy data
- check price undefined


---

## [v2.24.10]
### New Features
- change integrator in app info
- change integrator in app info
- add attributes to klarna payload
- add attributes to boleto request payload
- update version of boleto
- add attributes do boleto request type
- update version of klarna
- add attrubutes to lineItem type
- add attrubutes to standard payload
- update version of standard payment class
- add line items adapter to utils
- add shopperStatement to card payload
- update version to 71
- add format items do card
- add attributes to payload
- add attributes to card pyload type
- downgrade pix payment version
- update vouchers line items adapter
- upgrade pix payment version
- add attributes to pix  payload
- add attributes returned in itens list
- add attributes to pix type

### Bug Fixes
- subscribed test inside getOrderFormIf


---

## [v2.24.7]
### New Features
- updated apple pay and adyen contact email model
- new infomation added to Readme

### Bug Fixes
- add new accept attribute to headers of getImageBase64FromUrl
- implements a validation if the document has more than three characters on klarna
- implements a validation if the document has more than three characters


---

## [v2.24.5]
### New Features
- docs updated
- new doc file

### Bug Fixes
- version
- payment details data sended
- version


---

## [v2.24.4]
### New Features
- merge with master
- add amountExcludingTax prop
- beta
- add cartes bancaires type
- add cartes bancaires to conrfig

### Bug Fixes
- version
- updating bug analysis
- tax decimaal
- tax decimal


---

## [v2.24.3]
### New Features
- added logs and docs for next release
- logs and jsdocs


---

## [v2.24.2]
### New Features
- add new paymento to switch
- add new paymento to switch
- add logs to POS
- add klarna pay now to connector
- add klarna pay later controller
- add klarna pay later folder

### Bug Fixes
- resolve conflicts
- remove mocked country
- change busy to return deny


---

## [v2.24.0]
### New Features
- add healthcheck route in API
- reload 10 seconds after payment fails
- save payment just in payment details and return paymentId/transactionId/orderId to web component

### Bug Fixes
- lint error
- lint error
- chage amountIncludingTax attribute in getLineItems
- change requests URls
- remove save on vbase from auth/payment
- just save transaction in notify vbase
- add payment data in vbase by orderId and change API version
- add metadata in the bancontact payload
- Bancontact Mobile in the configs


---

## [v2.23.16]
### New Features
- add klarna payments to config

### Bug Fixes
- remove production test check

### Technical & Performance Improvements
- change klarna class to add contry code in alpha 2 in the request payload
- move old klarna code to legacy fold


---

## [v2.23.15]
### Bug Fixes
- test config from apple pay in the payment app


---

## [v2.23.14]
### New Features
- add klarna account in connector
- add folder klarna account
- add Apple Pay v2 controller to connector auth flow
- create a new apple pay controller adyen standart based
- add Apple Pay Type
- add applepay config to payment app
- add utils folder to payment app with county iso converter function

### Bug Fixes
- version
- css in the close button
- get country function
- if in the on submit
- pass country iso converter to backend
- payment type
- svg attribute
- add authorization and countryCode to Create Payment function
- update beta version to tests

### Technical & Performance Improvements
- remove fake currency in a develop environment
- remove fake currency in a develop environment
- remove unused fuction from ideal payment


---

## [v2.23.13]
### Bug Fixes
- add metadatas to request payload


---

## [v2.23.8]
### Bug Fixes
- some lint fix


---

## [v2.23.6]
### Bug Fixes
- change style in iDeal modal


---

## [v2.23.2]
### New Features
- add Bancontact Mobile config


---

## [v2.22.1]
### Bug Fixes
- change Client key type to password
- ApplePay to Apple Pay


---

## [v2.22.0]
### Bug Fixes
- ideal box fix


---

## [v2.21.7]
### New Features
- remove radom issuers from iDeal
- update front-end app to style issuers selection
- create IdealV2 service extended AdyenStandardService and modify react component to render ideal props
- create IdealV2 module and add it to connector.ts and @types/connector
- add IdealV2 in configuration.json

### Bug Fixes
- change v2 to v3
- change v2 to v3
- change v2 to v3


---

## [v2.21.5]
### New Features
- **SalesAppTransaction**: adding verification of pos transactions in cancellation proccess


---

## [v0.0.3]
### Bug Fixes
- remove phonehouse stuffs
- change package.json to new app name


---

