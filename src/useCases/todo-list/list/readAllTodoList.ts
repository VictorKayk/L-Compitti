import { ITodoList } from '../../../interfaces/todo-list';
import todoService from '../../../services/todo-list';

export async function readAllTodoList(): Promise<ITodoList[]> {
  const todos = await todoService.readAllTodoList();
  return todos;
}
