import { styled } from "styled-components";

import { ColumnWrapper } from '../ui/ColumnWrapper';
import { ColumnTitle } from "../ui/Titles";
import { Task } from "./Task";

const TitleBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: start;
   gap: 12px;
   height: 63px;
   width: 280px;
`;

const Circle = styled.div`
   width: 15px;
   height: 15px;
   background-color: ${({color}) => color};
   border-radius: 100%;
`;

const TaskGrid = styled.div`
   display: grid;
   grid-auto-rows: min-content;
   row-gap: 20px;
   width: 280px;
`;

const Column = ({order, column, openTask}) => {
   let circleColor;
   switch(order) {
      case 0: 
         circleColor = '#49C4E5';
         break;
      ;
      case 1: 
         circleColor = '#8471F2'
         break;
      ;
      case 2: 
         circleColor = '#67E2AE'
         break;
      ;
      case 3: 
         circleColor = '#fc913f'
         break;
      ;
   }

   return (
      <ColumnWrapper>
         <TitleBox>
            <Circle color={circleColor}/>
            <ColumnTitle>{column.name}</ColumnTitle>
         </TitleBox>
         <TaskGrid>
            {column.tasks.map((task) => {
               return (
                  <Task 
                     key={task.id} 
                     task={task}
                     openTask={() => openTask({task: task.id, column: column.id})}
                  />
               )
            })}
         </TaskGrid>
      </ColumnWrapper>
   )
}

export {Column}