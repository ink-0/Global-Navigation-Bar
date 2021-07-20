import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { useContext } from 'react';
import NavMenuBadge from '../../icons/NavMenuBadge';
import { navData, navFoldData } from '../../mock/navData';
import { DropContext } from '../../App';

const NavMenu = () => {
  const { setIsDrop } = useContext(DropContext);

  const handleNavExploreDown = () => {
    setIsDrop(true);
  };

  return (
    <>
      <NavMenuUl>
        {navData.map((nav) => (
          <NavMenuLi key={uuidv4()} onMouseEnter={() => handleNavExploreDown()}>
            <NavMenuA>{nav}</NavMenuA>
          </NavMenuLi>
        ))}
        <NavMenuLi>
          <NavMenuA>
            Ai 합격예측
            <NavMenuBadge />
          </NavMenuA>
        </NavMenuLi>
      </NavMenuUl>
      <NavMenuFoldUl>
        {navFoldData.map((nav) => (
          <NavMenuLi key={uuidv4()}>
            <NavMenuA>{nav}</NavMenuA>
          </NavMenuLi>
        ))}
      </NavMenuFoldUl>
    </>
  );
};

export default NavMenu;

const NavMenuUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  cursor: pointer;
  @media (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 974px) {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
  }
`;

const NavMenuFoldUl = styled.ul`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    list-style: none;
    align-items: center;
    cursor: pointer;
  }
`;
const NavMenuLi = styled.li`
  display: flex;
`;

const NavMenuA = styled.a`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 12px;
  display: flex;

  @media screen and (min-width: 768px) and (max-width: 974px) {
    padding-right: 0;
    padding-left: 0;
    font-size: 12px;
    padding: 1px;
  }
`;
