import { v4 as uuid } from 'uuid';
import { readNotepad, setNotepad } from '..';
import { INote, ISetNote } from '../../../interfaces/notepad';

export async function setNote(
  notepadId: string,
  { id, title, notification, note }: ISetNote
): Promise<void> {
  const notepad = await readNotepad(notepadId);
  if (!notepad) throw new Error("Notepad doesn't exist.");

  let newNotes: INote[] = [];

  const isNoteInNotepad = notepad.items.find((value) => value.id === id);
  if (isNoteInNotepad) {
    newNotes = notepad.items.map((value) =>
      value.id === id
        ? {
            id,
            title: title || value.title,
            notification: notification || value.notification,
            note: note || value.note,
          }
        : value
    );
  } else {
    const newNote: INote = {
      id: uuid(),
      title: title || '',
      notification: notification || null,
      note: note || '',
    };

    newNotes = [...notepad.items, newNote];
  }

  await setNotepad({
    id: notepadId,
    items: newNotes,
  });
}
