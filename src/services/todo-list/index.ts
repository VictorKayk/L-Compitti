import { ITodoList } from '../../interfaces/todo-list/ITodoList';

export interface ITodoListService {
  createTodoList({
    id,
    name,
    color,
    isFinished,
    notification,
    todos,
  }: ITodoList): Promise<void>;
}
