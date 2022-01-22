import { notepadDatabase } from '../../config/localforage';
import { INotepad } from '../../interfaces/notepad';

export async function setNotepadService({
  id,
  name,
  color,
  notification,
  items,
}: INotepad): Promise<void> {
  await notepadDatabase.setItem(id, { name, color, notification, items });
}
