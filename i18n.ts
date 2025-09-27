import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  return {
    // locale passed to NextIntlClientProvider
    locale: locale!,
    // load messages from the messages directory
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
