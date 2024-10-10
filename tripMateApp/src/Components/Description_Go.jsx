import styles from "./Description.module.css";
import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const StyledModalButton = styled.button`
  width: 200px;
  height: 100px;
  border: none;
  border-radius: 10px;
  background-color: pink;
  font-size: 2rem;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  margin: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function Description_Go() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <section className={styles.desc}>
        <ButtonContainer>
          <StyledModalButton onClick={() => handleOpenModal("혼자 가요~")}>
            혼자 가요~
          </StyledModalButton>
          <StyledModalButton onClick={() => handleOpenModal("STEP 1. 여행 제목을 입력해주세요!")}>
            같이 가요~
          </StyledModalButton>
        </ButtonContainer>
      </section>
      {isOpen && <Modal content={modalContent} handleCloseModal={handleCloseModal} />}
    </>
  );
}
