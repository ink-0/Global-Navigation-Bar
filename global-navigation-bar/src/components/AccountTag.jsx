import styled from 'styled-components';

const AccountTag = () => {
  return <AccountTagDiv>기업 서비스</AccountTagDiv>;
};

const AccountTagDiv = styled.div`
  width: 82px;
  height: 30px;
  font-size: 13px;
  padding: 0 10px;
  margin: 0 0 0 15px;
  line-height: 30px;
  color: #666;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  font-weight: 400;

  @media (max-width: 767px) {
    display: none;
  }
`;
export default AccountTag;
