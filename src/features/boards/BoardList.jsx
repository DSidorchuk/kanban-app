import { styled } from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";

// import { selectBoards, addToActive } from './boards-slice';
import { ReactComponent as Icon } from '../../assets/BoardIcon.svg';
import { Modal } from "../../components/Modal";
import { HandleBoard } from "./HandleBoard";
import { selectBoards, addBoardToActive } from "../task-slice";

const Wrapper = styled.div`
   width: 300px;
`;

const Title = styled.h5`
   margin-top: 15px;
   padding-left: 32px;
   font-size: var(--fs-xs);
   font-weight: var(--fw-bold);
   letter-spacing: 2.4px;
   color: var(--col-text-light);
`;

const List = styled.ul`
   margin-top: 19px;
   display: grid;
   grid-auto-rows: 48px;
`;

const Item = styled.li`
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 16px;
   width: 276px;
   height: 48px;
   padding-left: 32px;
   font-size: var(--fs-md);
   font-weight: var(--fw-bold);
   color: var(--col-text-light);
   font-feature-settings: 'clig' off, 'liga' off;
   cursor: pointer;

   &.active {
      border-radius: 0px 100px 100px 0px;
      background-color: var(--col-btn-primary);
      color: var(--col-btn-text-light);

      & > svg {
         fill: var(--col-btn-text-light);
      }
   }
`;

const CreateBordItem = styled(Item)`
   color: var(--col-btn-primary);

   & > svg {
      fill: var(--col-btn-primary);
   }
`;

const BoardList = () => {
   const dispatch = useDispatch();
   // const {list, active} = useSelector(selectBoards);
   const list = useSelector(selectBoards);
   const [showModal, setShowModal] = useState(false);

   // const handleClick = (item) => {
   //    dispatch(addToActive(item));
   // }
   const handleClick = (id) => {
      dispatch(addBoardToActive(id));
   }

   const closeModal = () => {
      setShowModal(false);
   }

   const openModal = () => {
      setShowModal(true);
   }

   return (
      <Wrapper>
         <Title>ALL BOARDS ({list.length})</Title>
         <List>
            {/* {list.length > 0 && list.map((item) => {
               const clazz = item === active ? 'active' : '';
               return (
                  <Item
                     key={item.board} 
                     className={clazz}
                     onClick={() => handleClick(item)}
                  >
                     <Icon/>
                     {item.board.name}
                  </Item>
               )
            })} */}
            {list.length > 0 && list.map((board) => {
               const clazz = board.active ? 'active' : '';
               return (
                  <Item
                     key={board.id} 
                     className={clazz}
                     onClick={() => handleClick(board.id)}
                  >
                     <Icon/>
                     {board.name}
                  </Item>
               )
            })}
            <CreateBordItem onClick={openModal}>
               <Icon/>
               + Create New Board
            </CreateBordItem>
         </List>
         <Modal show={showModal} onClose={closeModal}>
            <HandleBoard onClose={closeModal}/>
         </Modal>
      </Wrapper>
   )
}

export { BoardList };