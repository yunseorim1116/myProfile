import React from "react";
import styled from "styled-components";

const MyProfile = () => {
  return (
    <>
      <div>
        <BackgroundColor src={`${process.env.PUBLIC_URL}/img/1.jpg`} ></BackgroundColor>
        <IntroTitle>안녕하세요 !</IntroTitle>
        <Intro>
          자바스립트를 누구보다도 사랑하는 개발 연습생 윤서림 입니다.
        </Intro>
        <Intro>오직 프론트엔드 외길 인생만 달려왔습니다.</Intro>
        <Intro>
          바닐라js,리액트,타입스크립트,리덕스 기술등에 관심이 있습니다.
        </Intro>

        <Intro>멋진 프론트 엔드 개발자가 되는 것이 꿈입니다!</Intro>
      </div>
    </>
  );
};

const IntroTitle = styled.p`
  font-family: "NotoSansKR";
  font-weight: 700;
  font-size: 1.0417vw;
  margin-top: 1.0417vw;
`;
const Intro = styled.p`
  font-family: "NotoSansKR";
  margin-top: 9px;
`;

const BackgroundColor = styled.img`
  color: #a7a7a7;
  box-shadow: 0 0 0.5208vw 0.2604vw;
  margin-top: 2.0833vw;
  opacity: 0.8;
  border-radius: 0.4167vw;
  max-width: 26.0417vw;
  height: 18.7500vw;
`;

export default MyProfile;
