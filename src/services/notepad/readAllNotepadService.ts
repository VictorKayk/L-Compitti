import { notepadDatabase } from '../../config/localforage';
import { INotepad } from '../../interfaces/notepad';

export async function readAllNotepadService(): Promise<INotepad[] | []> {
  let notepads: INotepad[] = [];
  await notepadDatabase.iterate((notepad: INotepad, key) => {
    notepads = [...notepads, { ...notepad, id: key }];
  });
  return notepads;
}
