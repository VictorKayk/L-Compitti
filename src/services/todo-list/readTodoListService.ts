import { todoDatabase } from '../../config/localforage';
import { ITodoList } from '../../interfaces/todo-list';

export async function readTodoListService(id = ''): Promise<ITodoList | null> {
  const todoList = (await todoDatabase.getItem(id)) as ITodoList;
  return todoList;
}
