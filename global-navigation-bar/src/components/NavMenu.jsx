import styled from 'styled-components';
import { navData } from '../mock/navData';
import { v4 as uuidv4 } from 'uuid';
import NavMenuBadge from '../icons/NavMenuBadge';
const NavMenu = () => {
  return (
    <NavMenuUl>
      {navData.map((nav) => (
        <NavMenuLi key={uuidv4()}>
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
  );
};

export default NavMenu;

const NavMenuUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  cursor: pointer;
  outline: solid 1px red;
`;
const NavMenuLi = styled.li`
  display: flex;

  outline: solid 1px;
`;

const NavMenuA = styled.a`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  @media screen and (min-width: 768px) and (max-width: 974px) {
    padding-right: 0;
    padding-left: 0;
    font-size: 13px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
