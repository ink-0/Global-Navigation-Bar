import styled from 'styled-components';
import NavBar from './components/NavBar';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppDiv className="App">
        <NavBar />
      </AppDiv>
    </>
  );
}

export default App;

const AppDiv = styled.div`
  position: relative;
  max-width: 1060px;
  height: 50px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    width: 87.72%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    width: 90%;
    height: 57px;
    padding-top: 4px;
  }
`;
