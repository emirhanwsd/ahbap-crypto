import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';

import ahbap from '../assets/ahbap.png';

const Header = () => {
  const { t, i18n } = useTranslation();

  const allLanguages = Object.keys(i18n.services.resourceStore.data).sort(
    (a, b) => a.localeCompare(b)
  );

  const getFlagImage = (lang) => {
    const flagMap = {
      en: 'gb',
      pt: 'br',
    };

    const flag = flagMap[lang] || lang;

    return `https://country-flag-proxy.nod.workers.dev/png/${flag}`;
  };

  return (
    <header>
      <div className='bg-brand sm:h-[592px] pb-16 sm:pb-0 text-white flex flex-col items-center text-center px-4 lg:px-0'>
        <a
          href='https://ahbap.com'
          target='_blank'
          rel='noreferrer'>
          <img
            className='mt-24 sm:mt-10 w-[200px]'
            src={ahbap}
            alt='Ahbap logo'
          />
        </a>

        <h1 className='text-xl sm:text-2xl font-semibold mt-8 max-w-7xl'>
          {t('title')}
        </h1>

        <h2 className='text-base sm:text-xl mt-8 max-w-3xl'>{t('subTitle')}</h2>

        <Menu
          as='div'
          className='absolute top-6 right-6 lg:right-24 inline-block text-left select-none'>
          <div>
            <Menu.Button className='inline-flex w-full justify-center items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none hover:opacity-90 transition-opacity'>
              <img
                className='w-6 h-4 rounded-sm mr-2'
                src={getFlagImage(i18n.language)}
                alt={`i18n.language flag`}
              />

              <span class='uppercase'>{i18n.language}</span>

              <ChevronDownIcon
                className='-mr-1 ml-2 h-5 w-5'
                aria-hidden='true'
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='absolute right-0 z-10 h-96 overflow-y-auto mt-2 w-28 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='py-1'>
                {allLanguages.map((languageCode, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <div
                        onClick={() => {
                          i18n.changeLanguage(languageCode);
                        }}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'px-4 py-2 text-sm flex items-center gap-x-2 cursor-pointer'
                        )}>
                        <img
                          className='w-6 h-4 rounded-sm'
                          src={getFlagImage(languageCode)}
                          alt={`${languageCode} flag`}
                        />

                        <span class='uppercase'>{languageCode}</span>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
