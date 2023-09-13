import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import './globals.css';
import DarkModeProvider from '@/components/(Providers)/darkMode';
export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }];
}

export const metadata: Metadata = {
  title: 'التقوي',
  description:
    'أركان الإسلام الخمسة , مواقيت الصلاة , القرأن الكريم , التسبيح , الأذكار',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  if (locale === 'ar') {
    metadata.title = 'التقوي'; // Arabic title
  } else if (locale === 'en') {
    metadata.title = 'Al Taqwa'; // English title
  }

  return (
    <html lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <DarkModeProvider>{children}</DarkModeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
