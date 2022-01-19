import { readAllNotepad } from '..';
import { isEmpty } from '../../../helpers';
import { IInfosNote, INote } from '../../../interfaces/notepad';

export async function infosNote(): Promise<IInfosNote> {
  const notepads = await readAllNotepad();

  let notes: INote[] = [];

  notepads.forEach((notepad) => {
    notes = [...notes, ...notepad.notes];
  });

  const data = new Date().getTime();
  const nextNote = notes.reduce((acc, note) => {
    if (!note.notification) return acc;

    if (note.notification.getTime() > data) {
      if (isEmpty(acc)) return note;
      if (note.notification.getTime() < acc.notification.getTime()) return note;
    }

    return acc;
  }, {} as INote);

  return {
    notes: notes.length,
    nextNote,
  };
}
