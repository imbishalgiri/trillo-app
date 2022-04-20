import { AppContainer } from "./styles";
import { Column } from "./components/column/Column";
import { AddNewItem } from "./components/addNewItem/AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => text.trim() && dispatch(addList(text))}
      />
    </AppContainer>
  );
};

export default App;
