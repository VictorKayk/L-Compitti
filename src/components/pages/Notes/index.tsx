import { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useNotepad } from '../../../hooks/useCases';
import { INotepad } from '../../../interfaces/notepad';
import { ListItem, ListPage } from '../../ui/templates';

export default function Notepad(): ReactElement {
  console.log('notes');
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate(-1);

  const params = useParams() as { notes: string };

  const [notepad, setNotepad] = useState({} as INotepad | null);

  const {
    notepad: { readNotepad },
  } = useNotepad();

  useEffect(() => {
    async function getNotepad(): Promise<void> {
      const notepadData = await readNotepad(params.notes);
      setNotepad(notepadData);
    }
    getNotepad();
  }, [params.notes, setNotepad, readNotepad]);

  console.log(notepad);

  return <ListItem title={t('notepad')} goBack={goBack} item={notepad} />;
}
