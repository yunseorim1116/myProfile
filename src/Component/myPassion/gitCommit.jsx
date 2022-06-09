import React from "react";
import styled, { css } from "styled-components";

const GitCommit = () => {
  return (
    <BackGround>
      <div>
        <Title>Git Commit의 신!</Title>
        <GitCommitGreen src="/img/잔디.png" />
        <TextP>이 사람은 꾸준히 잔디를 심습니다.</TextP>

        <TextP>형식적인 잔디 심기가 아닙니다.</TextP>
        <TextP>사소한 코드까지도 commit 을 하는 습관이 있습니다.</TextP>
      </div>
      <div>
        <ContentWrap
          data-aos="fade-down"
   
          data-aos-duration="1500"
        >
          git add .
        </ContentWrap>
        <ContentWrap
          data-aos="fade-down"
    
          data-aos-duration="1500"
        >
          git commit -m "git commit 파트 완료"
        </ContentWrap>
        <ContentWrap
          data-aos="fade-down"
    
          data-aos-duration="1500"
        >
          git push origin main{" "}
        </ContentWrap>
        <ContentWrap
          data-aos="fade-down"
        
          data-aos-duration="1500"
        >
          커밋 완료!{" "}
        </ContentWrap>
      </div>
    </BackGround>
  );
};

const TextP = styled.p`
  margin-top: 10px;
  font-weight: 700;
  font-family: "NotoSansKR";
`;
const GitCommitGreen = styled.img`


  width: 500px;
  height: 200px;
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 35px;
  color: white;
  margin-bottom: 40px;
  margin-top: 20px;

  height: 50px;
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
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #7baad3;
  background: linear-gradient( 45deg, #7baad3, #669ac5 );
  margin-bottom: 120px;
`;

const ContentWrap = styled.div`
  font-weight: 700;
  color: #232323;
  font-family: "NotoSansKR";
  padding: 10px;
  margin-top: 5px;
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
  height: 100px;
`;

export default GitCommit;
