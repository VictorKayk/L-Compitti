import { ITodoListService } from '../index';
import { ITodoList } from '../../../interfaces/todo-list/ITodoList';
import { todoDatabase } from '../../../config/localforage';

class TodoListService implements ITodoListService {
  async setTodoList({
    id,
    name,
    color,
    isFinished,
    notification,
    todos,
  }: ITodoList): Promise<void> {
    await todoDatabase.setItem(id, {
      name,
      color,
      isFinished,
      notification,
      todos,
    });
  }

  async deleteTodoList(id: string): Promise<void> {
    await todoDatabase.removeItem(id);
  }

  async readTodoList(id = ''): Promise<ITodoList | null> {
    const todoList = (await todoDatabase.getItem(id)) as ITodoList;
    return todoList;
  }

  async readAllTodoList(): Promise<ITodoList[]> {
    let todosLists: ITodoList[] = [];
    await todoDatabase.iterate((value: ITodoList, key) => {
      todosLists = [
        ...todosLists,
        {
          ...value,
          id: key,
        },
      ];
    });
    return todosLists;
  }
}

export default new TodoListService();
