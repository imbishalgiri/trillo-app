import { createContext, FC, useContext, Dispatch } from "react";
import { useImmerReducer } from "use-immer";

import { appStateReducer, AppState, List, Task } from "./appStateReducer";
import { Action } from "./actions";

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

// ------------------------- Global AppData Initialization
const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

// ----------------------------------------- Creating our own app context
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

// ------------------------------------------- Provider to provide state
export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);

  const { lists } = state;
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// ------------------------- Custom hook that help consume context
export const useAppState = () => {
  return useContext(AppStateContext);
};
