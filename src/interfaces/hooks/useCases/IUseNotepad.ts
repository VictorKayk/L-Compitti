import { INotepad, ISetNote, ISetNotepad } from '../../notepad';

interface INotepadFunctions {
  setNotepad: ({
    id,
    name,
    color,
    notification,
    notes,
  }: ISetNotepad) => Promise<void>;
  readNotepad: (id?: string) => Promise<INotepad | null>;
  readAllNotepad: () => Promise<INotepad[] | []>;
  deleteNotepad: (id: string) => Promise<void>;
}

interface INoteFunctions {
  setNote: (
    notepadId: string,
    { id, title, notification, note }: ISetNote
  ) => Promise<void>;
  deleteNote: (notepadId: string, noteId: string) => Promise<void>;
}

export interface IUseNotepad {
  notepad: INotepadFunctions;
  note: INoteFunctions;
}
