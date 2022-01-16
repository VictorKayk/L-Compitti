import { ITodoList } from '../../../../interfaces/todo-list/ITodoList';
import todoService from '../../../../services/todo-list/implementations';

export async function readAllTodoList(): Promise<ITodoList[]> {
  const todos = await todoService.readAllTodoList();
  return todos;
}
