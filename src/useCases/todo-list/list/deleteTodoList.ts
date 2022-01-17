import { deleteTodoListService } from '../../../services/todo-list';

export async function deleteTodoList(id: string): Promise<void> {
  await deleteTodoListService(id);
}
