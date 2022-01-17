import { todoDatabase } from '../../config/localforage';
import { ITodoList } from '../../interfaces/todo-list';

export async function readAllTodoListService(): Promise<ITodoList[]> {
  let todosLists: ITodoList[] = [];
  await todoDatabase.iterate((value: ITodoList, key) => {
    todosLists = [
      ...todosLists,
      {
        ...value,
        id: key,
      },
    ];
  });
  return todosLists;
}
