import { INotepad } from '../../../interfaces/notepad';
import { readNotepadService } from '../../../services/notepad';

export async function readNotepad(id?: string): Promise<INotepad | null> {
  const notepad = await readNotepadService(id);
  return notepad;
}
