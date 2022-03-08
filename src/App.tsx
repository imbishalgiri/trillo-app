import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./components/state/AppStateContext";
import { addList } from "./components/state/actions";
import "react-patro/src/styles.css";
import { NepaliCalendar } from "react-patro";
const App = () => {
  const { lists, dispatch } = useAppState();

  // const date = new NepaliDate(, 10, 25);
  // console.log(date.getBS());

  return (
    <AppContainer>
      <NepaliCalendar
        defaultValue="2021-07-09"
        showExtra={true}
        calendarType={"AD"}
        // dateFormat="yyyy-mm-dd"
        // value={selectedDate}
        disablePast
        // showMonthDropdown={true}
        // showMonthDropdown={true}
        // showYearDropdown={true}
        // maxDate="2021-07-10"
        // minDate="07-03-2021"
        // disablePast
        // disableDate={(date) => date === "07-03-2021"}
        // onSelect={(formattedDate, adDate, bsDate, date) => {
        //   // setSelectedDate(formattedDate);
        // }}
      />
      {/* {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch(addList(text))}
      /> */}
    </AppContainer>
  );
};

export default App;
