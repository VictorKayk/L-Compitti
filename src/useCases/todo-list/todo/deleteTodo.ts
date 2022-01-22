import { readTodoListService } from '../../../services/todo-list';
import { setTodoList } from '../list/setTodoList';

export async function deleteTodo(
  listId: string,
  todoId: string
): Promise<void> {
  const data = await readTodoListService(listId);
  if (!data) throw new Error("Todo list doesn't exist.");

  const isTodoInList = data.items.find((todo) => todo.id === todoId);

  if (isTodoInList) {
    const newTodos = data.items.filter((todo) => todo.id !== todoId);

    await setTodoList({
      id: listId,
      items: newTodos,
    });
  }
}
