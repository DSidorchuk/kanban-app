import { useState } from "react";
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Title } from '../../ui/Titles';
import { Label } from "../../ui/Label";
import { Input, ShortInput } from "../../ui/Inputs";
import { LargeButton, LargeButtonLight, CrossButton} from '../../ui/Buttons';
import { InputsGrid } from "../../ui/Inputsgrid";
import { createBoard, editBoard } from "./boards-slice";


const HandleBoard = ({onClose, activeBoard}) => {
   const dispatch = useDispatch();
   const boardCopy = activeBoard ? JSON.parse(JSON.stringify(activeBoard)) : null;
   const columnNames = activeBoard ? boardCopy.columns : [
      {id: 0, name: 'Todo'}, 
      {id: 1, name: 'Doing'}, 
   ];
   const boardName = activeBoard ? boardCopy.name : '';
   const [columns, setColumns] = useState(columnNames);
   const [board, setBoardName] = useState(boardName);

   const handleChangeBoard = (e) => {
      setBoardName(e.target.value);
   }

   const handleBlur = (e) => {
      if(!e.target.value) {
         e.target.classList.add('empty')
      }
   }

   const handleFocus = (e) => {
      if(e.target.classList.contains('empty')) {
         e.target.classList.remove('empty')
      }
   }

   const deleteColumn = (id) => {
      const updatedCol = columns.filter((item) => item.id !== id);
      setColumns(updatedCol);
   }

   const addColumn = () => {
      if (columns.length < 4) {
         const lastId = columns.at(-1)?.id || 0;
         const newColumn = {id: lastId + 1, name: ''};
         setColumns([...columns, newColumn]);
      }
   }

   const handleChangeColumn = (e, id) => {
      const updatedCols = columns.map(
         (item) => {
            if (item.id === id) {
               item.name = e.target.value
            }
            return item;
      })
      setColumns(updatedCols);
   }

   const handleBoard = () => {
      const emptyValue = columns.some((item) => item.name ? false : true);

      if(emptyValue === false && board) {
         const id = activeBoard ? activeBoard.id : uuidv4();
         const newBoard = {
            boardId: id,
            boardName: board,
            columns,
         };
         if (activeBoard) {
            dispatch(editBoard(newBoard))
         } else {
            dispatch(createBoard(newBoard));
         }         
         onClose();
      }
   }

   return (
      <>
         <Title>
            {activeBoard ? 'Edit Board' : 'Add New Board'}
         </Title>
         <Label>Board Name</Label>
         <Input 
            placeholder="enter name" 
            value={board}
            onChange={handleChangeBoard}
            onBlur={handleBlur}
            onFocus={handleFocus}
            style={{marginTop: '8px'}}
         />
         <Label>Board Columns</Label>
         <InputsGrid>
            {columns.map((item) => {
               return (
                  <>
                     <ShortInput
                        key={item.id} 
                        value={item.name}
                        onChange={(e) => handleChangeColumn(e, item.id)}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                     />
                     <CrossButton onClick={() => deleteColumn(item.id)}/>
                  </>
               )
            })}
         </InputsGrid>
         <LargeButtonLight 
            style={{marginTop: '12px'}}
            onClick={addColumn}
         >
            + Add New Column
         </LargeButtonLight>
         <LargeButton 
            style={{marginTop: '24px'}}
            onClick={handleBoard}
         >
            {activeBoard ? 'Save Changes' : 'Create New Board'}
         </LargeButton>
      </>
   )
}

export {HandleBoard};