import { ITodoListService } from '../index';
import { ITodoList } from '../../../interfaces/todo-list/ITodoList';
import { todoDatabase } from '../../../config/localforage';

class TodoListService implements ITodoListService {
  async createTodoList({
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
}

export default new TodoListService();
