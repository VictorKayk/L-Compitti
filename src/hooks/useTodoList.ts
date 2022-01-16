import { IUseTodoList } from '../interfaces/hooks/IUseTodoList';
import { createTodoList } from '../useCases/todo-list/list/create';
import { deleteTodoList } from '../useCases/todo-list/list/delete';

export function useTodoList(): IUseTodoList {
  const list = {
    createTodoList,
    deleteTodoList,
  };
  return { list };
}
