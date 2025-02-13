import { i18n, Locale } from '@/config/i18n-config';
import { getPageContent } from '@/lib/sanity/queries';
import React from 'react'
import SectionRenderer from '../_components/section-renderer';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const HomePage = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;

  const data = await getPageContent(lang);


  return (
    <main>
      {data.map((section) => (
        <SectionRenderer key={section._id} section={section} />
      ))}
    </main>
  )
}

export default HomePage