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
  /* background-color: lightblue; */
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
  }
`;
