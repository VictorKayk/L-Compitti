import todoListServices from '../../../../services/todo-list';

export async function deleteTodoList(id: string): Promise<void> {
  await todoListServices.deleteTodoList(id);
}
