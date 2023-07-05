import React from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// Create Meta Data
export async function generateMetadata() {
  const t = await getTranslations("contact");
  return {
    title: t("tab-title-contact"),
  };
}

const Contact = () => {
  const t = useTranslations("contact");
  return <p className="mt-10 text">{t("title")}</p>;
};

export default Contact;
