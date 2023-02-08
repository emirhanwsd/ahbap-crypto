import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import chunk from 'lodash.chunk';
import QRCode from 'react-qr-code';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import TableRow from '../components/TableRow';

import Header from '../components/Header';
import axios from 'axios';

import twitter from '../assets/twitter.svg';
import { useParams } from 'react-router-dom';
import i18next from 'i18next';

const REFRESH_SECOND = 10;
const DONATE_PER_PAGE = 10;

const EthereumQR = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <QRCode
        value='0xe1935271D1993434A1a59fE08f24891Dc5F398Cd'
        size={128}
        bgColor='#FFFFFF'
        fgColor='#000000'
        level='Q'
        includeMargin={false}
      />
    </div>
  );
};

const BinanceQR = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <QRCode
        value='0xB67705398fEd380a1CE02e77095fed64f8aCe463'
        size={128}
        bgColor='#FFFFFF'
        fgColor='#000000'
        level='Q'
        includeMargin={false}
      />
    </div>
  );
};

const AvalancheQR = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <QRCode
        value='0x868D27c361682462536DfE361f2e20B3A6f4dDD8'
        size={128}
        bgColor='#FFFFFF'
        fgColor='#000000'
        level='Q'
        includeMargin={false}
      />
    </div>
  );
};

const Home = () => {
  const { locale } = useParams();
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [balance, setBalance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [showQREth, setShowQREth] = useState(false);
  const [showQRBsc, setShowQRBinance] = useState(false);
  const [showQRAvax, setShowQRAvax] = useState(false);

  const getInformations = () => {
    let endpoints = [
      'https://dwy4rzipq9scp.cloudfront.net/response.json',
      'https://d2uiuug41n1t0n.cloudfront.net/api/transaction',
    ];

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        setBalance(data[0].data);

        setTransactions(data[1].data.transactions);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getInformations();

    let interval = setInterval(() => {
      getInformations();
    }, REFRESH_SECOND * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (locale) {
      i18next.changeLanguage(locale);
    }
  }, [locale]);

  useEffect(() => {
    window.history.pushState({}, null, i18next.language);
  }, [i18next.language]);

  const chunkTransactions = chunk(transactions, DONATE_PER_PAGE);

  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const tryFormatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  });

  return (
    <>
      <div
        className={`absolute z-10 h-full w-full bg-white flex items-center justify-center transition-all ${
          loading ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        <svg
          className='animate-spin h-8 w-8 text-brand'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'>
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      </div>

      {!loading && (
        <div className='pb-24'>
          <Header />

          <div className='mt-12 flex flex-col lg:flex-row gap-8 lg:min-h-[464px] justify-center lg:-mt-40 px-8 lg:px-0'>
            <div className='bg-white lg:w-[564px] border rounded shadow p-6 flex flex-col text-black text-left'>
              <h1 className='font-bold text-xl sm:text-2xl'>
                {t('totalDonation')}
              </h1>

              <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='relative py-4 inline-flex items-center justify-center rounded border border-brand text-brand text-2xl font-bold hover:bg-brand hover:text-white transition-colors'>
                  <span>
                    {usdFormatter.format(balance.usd).replace('.00', '')}
                  </span>

                  <div className='absolute -top-1 -right-1 flex h-3 w-3'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75' />

                    <span className='relative inline-flex rounded-full h-3 w-3 bg-red-500' />
                  </div>
                </div>

                <div className='relative py-4 inline-flex items-center justify-center rounded border border-brand text-brand text-2xl font-bold hover:bg-brand hover:text-white transition-colors'>
                  <span>
                    {tryFormatter.format(balance.try).replace(',00', '')}
                  </span>

                  <div className='absolute -top-1 -right-1 flex h-3 w-3'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75' />

                    <span className='relative inline-flex rounded-full h-3 w-3 bg-red-500' />
                  </div>
                </div>
              </div>

              <p
                dangerouslySetInnerHTML={{ __html: t('donationTotalAlert') }}
                className='mt-6 text-sm text-gray-600'
              />
            </div>

            <div className='bg-white lg:w-[750px] border rounded shadow p-6 flex flex-col text-black text-left'>
              <div className='flex items-center justify-between'>
                <h1 className='font-bold text-xl sm:text-2xl'>
                  {t('donationAdresses')}
                </h1>

                <a
                  href='https://twitter.com/haluklevent/status/1622926244512661504'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    className='h-8 hover:opacity-80 transition-opacity'
                    src={twitter}
                    alt=''
                  />
                </a>
              </div>

              <div className='mt-6 space-y-4'>
                <div className='border rounded p-4 flex items-center justify-between'>
                  <div className='cryptoLogo'>
                    <img
                      src={'/eth.svg'}
                      className='h-8'
                      alt=''
                    />
                  </div>
                  <div className='space-y-2'>
                    <h6 className='font-semibold'>
                      ETHEREUM <span>&nbsp;</span>
                      <span className='text-gray-600 text-sm'>
                        {t('cryptoNetwork', {
                          crypto: 'ERC20',
                        })}
                      </span>
                    </h6>

                    <span className='hidden sm:block text-sm'>
                      0xe1935271D1993434A1a59fE08f24891Dc5F398Cd
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        '0xe1935271D1993434A1a59fE08f24891Dc5F398Cd'
                      );
                    }}
                    className='px-4 py-2 rounded bg-brand text-white shadow-sm font-medium inline-flex items-center justify-center text-sm hover:bg-green-600 transition-colors'>
                    Copy
                  </button>
                  <div className='ethereumQR flex items-center hidden sm:block'>
                    <>
                      {!showQREth ? (
                        <button onClick={() => setShowQREth(true)}>
                          Show QR Code
                        </button>
                      ) : (
                        <>
                          <EthereumQR />
                        </>
                      )}
                    </>
                  </div>
                </div>

                <div className='border rounded p-4 flex items-center justify-between'>
                  <div className='cryptoLogo'>
                    <img
                      src={'/bsc.svg'}
                      className='h-8'
                      alt=''
                    />
                  </div>
                  <div className='space-y-2'>
                    <h6 className='font-semibold'>
                      BINANCE <span>&nbsp;</span>
                      <span className='text-gray-600 text-sm'>
                        {t('cryptoNetwork', {
                          crypto: 'BEP20',
                        })}
                      </span>
                    </h6>

                    <span className='hidden sm:block text-sm'>
                      0xB67705398fEd380a1CE02e77095fed64f8aCe463
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        '0xB67705398fEd380a1CE02e77095fed64f8aCe463'
                      );
                    }}
                    className='px-4 py-2 rounded bg-brand text-white shadow-sm font-medium inline-flex items-center justify-center text-sm hover:bg-green-600 transition-colors'>
                    Copy
                  </button>
                  <div className='flex items-center hidden sm:block'>
                    <>
                      {!showQRBsc ? (
                        <button onClick={() => setShowQRBinance(true)}>
                          Show QR Code
                        </button>
                      ) : (
                        <>
                          <BinanceQR />
                        </>
                      )}
                    </>
                  </div>
                </div>

                <div className='border rounded p-4 flex items-center justify-between'>
                  <div className='cryptoLogo'>
                    <img
                      src={'/avax.svg'}
                      className='h-8'
                      alt=''
                    />
                  </div>
                  <div className='space-y-2'>
                    <h6 className='font-semibold'>
                      {t('cryptoNetwork', {
                        crypto: 'Avalanche',
                      })}
                    </h6>

                    <span className='hidden sm:block text-sm'>
                      0x868D27c361682462536DfE361f2e20B3A6f4dDD8
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        '0x868D27c361682462536DfE361f2e20B3A6f4dDD8'
                      );
                    }}
                    className='px-4 py-2 rounded bg-brand text-white shadow-sm font-medium inline-flex items-center justify-center text-sm hover:bg-green-600 transition-colors'>
                    Copy
                  </button>
                  <div className='flex items-center hidden sm:block'>
                    <>
                      {!showQRAvax ? (
                        <button onClick={() => setShowQRAvax(true)}>
                          Show QR Code
                        </button>
                      ) : (
                        <>
                          <AvalancheQR />
                        </>
                      )}
                    </>
                  </div>
                </div>

                <p
                  dangerouslySetInnerHTML={{ __html: t('donationAlert') }}
                  className='text-center text-sm text-gray-600'
                />
              </div>
            </div>
          </div>

          <div className='mt-24 flex flex-col gap-y-2 max-w-6xl mx-auto px-8 lg:px-0'>
            <h1 className='text-2xl font-bold'>{t('whichAddress')}</h1>

            <div>
              {chunkTransactions[page]?.map((transaction, index) => (
                <TableRow
                  key={index}
                  {...transaction}
                />
              ))}
            </div>

            <div className='mt-6 self-center sm:self-end flex items-center gap-x-4 select-none'>
              <button
                disabled={page === 0}
                onClick={() => setPage(page - 1)}
                className='h-10 w-10 border rounded inline-flex items-center justify-center font-bold hover:bg-gray-100 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none'>
                <ChevronLeftIcon className='h-4' />
              </button>

              <div>
                {t('pagination', {
                  page: page + 1,
                  totalPage: chunkTransactions.length,
                })}
              </div>

              <button
                disabled={page === chunkTransactions.length - 1}
                onClick={() => setPage(page + 1)}
                className='h-10 w-10 border rounded inline-flex items-center justify-center font-bold hover:bg-gray-100 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none'>
                <ChevronRightIcon className='h-4' />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
