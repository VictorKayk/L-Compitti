import { ITodoList } from '../../interfaces/todo-list/ITodoList';
import { ITodo } from '../../interfaces/todo-list/ITodo';

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
  readTodoList(id?: string): Promise<ITodo | null>;
}
