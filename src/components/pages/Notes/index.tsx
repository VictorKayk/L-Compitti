import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useNotepad } from '../../../hooks/useCases';
import { INotepad } from '../../../interfaces/notepad';
import { ModalSingleText, ModalTextAndTextarea } from '../../ui/molecules';
import { ListItems } from '../../ui/templates';

export default function Notepad(): ReactElement {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate(-1);

  const params = useParams() as { notes: string };

  const [notepads, setNotepads] = useState({} as INotepad | null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = useCallback(async (): Promise<void> => {
    setIsEditModalOpen(true);
  }, []);

  const closeEditModal = useCallback(async (): Promise<void> => {
    setIsEditModalOpen(false);
  }, []);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const openCreateModal = useCallback(async (): Promise<void> => {
    setIsCreateModalOpen(true);
  }, []);

  const closeCreateModal = useCallback(async (): Promise<void> => {
    setIsCreateModalOpen(false);
  }, []);

  const {
    notepad: { readNotepad, deleteNotepad, setNotepad },
    note: { setNote },
  } = useNotepad();

  const getNotepad = useCallback(async (): Promise<void> => {
    const notepadData = await readNotepad(params.notes);
    setNotepads(notepadData);
  }, [params.notes, readNotepad]);

  useEffect(() => {
    getNotepad();
  }, [getNotepad]);

  const removeNotepad = useCallback(async (): Promise<void> => {
    await deleteNotepad(params.notes);

    navigate(-1);
  }, [navigate, params.notes, deleteNotepad]);

  const editNotepad = useCallback(
    async ({ text }): Promise<void> => {
      await setNotepad({
        id: params.notes,
        name: text,
      });
      closeEditModal();
      await getNotepad();
    },
    [getNotepad, params.notes, closeEditModal, setNotepad]
  );

  const createNote = useCallback(
    async ({ text, textarea }): Promise<void> => {
      await setNote(params.notes, {
        name: text,
        note: textarea,
        notification: null,
      });
      closeCreateModal();
      await getNotepad();
    },
    [getNotepad, params.notes, closeCreateModal, setNote]
  );

  const editSchema = yup
    .object({
      text: yup
        .string()
        .min(2, t('error-name-notepad-min'))
        .max(25, t('error-name-notepad-max'))
        .required(),
    })
    .required();

  const createSchema = yup
    .object({
      text: yup
        .string()
        .min(2, t('error-name-note-min'))
        .max(25, t('error-name-note-max'))
        .required(),
      textarea: yup
        .string()
        .min(2, t('error-note-min'))
        .max(10000, t('error-note-max'))
        .required(),
    })
    .required();

  return (
    <>
      <ListItems
        title={t('notes')}
        goBack={goBack}
        item={notepads}
        helpActions={[
          {
            name: t('create-note'),
            handleClick: openCreateModal,
          },
          {
            name: t('edit-notepad'),
            handleClick: openEditModal,
          },
          {
            name: t('remove-notepad'),
            handleClick: removeNotepad,
          },
        ]}
      />

      <ModalSingleText
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        title={t('edit-notepad')}
        onSubmit={editNotepad}
        labelTitle={t('notepad-name')}
        submitButton={t('edit')}
        schema={editSchema}
      />

      <ModalTextAndTextarea
        isOpen={isCreateModalOpen}
        closeModal={closeCreateModal}
        title={t('create-note')}
        onSubmit={createNote}
        label={{
          text: t('note-name'),
          textarea: t('note'),
        }}
        submitButtonTitle={t('create')}
        schema={createSchema}
      />
    </>
  );
}
