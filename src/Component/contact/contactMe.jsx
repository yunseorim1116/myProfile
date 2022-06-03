import React from "react";
import styled, { css } from "styled-components";
const ContactMe = () => {
  return (
    <ContactWrap>
      <Title>Contact Me</Title>
      <ContactBox></ContactBox>
    </ContactWrap>
  );
};

const SendEamil = styled.div`
    
`



const Title = styled.div`
  font-family: "NotoSansKR";
  font-weight: 700;
  padding: 20px;
  color: white;
  font-size: 50px;
`;

const ContactBox = styled.div`



  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 50px;
  color: #fff;
  transform: translate(-50%, -50%); /* translate(x축,y축) */
  text-align: center;

  margin-top: 30px;
  background-color: #b9b9b9;
  width: 30%;
  height: 350px;
`;

const ContactWrap = styled.div`



  position: relative;

  background-color: #4a4a4a;
  width: 100%;
  height: 500px;
`;

export default ContactMe;
