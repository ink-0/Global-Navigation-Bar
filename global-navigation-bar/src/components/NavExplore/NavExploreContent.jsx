import styled from 'styled-components';

const NavExploreContent = ({ content }) => {
  return (
    <NavExploreContentDiv>
      <NavContent>{content}</NavContent>
    </NavExploreContentDiv>
  );
};

export default NavExploreContent;
const NavExploreContentDiv = styled.a`
  display: block;
  text-decoration: inherit;
  cursor: pointer;
`;
const NavContent = styled.h3`
  position: relative;
  width: 100%;
  padding: 5px 20px 5px 0;
  font-size: 13px;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
