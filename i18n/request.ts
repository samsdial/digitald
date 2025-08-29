import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocales = ["en", "es"];
  const defaultLocale = "es";

  // Ensure locale is a string and validate it
  const validatedLocale = locale && validLocales.includes(locale) ? locale : defaultLocale;

  return {
    locale: validatedLocale,
    messages: (await import(`../messages/${validatedLocale}.json`)).default,
  };
});
