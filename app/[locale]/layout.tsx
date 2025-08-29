import CursorPointer from "@/components/animation/CursorPointer";
import SmoothScrollProvider from "@/components/shared/SmoothScroll";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import { satoshi } from "@/utils/fonts";
import { ThemeModeProvider } from "@/utils/Providers";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode, Suspense } from "react";
import "../../scss/main.scss";

// Metadata para SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "es" ? "Rivor Template - Español" : "Rivor Template - English",
    description:
      locale === "es"
        ? "Sitio web profesional con soporte multiidioma"
        : "Professional website with multi-language support",
    alternates: {
      canonical: "/",
      languages: {
        es: "/es",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning data-lt-installed="true">
      <body className={`${satoshi.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SmoothScrollProvider>
              <ThemeModeProvider>
                <ThemeSwitcher />
                <CursorPointer />
                <main>{children}</main>
              </ThemeModeProvider>
            </SmoothScrollProvider>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
