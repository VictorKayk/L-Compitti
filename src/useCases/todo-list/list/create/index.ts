import { v4 as uuid } from 'uuid';
import { ICreateTodoList } from '../../../../interfaces/todo-list/ICreateTodoList';
import todoListService from '../../../../services/todo-list/implementations';

export async function createTodoList({
  name,
  color,
  notification,
}: ICreateTodoList): Promise<void> {
  await todoListService.createTodoList({
    id: uuid(),
    name,
    color,
    isFinished: false,
    notification,
    todos: [],
  });
}
