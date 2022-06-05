import { services } from '@/utils/service';

export async function getCsrfToken(payload: {
  url: string;
  cookie: string;
}) {

  const result = await services({
    url: payload.url,
    method: 'GET',
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      cookie: payload.cookie,
    },
  });
  const csrfToken = result.data.match(
    /\<script.* data-serialized-id="csrf-token"\>"(.*?)"<\/script>/,
    '$1'
  )[1];
  return csrfToken;
}