import { configureStore } from "@reduxjs/toolkit";

import { viewReducer } from "./features/view/view-slice";
import { boardsReducer } from "./features/boards/boards-slice";
import { tasksReducer } from "./features/tasks/tasks-slice";
import { taskReducer } from "./features/task-slice";

export const store = configureStore({
   reducer: {
      view: viewReducer,
      boards: boardsReducer,
      tasks: tasksReducer,
      task: taskReducer,
   },
   devTools: true,
})