import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

const SearchInput = () => {
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
  const [search, setSearch] = useState("");

  const [showSearchDate, setSearchData] = useState([]);
  const [message, setMessage] = useState("");
  const [showResultMsg, setShowResultMsg] = useState("");

  const hasSearchDate = () => {
    //인풋값이 비어져있는지 검증하는 함수
    return search == "";
  };
  const hasShowSearchData = () => {
    //검색 결과값이 비어져있는지 검증하는 함수
    return showSearchDate.length == 0;
  };

  useEffect(() => {
    const check = setTimeout(() => {
      setShowResultMsg("검색결과가 없습니다.");
    }, 1000); //
  }, [showResultMsg]); //검색결과가 없습니다 띄워주기

  const onSearch = () => {
    //검색을 할때마다 띄워준다.
    setMessage("검색중입니다");
    setTimeout(() => {
      setMessage("");
    }, 2000); //검색중입니다 메세지는 일단 비워준다.계속 뜨면 좀 그니까....
  };

  useEffect(() => {
    // if (hasSearchDate) {
    //   //인풋창 검색어 있는지 없는지 검사 ,만약에 비어있으면
    //   setSearchData([]); //검색 결과들도 다 비워준다.
    // } else {
    // }
    const debounce = setTimeout(() => {
      //디바운싱 해주자zzzzxzx
      const filterData = data.filter((ele) => ele.content.includes(search));
      setSearchData(filterData);
    }, 100); //->setTimeout 설정
    return () => {
      clearTimeout(debounce); //->clearTimeout 바로 타이머 제거
    };
  }, [search]);

  return (
    <ContentBox>
      <SearchWrap>
        <ItemWrap>
          <FontAwesomeIcon icon={faSearch} />
          <SearchInputTag
            placeholder="서림이의 재능 알아보기"
            onChange={(e) => {
              setSearch(e.target.value);
              onSearch();
            }}
          />
        </ItemWrap>
        <SearchButton>
          <Button type="submit">검색</Button>
        </SearchButton>
      </SearchWrap>

      <DivBox>
        {search &&
          !message && //일단 검색어가 있으면 그에 맞는 검색결과 리스트들을 보여준다.
          showSearchDate.map((ele) => (
            <DivBox>
              <showSearch key={ele.id}>{ele.content}</showSearch>
            </DivBox>
          ))}
        {search && <div>{message} </div>}
        {hasShowSearchData() && search && !message ? ( //검색결과가 없고 && 검색은 하고 있고 && 검색중 메세지 비워져있어야해!
          <hasNotDate>{showResultMsg}</hasNotDate>
        ) : null}
      </DivBox>
    </ContentBox>
  );
};

const DivBox = styled.div`
  margin-top: 2px;
  text-align: center;
`;

const hasNotDate = styled.p`
  text-align: center;
`;

const showSearch = styled.span`
  padding: 10px;
  color: red;
`;

const ItemWrap = styled.div`
  margin-left: 5px;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  margin-top: -10px;
  border: none;
  background-color: white;
  cursor: pointer;
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
  position: relative;
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
