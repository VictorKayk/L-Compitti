import { INotepad, ISetNotepad } from '../notepad';

interface INotepadFunctions {
  setNotepad: ({
    id,
    name,
    color,
    notification,
    notes,
  }: ISetNotepad) => Promise<void>;
  readNotepad: (id?: string) => Promise<INotepad | null>;
  deleteNotepad: (id: string) => Promise<void>;
}

export interface IUseNotepad {
  notepad: INotepadFunctions;
}
