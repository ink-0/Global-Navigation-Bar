import styled from 'styled-components';
import AccountSearchIcon from '../icons/AccountSearchIcon';
import AccountAlarmIcon from '../icons/AccountAlarmIcon';
import AccountUserImg from './AccountUserImg';
import AccountTag from './AccountTag';
import AccountHamburgerIcon from '../icons/AccountHamburgerIcon';
const NavAccount = () => {
  return (
    <NavAccountDiv>
      <NavAccountUl>
        <NavAccountLi>
          <AccountSearchIcon />
        </NavAccountLi>
        <NavAccountLi>
          <AccountAlarmIcon />
        </NavAccountLi>
        <NavAccountLi>
          <AccountUserImg />
        </NavAccountLi>
        <NavAccountLiBar>
          <AccountTag />
        </NavAccountLiBar>
      </NavAccountUl>
    </NavAccountDiv>
  );
};

export default NavAccount;
const NavAccountDiv = styled.div``;
const NavAccountUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;
const NavAccountLi = styled.li`
  display: flex;
  padding: 0 10px;
`;
const NavAccountLiBar = styled(NavAccountLi)`
  ::before {
    content: '';
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
`;
