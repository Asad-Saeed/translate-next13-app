import React from "react";
import Link from "next-intl/link";

import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("navbar");
  return (
    <header className="bg-slate-400 font-bold">
      <nav className="p-5">
        <div className="flex justify-start">
          <ul className="flex">
            <li className="mr-4">
              <Link href={`/`} className="text-white hover:text-blue-800">
                {t("home")}
              </Link>
            </li>
            <li className="mr-4">
              <Link href={`/about`} className="text-white hover:text-blue-800">
                {t("about")}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                href={`/contact`}
                className="text-white hover:text-blue-800"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <ul className="flex">
            <li className="mr-6">
              <Link
                href="/"
                locale="en"
                className="text-white hover:text-blue-800"
              >
                English
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/"
                locale="es"
                className="text-white hover:text-blue-800"
              >
                Spanish
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/"
                locale="pt"
                className="text-white hover:text-blue-800"
              >
                Portugal
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
