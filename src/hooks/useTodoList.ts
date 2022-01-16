import { IUseTodoList } from '../interfaces/hooks/IUseTodoList';
import { createTodoList } from '../useCases/todo-list/list/create';

export function useTodoList(): IUseTodoList {
  const list = {
    createTodoList,
  };
  return { list };
}
