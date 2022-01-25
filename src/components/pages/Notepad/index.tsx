import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useNotepad } from '../../../hooks/useCases';
import { INotepad } from '../../../interfaces/notepad';
import { ListPage } from '../../ui/templates';
import { ModalSingleText } from '../../ui/molecules';

export default function Notepad(): ReactElement {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate('/');

  const [notepad, setNotepadsList] = useState([] as INotepad[] | []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(async (): Promise<void> => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(async (): Promise<void> => {
    setIsModalOpen(false);
  }, []);

  const {
    notepad: { readAllNotepad, setNotepad },
  } = useNotepad();

  const getNotepad = useCallback(async (): Promise<void> => {
    const allNotepad = await readAllNotepad();
    setNotepadsList(allNotepad);
  }, [setNotepadsList, readAllNotepad]);

  const createNotepad = useCallback(
    async ({ text }): Promise<void> => {
      await setNotepad({
        name: text,
        color: 'theme',
        notification: null,
      });
      closeModal();
      await getNotepad();
    },
    [setNotepad, closeModal, getNotepad]
  );

  useEffect(() => {
    getNotepad();
  }, [getNotepad]);

  const schema = yup
    .object({
      text: yup
        .string()
        .min(2, t('error-name-notepad-min'))
        .max(25, t('error-name-notepad-max'))
        .required(),
    })
    .required();

  return (
    <>
      <ListPage
        title={t('notepad')}
        goBack={goBack}
        list={notepad}
        helpActions={[
          {
            name: t('create-notepad'),
            handleClick: openModal,
          },
        ]}
      />
      <ModalSingleText
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={t('create-notepad')}
        schema={schema}
        onSubmit={createNotepad}
        labelTitle={t('notepad-name')}
        submitButton={t('create')}
      />
    </>
  );
}
