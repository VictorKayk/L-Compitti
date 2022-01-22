import { ITodoList } from '../../../interfaces/todo-list';
import { readAllTodoListService } from '../../../services/todo-list';

export async function readAllTodoList(): Promise<ITodoList[] | []> {
  const items = await readAllTodoListService();
  return items;
}
