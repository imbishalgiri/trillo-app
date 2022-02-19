import { nanoid } from "nanoid";

import { Action } from "./actions";
import { ADD_LIST, ADD_TASK } from "./types";
import { findItemIndexById } from "../utils/arrayUtils";
// ---------------- Type Declarations
export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

// ------------------------ Main Reducer
export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    //--------------- case
    case ADD_LIST:
      console.log("i am triggered ADD_LIST");
      draft.lists.push({ id: nanoid(), text: action.payload, tasks: [] });
      return draft;
      break;

    // ------------ case
    case ADD_TASK:
      console.log(" I am triggered ADD_TASK");
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);
      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;

    // ----------- case
    default:
      break;
  }
};
