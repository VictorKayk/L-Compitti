import { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useTodo } from '../../../hooks/useCases';
import { ITodoList } from '../../../interfaces/todo-list';
import { ListPage } from '../../ui/templates';

export default function TodoList(): ReactElement {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate('/');

  const [todoList, setTodosList] = useState([] as ITodoList[] | []);

  const {
    list: { readAllTodoList },
  } = useTodo();

  useEffect(() => {
    async function getTodosList(): Promise<void> {
      const allTodoList = await readAllTodoList();
      setTodosList(allTodoList);
    }
    getTodosList();
  }, [setTodosList, readAllTodoList]);

  return <ListPage title={t('todo-lists')} goBack={goBack} list={todoList} />;
}
