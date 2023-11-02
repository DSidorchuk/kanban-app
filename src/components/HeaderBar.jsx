import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { useState } from "react";

import { selectView } from "../features/view/view-slice";
import { WideButton } from "../ui/Buttons";
import { ReactComponent as Dots} from '../assets/DotsBtn.svg';
import { Modal } from "./Modal";
import { HandleBoard } from "../features/boards/HandleBoard";
import { BoardMenu } from "./BoardMenu";
import { DeleteModal } from "./Delete";
// import { selectActiveBoard } from "../features/boards/boards-slice";
import { selectActiveBoard } from "../features/task-slice";




const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: ${({showSideBar}) => showSideBar ? '1140px' : '1230px'};
   height: 96px;
   padding: 0 33px 0 24px;
   border-left: 1px solid var(--col-line);
   border-bottom: 1px solid var(--col-line);
   background-color: var(--col-bg-light);
`;

const Title = styled.h1`
   font-size: var(--fs-xl);
   font-weight: var(--fw-bold);
   color: var(--col-text-dark);
`;

const Flex = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 193px;
`;

const DotsButton = styled(Dots)`
   cursor: pointer;
`;

const HeaderBar = () => {
   const {showSideBar} = useSelector(selectView);
   // const activeBoard = useSelector(selectActiveBoard);
   const activeBoard = useSelector(selectActiveBoard);

   const [showModal, setShowModal] = useState(false);
   const [showBoardMenu, setShowBoardMenu] = useState(false);
   const [deleteBoard, setDeleteBoard] = useState(false);

   const toggleBoardMenu = () => {
      setShowBoardMenu(showBoardMenu ? false : true)
   }

   const closeModal = () => {
      setShowModal(false);
      if (deleteBoard) {
         setDeleteBoard(false)
      }
   }

   const openModal = () => {
      if(activeBoard) {
         setShowModal(true);
      }
      toggleBoardMenu();
   }

   const onDelete = () => {
      setDeleteBoard(true)
      openModal()
   }

   
   return (
      <Wrapper showSideBar={showSideBar}>
         <Title>Platform Launch</Title>
         <Flex>
            <WideButton>+ Add New Task</WideButton>
            <DotsButton onClick={toggleBoardMenu}/>
         </Flex>
         <BoardMenu 
            show={showBoardMenu} 
            onEdit={openModal}
            onDelete={onDelete}
         />
         <Modal show={showModal} onClose={closeModal}>
            { deleteBoard
               ?  <DeleteModal 
                     onClose={closeModal} 
                     board={activeBoard}
                  /> 
               :   <HandleBoard 
                     onClose={closeModal}
                     activeBoard={activeBoard}
                  />

            }
         </Modal>
      </Wrapper>
   )
}

export {HeaderBar};