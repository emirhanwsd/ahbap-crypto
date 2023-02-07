import ahbap from "../assets/ahbap.png";
import binance from "../assets/binance.png";
import TableRow from "../components/TableRow";
import { Fragment, useState } from "react";
import classNames from "classnames";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import tr from "../assets/flags/tr.png";
import en from "../assets/flags/en.png";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome to React": "Welcome to React and react-i18next",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const donates = [
  {
    image: binance,
    a: "Binance-Peg...(BUSD)",
    b: "94,308.043284 BUSD",
    c: "$92,322.82",
    d: "@1.0002",
  },
  {
    image: binance,
    a: "Binance-Peg...(BUSD)",
    b: "94,308.043284 BUSD",
    c: "$92,322.82",
    d: "@1.0002",
  },
  {
    image: binance,
    a: "Binance-Peg...(BUSD)",
    b: "94,308.043284 BUSD",
    c: "$92,322.82",
    d: "@1.0002",
  },
  {
    image: binance,
    a: "Binance-Peg...(BUSD)",
    b: "94,308.043284 BUSD",
    c: "$92,322.82",
    d: "@1.0002",
  },
  {
    image: binance,
    a: "Binance-Peg...(BUSD)",
    b: "94,308.043284 BUSD",
    c: "$92,322.82",
    d: "@1.0002",
  },
  {
    image: binance,
    a: "Binance-Peg...(BUSD)",
    b: "94,308.043284 BUSD",
    c: "$92,322.82",
    d: "@1.0002",
  },
  {
    image: binance,
    a: "Binance-Peg...(BUSD)",
    b: "94,308.043284 BUSD",
    c: "$92,322.82",
    d: "@1.0002",
  },
  {
    image: binance,
    a: "Binance-Peg...(BUSD)",
    b: "94,308.043284 BUSD",
    c: "$92,322.82",
    d: "@1.0002",
  },
];

const Home = () => {
  const { t } = useTranslation();

  const [page, setPage] = useState(2);

  return (
    <div className="pb-24">
      <header>
        <div className="h-[589px] bg-black text-white flex flex-col items-center text-center">
          <img className="mt-10" src={ahbap} alt="" />

          <h1 className="text-2xl font-semibold mt-8 max-w-7xl">
            Türkiye büyük depremlerle sarsılıyor. 10.000 bina yıkıldı. Göcük
            altında 50.000 kişi var. 13 milyon insan yardım bekliyor. Aşağıdaki
            kriptopara cüzdan adresleri üzerinden yardımlarınızı
            iletebilirsiniz.
          </h1>

          <h2 className="text-xl mt-8 max-w-3xl">
            Merhabalar, Türkiye’de yaşanan deprem afetine yardımcı olmak için
            Ahbap aracılığı ile kripto bağış topluyoruz. Bu bağışa kripto para
            ile destek olmak için aşağıdaki adresleri kullanabiliriz.
          </h2>

          <Menu
            as="div"
            className="absolute top-6 right-24 inline-block text-left"
          >
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none hover:opacity-90 transition-opacity">
                <img className="h-5 rounded-sm mr-2" src={tr} alt="" />

                <span>TR Türkçe</span>

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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm flex items-center gap-x-2"
                        )}
                      >
                        <img className="h-5 rounded-sm" src={tr} alt="" />

                        <span>TR Türkçe</span>
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm flex items-center gap-x-2"
                        )}
                      >
                        <img className="h-5 rounded-sm" src={en} alt="" />

                        <span>EN English</span>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="mt-12 flex gap-x-6 h-[420px] justify-center -mt-40">
          <div className="bg-white w-[565px] border rounded shadow px-5 py-8 flex flex-col text-black text-left">
            <h1 className="font-bold text-2xl">Toplanan Bağış Miktarı</h1>

            <div className="mt-4 flex items-center gap-x-5">
              <div className="px-8 py-6 inline-flex items-center justify-center rounded border border-brand text-brand text-2xl font-bold">
                $157.082 BNB
              </div>

              <div className="flex flex-col">
                <span>150.000$</span>
                <span>1.000.230 TRY</span>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-y-4">
              <span>Balance: 11.048940004436707746 BNB</span>
              <span>BNB Value: $3,648.80 (@ $330.24/BNB)</span>
            </div>
          </div>

          <div className="bg-white w-[565px] border rounded shadow px-5 py-8 flex flex-col text-black text-left">
            <h1 className="font-bold text-2xl">
              Transfer Yapılırken Dikkat Edilmesi Gerekenler
            </h1>

            <div className="mt-6 grid grid-cols-3">
              <div className="space-y-2">
                <h1 className="font-bold">ERC20 Ağı</h1>

                <div className="flex flex-col text-sm">
                  <span>Tether USD (USDT)</span>
                  <span>Tether USD (USDT)</span>
                  <span>Tether USD (USDT)</span>
                  <span>Tether USD (USDT)</span>
                  <span>Tether USD (USDT)</span>
                  <span>Tether USD (USDT)</span>
                  <span>Tether USD (USDT)</span>
                  <span>Tether USD (USDT)</span>
                  <span>Tether USD (USDT)</span>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold">AVALANCHE Ağı</h1>

                <div className="flex flex-col text-sm">
                  <span>Chainlink (LINK)</span>
                  <span>Chainlink (LINK)</span>
                  <span>Chainlink (LINK)</span>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold">BEP20 Ağı</h1>

                <p className="">
                  Tüm coinler destekleniyor fakat yollarken BEP20 ağını seçin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*<div className="mt-24 mx-auto max-w-3xl bg-white border rounded shadow p-5 flex flex-col text-black text-left">*/}
      {/*  <h1 className="font-bold text-2xl">*/}
      {/*    Transfer Yapılırken Dikkat Edilmesi Gerekenler*/}
      {/*  </h1>*/}

      {/*  <div className="mt-8 grid grid-cols-3">*/}
      {/*    <div className="space-y-2">*/}
      {/*      <h1 className="font-bold">ERC20 Ağı</h1>*/}

      {/*      <div className="flex flex-col text-sm">*/}
      {/*        <span>Tether USD (USDT)</span>*/}
      {/*        <span>Tether USD (USDT)</span>*/}
      {/*        <span>Tether USD (USDT)</span>*/}
      {/*        <span>Tether USD (USDT)</span>*/}
      {/*        <span>Tether USD (USDT)</span>*/}
      {/*        <span>Tether USD (USDT)</span>*/}
      {/*        <span>Tether USD (USDT)</span>*/}
      {/*        <span>Tether USD (USDT)</span>*/}
      {/*        <span>Tether USD (USDT)</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="space-y-2">*/}
      {/*      <h1 className="font-bold">AVALANCHE Ağı</h1>*/}

      {/*      <div className="flex flex-col text-sm">*/}
      {/*        <span>Chainlink (LINK)</span>*/}
      {/*        <span>Chainlink (LINK)</span>*/}
      {/*        <span>Chainlink (LINK)</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="space-y-2">*/}
      {/*      <h1 className="font-bold">BEP20 Ağı</h1>*/}

      {/*      <p className="">*/}
      {/*        Tüm coinler destekleniyor fakat yollarken BEP20 ağını seçin.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="mt-[72px] flex flex-col gap-y-2 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">
          Hangi adrese ne kadar bağış yapıldı?
        </h1>

        <div>
          {donates.map((donate) => (
            <TableRow {...donate} />
          ))}
        </div>

        <div className="mt-6 self-end flex items-center gap-x-2">
          {[1, 2, 3, 4, 5, 6].map((_) => (
            <div
              onClick={() => setPage(_)}
              className={classNames(
                "h-10 w-10 border rounded inline-flex items-center justify-center font-bold hover:bg-gray-100 transition-colors cursor-pointer",
                {
                  "bg-black text-white hover:bg-zinc-800": page === _,
                }
              )}
            >
              {_}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
