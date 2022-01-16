import { IUseTodo } from '../interfaces/hooks/IUseTodo';

import { setTodoList } from '../useCases/todo-list/list/set';
import { deleteTodoList } from '../useCases/todo-list/list/delete';
import { readTodoList } from '../useCases/todo-list/list/read';
import { readAllTodoList } from '../useCases/todo-list/list/readAll';

import { setTodo } from '../useCases/todo-list/todo/set';
import { deleteTodo } from '../useCases/todo-list/todo/delete';

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
