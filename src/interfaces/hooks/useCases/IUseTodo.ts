import { IInfosTodo, ISetTodo, ISetTodoList, ITodoList } from '../../todo-list';

interface IListFunctions {
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
  readAllTodoList: () => Promise<ITodoList[] | []>;
}

interface ITodoFunctions {
  setTodo: (
    listId: string,
    { id, name, isFinished, notification }: ISetTodo
  ) => Promise<void>;
  deleteTodo(listId: string, todoId: string): Promise<void>;
  infosTodo(): Promise<IInfosTodo>;
}

export interface IUseTodo {
  list: IListFunctions;
  todo: ITodoFunctions;
}
