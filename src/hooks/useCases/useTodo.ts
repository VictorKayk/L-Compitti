import { IUseTodo } from '../../interfaces/hooks/useCases';

import {
  setTodoList,
  deleteTodoList,
  readTodoList,
  readAllTodoList,
  setTodo,
  deleteTodo,
  infosTodo,
} from '../../useCases/todo-list';

export function useTodo(): IUseTodo {
  const list = {
    setTodoList,
    deleteTodoList,
    readTodoList,
    readAllTodoList,
  };

  const todo = {
    setTodo,
    deleteTodo,
    infosTodo,
  };

  return { list, todo };
}
