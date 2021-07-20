import styled from 'styled-components';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavAccount from './NavAccount';

const NavBar = () => {
  return (
    <NavBarDiv>
      <NavLogo />
      <NavMenu />
      <NavAccount />
    </NavBarDiv>
  );
};

export default NavBar;
const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 0;
`;
