import { ISetTodo } from '../todo-list/ISetTodo';
import { ISetTodoList } from '../todo-list/ISetTodoList';
import { ITodoList } from '../todo-list/ITodoList';

export interface IUseTodoList {
  list: {
    setTodoList: ({
      id,
      name,
      color,
      isFinished,
      notification,
      todos,
    }: ISetTodoList) => Promise<void>;
    deleteTodoList: (id: string) => Promise<void>;
    readTodoList: (id?: string) => Promise<ITodoList | null>;
    readAllTodoList: () => Promise<ITodoList[]>;
  };
  todo: {
    setTodo: (
      listId: string,
      { id, name, isFinished, notification }: ISetTodo
    ) => Promise<void>;
    deleteTodo(listId: string, todoId: string): Promise<void>;
  };
}
