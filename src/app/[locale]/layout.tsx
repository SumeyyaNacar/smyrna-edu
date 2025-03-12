import { manrope } from "@/helpers/fonts";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/styles/index.scss";
import { appConfig } from "@/helpers/config";
import Topbar from "@/components/common/header/topbar";
import MainMenuBar from "@/components/common/header/main-menubar";
import Footer from "@/components/common/footer/footer";
import FooterSub from "@/components/common/footer/footer-sub";
import LangSwitcher from "@/components/common/LanguageSwitcher";

export const metadata: Metadata = {
  title: {
    template: `%s| ${appConfig.project.name}`,
    default: appConfig.project.name,
  },
  description: appConfig.project.description,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html className={manrope.variable} lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Topbar />
          <MainMenuBar />
         {/*  <LangSwitcher /> */}
          {children}
          <Footer />
          <FooterSub />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
