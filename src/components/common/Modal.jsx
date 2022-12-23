/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';

export default function Modal(props) {
  const { modal, close, submit, header, button } = props;

  return (
    <StModalContainer className={modal ? 'modal open' : 'modal'}>
      <div className="modal_inner">
        {header && (
          <StHeader>
            {header}
            <div className="modal_close">
              <StClose />
            </div>
          </StHeader>
        )}

        <StContent>
          <div className="modal_content_inner">{props.children}</div>
          {submit && (
            <div className="modal_footer">
              <StButton type="button" onClick={submit}>
                {button}
              </StButton>
            </div>
          )}
        </StContent>
      </div>
    </StModalContainer>
  );
}

const StModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  /*  display: none; */
  width: 100%;
  min-height: 100vh;
  &.open {
    display: block;
  }
  .modal_inner {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 50%;
    z-index: 3;
    max-width: 500px;
    transform: translate(-50%, -100%);
    animation: open ease-in-out 0.3s forwards;
    width: 95%;
  }

  .modal_footer {
    display: flex;
    justify-content: flex-end;
  }
  @keyframes open {
    0% {
      opacity: 0;
      top: 45%;
    }
    100% {
      opacity: 1;
      top: 50%;
    }
  }
  .modal_close {
  }
`;
const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
`;
const StClose = styled(IoIosClose)`
  font-size: 2rem;
  cursor: pointer;
`;
const StContent = styled.div`
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px 0;

  .modal_content_inner {
    display: flex;
    padding: 0 1rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }
`;

const StButton = styled.button`
  background: none;
  border: none;
  min-width: 85px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #f4f3f3;
  box-shadow: 0 0 4px 1px rgb(0 0 0 / 10%);
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
`;
