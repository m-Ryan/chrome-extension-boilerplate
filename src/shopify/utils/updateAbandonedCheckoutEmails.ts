import { services } from '@/utils/service';

export async function updateAbandonedCheckoutEmails(payload: {
  url: string;
  cookie: string;
  csrfToken: string;
  data: {
    enabled: boolean;
  };
}) {
  const result = await services({
    url: `${payload.url}/internal/web/graphql/core?operation=CheckoutSettingsUpdate&type=mutation`,
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
        checkoutConfiguration: {
          abandonedCheckoutEmails: payload.data.enabled
            ? 'AUTOMATIC'
            : 'DISABLED',
        },
      },
      query: `mutation CheckoutSettingsUpdate( $checkoutConfiguration: CheckoutConfigurationInput) {
        checkoutSettingsUpdate(
          checkoutConfiguration: $checkoutConfiguration
        ) {
          checkoutSettings {
            abandonedCheckoutEmails
          }
        }
      }`,
    },
  });
  return result;
}
