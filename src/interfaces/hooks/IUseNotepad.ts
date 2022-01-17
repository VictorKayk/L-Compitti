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
}

export interface IUseNotepad {
  notepad: INotepadFunctions;
}
