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
        <TextP>사소한 코드도 commit을 하는 습관이 있습니다.</TextP>
      </div>
      <ContentWrap>커밋 완료~</ContentWrap>;
    </BackGround>
  );
};

const TextP = styled.p`
  margin-top: 10px;
  font-weight: 700;
  font-family: "NotoSansKR";
`;
const GitCommitGreen = styled.img`
  color: #96a4ab;

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
  background-color: #b2c7d9;
  margin-bottom: 120px;
`;

const ContentWrap = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    84% 75%,
    84% 84%,
    63% 75%,
    0% 75%
  );

  background-color: #ffeb33;

  width: 50vw;
  height: 500px;
`;

export default GitCommit;
