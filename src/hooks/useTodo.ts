import { IUseTodo } from '../interfaces/hooks/IUseTodo';

import {
  setTodoList,
  deleteTodoList,
  readTodoList,
  readAllTodoList,
  setTodo,
  deleteTodo,
} from '../useCases/todo-list';

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
  };

  return { list, todo };
}
