import { v4 as uuid } from 'uuid';
import { ITodoList, ISetTodoList } from '../../../interfaces/todo-list';
import {
  readTodoListService,
  setTodoListService,
} from '../../../services/todo-list';

export async function setTodoList({
  id,
  name,
  color,
  isFinished,
  notification,
  items,
}: ISetTodoList): Promise<void> {
  const data = await readTodoListService(id);

  const todo: ITodoList = {
    id: data?.id || uuid(),
    name: name || data?.name || '',
    color: color || data?.color || '',
    isFinished: isFinished || data?.isFinished || false,
    notification: notification || data?.notification || null,
    items: items || data?.items || [],
  };

  await setTodoListService(todo);
}
