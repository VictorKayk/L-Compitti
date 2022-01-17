import { ITodoList } from '../../../interfaces/todo-list';
import { readTodoListService } from '../../../services/todo-list';

export async function readTodoList(id?: string): Promise<ITodoList | null> {
  const todoList = await readTodoListService(id);
  return todoList;
}
