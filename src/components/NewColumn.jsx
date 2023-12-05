import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";

import { selectActiveBoard } from "../features/boards/boards-slice";
import { Modal } from './Modal';
import { HandleBoard } from '../features/boards/HandleBoard';
import { AddColumn } from "../ui/Buttons";
import { ColumnWrapper } from "../ui/ColumnWrapper";


const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   grid-row: 2;
   width: 280px;
   height: 814px;
   border-radius: var(--rad-ms);
   background: var(--col-bg-addcol);
`;


const NewColumn = () => {
   const [showModal, setShowModal] = useState(false);
   const activeBoard = useSelector(selectActiveBoard);

   const closeModal = () => {
      setShowModal(false);
   }

   const openModal = () => {
      setShowModal(true);
   }

   return (
      <ColumnWrapper>
         <Wrapper>
            <AddColumn onClick={openModal}>
               + New Column
            </AddColumn>
            <Modal show={showModal} onClose={closeModal}>
               <HandleBoard 
                  onClose={closeModal}
                  activeBoard={activeBoard}
               />
            </Modal>
         </Wrapper>
      </ColumnWrapper>
   )
}

export {NewColumn};