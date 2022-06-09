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
        <BackgroundColor src="/img/나의페이지.png" onClick={onImgClick} />
        <p>ㅇㄴㅁㄹㅇㄹ</p>
      </FlexBox>

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
        <BackgroundColor src="/img/노션5월2.png" onClick={onImgClick} />
      </FlexBox>
    </ContentBox>
  );
};

const Title = styled.div`
  font-family: "NotoSansKR";
  margin-top: 35px;
  margin-bottom: 25px;
  font-size: 35px;
  font-weight: 700;
`;

const Month = styled.div`
  font-family: "NotoSansKR";
  margin: 10px 10px 10px 10px;
  font-size: 20px;
  font-weight: 700;
`;
const ContentBox = styled.div`
  padding: 20px;
  font-family: "NotoSansKR";
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;
  margin: auto;
`;

const FlexBox = styled.div`
  padding: 10px;
  display: flex;
`;

const BackgroundColor = styled.img`
  cursor: pointer;
  width: 45vw;
  margin-top: 40px;
  opacity: 0.8;
  border-radius: 8px;
`;

export default Notion;
