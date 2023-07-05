import React from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import UseTranslations from "./components/UseTranslations";

// Create Meta Data
export async function generateMetadata() {
  const t = await getTranslations("home");
  return {
    title: t("tab-title-home"),
  };
}

const Home = () => {
  const t = useTranslations("home");
  return (
    <>
      <div className="p-5 text-center mt-14">
        <p className="py-2">{t("welcome-message")}</p>
        <p className="py-2">{t("topic")}</p>
      </div>
      <div className="pt-8 text-center font-bold text-21xl">
        <UseTranslations translate={t("server-side-component")} />
      </div>
    </>
  );
};

export default Home;
