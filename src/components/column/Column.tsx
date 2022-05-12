import { useRef } from "react";
import { ColumnContainer, ColumnTitle } from "../../styles";
import { AddNewItem } from "../addNewItem/AddNewItem";
import { useAppState } from "../../state/AppStateContext";
import { Card } from "../card/Card";
import { useDrop } from "react-dnd";
import { moveList, addTask } from "../../state/actions";
import { isHidden } from "../utils/isHidden";

import { useItemDrag } from "../utils/useItemDrag";

type columnProps = {
  text: string;
  id: string;
  isPreview?: boolean;
};

export const Column = ({ text, id, isPreview }: columnProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const { drag } = useItemDrag({ type: "COLUMN", id, text });

  const [, drop] = useDrop({
    accept: "COLUMN",
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }

        dispatch(moveList(draggedItem.id, id));
      }
    },
  });

  drag(drop(ref));

  console.log(draggedItem);

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
    >
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
