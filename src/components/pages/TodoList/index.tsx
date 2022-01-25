import { ReactElement, useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useTodo } from '../../../hooks/useCases';
import { ITodoList } from '../../../interfaces/todo-list';
import { ListPage } from '../../ui/templates';
import { ModalSingleText } from '../../ui/molecules';

export default function TodoList(): ReactElement {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate('/');

  const [todoList, setTodosList] = useState([] as ITodoList[] | []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(async (): Promise<void> => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(async (): Promise<void> => {
    setIsModalOpen(false);
  }, []);

  const {
    list: { readAllTodoList, setTodoList },
  } = useTodo();

  const getTodosList = useCallback(async (): Promise<void> => {
    const allTodoList = await readAllTodoList();
    setTodosList(allTodoList);
  }, [readAllTodoList]);

  const createTodosList = useCallback(
    async ({ text }): Promise<void> => {
      await setTodoList({
        name: text,
        color: 'theme',
        isFinished: false,
        notification: null,
      });
      closeModal();
      await getTodosList();
    },
    [setTodoList, getTodosList, closeModal]
  );

  useEffect(() => {
    getTodosList();
  }, [getTodosList]);

  const schema = yup
    .object({
      text: yup
        .string()
        .min(2, t('error-name-todo-list-min'))
        .max(25, t('error-name-todo-list-max'))
        .required(),
    })
    .required();

  return (
    <>
      <ListPage
        title={t('todo-lists')}
        goBack={goBack}
        list={todoList}
        helpActions={[
          {
            name: t('create-todo-list'),
            handleClick: openModal,
          },
        ]}
      />
      <ModalSingleText
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={t('create-todo-list')}
        schema={schema}
        onSubmit={createTodosList}
        labelTitle={t('todo-list-name')}
        submitButton={t('create')}
      />
    </>
  );
}
