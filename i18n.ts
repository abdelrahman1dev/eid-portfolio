import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
 
  const validLocale = locale || 'en';
  
  return {
    locale: validLocale as string,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});