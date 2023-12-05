import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   boards: [], 
}

const taskSlice = createSlice({
   name: '@@task',
   initialState,
   reducers: {
      createBoard: (state, {payload}) => {
         const newBoard = {
            id: payload.boardId,
            name: payload.boardName,
            active: false,
            columns: []
         }
         payload.columns.forEach((column) => {
            newBoard.columns.push({
               id: column.id,
               name: column.name,
               tasks: []
            })
         })
         state.boards.push(newBoard)

      },
      editBoard: (state, {payload}) => {
         const editBoard = state.boards.find((board) => board.active === true);
         
         editBoard.name = payload.boardName;
         // delete columns
         editBoard.columns = editBoard.columns.filter((column) => 
            payload.columns.some((item) => item.id === column.id)
         );
         // edit columns
         editBoard.columns.forEach((column) => {
            payload.columns.forEach((item) => {
               if(column.id === item.id) {
                  column.name = item.name
                  // change status in according to column name
                  column.tasks.forEach((task) => {
                     task.status = item.name
                  })
               }
            })
         })
         // add columns
         payload.columns.forEach((item) => {
            const notNewId = editBoard.columns.some((column) => column.id === item.id);
            if(notNewId === false) {
               editBoard.columns.push({
                  ...item,
                  tasks: []
               })
            }
         })
      },
      addBoardToActive: (state, {payload}) => {
         state.boards.forEach((board) => {
            board.active = board.id === payload ? true : false
         })
      },
      deleteBoard: (state) => {
         state.boards = state.boards.filter((board) => board.active === false)
      },
      addTask: (state, {payload}) => {
         const activeBoard = state.boards.find((board) => board.active === true);
         activeBoard.columns.forEach((column) => {
            if(column.name === payload.status) {
               column.tasks.push(payload)
            }
         })
      },
      updateTask: (state, {payload}) => {
         // const activeBoard = state.boards.find((board) => board.active === true);
         // activeBoard.columns[payload.colId].forEach((task) => {
         //    if(task.id === payload.task.id) {
         //       task = payload.task
         //    }
         // })
      },
      removeTask: (state, {payload}) => {
         // const activeBoard = state.boards.find((board) => board.active === true);
         // const column = activeBoard.columns[payload.colId].tasks;
         // activeBoard.columns[payload.colId].tasks = column.filter((task) => task.title !== payload.title)
      },
      toggleComplete: (state, {payload}) => {
         const activeBoard = state.boards.find((board) => board.active === true);
         const column = activeBoard.columns.find((column) => column.id === payload.column);
         const task = column.tasks.find((task) => task.id === payload.taskId);
         task.subtasks.forEach((subtask) => {
            if(subtask.title === payload.subtask.title) {
               subtask.isCompleted = payload.isCompleted;
            }
         })
      },
      changeTaskStatus: (state, {payload}) => {
         const activeBoard = state.boards.find((board) => board.active === true);
         activeBoard.columns = payload;
      },

   }
});

export const {
   createBoard, 
   editBoard, 
   deleteBoard, 
   addBoardToActive, 
   addTask, 
   updateTask, 
   removeTask,
   toggleComplete,
   changeTaskStatus,} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
export const selectBoards = (state) => state.task.boards;
export const selectActiveBoard = (state) => state.task.boards.find((board) => board.active === true);
export const selectActiveTask = (state, taskId, colId) => {
   let activeTask;
   const board = state.task.boards.find((board) => board.active === true);
   board.columns.forEach((column) => {
      if(column.id === colId) {
         column.tasks.forEach((task) => {
            if(task.id === taskId) {
               activeTask = task;
            }
         })
      }
   })
   return activeTask;
}


// Payload for createBoard and editBoard
/*
   {
      boardId: '',
      boardName: '',
      columns: [{id, name}, {id, name}]
   }
*/


// Full structure 
/* 
   [{
      boardId: '',
      boardName: '',
      active: false,
      columns: [
         {
            colId: '',
            colName: '',
            tasks: [
         //    {
         //       id: '',
         //      "title": "Build UI for onboarding flow",
         //      "description": "",
         //      "status": "Todo",
         //      "subtasks": [
         //        {
         //          "title": "Sign up page",
         //          "isCompleted": true
         //        },
         //        {
         //          "title": "Sign in page",
         //          "isCompleted": false
         //        },
         //        {
         //          "title": "Welcome page",
         //          "isCompleted": false
         //        }
         //      ]
         //    },
            ]
         }
      ]
   }]
*/
