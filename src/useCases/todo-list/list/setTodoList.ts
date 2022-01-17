import { v4 as uuid } from 'uuid';
import { ITodoList, ISetTodoList } from '../../../interfaces/todo-list';
import todoListService from '../../../services/todo-list';

export async function setTodoList({
  id,
  name,
  color,
  isFinished,
  notification,
  todos,
}: ISetTodoList): Promise<void> {
  const data = await todoListService.readTodoList(id);

  const todo: ITodoList = {
    id: id || uuid(),
    name: name || data?.name || '',
    color: color || data?.color || '',
    isFinished: isFinished || data?.isFinished || false,
    notification: notification || data?.notification || null,
    todos: todos || data?.todos || [],
  };

  await todoListService.setTodoList(todo);
}
