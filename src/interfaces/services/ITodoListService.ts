import { ISetTodoList, ITodoList } from '../todo-list';

export interface ITodoListService {
  setTodoList({
    id,
    name,
    color,
    isFinished,
    notification,
    todos,
  }: ISetTodoList): Promise<void>;
  deleteTodoList(id: string): Promise<void>;
  readTodoList(id?: string): Promise<ITodoList | null>;
  readAllTodoList(): Promise<ITodoList[]>;
}
