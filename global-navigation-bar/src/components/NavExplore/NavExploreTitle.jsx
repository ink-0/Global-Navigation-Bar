import styled from 'styled-components';

const NavExploreTitle = ({ title }) => {
  return (
    <NavExploreTitleDiv>
      <NavTitle>
        {title}
        <NavIcon />
      </NavTitle>
    </NavExploreTitleDiv>
  );
};

export default NavExploreTitle;
const NavExploreTitleDiv = styled.a`
  display: block;
  text-decoration: inherit;
  cursor: pointer;
`;
const NavTitle = styled.h2`
  position: relative;
  font-size: 17px;
  color: #333;
  line-height: 20px;
  vertical-align: top;
  padding-right: 20px;
  padding-bottom: 15px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const NavIcon = styled.i`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  color: #999;

  ::before {
    content: '>';
  }
`;
