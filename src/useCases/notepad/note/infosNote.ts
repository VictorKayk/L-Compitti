import { readAllNotepad } from '..';
import { isEmpty } from '../../../helpers';
import { IInfosNote, INote } from '../../../interfaces/notepad';

export async function infosNote(): Promise<IInfosNote> {
  const notepads = await readAllNotepad();

  let items: INote[] = [];

  notepads.forEach((notepad) => {
    items = [...items, ...notepad.items];
  });

  const data = new Date().getTime();
  const nextNote = items.reduce((acc, note) => {
    if (!note.notification) return acc;

    if (note.notification.getTime() > data) {
      if (isEmpty(acc)) return note;
      if (acc.notification) {
        if (note.notification.getTime() < acc.notification.getTime())
          return note;
      }
    }

    return acc;
  }, {} as INote);

  return {
    items: items.length,
    nextNote,
  };
}
