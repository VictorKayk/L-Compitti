import { INotepad } from '../../../interfaces/notepad';
import { readAllNotepadService } from '../../../services/notepad';

export async function readAllNotepad(): Promise<INotepad[] | []> {
  const notepads = await readAllNotepadService();
  return notepads;
}
