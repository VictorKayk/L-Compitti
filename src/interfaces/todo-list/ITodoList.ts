import { ITodo } from './ITodo';

export interface ITodoList {
  id: string;
  name: string;
  color: string;
  isFinished: boolean;
  notification: Date | null;
  todos: ITodo[] | [];
}
