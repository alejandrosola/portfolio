import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.

  let locale = headers().get("accept-language")?.substring(0, 2) || "en";
  const supportedLocales = ["en", "es"];

  if (!supportedLocales.includes(locale)) {
    locale = "en";
  }
  return {
    locale,
    messages: (await import(`../public/locales/${locale}/common.json`)).default,
  };
});
