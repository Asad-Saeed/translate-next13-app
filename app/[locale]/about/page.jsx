import React from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// Create Meta Data
export async function generateMetadata() {
  const t = await getTranslations("about");
  return {
    title: t("tab-title-about"),
  };
}

const About = () => {
  const t = useTranslations("about");
  return <p className="mt-10 text">{t("title")}</p>;
};

export default About;
