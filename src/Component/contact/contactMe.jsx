import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useContext } from "react";
import { UserNavContext } from "../MainPg ";
import { useState } from "react";

import { SiNotion } from "react-icons/si";

const ContactMe = (props, ref) => {
  let form = useRef();

  const contact = useRef();
  const { setPage } = useContext(UserNavContext);
  const { page } = useContext(UserNavContext);

  useEffect(() => {
    const { offsetTop } = contact.current; //좌표값구하기
    setPage({ ...page, contactTop: offsetTop });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const { elements } = form.current;

    if (!elements.message.value) {
      alert("내용을 제대로 입력해주세요.");
      return;
    } else {
      emailjs
        .sendForm(
          "service_f0mxzxa",
          "template_pna2jxo",
          form.current,
          "ASB7oYgf8SEBlff-g"
        )
        .then(
          (result) => {
            console.log(elements);
            new Array(elements.length - 1)
              .fill(0)
              .forEach((i, idx) => (elements[idx].value = ""));
            alert("메일 전송 완료!");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <ContactWrap type="contact" ref={contact} id="contact-me">
      <Title>Contact Me</Title>
      <ContactBox>
        <form ref={form} onSubmit={sendEmail}>
          <FlexDiv>
            <NameEmail>
              <Label>Name</Label>
              <NameInput type="text" name="user_name" required />

              <Label>Email</Label>
              <EmailInput type="email" name="user_email" required />
            </NameEmail>

            <Msg>
              <Label>Message</Label>
              <SendEamil name="message" required />
              <MsgBtn type="submit" value="Send Message" />
            </Msg>
          </FlexDiv>
        </form>

        <NotionTalk src="/img/말풍선.png" />
        {/* <a href="https://nifty-period-b9a.notion.site/156ce000d5084563949ce2a233916aab?v=96ae379a584b45708a8c7b60b28f5436"> */}
        <NotionIcon
          onClick={() => {
            alert("아직 안보여줄거임 ∩(︶▽︶)∩");
          }}
        >
          <SiNotion size="50px" color="#fff" right="0px" />
        </NotionIcon>
        {/* </a> */}
      </ContactBox>
    </ContactWrap>
  );
};

const NotionTalk = styled.img`
  width: 250px;
  position: absolute;
  top: 230px;
  right: 20px;
`;

const NotionIcon = styled.div`
  cursor: pointer;
  transition: all ease 0.5s;
  &:hover {
    transform: rotate(-45deg);
  }
  height: 50px;
  position: absolute;
  right: -20px;
`;

const Msg = styled.div`
  position: relative;
  margin-left: 250px;
`;

const NameEmail = styled.div`
  width: 400px;
`;

const Label = styled.label`
  display: block;
  margin: 15px;
  color: #979797;
`;

const ReversCul = styled.div`
  display: flex;
  border: white;
`;

const FlexDiv = styled.div`
  display: felx;
`;

const NameInput = styled.input`
  &:focus {
    outline: none;
  }

  color: white;
  margin-left: 20px;
  padding: 10px;
  width: 400px;
  background-color: #4a4a4a;

  border: none;
  border-bottom: 1px solid white;
`;
const EmailInput = styled.input`
  &:focus {
    outline: none;
  }
  color: white;
  margin-left: 20px;
  padding: 10px;
  width: 400px;
  background-color: #4a4a4a;
  border: none;
  border-bottom: 1px solid white;
`;

const MsgBtn = styled.input`
  cursor: pointer;
  position: absolute;
  border: white;
  outline: 1px solid #ffffff;

  background: linear-gradient(45deg, #4a4a4a, #4b4b4b);
  padding: 10px;
  color: white;
  border-radius: 4px;
  right: 2px;
  bottom: -48px;
`;

const SendEamil = styled.textarea`
  &:focus {
    outline: none;
  }
  padding: 10px;
  color: white;
  margin-left: 25px;
  width: 350px;
  height: 200px;
  border-style: solid;

  background: linear-gradient(45deg, #4a4a4a, #4b4b4b);
  border-color: white;
  border-radius: 4px;
`;

const Title = styled.div`
  font-family: "NotoSansKR";
  font-weight: 700;
  padding: 20px;
  color: white;
  font-size: 50px;
`;

const ContentEmail = styled.div``;

const ContactBox = styled.div`
  padding: 20px;
  margin-left: 10px;
  margin-top: 30px;
  width: 30%;
  height: 350px;
`;

const ContactWrap = styled.div`
  overflow-x: hidden;
  max-width: 100%;
  font-family: "NotoSansKR";
  position: relative;

  background: linear-gradient(45deg, #4a4a4a, #4b4b4b);

  height: 500px;
`;

export default ContactMe;
