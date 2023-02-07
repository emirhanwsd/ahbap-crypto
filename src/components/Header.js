import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

import ahbap from "../assets/ahbap.png";

import tr from "../assets/flags/tr.png";
import en from "../assets/flags/en.png";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <div className="sm:h-[589px] pb-16 sm:pb-0 bg-black text-white flex flex-col items-center text-center px-4 lg:px-0">
        <img className="mt-24 sm:mt-10" src={ahbap} alt="" />

        <h1 className="text-xl sm:text-2xl font-semibold mt-8 max-w-7xl">
          {t("title")}
        </h1>

        <h2 className="text-base sm:text-xl mt-8 max-w-3xl">{t("subTitle")}</h2>

        <Menu
          as="div"
          className="absolute top-6 right-6 lg:right-24 inline-block text-left select-none"
        >
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none hover:opacity-90 transition-opacity">
              <img
                className="h-5 rounded-sm mr-2"
                src={i18n.language === "en" ? en : tr}
                alt=""
              />

              <span>
                {i18n.language === "en" ? t("english") : t("turkish")}
              </span>

              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        i18n.changeLanguage("tr");
                      }}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center gap-x-2 cursor-pointer"
                      )}
                    >
                      <img className="h-5 rounded-sm" src={tr} alt="" />

                      <span>{t("turkish")}</span>
                    </div>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        i18n.changeLanguage("en");
                      }}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center gap-x-2 cursor-pointer"
                      )}
                    >
                      <img className="h-5 rounded-sm" src={en} alt="" />

                      <span>{t("english")}</span>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
