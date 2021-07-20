import { createContext, useState } from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import GlobalStyles from './GlobalStyles';

export const DropContext = createContext();

function App() {
  const [isDrop, setIsDrop] = useState(false);
  return (
    <DropContext.Provider value={{ isDrop, setIsDrop }}>
      <GlobalStyles />
      <AppDiv className="App">
        <NavBar />
      </AppDiv>
    </DropContext.Provider>
  );
}

export default App;

const AppDiv = styled.div`
  position: relative;
  height: 50px;
  max-width: 1060px;
  margin: 0 auto;
  color: #333333;
  font-size: 14px;
  line-height: 1.42857143;

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
