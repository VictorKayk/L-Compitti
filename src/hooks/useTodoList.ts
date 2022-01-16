import { IUseTodoList } from '../interfaces/hooks/IUseTodoList';
import { setTodoList } from '../useCases/todo-list/list/set';
import { deleteTodoList } from '../useCases/todo-list/list/delete';

export function useTodoList(): IUseTodoList {
  const list = {
    setTodoList,
    deleteTodoList,
  };
  return { list };
}
