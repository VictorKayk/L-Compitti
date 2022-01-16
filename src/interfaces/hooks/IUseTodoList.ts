import { ICreateTodoList } from '../todo-list/ICreateTodoList';

export interface IUseTodoList {
  list: {
    createTodoList: ({
      name,
      color,
      notification,
    }: ICreateTodoList) => Promise<void>;
  };
}
