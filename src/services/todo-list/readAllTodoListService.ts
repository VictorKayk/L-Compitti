import { todoDatabase } from '../../config/localforage';
import { ITodoList } from '../../interfaces/todo-list';

export async function readAllTodoListService(): Promise<ITodoList[]> {
  let itemsLists: ITodoList[] = [];
  await todoDatabase.iterate((value: ITodoList, key) => {
    itemsLists = [
      ...itemsLists,
      {
        ...value,
        id: key,
      },
    ];
  });
  return itemsLists;
}
