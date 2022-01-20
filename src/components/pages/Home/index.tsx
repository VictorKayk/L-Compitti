import { ReactElement, useEffect, useState } from 'react';

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
      title="Produtividade."
      quote={{
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        author: 'Lorem Ipsum',
      }}
      todo={{
        title: 'Todo',
        number: todo,
        item: nextTodo,
        linkTo: '/todo',
      }}
      note={{
        title: 'Note',
        number: note,
        item: nextNote,
        linkTo: '/notepad',
      }}
      pomodoro={{
        title: 'Pomodoro',
        number: pomodoro,
        item: lastPomodoro,
        linkTo: '/pomodoro',
      }}
    />
  );
}
