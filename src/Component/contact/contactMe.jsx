import React from "react";
import styled, { css } from "styled-components";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    console.log("보내짐");

    emailjs
      .sendForm(
        "service_f0mxzxa",
        "template_pna2jxo",
        form.current,
        "ASB7oYgf8SEBlff-g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactWrap>
      <Title>Contact Me</Title>
      <ContactBox>
        <form ref={form} onSubmit={sendEmail}>
          <FlexDiv>
            <NameEmail>
              <Label>Name</Label>
              <NameInput type="text" name="user_name" />

              <Label>Email</Label>
              <EmailInput type="email" name="user_email" />
            </NameEmail>

            <Msg>
              <Label>Message</Label>
              <SendEamil name="message" />
              <MsgBtn type="submit" value="Send Message" />
            </Msg>
          </FlexDiv>
        </form>
      </ContactBox>
    </ContactWrap>
  );
};

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
  font-family: "NotoSansKR";
  position: relative;

  background: linear-gradient(45deg, #4a4a4a, #4b4b4b);
  width: 100%;
  height: 500px;
`;

export default ContactMe;
