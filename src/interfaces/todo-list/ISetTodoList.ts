import { ITodo } from './ITodo';

export interface ISetTodoList {
  id?: string;
  name?: string;
  color?: string;
  isFinished?: boolean;
  notification?: Date | null;
  todos?: ITodo[] | [];
}
