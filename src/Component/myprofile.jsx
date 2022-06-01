import React from "react";
import styled from "styled-components";

const MyProfile = () => {
  return (
    <>
      <div>
        <BackgroundColor src="/img/1.jpg"></BackgroundColor>
        <IntroTitle>안녕하세요 !</IntroTitle>
        <Intro>
          자바스립트를 누구보다도 사랑하는 개발 연습생 윤서림 입니다.
        </Intro>
        <Intro>오직 프론트엔드 외길 인생만 달려왔습니다.</Intro>
        <Intro>
          바닐라js,리액트,타입스크립트,리덕스 기술등에 관심이 있습니다.
        </Intro>
        <Intro>
          매일 클린코드를 고민하며 새로운 기술을 배우는 것을 즐깁니다.
        </Intro>
        <Intro>
       멋진 프론트 엔드 개발자가 되는 것이 꿈입니다!
        </Intro>
      </div>
    </>
  );
};

const IntroTitle = styled.p`
  font-family: "NotoSansKR";
  font-weight: 700;
  font-size: 20px;
  margin-top: 20px;
`;
const Intro = styled.p`
  font-family: "NotoSansKR";
  margin-top: 9px;
`;

const BackgroundColor = styled.img`
  margin-top: 40px;
  opacity: 0.8;
  border-radius: 8px;
  max-width: 500px;
  height: 360px;
`;

export default MyProfile;
