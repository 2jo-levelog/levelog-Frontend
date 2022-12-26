import styled from 'styled-components';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <StMyPageContainer>
        <Router />
      </StMyPageContainer>
    </div>
  );
}

export default App;

const StMyPageContainer = styled.div`
  /*  background-color: lightblue;
  margin: 0 auto;
    @media (min-width: 768px) {
    width: 768px;
  } */
  margin: 0 auto;
  @media (max-width: 1440px) {
    width: 1024px;
  }
  @media (max-width: 1080px) {
    width: calc(100% - 2rem);
  }
`;
