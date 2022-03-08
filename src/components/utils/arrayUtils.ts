import { List } from "./../state/appStateReducer";
type Item = List;

// find index of the item in the array and return it
export const findItemIndexById = (items: Item[], id: string) => {
  return items.findIndex((item: Item) => item.id === id);
};

// ----------- moving item from the array
export const moveItem = (array: Item[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemsAtIndex(array, from), item, to);
};

// -------------- PRIVATE FUNCTIONS

// ------------ removing items at index
export function removeItemsAtIndex(array: Item[], index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

// ----------- inserting items at index
export function insertItemAtIndex(array: Item[], item: Item, index: number) {
  return [...array.slice(0, index), item, ...array.slice(index)];
}
