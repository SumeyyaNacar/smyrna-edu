"use client";
import { Link, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
export default function LangSwitcher() {
  const pathname = usePathname();
    const locale = useLocale();
    const getHref = () => {
        const currentPath = pathname.split("/");
        let targetPath: string = "/";
        if (currentPath.length > 2) {
            targetPath = `/${currentPath.slice(2).join("/")}`;
        }
        return targetPath;
    };
    const currentLocale = useMemo(
        () => routing.locales.find((item) => item === locale),
        [locale]
    );
  console.log(currentLocale)
    return (
        <div>
            {routing.locales.map((lang) => (
                <Link
                    key={lang}
          locale={lang}
                    href={getHref()}
                    className={`px-3 py-1 border rounded ${
                        currentLocale === lang
                            ? "bg-success text-white"
                            : "bg-secondary"
                    }`}
                >
                    {lang.toUpperCase()}
                </Link>
            ))}
        </div>
    );
}
