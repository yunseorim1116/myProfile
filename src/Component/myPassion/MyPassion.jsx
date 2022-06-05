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

const MyPassion = () => {
  return (
    <div id="my-passion">
      <h1>MyPassion</h1>
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

export default MyPassion;
