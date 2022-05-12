import styled from "styled-components";

interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

// styling main app / layout styles
export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

// styling for title of a single column
export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
  font-size: 20px;
`;

// + ADD NEW ITEM button
interface AddItemButtonProps {
  dark?: boolean;
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;

// new item form container
// will hold button and form input inside it
// container
export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

// button for form
export const NewItemButton = styled.button`
  cursor: pointer;
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  transition: background 85ms ease-in;
  &:hover {
    background-color: #458533;
  }
`;

// form input for adding new item
export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${(props) => (props.isHidden ? 0.5 : 1)};
  transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
`;

// styling a single column
export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
  cursor: move;
`;

// styling for card container component
export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  font-weight: none;
  color: #808080;
  text-transform: lowercase;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

// custom drag layer container
export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;
