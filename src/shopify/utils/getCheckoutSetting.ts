import { services } from '@/utils/service';

export async function getCheckoutSetting(payload: {
  url: string;
  cookie: string;
  csrfToken: string;
}) {
  const result = await services({
    url: `${payload.url}/internal/web/graphql/core?operation=CheckoutSettingsIndex&type=query`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      'x-shopify-web-force-proxy': '1',
      'x-csrf-token': payload.csrfToken,
      cookie: payload.cookie,
    },
    data: {
      variables: {
        hasCustomersPermissions: true,
        hasOrdersPermissions: true,
        hasAppsPermissions: true,
        hasPostPurchaseAdditionalScripts: true,
        firstLocations: 250,
      },
      query: `query CheckoutSettingsIndex($hasCustomersPermissions: Boolean!, $hasOrdersPermissions: Boolean!, $hasAppsPermissions: Boolean!, $firstLocations: Int!, $hasPostPurchaseAdditionalScripts: Boolean!) {
        shop {
          id
          name
          primaryDomain {
            id
            url
            host
            __typename
          }
          customerAccountDomain {
            id
            url
            host
            __typename
          }
          features {
            multipass
            confirmationPageSetting
            storefront
            giftCards
            accountCustomerAccounts
            abandonedCheckouts
            customerAccountNext
            customerAccountNextSettingsB2bEnabled
            __typename
          }
          customerAccounts
          multipassProvider @include(if: $hasCustomersPermissions) {
            id
            secret
            __typename
          }
          checkoutSettings {
            postPurchaseAppInUse @include(if: $hasAppsPermissions)
            mainThemeSettingsCheckoutPath
            emailOrPhoneFieldMode
            orderSubscriptionMode
            linkToArriveApp
            canUseArrive
            customizations {
              firstNameFieldMode
              companyFieldMode
              address2FieldMode
              phoneFieldMode
              __typename
            }
            requiresPhoneReason
            localizedFields
            sameBillingAndShippingAddress
            confirmationPage
            regulatedIndustry
            addressAutocompletion
            shippingBehaviour
            notifyCustomers
            autoFulfillRiskyOrders
            orderClosing
            additionalScript
            emailMarketingMode
            smsMarketingMode
            subscriberOptInLevel
            smsSubscriberOptInLevel
            acceptTipPayments
            showTipPayments
            tipPaymentsOption1
            tipPaymentsOption2
            tipPaymentsOption3
            abandonedCheckoutEmailTimeDelay
            abandonedCheckoutEmailRecipient
            abandonedCheckoutEmails
            locale
            postPurchaseAdditionalScript @include(if: $hasPostPurchaseAdditionalScripts)
            __typename
          }
          accountOwner {
            id
            email
            isShopOwner
            name
            __typename
          }
          postPurchaseExtensions: extensions(
            specificationIdentifier: "checkout_post_purchase"
          ) {
            uuid
            app {
              id
              title
              icon {
                id
                altText
                transformedSrc: url(transform: {maxHeight: 18, maxWidth: 18})
                __typename
              }
              __typename
            }
            __typename
          }
          customerAccountNextSettings {
            showLoginLink
            state
            loginTarget
            __typename
          }
          __typename
        }
        onlineStore {
          currentTheme {
            id
            name
            __typename
          }
          __typename
        }
        locations(first: $firstLocations) @include(if: $hasOrdersPermissions) {
          edges {
            node {
              id
              localPickupSettings {
                name
                value
                __typename
              }
              __typename
            }
            __typename
          }
          __typename
        }
        hasFlowBasedAbandonedCheckoutAutomationEnabled
      }

      `,
    },
  });
  return result;
}
