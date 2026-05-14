---
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 14
slug: /release-notes
---

# Adyen Connector - Release Notes

## [v2.39.7]
### Technical & Performance Improvements
- Increased service memory allocation from 256MB to 512MB to improve stability and support higher transaction volumes without performance degradation.


---

## [v2.39.6]
### New Features
- Introduced Google Pay via VTEX Wallet and headless integration, enabling seamless processing of Google Pay transactions with 3DS dataOnly support and accurate payment origin display in Adyen CA.
- Delivered PayPal authorization improvements, including enriched payload fields and detailed error logging for better diagnostics and support.
- Implemented proxy workspace URL routing and added the orderformId field to the saveCheckoutInfo route, improving session tracking and integration reliability.
- Added Pix transaction logging and payment refused log entries to increase observability across payment flows.

### Bug Fixes
- Fixed the payment-details proxy response code to ensure correct HTTP status propagation to VTEX.
- Corrected the authenticationData payload structure and additionalData in the card request body to improve 3DS compatibility.

### Technical & Performance Improvements
- Enabled forced 3DS authentication as a configurable option for enhanced security compliance.
- Updated log attributes across payment services for consistency and improved debugging.


---

## [v2.39.5]
### Technical & Performance Improvements
- Internal stability release with no user-facing changes.


---

## [v2.39.4]
### New Features
- Improved tokenization masterdata ID generation: the card identifier now uses merchantId+accountId instead of userId+cardBin, preventing conflicts when multiple cards sharing the same BIN are used by the same customer.

### Bug Fixes
- Fixed shopper interaction configuration for tokenized transactions to ensure correct payment processing.
- Corrected the payment-details client version reference and aligned the vtexUserId field with the masterdata token identifier.


---

## [v2.39.3]
### Bug Fixes
- Fixed refund and cancellation flows in the tokenization version to ensure correct transaction finalization.
- Resolved active tokenization processing to prevent failures in tokenized payment attempts.
- Corrected timeout configuration to 5 seconds and aligned log attribute naming (using transactionId) for consistency across services.

### Technical & Performance Improvements
- Added observability logging across the tokenization flow for improved diagnostics.


---

## [v2.39.2]
### New Features
- Added tokenization configuration support, enabling merchants to set up card-on-file tokenization for returning customers.


---

## [v2.39.1]
### New Features
- Improved messaging for merchants experiencing cancellation failures when a Payment Service Provider (PSP) is involved.

### Bug Fixes
- Improved cancellation process across all merchant flows.


---

## [v2.39.0]
### New Features
- Added support for PayPal and enhanced payment payloads with riskData and shopperConversionId. Introduced capture delay configuration for Card, Google Pay, and Apple Pay, and improved logging observability across Webhooks, refunds, and cancellations.

### Bug Fixes
- Enhanced logging robustness and error handling for invalid card scenarios (Adyen errors 101/905). Resolved transaction timeouts by optimizing Supabase flush calls and added character limits for idempotency keys to ensure API compatibility.


---

## [v2.38.2]
### New Features
- Enhanced logging system with the introduction of Winston logger, including file origin details and implementation across POS services. Added documentation links for better merchant guidance.

### Bug Fixes
- Improved webhook and POS flows by refining data storage in VBase, optimizing idempotency for refunds and cancellations, and resolving terminal synchronization timeouts.

### Technical & Performance Improvements
- Standardized logger implementations and optimized terminal data retrieval using parallel processing for better performance.


---

## [v2.38.1]
### Bug Fixes
- Added error handling for API key retrieval from VBase to prevent integration failures.


---

## [v2.36.6]
### New Features
- Internal version update for stability and maintenance.


---

## [v2.36.5]
### New Features
- Introduced 3DS tokenization support and updated the POS API for improved terminal interactions.

### Bug Fixes
- Comprehensive improvements to token management for subscriptions and POS purchases, including fixes for 3DS token naming and session handling. Updated deprecated terminal APIs and optimized API timeouts for better reliability.


---
## [v2.32.0]
### New Features
- Expanded payment method support with the introduction of Affirm and enhanced configurations for Apple Pay. Improved the payment experience with a new retry flow for web components and redirect APIs, and implemented a proxy for marketing and payment detail methods.

### Bug Fixes
- Refactored the core payment engine by replacing legacy dependencies, optimizing error handling for 409 conflicts, and improving the overall UI consistency within the VTEX Configuration.


---

## [v2.30.13]
### New Features
- Added support for PayPal and Affirm, along with improved API timeouts and enhanced logging for better observability.

### Bug Fixes
- Resolved integration issues by rolling back to a stable version.


---

## [v2.30.12]
### New Features
- Initial functional release of the connector.


---

## [v2.30.6]
### Bug Fixes
- Improved error handling by adding descriptive messages and implementing denial functions for failed requests.


---

## [v2.30.5]
### New Features
- Standardized API error responses for better integration clarity.

### Bug Fixes
- Resolved issues with Credit Card and 3DS flows, and improved the clarity of error messages.


---

## [v2.30.4]
### Bug Fixes
- Added synchronization logic to handle transactions already cancelled within the VTEX environment.


---

## [v2.28.1]
### New Features
- Enhanced security and data integrity by adding validations to the BrowserInfo and POS APIs.

### Bug Fixes
- Resolved validation issues related to CNPJ formatting.


---

## [v2.27.2]
### New Features
- Improved transaction tracking by including the paymentId attribute in data storage.


---

## [v2.27.1]
### New Features
- Improved cancellation flow to support requests without a Transaction ID (TID).


---

## [v2.26.9]
### Bug Fixes
- Performed code cleanup and implemented initial optimizations to resolve API timeout issues.


---

## [v2.26.6]
### Bug Fixes
- Resolved a critical issue causing infinite loops in POS transaction flows.


---

## [v2.26.4]
### New Features
- Added detailed logging for POS operations to facilitate troubleshooting and monitoring.


---

## [v2.26.1]
### Bug Fixes
- Optimized 3DS flows by removing redundant BrowserInfo requirements from the API.


---
## [v2.26.0]
### New Features
- Enhanced subscription management by introducing new flows using the networkTxReference token. Improved transaction visibility by adding acquirer information to payment details and Webhook responses.

### Bug Fixes
- Corrected class naming conventions in Webhook handlers for better code consistency.


---

## [v2.25.1]
### Bug Fixes
- Restored integration stability by reverting to a stable version and updated payment details to support multiple accounts. Standardized BrowserInfo data to use HTTPS by default.


---

## [v2.24.15]
### New Features
- Added the OriginalReference attribute across POS, Klarna, and Card payment payloads to improve transaction reconciliation.

### Bug Fixes
- Performed code cleanup and updated project identifiers.


---

## [v2.24.11]
### Bug Fixes
- Improved payment reliability by adding authCode support and implementing checks for undefined pricing.


---

## [v2.24.10]
### New Features
- Extensive update to payment payloads for Klarna, Boleto, Pix, and Card transactions, including the addition of line item adapters and shopperStatement support.

### Bug Fixes
- Optimized subscription logic by refining conditional checks in the order form retrieval process.


---

## [v2.24.7]
### New Features
- Updated contact models for Apple Pay and enhanced project documentation.

### Bug Fixes
- Improved data validation for Klarna and other payment methods by implementing character length checks on sensitive documents.


---

## [v2.24.5]
### New Features
- Expanded documentation to provide clearer integration guidelines.

### Bug Fixes
- Corrected data transmission issues in payment detail requests.


---

## [v2.24.4]
### New Features
- Introduced support for Cartes Bancaires and added the amountExcludingTax property to payment payloads.

### Bug Fixes
- Resolved decimal precision issues in tax calculations.


---

## [v2.24.3]
### New Features
- Improved developer experience by adding JSDoc comments and enhanced logging across the codebase.


---

## [v2.24.2]
### New Features
- Expanded Klarna support with "Pay Now" and "Pay Later" options, and added enhanced logging for POS transactions.

### Bug Fixes
- Improved API reliability by refining state handling and removing hardcoded country data.


---

## [v2.24.0]
### New Features
- Improved integration robustness with a new healthcheck route and automated UI recovery for failed payments. Optimized data storage by centralizing transaction saving in payment details.

### Bug Fixes
- Added support for Bancontact Mobile and refined VBase storage logic to prevent data duplication.


---

## [v2.23.16]
### New Features
- Added support for Klarna payments in the configuration.

### Technical & Performance Improvements
- Optimized Klarna integration by implementing ISO Alpha-2 country code support and refactoring legacy code.


---

## [v2.23.15]
### Bug Fixes
- Validated Apple Pay configurations within the payment application for enhanced stability.


---

## [v2.23.14]
### New Features
- Introduced Klarna Account support and implemented the Apple Pay v2 controller based on Adyen standards. Added utility functions for country ISO conversion.

### Bug Fixes
- Improved the checkout UI and refined backend logic for country code handling and payment authorization.

### Technical & Performance Improvements
- Cleaned up development environment artifacts and removed unused payment functions.


---

## [v2.23.13]
### Bug Fixes
- Enhanced transaction data by including metadata in request payloads.


---

## [v2.23.8]
### Bug Fixes
- Improved code quality through linting and refined the visual style of the iDeal selection modal.


---

## [v2.23.2]
### New Features
- Added configuration support for Bancontact Mobile.


---

## [v2.22.1]
### Bug Fixes
- Standardized naming conventions for Apple Pay and improved security by masking the Client Key in the configuration UI.


---

## [v2.22.0]
### Bug Fixes
- Resolved UI layout issues in the iDeal payment selection box.


---

## [v2.21.7]
### New Features
- Introduced the IdealV2 service with improved issuer selection styling and a more robust integration based on Adyen standards.

### Bug Fixes
- Standardized internal versioning to align with the latest connector architecture.


---

## [v2.21.5]
### New Features
- Enhanced the Sales App flow by adding POS transaction verification during the cancellation process.


---

## [v0.0.3]
### Bug Fixes
- Finalized project rebranding and code cleanup for the initial release stages.


---

