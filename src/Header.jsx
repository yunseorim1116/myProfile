import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { UserNavContext } from "./Component/MainPg ";
import { useContext } from "react";
import { useRef } from "react";
import ContactMe from "./Component/contact/ContactMe";

const Header = ({ OnNavclick }) => {
  const { page } = useContext(UserNavContext);
  const contactRef = useRef();

  const onClick = () => {
    const contactMe = document.getElementById("contact-me");
    console.log(contactMe);
    contactMe.scrollIntoView();
    // contactRef.current.scrollTo({
    //   top: page.contactTop,
    //   left: 0,
    //   behavior: "auto",
    // });
  };

  return (
    <MainHeader>
      <TitleWrap>
        <FontAwesomeIcon icon={faHeart} color="rgb(255, 121, 121)" />
        <Title>Seorim's portfolio</Title>
      </TitleWrap>

      <HederWrap>
        <Ul>
          <Li>portfolio.</Li>
          <Li>My passion.</Li>
          <Li ref={contactRef} onClick={onClick}>
            Contact.
          </Li>
        </Ul>
      </HederWrap>
    </MainHeader>
  );
};

const TitleWrap = styled.div`
  font-family: "NotoSansKR";
  font-weight: 700;
  display: flex;
`;

const Title = styled.div`
  color: #5a5a5a;
  background: linear-gradient(to right top, #434343, #595959);
  color: transparent;
  -webkit-background-clip: text;
  margin-left: 8px;
  font-size: 35px;
  font-weight: 700;
`;

const HederWrap = styled.div`
  position: absolute;
  right: 50px;
`;

const MainHeader = styled.header`
  font-family: "NotoSansKR";

  position: sticky;
  background-color: #ffffff;

  padding: 50px;
  color: #1e1e1e;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #f5ebeb;

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
  &:hover {
    background: linear-gradient(to right top, #ff6f6f, #ffa459);
    color: transparent;
    -webkit-background-clip: text;
  }
  margin: 10px;
`;

export default Header;
