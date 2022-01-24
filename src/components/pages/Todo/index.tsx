import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodo } from '../../../hooks/useCases';
import { ITodoList } from '../../../interfaces/todo-list';
import { ListItems } from '../../ui/templates';

export default function Todo(): ReactElement {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate(-1);

  const params = useParams() as { list: string };

  const [todoList, setTodoList] = useState({} as ITodoList | null);

  const {
    list: { readTodoList },
    todo: { setTodo, deleteTodo },
  } = useTodo();

  const getTodo = useCallback(async (): Promise<void> => {
    const todoListData = await readTodoList(params.list);
    setTodoList(todoListData);
  }, [params.list, readTodoList]);

  const handleChangeItems = useCallback(
    async (id: string): Promise<void> => {
      const todoListData = await readTodoList(params.list);
      const item = todoListData?.items?.find((value) => value.id === id);

      await setTodo(params.list, {
        id,
        isFinished: !item?.isFinished,
      });

      await getTodo();
    },
    [getTodo, params.list, readTodoList, setTodo]
  );

  const handleDeleteItems = useCallback(
    async (id: string): Promise<void> => {
      await deleteTodo(params.list, id);

      await getTodo();
    },
    [getTodo, params.list, deleteTodo]
  );

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  return (
    <ListItems
      title={t('todo-list')}
      goBack={goBack}
      item={todoList}
      handleChangeItems={handleChangeItems}
      handleDeleteItems={handleDeleteItems}
    />
  );
}
