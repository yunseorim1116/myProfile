import TypeIt from "typeit-react";
import styled, { css } from "styled-components";
export default () => {
  return (
    <TrendTitle>
      <div className="App">
        <TypeIt>
          실시간 <Span style>Trend</Span>
        </TypeIt>
      </div>
    </TrendTitle>
  );
};
const Span = styled.span`
  color: tomato;
`;

const TrendTitle = styled.h1`
  color: #131313;
  font-family: "NotoSansKR";
  margin-bottom: 28px;
  font-size: 38px;
  font-weight: 700;
`;
