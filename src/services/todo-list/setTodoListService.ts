import { todoDatabase } from '../../config/localforage';
import { ITodoList } from '../../interfaces/todo-list';

export async function setTodoListService({
  id,
  name,
  color,
  isFinished,
  notification,
  items,
}: ITodoList): Promise<void> {
  await todoDatabase.setItem(id, {
    name,
    color,
    isFinished,
    notification,
    items,
  });
}
