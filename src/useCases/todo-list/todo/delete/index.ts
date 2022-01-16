import todoService from '../../../../services/todo-list/implementations';
import { setTodoList } from '../../list/set';

export async function deleteTodo(
  listId: string,
  todoId: string
): Promise<void> {
  const data = await todoService.readTodoList(listId);
  if (!data) throw new Error("Todo list doesn't exist.");

  const isTodoInList = data.todos.find((todo) => todo.id === todoId);

  if (isTodoInList) {
    const newTodos = data.todos.filter((todo) => todo.id !== todoId);

    await setTodoList({
      id: listId,
      todos: newTodos,
    });
  }
}
