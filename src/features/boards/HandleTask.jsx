import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Title } from '../../ui/Titles';
import { Label } from "../../ui/Label";
import { Input, ShortInput } from "../../ui/Inputs";
import { InputText } from "../../ui/InputText";
import { InputsGrid } from "../../ui/Inputsgrid";
import { CrossButton, LargeButton, LargeButtonLight} from '../../ui/Buttons';
import { Select } from '../../ui/Select';
import { selectActiveBoard, addTask, updateTask, selectActiveTask } from "./boards-slice";


const HandleTask = ({onClose, taskId, columnId}) => {
   const dispatch = useDispatch();
   const {columns} = useSelector(selectActiveBoard);
   const placeholder = {
      title: 'e.g. Take coffee break',
      description: 'e.g. It`s always good to take a break. This 15 minute break will recharge the batteries a little.',
      subtasks: ['e.g. Make coffee', 'e.g. Drink coffee & smile'],
   }
   const taskTemplate = {
      id: '',
      title: "",
      description: '',
      status: columns[0].name,
      subtasks: [
         {
            title: "",
            isCompleted: false
         },
         {
            title: "",
            isCompleted: false
         },
      ]
   }
   const activeTask = useSelector((state) => selectActiveTask(state, taskId, columnId));
   const taskTemp = activeTask ? JSON.parse(JSON.stringify(activeTask)) : taskTemplate;
   const [task, setTask] = useState(taskTemp);

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
   const handleChangeTitle = (e) => {
      setTask({
         ...task,
         title: e.target.value
      })
   }
   const handleChangeDescr = (e) => {
      setTask({
         ...task,
         description: e.target.value,
      })
   }
   const handleChangeSubtask = (e, index) => {
      const subtasks = task.subtasks.map((task, i) => {
         if(i === index) {
            task.title = e.target.value
         } 
         return task
      })
      setTask({
         ...task,
         subtasks,
      })
   }
   const deleteSubtask = (index) => {
      const subtasks = task.subtasks.filter((subtask, i) => i !== index);
      setTask({
         ...task,
         subtasks,
      })
   }
   const addSubtask = () => {
      const subtasks = [...task.subtasks, {title: '', isCompleted: false}];
      setTask({
         ...task,
         subtasks: subtasks,
      })
   }
   const selectStatus = (e) => {
      setTask({
         ...task,
         status: e.target.value,
      })
   }

   const handleTask = () => {
      const emptyValue = task.subtasks.some((item) => item.title ? false : true);
      if(emptyValue === false) {
         if(activeTask) {
            dispatch(updateTask(task))
         } else {
            const taskid = uuidv4();
            dispatch(addTask({...task, id: taskid}))
         }
         onClose();
      }
   }

   return (
      <>
         <Title>
            {activeTask ? 'Edit Task' : 'Add New Task'}
         </Title>
         <Label>Title</Label>
         <Input 
            placeholder={activeTask ? '' : placeholder.title}
            onChange={handleChangeTitle}
            value={task.title}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{marginTop: '8px'}}
         />
         <Label>Description</Label>
         <InputText 
            placeholder={activeTask ? '' : placeholder.description}
            onChange={handleChangeDescr}
            value={task.description}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{marginTop: '8px'}}
         />
         <Label>Subtasks</Label>
         <InputsGrid>
            {task.subtasks.map((subtask, i) => {
               return (
                  <>
                     <ShortInput
                        key={i}
                        value={subtask.title}
                        placeholder={activeTask ? '' : placeholder.subtasks[i]}
                        onChange={(e) => handleChangeSubtask(e, i)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                     />
                     <CrossButton onClick={() => deleteSubtask(i)}/>
                  </>
               )
            })}
         </InputsGrid>
         <LargeButtonLight 
            onClick={addSubtask}
            style={{marginTop: '12px'}}
         >
            + Add New Subtask
         </LargeButtonLight>
         <Label>Status</Label>
         <Select 
            defaultValue={task.status} 
            onChange={selectStatus}
            style={{marginTop: '8px'}}
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
         <LargeButton 
            onClick={handleTask}
            style={{marginTop: '24px'}}
         >
            {activeTask ? 'Save Changes' : 'Create Task'}
         </LargeButton>
      </>
   )
}

export {HandleTask};