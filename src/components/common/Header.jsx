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
      <Modal modal={modal} close={closeEventHandler}>
        <div>
          <div>환영합니다</div>
        </div>
        <div>
          <div>로그인</div>
        </div>
      </Modal>
    </StHeader>
  );
};
export default Header;

const StHeader = styled.div``;
