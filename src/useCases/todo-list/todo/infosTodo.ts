import { readAllTodoList } from '..';
import { isEmpty } from '../../../helpers';
import { IInfosTodo, ITodo } from '../../../interfaces/todo-list';

export async function infosTodo(): Promise<IInfosTodo> {
  const itemsList = await readAllTodoList();

  let unfinishedTodos: ITodo[] = [];

  itemsList.forEach((todoList) => {
    const unfinished = todoList.items.filter((todo) => !todo.isFinished);
    unfinishedTodos = [...unfinishedTodos, ...unfinished];
  });

  const data = new Date().getTime();
  const nextTodo = unfinishedTodos.reduce((acc, todo) => {
    if (!todo.notification) return acc;

    if (todo.notification.getTime() > data) {
      if (isEmpty(acc)) return todo;
      if (acc.notification) {
        if (todo.notification.getTime() < acc.notification.getTime())
          return todo;
      }
    }

    return acc;
  }, {} as ITodo);

  return {
    unfinishedTodos: unfinishedTodos.length,
    nextTodo,
  };
}
