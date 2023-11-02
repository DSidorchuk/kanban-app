import { styled } from "styled-components";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Title } from '../../ui/Titles';
import { Label } from "../../ui/Label";
import { NameInput, ColumnInput } from "../../ui/Inputs";
import { LargeButton, LargeButtonLight} from '../../ui/Buttons';
import { ReactComponent as Cross } from '../../assets/CrossBtn.svg';
// import { createBoard, changeBoard } from "./boards-slice";
import { createBoard, editBoard } from "../task-slice";

const Grid = styled.div`
   display: grid;
   grid-template-columns: 385px 15px;
   grid-auto-rows: 40px;
   row-gap: 12px;
   column-gap: 16px;
   align-items: center;
   margin-top: 8px;
`;

const CrossBtn = styled(Cross)`
   cursor: pointer;
`;


const HandleBoard = ({onClose, activeBoard}) => {
   const dispatch = useDispatch();
   const columnNames = activeBoard ? activeBoard.columns : [
      {id: 0, name: 'Todo'}, 
      {id: 1, name: 'Doing'}, 
   ];
   const [columns, setColumns] = useState(columnNames);
   // const [board, setBoardName] = useState(editBoard ? editBoard.board.name : '');
   const [board, setBoardName] = useState(activeBoard ? activeBoard.name : '');


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

   // const handleBoard = () => {
   //    const emptyValue = columns.some((item) => item.name ? false : true);

   //    if(emptyValue === false && board) {
   //       const id = editBoard ? editBoard.board.id : uuidv4();
   //       const newBoard = {
   //          board: {id, name: board},
   //          columns,
   //       };
   //       if (editBoard) {
   //          dispatch(changeBoard(newBoard))
   //       } else {
   //          dispatch(createBoard(newBoard));
   //       }         
   //       onClose();
   //    }
   // }

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
         <NameInput 
            placeholder="enter name" 
            value={board}
            onChange={handleChangeBoard}
            onBlur={handleBlur}
            onFocus={handleFocus}
            style={{marginTop: '8px'}}
         />
         <Label>Board Columns</Label>
         <Grid>
            {/* {columns.map((item) => {
               return (
                  <>
                     <ColumnInput
                        key={item.id} 
                        value={item.name}
                        onChange={(e) => handleChangeColumn(e, item.id)}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                     />
                     <CrossBtn onClick={() => deleteColumn(item.id)}/>
                  </>
               )
            })} */}
            {columns.map((item) => {
               return (
                  <>
                     <ColumnInput
                        key={item.id} 
                        value={item.name}
                        onChange={(e) => handleChangeColumn(e, item.id)}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                     />
                     <CrossBtn onClick={() => deleteColumn(item.id)}/>
                  </>
               )
            })}
         </Grid>
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