import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useTodo } from '../../../hooks/useCases';
import { ITodoList } from '../../../interfaces/todo-list';
import { ModalSingleText } from '../../ui/molecules';
import { ListItems } from '../../ui/templates';

export default function Todo(): ReactElement {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate(-1);

  const params = useParams() as { list: string };

  const [todoLists, setTodoLists] = useState({} as ITodoList | null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = useCallback(async (): Promise<void> => {
    setIsEditModalOpen(true);
  }, []);

  const closeEditModal = useCallback(async (): Promise<void> => {
    setIsEditModalOpen(false);
  }, []);

  const {
    list: { readTodoList, deleteTodoList, setTodoList },
    todo: { setTodo, deleteTodo },
  } = useTodo();

  const getTodo = useCallback(async (): Promise<void> => {
    const todoListData = await readTodoList(params.list);
    setTodoLists(todoListData);
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

  const removeTodoList = useCallback(async (): Promise<void> => {
    await deleteTodoList(params.list);

    navigate(-1);
  }, [navigate, params.list, deleteTodoList]);

  const editTodoList = useCallback(
    async ({ text }): Promise<void> => {
      await setTodoList({
        id: params.list,
        name: text,
      });
      closeEditModal();
      await getTodo();
    },
    [getTodo, params.list, closeEditModal, setTodoList]
  );

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const schema = yup
    .object({
      text: yup
        .string()
        .min(2, t('error-name-todo-min'))
        .max(25, t('error-name-todo-max'))
        .required(),
    })
    .required();

  return (
    <>
      <ListItems
        title={t('todo-list')}
        goBack={goBack}
        item={todoLists}
        handleChangeItems={handleChangeItems}
        handleDeleteItems={handleDeleteItems}
        helpActions={[
          {
            name: t('edit-todo-list'),
            handleClick: openEditModal,
          },
          {
            name: t('remove-todo-list'),
            handleClick: removeTodoList,
          },
        ]}
      />

      <ModalSingleText
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        title={t('edit-todo-list')}
        onSubmit={editTodoList}
        labelTitle={t('todo-list-name')}
        submitButton={t('edit')}
        schema={schema}
      />
    </>
  );
}
