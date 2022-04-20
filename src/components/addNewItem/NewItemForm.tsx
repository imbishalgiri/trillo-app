import { useState, KeyboardEvent } from "react";

import { useFocus } from "../utils/useFocus";
import {
  NewItemFormContainer,
  NewItemInput,
  NewItemButton,
} from "../../styles";

interface NewItemFormProps {
  onAdd(text: string): void;
}

// form item with input and button field on it
export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState<string>("");
  const inputRef = useFocus();

  const handleAddText = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}> Create </NewItemButton>
    </NewItemFormContainer>
  );
};
