import { nanoid } from "nanoid";

import { Action } from "./actions";
import { ADD_LIST, ADD_TASK, MOVE_LIST } from "./types";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";
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
    //--------------- case: add list
    case ADD_LIST:
      draft.lists.push({ id: nanoid(), text: action.payload, tasks: [] });
      return draft;
      break;

    // ------------ case: add task
    case ADD_TASK:
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);
      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;

    // ----------- case: move list
    case MOVE_LIST:
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.lists, draggedId);
      const hoverIndex = findItemIndexById(draft.lists, hoverId);
      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
      break;

    // ----------- case: default
    default:
      break;
  }
};
