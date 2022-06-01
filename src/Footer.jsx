import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <FooterTag>
        <FontAwesomeIcon icon={faHome} />
        hhyjs2r@gmail.com
      </FooterTag>
    </>
  );
};

const FooterTag = styled.footer`
  font-family: "Ubuntu";
  font-size: 14px;
  background-color: #acacac;
  padding: 80px;
  text-align: center;
  color: white;
`;
export default Footer;
