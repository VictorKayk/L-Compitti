import { ITodoList } from '../../../../interfaces/todo-list/ITodoList';
import todoService from '../../../../services/todo-list/implementations';

export async function readTodoList(id?: string): Promise<ITodoList | null> {
  const todoList = await todoService.readTodoList(id);
  return todoList;
}
