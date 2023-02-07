import { useEffect, useState } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import binance from "../assets/binance.png";
import TableRow from "../components/TableRow";

import Header from "../components/Header";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title:
          "Turkey is being effected by destructive earthquakes. 10,000 buildings were collapsed. There are 50,000 people under rubble. 13 million people are waiting for help. You can send your help via the following cryptocurrency wallet addresses.",
        subTitle:
          "Hello, we are collecting crypto donations through Ahbap to help earthquake victims in Turkey. You can use the addresses below to donate cryptocurrency to support this cause.",
        "Toplanan Bagis Miktari": "Total Amount of Donation",
        balance: "Balance",
        bnbValue: "BNB Value",
        thingsToConsider: "Things to Consider While Making a Transfer",
        cryptoNetwork: "{{kripto}} Network",
        cryptoNetworkWarning: "All coins are supported but select BEP20 network while sending.",
        whichAddress: "How much was donated to which address?",
        page: "Page",
        turkish: "Turkish",
        english: "English",
      },
    },
    tr: {
      translation: {
        title:
          "Türkiye büyük depremlerle sarsılıyor. 10.000 bina yıkıldı. Göcük altında 50.000 kişi var. 13 milyon insan yardım bekliyor. Aşağıdaki kriptopara cüzdan adresleri üzerinden yardımlarınızı iletebilirsiniz.",
        subTitle:
          "Merhabalar, Türkiye’de yaşanan deprem afetine yardımcı olmak için Ahbap aracılığı ile kripto bağış topluyoruz. Bu bağışa kripto para ile destek olmak için aşağıdaki adresleri kullanabiliriz.",
        "Toplanan Bagis Miktari": "Toplanan Bağış Miktarı",
        balance: "Bakiye",
        bnbValue: "BNB Değeri",
        thingsToConsider: "Transfer Yapılırken Dikkat Edilmesi Gerekenler",
        cryptoNetwork: "{{kripto}} Ağı",
        cryptoNetworkWarning:
          "Tüm coinler destekleniyor fakat yollarken BEP20 ağını seçin.",
        whichAddress: "Hangi adrese ne kadar bağış yapıldı?",
        page: "Sayfa",
        turkish: "Türkçe",
        english: "İngilizce",
      },
    },
  },
  lng: "tr",
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

const donates = [
  // Mock Data
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
  {
    image: binance,
    a: "Binance-Peg...(BUSD)",
    b: "94,308.043284 BUSD",
    c: "$92,322.82",
    d: "@1.0002",
  },
];

const DONATE_PER_PAGE = 5;

const Home = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // TODO
    setLoading(true);

    // Sayfaya göre istek atılacak.

    setLoading(false);

    // İstek tamamlandığında tekrar false olarak ayarlanacak.
  }, [page]);

  return (
    <div className="pb-24">
      <Header />

      <div className="mt-12 flex flex-col lg:flex-row gap-6 lg:h-[420px] justify-center lg:-mt-40 px-8 lg:px-0">
        <div className="bg-white lg:w-[565px] border rounded shadow px-5 py-8 flex flex-col text-black text-left">
          <h1 className="font-bold text-2xl">{t("Toplanan Bagis Miktari")}</h1>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-full sm:w-auto px-8 py-4 sm:py-6 inline-flex items-center justify-center rounded border border-brand text-brand text-2xl font-bold">
              $157.082 BNB
            </div>

            <div className="flex flex-col">
              <span>150.000$</span>
              <span>1.000.230 TRY</span>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-y-4">
            <span>{t("balance")}: 11.048940004436707746 BNB</span>
            <span>{t("bnbValue")}: $3,648.80 (@ $330.24/BNB)</span>
          </div>
        </div>

        <div className="bg-white lg:w-[565px] border rounded shadow px-5 py-8 flex flex-col text-black text-left">
          <h1 className="font-bold text-2xl">{t("thingsToConsider")}</h1>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8">
            <div className="space-y-2">
              <h1 className="font-bold">
                {t("cryptoNetwork", {
                  kripto: "ERC20",
                })}
              </h1>

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
              <h1 className="font-bold">
                {t("Kripto Agi", {
                  kripto: "AVALANCHE",
                })}
              </h1>

              <div className="flex flex-col text-sm">
                <span>Chainlink (LINK)</span>
                <span>Chainlink (LINK)</span>
                <span>Chainlink (LINK)</span>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="font-bold">
                {" "}
                {t("Kripto Agi", {
                  kripto: "BEP20",
                })}
              </h1>

              <p className="">{t("cryptoNetworkWarning")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[72px] flex flex-col gap-y-2 max-w-6xl mx-auto px-8 lg:px-0">
        <h1 className="text-2xl font-bold">
          {t("whichAddress")}
        </h1>

        <div>
          {[...donates].slice(0, DONATE_PER_PAGE).map((donate) => (
            <TableRow {...donate} />
          ))}
        </div>

        <div className="mt-6 self-center sm:self-end flex items-center gap-x-4 select-none">
          <button
            disabled={loading || page === 1}
            onClick={() => {
              if (page - 1 > 0) {
                setPage((page) => page - 1);
              }
            }}
            className="h-10 w-10 border rounded inline-flex items-center justify-center font-bold hover:bg-gray-100 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
          >
            <ChevronLeftIcon className="h-4" />
          </button>

          <span>
            {page}. {t("page")}
          </span>

          <button
            disabled={loading}
            onClick={() => {
              setPage((page) => page + 1);
            }}
            className="h-10 w-10 border rounded inline-flex items-center justify-center font-bold hover:bg-gray-100 transition-all cursor-pointer disabled:pointer-events-none"
          >
            <ChevronRightIcon className="h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
