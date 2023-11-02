import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";

import { selectActiveBoard } from "../features/boards/boards-slice";
import { Modal } from './Modal';
import { HandleBoard } from '../features/boards/HandleBoard';
import { AddColumnButton } from "../ui/Buttons";


const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 280px;
   height: 814px;
   background-color: var(--col-bg-addcol);
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
      <Wrapper>
         <AddColumnButton onClick={openModal}>
            + New Column
         </AddColumnButton>
         <Modal show={showModal} onClose={closeModal}>
            <HandleBoard 
               onClose={closeModal}
               editBoard={activeBoard}
            />
         </Modal>
      </Wrapper>
   )
}

export {NewColumn};