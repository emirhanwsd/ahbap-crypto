import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import chunk from "lodash.chunk";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import TableRow from "../components/TableRow";

import Header from "../components/Header";
import axios from "axios";

import twitter from "../assets/twitter.svg";

const DONATE_PER_PAGE = 10;

const Home = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [balance, setBalance] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // [TODO]: Burası için yeni endpoint gelecek, ya da mevcut endpoint değişecek.
  const getBalance = () => {
    axios
      .get("https://dwy4rzipq9scp.cloudfront.net/response.json")
      .then((response) => {
        setBalance(response.data);
      });
  };

  const getTransactions = () => {
    axios
      .get("https://d2uiuug41n1t0n.cloudfront.net/api/transaction")
      .then(({ data: response }) => {
        setTransactions(response.transactions);
      });
  };

  useEffect(() => {
    getBalance();

    getTransactions();
  }, []);

  const chunkTransactions = chunk(transactions, DONATE_PER_PAGE);

  const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const tryFormatter = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  });

  return (
    <div className="pb-24">
      <Header />

      <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:h-[464px] justify-center lg:-mt-40 px-8 lg:px-0">
        {/* [TODO]: API'de olmayan eksik datalar tamamlandığında, burası doldurulmalı. */}
        <div className="bg-white lg:w-[565px] border rounded shadow p-6 flex flex-col text-black text-left">
          <h1 className="font-bold text-xl sm:text-2xl">
            {t("totalDonation")}
          </h1>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="py-4 inline-flex items-center justify-center rounded border border-brand text-brand text-2xl font-bold hover:bg-brand hover:text-white transition-colors">
              {usdFormatter.format(balance.usd).replace(".00", "")}
            </div>

            <div className="py-4 inline-flex items-center justify-center rounded border border-brand text-brand text-2xl font-bold hover:bg-brand hover:text-white transition-colors">
              {tryFormatter.format(balance.try).replace(",00", "")}
            </div>
          </div>

          <p
            dangerouslySetInnerHTML={{ __html: t("donationTotalAlert") }}
            className="mt-6 text-sm text-gray-600"
          />
        </div>

        <div className="bg-white lg:w-[565px] border rounded shadow p-6 flex flex-col text-black text-left">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl sm:text-2xl">
              {t("donationAdresses")}
            </h1>

            <a
              href="https://twitter.com/haluklevent/status/1622926244512661504"
              target="_blank"
            >
              <img
                className="h-8 hover:opacity-80 transition-opacity"
                src={twitter}
                alt=""
              />
            </a>
          </div>

          <div className="mt-6 space-y-4">
            <div className="border rounded p-4 flex items-center justify-between">
              <div className="space-y-2">
                <h6 className="font-semibold">
                  {t("cryptoNetwork", {
                    crypto: "ERC20",
                  })}
                </h6>

                <span className="hidden sm:block text-sm">
                  0xe1935271D1993434A1a59fE08f24891Dc5F398Cd
                </span>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0xe1935271D1993434A1a59fE08f24891Dc5F398Cd"
                  );
                }}
                className="px-4 py-2 rounded bg-brand text-white font-medium inline-flex items-center justify-center text-sm hover:bg-green-600 transition-colors"
              >
                Kopyala
              </button>
            </div>

            <div className="border rounded p-4 flex items-center justify-between">
              <div className="space-y-2">
                <h6 className="font-semibold">
                  {t("cryptoNetwork", {
                    crypto: "BEP20",
                  })}
                </h6>

                <span className="hidden sm:block text-sm">
                  0xB67705398fEd380a1CE02e77095fed64f8aCe463
                </span>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0xB67705398fEd380a1CE02e77095fed64f8aCe463"
                  );
                }}
                className="px-4 py-2 rounded bg-brand text-white font-medium inline-flex items-center justify-center text-sm hover:bg-green-600 transition-colors"
              >
                Kopyala
              </button>
            </div>

            <div className="border rounded p-4 flex items-center justify-between">
              <div className="space-y-2">
                <h6 className="font-semibold">
                  {t("cryptoNetwork", {
                    crypto: "Avalanche",
                  })}
                </h6>

                <span className="hidden sm:block text-sm">
                  0x868D27c361682462536DfE361f2e20B3A6f4dDD8
                </span>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0x868D27c361682462536DfE361f2e20B3A6f4dDD8"
                  );
                }}
                className="px-4 py-2 rounded bg-brand text-white font-medium inline-flex items-center justify-center text-sm hover:bg-green-600 transition-colors"
              >
                Kopyala
              </button>
            </div>

            <p className="text-center text-sm text-gray-600">
              {t("donationAlert")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-y-2 max-w-6xl mx-auto px-8 lg:px-0">
        <h1 className="text-2xl font-bold">{t("whichAddress")}</h1>

        <div>
          {chunkTransactions[page]?.map((transaction, index) => (
            <TableRow key={index} {...transaction} />
          ))}
        </div>

        <div className="mt-6 self-center sm:self-end flex items-center gap-x-4 select-none">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="h-10 w-10 border rounded inline-flex items-center justify-center font-bold hover:bg-gray-100 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
          >
            <ChevronLeftIcon className="h-4" />
          </button>

          <div>
            {t("pagination", {
              page: page + 1,
              totalPage: chunkTransactions.length,
            })}
          </div>

          <button
            disabled={page === chunkTransactions.length - 1}
            onClick={() => setPage(page + 1)}
            className="h-10 w-10 border rounded inline-flex items-center justify-center font-bold hover:bg-gray-100 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
          >
            <ChevronRightIcon className="h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
