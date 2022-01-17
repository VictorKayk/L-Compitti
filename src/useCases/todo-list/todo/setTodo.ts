import { v4 as uuid } from 'uuid';
import { ITodo, ISetTodo } from '../../../interfaces/todo-list';
import { readTodoListService } from '../../../services/todo-list';
import { setTodoList } from '../list/setTodoList';

export async function setTodo(
  listId: string,
  { id, name, isFinished, notification }: ISetTodo
): Promise<void> {
  const data = await readTodoListService(listId);
  if (!data) throw new Error("Todo list doesn't exist.");

  if (id) {
    const isTodoInList = data.todos.find((todo) => todo.id === id);

    if (isTodoInList) {
      const newTodos = data.todos.map((todo) =>
        todo.id === id
          ? {
              id,
              name: name || todo.name,
              isFinished: isFinished || todo.isFinished,
              notification: notification || todo.notification,
            }
          : todo
      );

      await setTodoList({
        id: listId,
        todos: newTodos,
      });
      return;
    }
  }

  const todo: ITodo = {
    id: uuid(),
    name: name || '',
    isFinished: isFinished || false,
    notification: notification || null,
  };

  const newTodos = [...data.todos, todo];

  await setTodoList({
    id: listId,
    todos: newTodos,
  });
}
