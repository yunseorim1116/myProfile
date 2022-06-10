import React from "react";
import MyProfile from "./Component/myprofile";
import SearchInput from "./Component/SearchInput";
import Trend from "./Component/Trend";
import styled, { css } from "styled-components";

const Content = () => {
  return (
    <>
      <SearchInput />

      <ContentWrap>
        <Trend />
        <MyProfile />
      </ContentWrap>
    </>
  );
};

const ContentWrap = styled.div`
  font-family: "Ubuntu";
  padding-top: 5.2083vw;
  padding-bottom: 5.2083vw;
  display: flex;
  justify-content: space-around;
`;

export default Content;
