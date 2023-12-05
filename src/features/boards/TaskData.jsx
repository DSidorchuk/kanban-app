import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { DataTaskTitle } from "../../ui/Titles";
import { Text } from '../../ui/Text';
import { Label } from '../../ui/Label';
import { Checkbox } from "../../components/Checkbox";
import { Select } from "../../ui/Select";
import { ReactComponent as Dots} from '../../assets/DotsBtn.svg';
import { selectActiveBoard, toggleComplete, selectActiveTask, changeTaskStatus } from "./boards-slice";



const FlexBox = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const SubtaskGrid = styled.div`
   display: grid;
   grid-auto-rows: min-content;
   row-gap: 8px;
   margin-top: 16px;
`;


const TaskData = ({taskId, columnId, closeModal, openEditTask}) => {
   const dispatch = useDispatch();
   const {columns} = useSelector(selectActiveBoard);
   const columnsCopy = JSON.parse(JSON.stringify(columns));
   const task = useSelector((state) => selectActiveTask(state, taskId, columnId));

   let complete = 0;
   task.subtasks.forEach((subtask) => {
      if(subtask.isCompleted) {
         complete++;
      }
   })
   const qtty = task.subtasks.length;
   
   const toggleSubtask = (subtask) => {
      const payload = {
         subtask,
         taskId: task.id, 
         column: columnId,
         isCompleted: subtask.isCompleted ? false : true,
      }
      dispatch(toggleComplete(payload))
   }

   const changeStatus = (e) => {
      let payload;

      if(e.target.value !== task.status) {
         payload = columnsCopy.map((column) => {
            if(column.id === columnId) {
               const tasks = column.tasks.filter((item) => item.id !== taskId);
               column.tasks = tasks;
            }
            if(column.name === e.target.value) {
               const newTask = JSON.parse(JSON.stringify(task));
               newTask.status = e.target.value;
               column.tasks.push(newTask);
            }
            return column
         })
         dispatch(changeTaskStatus(payload))
         closeModal();
      }
   }

   return (
      <>
         <FlexBox>
            <DataTaskTitle>{task.title}</DataTaskTitle>
            <Dots onClick={openEditTask} style={{cursor: 'pointer'}}/>
         </FlexBox>
         <Text>{task.description}</Text>
         <Label>{`Subtasks (${complete} of ${qtty})`}</Label>
         <SubtaskGrid>
            {task.subtasks.map((subtask, index) => {
               return (
                  <Checkbox 
                     key={index} 
                     subtask={subtask}
                     toggleSubtask={() => toggleSubtask(subtask)}
                  />
               )
            })}
         </SubtaskGrid>
         <Label>Current Status</Label>
         <Select 
            defaultValue={task.status} 
            style={{marginTop: '8px'}}
            onChange={changeStatus}
         >
            {columns.map((column) => {
               return (
                  <option 
                     key={column.id}
                     value={column.name}
                  >
                     {column.name}
                  </option>
               )
            })}
         </Select>
      </>
   )
}

export {TaskData};