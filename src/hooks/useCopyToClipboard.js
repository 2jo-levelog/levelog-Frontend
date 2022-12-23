import { useState } from 'react';

function useCopyToClipboard() {
  const [message, setMessage] = useState('');
  const [isSucess, setIsSucess] = useState(true);

  const copy = async text => {
    try {
      await navigator.clipboard.writeText(text);
      setIsSucess(true);
      setMessage('링크가 복사되었어요');
    } catch (error) {
      setIsSucess(false);
      setMessage('링크복사 실패');
    }
  };

  return { isSucess, copy, message };
}

export default useCopyToClipboard;
