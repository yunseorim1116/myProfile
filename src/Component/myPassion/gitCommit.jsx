import React from "react";
import styled, { css } from "styled-components";

const GitCommit = () => {
  return (
    <BackGround>
      <div>
        <Title>Git Commit의 신!</Title>
        <GitCommitGreen src={`${process.env.PUBLIC_URL}/img/잔디.png`} />
        <TextP>이 사람은 꾸준히 잔디를 심습니다.</TextP>

        <TextP>형식적인 잔디 심기가 아닙니다.</TextP>
        <TextP>사소한 코드까지도 commit 을 하는 습관이 있습니다.</TextP>
      </div>
      <div>
        <ContentWrap data-aos="fade-down" data-aos-duration="1500">
          git add .
        </ContentWrap>
        <ContentWrap data-aos="fade-down" data-aos-duration="1500">
          git commit -m "git commit 파트 완료"
        </ContentWrap>
        <ContentWrap data-aos="fade-down" data-aos-duration="1500">
          git push origin main{" "}
        </ContentWrap>
        <ContentWrap data-aos="fade-down" data-aos-duration="1500">
          커밋 완료!{" "}
        </ContentWrap>
      </div>
    </BackGround>
  );
};

const TextP = styled.p`
  margin-top: 0.5208vw;
  font-weight: 700;
  font-family: "NotoSansKR";
`;
const GitCommitGreen = styled.img`
  width: 26.0417vw;
  height: 10.4167vw;
  border-radius: 8px;
`;

const Title = styled.div`
  color: white;
  font-size: 1.8229vw;
  margin-bottom: 2.0833vw;
  margin-top: 1.0417vw;
  height: 2.6042vw;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 25%; /* or 100px */
    border-bottom: 3px solid #ffffff;
  }
`;

const BackGround = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.0417vw;
  margin-top: 4.1667vw;
  margin-bottom: 6.2500vw;
  background-color: #7baad3;
  background: linear-gradient(45deg, #7baad3, #669ac5);
`;

const ContentWrap = styled.div`
  font-weight: 700;
  color: #232323;
  font-family: "NotoSansKR";
  padding: 0.5208vw;
  margin-top: 0.2604vw;
  text-align: center;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 35%,
    84% 35%,
    88% 46%,
    75% 35%,
    0 35%
  );
  background-color: #ffeb33;

  width: 20vw;
  height: 5.2083vw;
`;

export default GitCommit;
