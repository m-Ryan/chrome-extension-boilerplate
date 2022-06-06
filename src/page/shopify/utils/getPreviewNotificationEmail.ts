import { services } from '@/utils/service';

export async function getPreviewNotificationEmail(payload: {
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
    url: `${payload.url}/internal/web/graphql/core?operation=EmailTemplateGeneratePreview&type=mutation`,
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
        input: {
          ...payload.data,
          includeHtml: true,
        },
      },
      query: `mutation EmailTemplateGeneratePreview($input: EmailTemplateGeneratePreviewInput!) {
          emailTemplateGeneratePreview(input: $input) {
            preview {
              subject
              bodyHtml
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
