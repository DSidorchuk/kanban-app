import { styled } from "styled-components";
import { useDispatch } from 'react-redux';

import { DeleteTitle } from "../ui/Titles";
import { Text } from "../ui/Text";
import { DeleteButton, CancelButton } from "../ui/Buttons";
import { removeBoard } from "../features/boards/boards-slice";

const Flex = styled.div`
   display: flex;
   justify-content: space-between;
   width: 416px;
   margin-top: 24px;
`;

const DeleteModal = ({onClose, board, task}) => {
   const dispatch = useDispatch();

   const handleClick = () => {
      if(board) {
         dispatch(removeBoard(board.board.id))
      }
      onClose()
   }

   return (
      <>
        <DeleteTitle>
         {board && 'Delete this board?'}
         {task && 'Delete this task?'}
         </DeleteTitle> 
         <Text>
            {board && `Are you sure you want to delete the ‘${board.board.name}’ board? This action will remove all columns and tasks and cannot be reversed.`}
            {task && `Are you sure you want to delete the ‘${task.title}’ task and its subtasks? This action cannot be reversed.`}
         </Text>
         <Flex>
            <DeleteButton onClick={handleClick}>Delete</DeleteButton>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
         </Flex>
      </>
   )
}

export {DeleteModal};