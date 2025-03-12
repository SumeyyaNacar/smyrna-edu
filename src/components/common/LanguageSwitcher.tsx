"use client";
import Link from "next/link";
import { useRouter } from "next/router";

import {usePathname} from "@/i18n/navigation"; 
import { routing } from '@/i18n/routing';
import formats from '@/i18n/request';
import messages from '../../../messages/en.json';

declare module 'next-intl' {
  interface Datas {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
    Formats: typeof formats;
  }
}

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = router.locale;

  return (
    <div>
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          className={`px-3 py-1 border rounded ${
            currentLocale === locale ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
