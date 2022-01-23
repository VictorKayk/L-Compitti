import { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodo } from '../../../hooks/useCases';
import { ITodoList } from '../../../interfaces/todo-list';
import { ListItem } from '../../ui/templates';

export default function Todo(): ReactElement {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate(-1);

  const params = useParams();

  const [todoList, setTodoList] = useState({} as ITodoList | null);

  const {
    list: { readTodoList },
  } = useTodo();

  useEffect(() => {
    async function getTodo(): Promise<void> {
      const todoListData = await readTodoList(params.list);
      setTodoList(todoListData);
    }
    getTodo();
  }, [params.list, setTodoList, readTodoList]);

  console.log(params, todoList);

  return <ListItem title={t('todo-list')} goBack={goBack} item={todoList} />;
}
