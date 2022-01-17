import { todoDatabase } from '../../config/localforage';

export async function deleteTodoListService(id: string): Promise<void> {
  await todoDatabase.removeItem(id);
}
