import React, { useState } from 'react'; // eslint-disable-line no-unused-vars

const useModal = () => {
  const [modal, setModal] = useState(false);
  const handler = () => {
    setModal(!modal);
  };
  return [modal, handler];
};

export default useModal;
