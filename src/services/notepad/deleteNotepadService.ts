import { notepadDatabase } from '../../config/localforage';

export async function deleteNotepadService(id: string): Promise<void> {
  await notepadDatabase.removeItem(id);
}
