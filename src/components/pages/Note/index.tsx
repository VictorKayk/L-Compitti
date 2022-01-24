import { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useNotepad } from '../../../hooks/useCases';
import { INote } from '../../../interfaces/notepad';
import { ListItem } from '../../ui/templates';

export default function Note(): ReactElement {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate(-1);

  const params = useParams() as { notes: string; id: string };

  const [note, setNote] = useState({} as INote | null);

  const {
    notepad: { readNotepad },
  } = useNotepad();

  useEffect(() => {
    async function getNotepad(): Promise<void> {
      const notepadData = await readNotepad(params.notes);
      const noteData =
        notepadData?.items.find((value) => value.id === params.id) || null;

      setNote(noteData);
    }
    getNotepad();
  }, [params.notes, params.id, setNote, readNotepad]);

  return <ListItem title={t('note')} item={note} goBack={goBack} />;
}
