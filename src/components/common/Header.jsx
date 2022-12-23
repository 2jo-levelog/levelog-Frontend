import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from './Modal';
import useModal from '../../hooks/useSignModal';

const Header = () => {
  const [modal, onChangeModalHandler] = useModal();

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
        width="700px"
        height="600px"
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
            <div>로그인내용적어주기!</div>
          </div>
        </StModalContent>
      </Modal>
    </StHeader>
  );
};
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
    background: #1e1e1e;
    gap: 10px 0;
  }
  .content_left,
  .content_right {
    padding: 1.5rem;
    box-sizing: border-box;
    color: #989898;
  }
  .content_title {
    font-size: 1.7rem;
    font-weight: 700;
  }
  img {
    width: 100%;
  }
  .content_right {
    width: 100%;
    background: #121212;
  }
`;
