import React from "react";

import styled, { css } from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

const Trend = () => {
  const navigate = useNavigate();
  const onClick = (id) => {
    const contactMe = document.getElementById(`${id}`);
    contactMe.scrollIntoView({ behavior: "smooth" });
  };
  const data = [
    { id: 1, content: "깃 commit의 신", type: "상승" },
    {
      id: 2,
      content: "요즘 제일 Hot하다는 깻잎논쟁 테스트 제작자",
      type: "상승",
    },
    { id: 3, content: "야구게임 만들기! 바닐라 js + 리액트", type: "상승" },
    {
      id: 4,
      content: "크림 인스타그램 클론코딩, 싱크로율 99.9%!",
      type: "상승",
    },
    { id: 5, content: "알고리즘 꾸준히 풀기", type: "하락" },
    { id: 6, content: "ts로 유튜브 데이터 받기", type: "new" },
    { id: 7, content: "데이터 직접 가공, 금융 데이터 프로젝트", type: "상승" },
    { id: 8, content: "노션 정리의 달인", type: "상승" },
    { id: 9, content: "휴식 시간도 필요해", type: "하락" },
    { id: 10, content: "성실함의 대명사", type: "상승" },
  ];

  return (
    <>
      <ContentWrap>
        <TrendTitle>
          실시간 <Span style>Trend</Span>
        </TrendTitle>
        <ul>
          {data.map((ele) => {
            if (ele.type == "상승") {
              return (
                <Trendtext
                  key={ele.id}
                  onClick={() => {
                    onClick(ele.id);
                  }}
                  id={ele.id}
                >
                  {ele.content} <Red>▲</Red> {Math.floor(Math.random() * 100)}
                </Trendtext>
              );
            } else if (ele.type == "new") {
              return (
                <Trendtext key={ele.id}>
                  {ele.content} <Red>new!</Red>{" "}
                </Trendtext>
              );
            } else {
              return (
                <Trendtext key={ele.id}>
                  {ele.content} <Blue>▼</Blue> {Math.floor(Math.random() * 100)}
                </Trendtext>
              );
            }
          })}
        </ul>
      </ContentWrap>
    </>
  );
};

const ContentWrap = styled.div`
  padding: 80px;
  padding-right: 450px;
  box-shadow: 2px 1px 10px 1px #f7f7f77e, -5px -10px 10px 1px #9a9a9a7b;
`;
const Red = styled.span`
  color: red;
`;

const Blue = styled.span`
  color: blue;
`;

const Span = styled.span`
  color: tomato;
`;
const TrendTitle = styled.h1`
  font-family: "NotoSansKR";
  margin-bottom: 28px;
  font-size: 38px;
  font-weight: 700;
`;
const Trendtext = styled.li`
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right top, #ff1a1a, #ffa459);
    font-weight: 600;
    color: transparent;
    -webkit-background-clip: text;
    border-bottom: 2px solid;
  }
  font-family: "NotoSansKR";
  margin-bottom: 20px;
`;
export default Trend;
