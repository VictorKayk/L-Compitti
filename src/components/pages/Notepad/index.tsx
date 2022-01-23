import { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useNotepad } from '../../../hooks/useCases';
import { INotepad } from '../../../interfaces/notepad';
import { ListPage } from '../../ui/templates';

export default function Notepad(): ReactElement {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const goBack = (): void => navigate('/');

  const [notepad, setNotepadsList] = useState([] as INotepad[] | []);

  const {
    notepad: { readAllNotepad },
  } = useNotepad();

  useEffect(() => {
    async function getNotepad(): Promise<void> {
      const allNotepad = await readAllNotepad();
      setNotepadsList(allNotepad);
    }
    getNotepad();
  }, [setNotepadsList, readAllNotepad]);

  return <ListPage title={t('notepad')} goBack={goBack} list={notepad} />;
}
