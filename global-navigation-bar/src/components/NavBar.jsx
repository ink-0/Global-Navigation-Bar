import styled from 'styled-components';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavAccount from './NavAccount';
import NavExplore from './NavExplore';

const NavBar = () => {
  return (
    <NavBarDiv>
      <NavLogo />
      <NavMenu />
      <NavExplore />
      <NavAccount />
    </NavBarDiv>
  );
};

export default NavBar;
const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0;
`;
