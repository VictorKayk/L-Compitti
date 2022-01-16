import { ITodoList } from '../../interfaces/todo-list/ITodoList';

export interface ITodoListService {
  setTodoList({
    id,
    name,
    color,
    isFinished,
    notification,
    todos,
  }: ITodoList): Promise<void>;
  deleteTodoList(id: string): Promise<void>;
  readTodoList(id?: string): Promise<ITodoList | null>;
  readAllTodoList(): Promise<ITodoList[]>;
}
