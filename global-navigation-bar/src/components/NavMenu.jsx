import styled from 'styled-components';
import { navData } from '../mock/navData';
import { v4 as uuidv4 } from 'uuid';
const NavMenu = () => {
  return (
    <NavMenuUl>
      {navData.map((nav) => (
        <NavMenuLi key={uuidv4()}>{nav}</NavMenuLi>
      ))}
    </NavMenuUl>
  );
};

export default NavMenu;

const NavMenuUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  cursor: pointer;
`;
const NavMenuLi = styled.li`
  display: flex;
  padding: 0 10px;
`;
