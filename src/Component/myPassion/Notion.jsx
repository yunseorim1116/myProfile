import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Notion = () => {
  const [modalOpen, setModalOpen] = useState(false); //모달 오픈하기 위해
  //불리언 타입으로 만들어준다..
  //false면 모달 안보이고 true면 모달을 보여준다.
  //클릭하면 ture를 다시 false로 만들어 모달을 닫아준다.
  const [src, setSrc] = useState();
  const onImgClick = (e) => {
    setSrc(e.target.src); //src저장한뒤
    setModalOpen(!modalOpen);//클릭하면 반대로 돌려돌려~~
  };
  return (
    <ContentBox>
      {modalOpen && <Modal onImgClick={onImgClick} src={src}></Modal>}

      <NotionContentBoxBack>
        <Title>노션 정리의 달인! </Title>
        <FlexBox>
          <MyNotion
            src={`${process.env.PUBLIC_URL}/img/나의페이지.png`}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <div>
            <MyNotionTxt>
              <MyNotionTxtPTitle># 비트캠프</MyNotionTxtPTitle>
              <MyNotionTxtP>
                1월-3월까지의 공부 기록이 있는 노션 저장소입니다.
                프로그래밍,자바스크립트 기초를 다지고 바닐라 js로 백엔드와
                협업을 한 프로젝트의 과정이 담겨있습니다.
              </MyNotionTxtP>

              <br />
              <MyNotionTxtPTitle># 패스트캠퍼스</MyNotionTxtPTitle>
              <MyNotionTxtP>
                4월-7월까지의 공부 기록이 있는 노션 저장소 입니다. 리액트 공부를
                시작으로 각종 라이브러리,프레임 워크 기술들을 배우고
                (ts,리덕스,넥스트js 등...) 기업과 협업을 한 프로젝트의 과정이
                담겨있습니다.
              </MyNotionTxtP>
              <br />
              <MyNotionTxtPTitle># 오류 || 느낀점 || 고민</MyNotionTxtPTitle>
              <MyNotionTxtP>
                구현을 하며 만났던 오류들,프로그래밍 동작 원리,클린 코드에 대해
                고민하고 기록하는 과정이 담겨있습니다.
              </MyNotionTxtP>
              <br />
              <MyNotionTxtPTitle># 기록하는 개발자</MyNotionTxtPTitle>
              <MyNotionTxtP>
                카테고리 별로 분류해 하루하루 공부한 것을 꾸준히 정리하는
                개발자입니다.
              </MyNotionTxtP>
              <MyNotionTxtP>
                오늘 하루 얻어간 그 어떤 지식도 놓치고 싶지 않아 매일 정리하고
                기록합니다.
              </MyNotionTxtP>

              <br />
              <MyNotionTxtPTitle># 무한한 성장 가능성</MyNotionTxtPTitle>
              <MyNotionTxtP>
                어제보다 오늘이 더 나은,
                <strong>성장하는 </strong>
                개발자 입니다.
              </MyNotionTxtP>
              <br />
            </MyNotionTxt>
          </div>
        </FlexBox>
      </NotionContentBoxBack>
      <NotionBox>
        <FlexBox>
          <Month>1월</Month>
          <BackgroundColor
            src={`${process.env.PUBLIC_URL}/img/노션1월.png`}
            onClick={onImgClick}
          />

          <Month>2월</Month>
          <BackgroundColor
            src={`${process.env.PUBLIC_URL}/img/노션2월.png`}
            onClick={onImgClick}
          />
        </FlexBox>
        <FlexBox>
          <Month>3월</Month>
          <BackgroundColor
            src={`${process.env.PUBLIC_URL}/img/노션3월.png`}
            onClick={onImgClick}
          />
          <Month>4월</Month>
          <BackgroundColor
            src={`${process.env.PUBLIC_URL}/img/노션4월.png`}
            onClick={onImgClick}
          />
        </FlexBox>
        <FlexBox>
          <Month>5월</Month>
          <BackgroundColor
            src={`${process.env.PUBLIC_URL}/img/노션5월.png`}
            onClick={onImgClick}
          />
          <Month>6월</Month>
          <BackgroundColor
            src={`${process.env.PUBLIC_URL}/img/노션5월2.png`}
            onClick={onImgClick}
          />
        </FlexBox>
      </NotionBox>
    </ContentBox>
  );
};

// const WhiteBackGrount = styled.div`
//   background-color: white;
//   width: 80%;

//   border-radius: 8px;
// `;

const NotionContentBoxBack = styled.div`
  margin: 0px;
  padding: 0px;
  background-image: linear-gradient(135deg, #2f2f2f, #5e5e5e);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding: 20px;
  color: white;
`;

const MyNotionTxtP = styled.div`
  font-family: "NotoSansKR";
  color: white;
  margin-left: 1.0417vw;
  margin-top: 0.5208vw;
`;

const MyNotionTxtPTitle = styled.div`
  font-size: 20px;
  font-family: "NotoSansKR";
  color: white;
  margin-left: 1.0417vw;
  margin-top: 0.5208vw;
`;
const NotionBox = styled.div`
  margin-left: 2.6042vw;
`;

const Title = styled.div`
  text-align: center;
  font-family: "NotoSansKR";
  margin-top: 1.8229vw;
  margin-bottom: 1.3021vw;
  font-size: 2.6rem;
  font-weight: bold;
`;

const Month = styled.div`
  font-family: "NotoSansKR";
  margin: 0vw 1.0417vw 0.5208vw 0.5208vw;
  font-size: 1.0417vw;
  font-weight: bold;
`;
const ContentBox = styled.div`
  transition: all 1s ease 0.1s;
  padding: 1.0417vw;
  margin-top: 2.6042vw;
  font-family: "NotoSansKR";
  align-items: center;

  margin: auto;
`;

const FlexBox = styled.div`
  margin-top: 1.3021vw;
  margin-bottom: 5.2083vw;
  padding: 0.5208vw;
  display: flex;
`;

const MyNotion = styled.img`
  color: #101010;
  /* box-shadow: 0 0 10px 5px; */
  /* box-shadow: 0 0 10px 5px; */
  width: 15vw;
  margin-top: 2.0833vw;
  margin-right: 1.0417vw;

  border-radius: 0.4167vw;
`;

const MyNotionTxt = styled.div`
  margin-top: 2.6042vw;
  opacity: 0.8;
  border-radius: 0.4167vw;
`;

const BackgroundColor = styled.img`
  color: #dcdcdc;
  box-shadow: 0 0 0.5208vw 0.2604vw;
  cursor: pointer;
  width: 40vw;
  margin-top: 2.0833vw;
  opacity: 0.8;
  border-radius: 0.4167vw;
`;

export default Notion;
