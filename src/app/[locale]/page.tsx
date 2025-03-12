import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Banner from "@/components/home/banner";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
   {/*    
      <h1>{t("banner-title")}</h1>
      <p>{t("banner-description")}</p> */}
      <Banner />
      
    </div>
  );
}
