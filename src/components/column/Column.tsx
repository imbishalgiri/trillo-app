import { useRef } from "react";
import { ColumnContainer, ColumnTitle } from "../../styles";
import { AddNewItem } from "../addNewItem/AddNewItem";
import { useAppState } from "../../state/AppStateContext";
import { Card } from "../card/Card";
import { addTask } from "../../state/actions";

import { useItemDrag } from "../utils/useItemDrag";

type columnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: columnProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  drag(ref);
  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => {
          text.trim() && dispatch(addTask(text, id));
        }}
        dark={true}
      />
    </ColumnContainer>
  );
};
