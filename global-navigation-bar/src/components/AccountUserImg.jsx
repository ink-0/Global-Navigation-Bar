import styled from 'styled-components';

const AccountUser = () => {
  return (
    <AccountUserDiv>
      <UserImg></UserImg>
    </AccountUserDiv>
  );
};

export default AccountUser;

const AccountUserDiv = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  overflow: hidden;
`;

const UserImg = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('./profile_default.png');
`;
