import { IUseTodoList } from '../interfaces/hooks/IUseTodoList';
import { setTodoList } from '../useCases/todo-list/list/set';
import { deleteTodoList } from '../useCases/todo-list/list/delete';
import { readTodoList } from '../useCases/todo-list/list/read';
import { readAllTodoList } from '../useCases/todo-list/list/readAll';

export function useTodoList(): IUseTodoList {
  const list = {
    setTodoList,
    deleteTodoList,
    readTodoList,
    readAllTodoList,
  };
  return { list };
}
