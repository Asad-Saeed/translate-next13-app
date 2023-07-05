import React from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const Footer = () => {
   const t = useTranslations("footer");
  return <>
    <p className="bg-slate-400 fixed bottom-0 w-full text-center uppercase font-bold py-10">
      {t('description')}
    </p>
  </>;
};

export default Footer;
