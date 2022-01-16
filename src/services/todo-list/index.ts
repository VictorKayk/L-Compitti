import { ISetTodoList } from '../../interfaces/todo-list/ISetTodoList';
import { ITodoList } from '../../interfaces/todo-list/ITodoList';

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
