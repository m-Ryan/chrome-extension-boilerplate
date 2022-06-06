import { services } from '@/utils/service';

export async function updateNotificationEmail(payload: {
  url: string;
  cookie: string;
  csrfToken: string;
  data: {
    emailTemplateId: string;
    title: string;
    bodyHtml: string;
  };
}) {
  const result = await services({
    url: `${payload.url}/internal/web/graphql/core?operation=EmailTemplateUpdate&type=mutation`,
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
        input: payload.data,
      },
      query: `mutation EmailTemplateUpdate($input: EmailTemplateUpdateInput!) {
          emailTemplateUpdate(input: $input) {
            emailTemplate {
              id
              name
              title
              bodyHtml
              includeHtml
              hasDefaultBody
              hasDefaultTitle
              hasCorrespondingSmsTemplate
              translatableResourceId
              __typename
            }
              userErrors {
                  field
                  message
                  __typename
              }
              __typename
          }
        }
      `,
    },
  });
  return result;
}
