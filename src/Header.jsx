import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <MainHeader>
      <TitleWrap>
        <FontAwesomeIcon icon={faHeart} color="rgb(255, 168, 168)" />
        <Title>Seorim's portfolio</Title>
      </TitleWrap>

      <HederWrap>
        <Ul>
          <Li>portfolio.</Li>
          <Li>My passion.</Li>
          <Li>etc.</Li>
        </Ul>
      </HederWrap>
    </MainHeader>
  );
};

const TitleWrap = styled.div`
  font-family: "Ubuntu";

  display: flex;
`;

const Title = styled.div`
  color: #303030;
  margin-left: 8px;
  font-size: 35px;
  font-weight: 700;
`;

const HederWrap = styled.div`
  position: absolute;
  right: 50px;
`;

const MainHeader = styled.header`
  font-family: "Ubuntu";

  position: sticky;
  background-color: #ffffff;

  padding: 50px;
  color: #1e1e1e;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #b5b5b5;

  box-shadow: 0 6px 6px 0px #dbdbdb;
`;

const Ul = styled.ul`
  cursor: pointer;
  color: #656565;
  font-size: 18px;
  font-weight: 700;
  margin: 5px;
  right: 1px;
  display: flex;
  text-decoration: none;
  list-style: none;
`;
const Li = styled.ul`
  margin: 10px;
`;

export default Header;
