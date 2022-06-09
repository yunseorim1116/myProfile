import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Notion = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [src, setSrc] = useState();
  const onImgClick = (e) => {
    console.log("들어오는지!!");
    console.log("온클릭");
    setSrc(e.target.src);
    setModalOpen(!modalOpen);
  };
  return (
    <ContentBox>
      <Title>노션 정리의 달인 ! </Title>
      {modalOpen && <Modal onImgClick={onImgClick} src={src}></Modal>}

      <FlexBox>
        <MyNotion src="/img/나의페이지.png" />
        <MyNotionTxt>
          <MyNotionTxtP>
            나의 노션에 대한 설명이다 나는 열정 부자애요
          </MyNotionTxtP>
          <MyNotionTxtP>
            나의 노션에 대한 설명이다 나는 열정 부자애요
          </MyNotionTxtP>
          <MyNotionTxtP>
            나의 노션에 대한 설명이다 나는 열정 부자애요
          </MyNotionTxtP>
          <MyNotionTxtP>
            나의 노션에 대한 설명이다 나는 열정 부자애요
          </MyNotionTxtP>
          <MyNotionTxtP>
            나의 노션에 대한 설명이다 나는 열정 부자애요
          </MyNotionTxtP>
        </MyNotionTxt>
      </FlexBox>
      <NotionBox>
        <FlexBox>
          <Month>1월</Month>
          <BackgroundColor src="/img/노션1월.png" onClick={onImgClick} />

          <Month>2월</Month>
          <BackgroundColor src="/img/노션2월.png" onClick={onImgClick} />
        </FlexBox>
        <FlexBox>
          <Month>3월</Month>
          <BackgroundColor src="/img/노션3월.png" onClick={onImgClick} />
          <Month>4월</Month>
          <BackgroundColor src="/img/노션4월.png" onClick={onImgClick} />
        </FlexBox>
        <FlexBox>
          <Month>5월</Month>
          <BackgroundColor src="/img/노션5월.png" onClick={onImgClick} />
          <Month>6월</Month>
          <BackgroundColor src="/img/노션5월2.png" onClick={onImgClick} />
        </FlexBox>
      </NotionBox>
    </ContentBox>
  );
};

const MyNotionTxtP = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;
const NotionBox = styled.div`
  margin-left: 50px;
`;

const Title = styled.div`
  font-family: "NotoSansKR";
  margin-top: 35px;
  margin-bottom: 25px;
  font-size: 35px;
  font-weight: bold;
`;

const Month = styled.div`
  font-family: "NotoSansKR";
  margin: 0px 20px 10px 10px;
  font-size: 20px;
  font-weight: bold;
`;
const ContentBox = styled.div`
  padding: 20px;
  font-family: "NotoSansKR";
  align-items: center;
  margin-top: 50px;
  margin: auto;
`;

const FlexBox = styled.div`
  margin-top: 25px;
  margin-bottom: 100px;
  padding: 10px;
  display: flex;
`;

const MyNotion = styled.img`
  color: #dcdcdc;
  box-shadow: 0 0 10px 5px;
  cursor: pointer;
  width: 15vw;
  margin-top: 40px;
  opacity: 0.8;
  border-radius: 8px;
`;

const MyNotionTxt = styled.div`
  cursor: pointer;
  margin-top: 50px;
  opacity: 0.8;
  border-radius: 8px;
`;

const BackgroundColor = styled.img`
  color: #dcdcdc;
  box-shadow: 0 0 10px 5px;
  cursor: pointer;
  width: 40vw;
  margin-top: 40px;
  opacity: 0.8;
  border-radius: 8px;
`;

export default Notion;
