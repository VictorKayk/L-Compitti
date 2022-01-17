import { notepadDatabase } from '../../config/localforage';
import { INotepad } from '../../interfaces/notepad';

export async function readNotepadService(id = ''): Promise<INotepad | null> {
  const notepad = (await notepadDatabase.getItem(id)) as INotepad | null;
  return notepad ? { ...notepad, id } : notepad;
}
