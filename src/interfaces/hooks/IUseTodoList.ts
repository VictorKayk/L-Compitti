import { ISetTodoList } from '../todo-list/ISetTodoList';

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
  };
}
