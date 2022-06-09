import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { UserNavContext } from "./Component/MainPg ";
import { useContext } from "react";
import { useRef } from "react";
import ContactMe from "./Component/contact/ContactMe";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { BsGithub } from "react-icons/bs";

const Header = () => {
  const user = useSelector((state) => state);
  const navigate = useNavigate();
  const { page } = useContext(UserNavContext);
  const contactRef = useRef();
  const onGitClick = () => {
    console.log("깃헙");
  };
  const contactMe = document.getElementById("contact-me");
  // const myPassion = document.getElementById("my-passion");

  const onClick = () => {
    contactMe.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MainHeader>
      <TitleWrap>
        <a href="https://github.com/yunseorim1116">
         
          <BsGithub size="24" color="#fff" onClick={onGitClick} />
        </a>
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
  color: #ffffff;
  background: linear-gradient(to right top, #434343, #595959);
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
  background-color: #333333;
  box-sizing: border-box;
  padding: 40px;
  color: #1e1e1e;
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0 6px 6px 0px #dbdbdb;
`;

const Ul = styled.ul`
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  margin: 5px;
  right: 1px;
  display: flex;
  text-decoration: none;
  list-style: none;
`;
const Li = styled.ul`
  padding: 20px;

  &:hover {
    border-bottom: 1px solid;

    box-sizing: border-box;
  }
  margin: 10px;
`;

export default Header;
