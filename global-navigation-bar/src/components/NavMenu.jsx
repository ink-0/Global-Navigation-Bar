import styled from 'styled-components';
import { navData } from '../mock/navData';
const NavMenu = () => {
  return (
    <NavMenuUl>
      {navData.map((nav) => (
        <NavMenuLi>{nav}</NavMenuLi>
      ))}
    </NavMenuUl>
  );
};

export default NavMenu;

const NavMenuUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;
const NavMenuLi = styled.li`
  display: flex;
  padding: 0 10px;
`;
