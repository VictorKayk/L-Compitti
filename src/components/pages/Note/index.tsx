import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useNotepad } from '../../../hooks/useCases';
import { INote } from '../../../interfaces/notepad';
import { ModalTextAndTextarea } from '../../ui/molecules';
import { ListItem } from '../../ui/templates';

export default function Note(): ReactElement {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate(-1);

  const params = useParams() as { notes: string; id: string };

  const [notes, setNotes] = useState({} as INote | null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = useCallback(async (): Promise<void> => {
    setIsEditModalOpen(true);
  }, []);

  const closeEditModal = useCallback(async (): Promise<void> => {
    setIsEditModalOpen(false);
  }, []);

  const {
    notepad: { readNotepad },
    note: { setNote, deleteNote },
  } = useNotepad();

  const getNotepad = useCallback(async (): Promise<void> => {
    const notepadData = await readNotepad(params.notes);
    const noteData =
      notepadData?.items.find((value) => value.id === params.id) || null;

    setNotes(noteData);
  }, [params.notes, params.id, setNotes, readNotepad]);

  useEffect(() => {
    getNotepad();
  }, [getNotepad]);

  const removeNote = useCallback(async (): Promise<void> => {
    await deleteNote(params.notes, params.id);
    navigate(-1);
  }, [params, deleteNote, navigate]);

  const editNote = useCallback(
    async ({ text, textarea }): Promise<void> => {
      await setNote(params.notes, {
        id: params.id,
        name: text,
        note: textarea === '' ? undefined : textarea,
        notification: null,
      });
      closeEditModal();
      await getNotepad();
    },
    [getNotepad, params, closeEditModal, setNote]
  );

  const editSchema = yup.object({
    text: yup
      .string()
      .min(2, t('error-name-note-min'))
      .max(25, t('error-name-note-max')),
    textarea: yup.string().max(10000, t('error-note-max')),
  });

  return (
    <>
      <ListItem
        title={t('note')}
        item={notes}
        goBack={goBack}
        helpActions={[
          {
            name: t('edit-note'),
            handleClick: openEditModal,
          },
          {
            name: t('remove-note'),
            handleClick: removeNote,
          },
        ]}
      />
      <ModalTextAndTextarea
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        title={t('edit-note')}
        onSubmit={editNote}
        label={{
          text: t('note-name'),
          textarea: t('note'),
        }}
        submitButtonTitle={t('edit')}
        schema={editSchema}
      />
    </>
  );
}
