import { ISetNotepad } from '../notepad';

interface INotepad {
  setNotepad: ({
    id,
    name,
    color,
    notification,
    notes,
  }: ISetNotepad) => Promise<void>;
}

export interface IUseNotepad {
  notepad: INotepad;
}
