/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';

export default function Modal(props) {
  const { modal, width, height, close, submit, header, button } = props;

  return (
    <StModalContainer className={modal ? 'modal open' : 'modal'}>
      <StCurtain />
      <StModalInner width={width} height={height} className="modal_inner">
        {header && <StHeader> {header}</StHeader>}

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
      </StModalInner>
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
  width: 100%;
  display: none;
  min-height: 100vh;

  &.open {
    display: block;
  }

  .modal_footer {
    display: flex;
    justify-content: flex-end;
  }
  @keyframes open {
    0% {
      opacity: 0;
      transform: scale(0.6) translate(-50%, 100%);
      bottom: 20%;
    }
    100% {
      opacity: 1;
      transform: scale(1) translate(-50%, 50%);
      bottom: 50%;
    }
  }
`;

const StModalInner = styled.div`
  background: #fff;

  width: ${props => props.width || 'auto'};
  height: ${props => props.height || '95%'};
  border-radius: 5px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 50%;
  z-index: 3;
  transform: scale(0.1) translate(-50%, 0%);
  transform-origin: 0 100%;
  animation: open ease-in-out 0.3s forwards;
`;
const StCurtain = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
`;
const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
  position: relative;
`;

const StContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  height: inherit;
  .modal_content_inner {
    display: flex;
    width: 100%;
    height: inherit;
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

  cursor: pointer;
  &:active {
    box-shadow: none;
  }
`;
