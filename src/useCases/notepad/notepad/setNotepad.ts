import { v4 as uuid } from 'uuid';
import { INotepad, ISetNotepad } from '../../../interfaces/notepad';
import {
  readNotepadService,
  setNotepadService,
} from '../../../services/notepad';

export async function setNotepad({
  id,
  name,
  color,
  notification,
  items,
}: ISetNotepad): Promise<void> {
  const data = await readNotepadService(id);

  const notepad: INotepad = {
    id: data?.id || uuid(),
    name: name || data?.name || '',
    color: color || data?.color || '',
    notification: notification || data?.notification || null,
    items: items || data?.items || [],
  };

  await setNotepadService(notepad);
}
