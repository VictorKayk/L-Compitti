import { ReactElement, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Home as HomeTemplate } from '../../ui/templates';

import { useTodo, useNotepad, usePomodoro } from '../../../hooks/useCases';

export function Home(): ReactElement {
  const [todo, setTodo] = useState(0);
  const [nextTodo, setNextTodo] = useState('');

  const [note, setNote] = useState(0);
  const [nextNote, setNextNote] = useState('');

  const [pomodoro, setPomodoro] = useState(0);
  const [lastPomodoro, setLastPomodoro] = useState('');

  const {
    todo: { infosTodo },
  } = useTodo();
  const {
    note: { infosNote },
  } = useNotepad();
  const { infosPomodoro } = usePomodoro();

  const { t } = useTranslation();

  useEffect(() => {
    async function getInfos(): Promise<void> {
      const { unfinishedTodos, nextTodo: infosNextTodo } = await infosTodo();
      setTodo(unfinishedTodos);
      setNextTodo(infosNextTodo.name);
      console.log(unfinishedTodos, infosNextTodo);

      const { notes: infosNotes, nextNote: infosNextNote } = await infosNote();
      setNote(infosNotes);
      setNextNote(infosNextNote.title);
      console.log(infosNotes, infosNextNote);

      const { todayPomodoros, lastPomodoro: infosLastPomodoro } =
        await infosPomodoro();
      setPomodoro(todayPomodoros);
      setLastPomodoro(infosLastPomodoro.type || '');
      console.log(todayPomodoros, infosLastPomodoro);
    }

    getInfos();
  }, []);

  return (
    <HomeTemplate
      title={t('home-page-title')}
      quote={{
        text: t('home-page-quote-text'),
        author: t('home-page-quote-author'),
      }}
      todo={{
        title: t('home-page-todo'),
        number: todo,
        item: nextTodo,
        linkTo: '/todo',
      }}
      note={{
        title: t('home-page-note'),
        number: note,
        item: nextNote,
        linkTo: '/notepad',
      }}
      pomodoro={{
        title: t('home-page-pomodoro'),
        number: pomodoro,
        item: lastPomodoro,
        linkTo: '/pomodoro',
      }}
    />
  );
}
