import { readNotepad, setNotepad } from '..';

export async function deleteNote(
  notepadId: string,
  noteId: string
): Promise<void> {
  const notepad = await readNotepad(notepadId);
  if (!notepad) throw new Error("Notepad doesn't exist.");

  const isNoteInNotepad = notepad.notes.find((value) => value.id === noteId);
  if (isNoteInNotepad) {
    const newNotes = notepad.notes.filter((note) => note.id !== noteId);

    await setNotepad({
      id: notepadId,
      notes: newNotes,
    });
  }
}
