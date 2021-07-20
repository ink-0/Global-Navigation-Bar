import styled from 'styled-components';
import NavExploreContent from './NavExploreContent';
import NavExploreTitle from './NavExploreTitle';
import { dropData, dropMoreData } from '../../mock/navData';
import { v4 as uuidv4 } from 'uuid';

const NavExplore = () => {
  return (
    <NavExploreDropDiv>
      <NavExploreContainer>
        <NavExploreDiv>
          <NavExploreRow>
            {dropData.map(({ title, contents }) => (
              <NavExploreColumn key={uuidv4()}>
                <NavExploreTitle title={title} />
                {contents.map((content) => (
                  <NavExploreContent key={uuidv4()} content={content} />
                ))}
              </NavExploreColumn>
            ))}
            <NavExploreColumn>
              {dropMoreData.map((drop) => (
                <NavExploreTitle key={uuidv4()} title={drop} />
              ))}
            </NavExploreColumn>
          </NavExploreRow>
        </NavExploreDiv>
      </NavExploreContainer>
    </NavExploreDropDiv>
  );
};

export default NavExplore;
const NavExploreDropDiv = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;

  /* background-color: rgba(0, 0, 0, 0.4); */
  /* height: 0; */
  /* opacity: 0; */
  overflow: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;
const NavExploreContainer = styled.div`
  position: relative;
  height: 0%;
  max-height: 625px;
  background-color: #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;
const NavExploreDiv = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 1060px;

  @media (min-width: 1200px) {
    width: 87.72%;
  }
  @media (min-width: 992px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
const NavExploreRow = styled.div`
  margin-right: -20px;
`;
const NavExploreColumn = styled.div`
  float: left;
  width: 16.666%;
  height: 270px;
  padding: 40px 20px 0 0;
  text-align: left;
`;
