import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Modal from './Modal';
import useModal from '../../hooks/useSignModal';
import Signin from '../features/signin/Signin';
import Signup from '../features/signup/Signup';

function Header() {
  const [modal, onChangeModalHandler] = useModal();
  const [change, setChange] = useState(true);

  // 모달창 x 버튼 눌렀을 때
  const closeEventHandler = () => {
    onChangeModalHandler();
  };

  const onSubmitHandler = () => {
    console.log('submit');
  };

  return (
    <StHeader>
      <div>Logo</div>
      <div>
        <span>ddd</span>
        <button type="button">ddd</button>
      </div>
      <Modal
        width="600px"
        height="550px"
        modal={modal}
        close={closeEventHandler}
      >
        <StModalContent>
          <div className="content_left">
            <img
              src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
              alt=""
            />
            <span className="content_title">환영합니다!</span>
          </div>
          <div className="content_right">
            <div className="modal_close">
              <StClose />
            </div>

            <StTitle>{change ? '로그인' : '회원가입'}</StTitle>

            <StContent>{change ? <Signin /> : <Signup />}</StContent>

            {change ? (
              <StBtnContainer>
                아직 회원이 아니신가요?
                <StChangeBtn onClick={() => setChange(!change)}>
                  회원가입
                </StChangeBtn>
              </StBtnContainer>
            ) : (
              <StBtnContainer>
                계정이 이미 있으신가요?
                <StChangeBtn onClick={() => setChange(!change)}>
                  로그인
                </StChangeBtn>
              </StBtnContainer>
            )}
          </div>
        </StModalContent>
      </Modal>
    </StHeader>
  );
}
export default Header;

const StHeader = styled.div`
  display: flex;
`;
const StModalContent = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  .content_left {
    min-width: 220px;
    max-width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    gap: 10px 0;
  }
  .content_left,
  .content_right {
    padding: 1.8rem;
    box-sizing: border-box;
    color: #989898;
  }
  .content_right {
    width: 100%;
    background: #fff;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .content_title {
    font-size: 1.7rem;
    font-weight: 700;
  }
  img {
    width: 100%;
  }

  .modal_close {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  h4 {
    color: #868e96;
    margin: 0.8rem 0;
  }
`;
const StClose = styled(IoIosClose)`
  font-size: 2rem;
  color: #989898;
  cursor: pointer;
`;
const StChangeBtn = styled.button`
  color: #12b886;
`;
const StTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
`;
const StContent = styled.div`
  .flex-column {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
  }
  .form_field {
    display: flex;
    flex-direction: column;
    gap: 5px 0;
  }
  .input_field_container {
    height: 3rem;
  }
  input {
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 2px;
    outline: none;
    font-size: 1rem;
    width: 100%;
    flex: 1 1 0%;
    border: 1px solid #dadada;
  }
  button {
    background-color: #12b886;
    border: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    height: 3rem;
    min-width: 6rem;
    cursor: pointer;
  }

  .form_btn_container {
    display: flex;
    justify-content: flex-end;
  }
`;
const StBtnContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: flex-end;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;
