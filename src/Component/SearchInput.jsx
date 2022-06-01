import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

const SearchInput = () => {
  return (
    <ContentBox>
      <SearchWrap>
        <ItemWrap>
          <FontAwesomeIcon icon={faSearch} />
          <SearchInputTag placeholder="서림이의 재능 알아보기" />
        </ItemWrap>
        <SearchButton>
          <Button type="submit">검색</Button>
        </SearchButton>
      </SearchWrap>
    </ContentBox>
  );
};

const ItemWrap = styled.div`
  margin-left: 5px;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  margin-right: 8px;
  color: #444444;
  font-weight: 700;
`;
const SearchButton = styled.div``;

const ContentBox = styled.div`
  font-family: "Ubuntu";
  box-sizing: border-box;
  padding: 30px;
`;

const SearchWrap = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  max-width: 584px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid #dfe1e5;
  margin-top: 50px;
`;
const SearchInputTag = styled.input`
  padding: 5px;
  border: none;
  margin: 8px;
  outline: none;
`;

export default SearchInput;
