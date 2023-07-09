import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <div className='flex items-center mt-4 justify-center text-lg px-2 py-1 font-semibold rounded'>
        {/* <div className="flex justify-center text-lg items-center px-2 py-1 font-semibold rounded"><PrimaryButton onClick={handleCopy}>{copied ? 'Copied!' : 'Copy Text'}</PrimaryButton></div> */}
      <button  onClick={handleCopy}>{copied ? 'Berhasil Copy!' : 'Copy Link Referral'}</button>
    </div>
  );
};

export default CopyButton;
