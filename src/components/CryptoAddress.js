import { React, useState } from 'react';
import { useTranslation } from 'react-i18next';

const CryptoAddress = ({ network, address }) => {
	const [isCopied, setIsCopied] = useState(false);
	const { t } = useTranslation();

	const handleCopyClick = (copyText) => {
		// Asynchronously call copyTextToClipboard
		navigator.clipboard
			.writeText(copyText)
			.then(() => {
				// If successful, update the isCopied state value
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 1500);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='border rounded p-4 flex items-center justify-between'>
			<div className='space-y-2'>
				<h6 className='font-semibold'>
					{t('cryptoNetwork', {
						crypto: network,
					})}
				</h6>

				<span className='hidden sm:block text-sm'>{address}</span>
			</div>

			<button
				onClick={() => {
					handleCopyClick(address);
				}}
				className='px-4 py-2 rounded bg-brand text-white shadow-sm font-medium inline-flex items-center justify-center text-sm hover:bg-green-600 transition-colors'
			>
				<span>{isCopied ? 'Copied!' : 'Copy'}</span>
			</button>
		</div>
	);
};

export default CryptoAddress;
