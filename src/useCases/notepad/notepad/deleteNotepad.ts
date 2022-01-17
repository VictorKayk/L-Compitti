import { deleteNotepadService } from '../../../services/notepad';

export async function deleteNotepad(id: string): Promise<void> {
  await deleteNotepadService(id);
}
