import React from "react";
import CatLeaf from "./CatLeaf";
import GitCommit from "./GitCommit";
import Header from "../../Header";
import Algo from "./Algo";
import Kream from "./Kream";
import GetYoutube from "./GetYoutube";
import BaseBall from "./BaseBall";
import Bank from "./Bank";
import Notion from "./Notion";
import styled from "styled-components";
const MyPassion = () => {
  return (
    <div>
      <Title id="my-passion">MyPassion</Title>
      <GitCommit />
      <CatLeaf />
      <BaseBall />
      <Kream />
      <Algo />
      <GetYoutube />
      <Bank />
      <Notion />
    </div>
  );
};

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-family: "NotoSansKR";
  font-size: 2.6042vw;
`;

export default MyPassion;
