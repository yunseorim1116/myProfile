import React from "react";
import styled from "styled-components";
const Modal = ({ onImgClick, src }) => {
  return (
    <ModalContainer className="modal__container">
      <ModalBox onClick={onImgClick}>
        <Modalm
          className="modal"
          src={`${src}`}
          onClick={(e) => e.stopPropagation()}
        ></Modalm>
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
  font-size: 1.5625vw;
  position: absolute;
  font-weight: 700;
  right: 0px;
  margin-top: 2.6042vw;
  margin-right: 6.25vw;
`;

const Modalm = styled.img`
  width: 80.2222vw;
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
  transition: all 1s ease 0.1s;
`;

export default Modal;
