import React from "react";
import styled from "styled-components";
const Modal = ({ onImgClick, src }) => {
  console.log("모달창으로 들어오 ㄴ");
  console.log(src);

  return (
    <ModalContainer className="modal__container">
      <ModalBox onClick={onImgClick}>
        <Modalm className="modal" src={`${src}`}></Modalm>
      </ModalBox>
    </ModalContainer>
  );
};

const ModalBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;
const Mbutton = styled.div`
  cursor: pointer;
  z-index: 101;
  font-size: 30px;
  position: absolute;
  font-weight: 700;
  right: 0px;
  margin-top: 50px;
  margin-right: 120px;
`;

const Modalm = styled.img`
  color: #7e7e7e;
  box-shadow: 0 0 10px 5px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  // Modal 창 브라우저 가운데로 조정
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const ModalContainer = styled.div`
 transition:all 1s ease .1s;   
`;

export default Modal;
