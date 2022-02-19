import { FC, ReactChild, ReactChildren } from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { Card } from "./Card";
import { addTask } from "./state/actions";

type columnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: columnProps) => {
  const { getTasksByListId, dispatch } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => {
          console.log("text, id", text, id);
          dispatch(addTask(text, id));
        }}
        dark={true}
      />
    </ColumnContainer>
  );
};
