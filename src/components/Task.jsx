import { styled } from "styled-components";

import { TaskTitle } from "../ui/Titles";

const Wrapper = styled.div`
   width: 280px;
   min-height: 88px;
   padding: 23px 16px;
   border-radius: var(--rad-md);
   background: var(--col-bg-task);
   box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.10);
   cursor: pointer;
`;

const SubTasks = styled.div`
   margin-top: 8px;
   text-align: left;
   font-size: var(--fs-xs);
   font-weight: var(--fw-bold);
   color: var(--col-text-light);
   font-feature-settings: 'clig' off, 'liga' off;
`;

const Task = ({task, openTask}) => {
   let complete = 0;
   task.subtasks.forEach((subtask) => {
      if(subtask.isCompleted) {
         complete++;
      }
   })
   const qtty = task.subtasks.length;

   return (
      <Wrapper onClick={openTask}>
         <TaskTitle>{task.title}</TaskTitle>
         <SubTasks>{complete} of {qtty} subtasks</SubTasks>
      </Wrapper>
   )
}

export {Task};