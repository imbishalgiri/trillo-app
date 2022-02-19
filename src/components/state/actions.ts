import { ADD_LIST, ADD_TASK } from "./types";
export type Action =
  | {
      type: typeof ADD_LIST;
      payload: string;
    }
  | {
      type: typeof ADD_TASK;
      payload: { text: string; listId: string };
    };

// ------------------------------- Action To Add Task
export const addTask = (text: string, listId: string): Action => ({
  type: ADD_TASK,
  payload: {
    text,
    listId,
  },
});

// -------------------------- Action To Add List
export const addList = (text: string): Action => ({
  type: ADD_LIST,
  payload: text,
});
