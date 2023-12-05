import { styled } from "styled-components";
import { useSelector } from 'react-redux';
import { useState } from "react";

import { selectActiveBoard } from "../features/boards/boards-slice";
import { NewColumn } from "../components/NewColumn";
import { Column } from "../components/Column";
import { Modal } from "../components/Modal";
import { TaskData } from "../features/boards/TaskData";
import { HandleTask } from "../features/boards/HandleTask";

const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 280px);
   column-gap: 24px;
   justify-content: start;
   padding-left: 24px;
`;

const ColumnGrid = () => {
   const {columns} = useSelector(selectActiveBoard);
   const [activeTask, setActiveTask] = useState(null);
   const [editTask, setEditTask] = useState(false);

   const openTaskModal = (task) => {
      setActiveTask(task);
   }

   const closeTaskModal = () => {
      setActiveTask(null);
      setEditTask(false);
   }

   const openEditTask = () => {
      setEditTask(true);
   }

   return (
      <Grid>
         {columns.map((column, index) => {
            return (
               <Column 
                  order={index} 
                  column={column}
                  key={index}
                  openTask={openTaskModal}
               />
            )
         })}
         {columns.length < 4 && <NewColumn/>}
         <Modal show={activeTask ? true : false} onClose={closeTaskModal}>
            {
             editTask
               ?
               <HandleTask
                  onClose={closeTaskModal}
                  taskId={activeTask?.task} 
                  columnId={activeTask?.column}
               />
               :
               <TaskData 
                  taskId={activeTask?.task} 
                  columnId={activeTask?.column}
                  closeModal={closeTaskModal}
                  openEditTask={openEditTask}
               />
            }
         </Modal>
      </Grid>
   )
}

export {ColumnGrid};