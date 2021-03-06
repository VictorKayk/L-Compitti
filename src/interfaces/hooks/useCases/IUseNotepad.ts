import { IInfosNote, INotepad, ISetNote, ISetNotepad } from '../../notepad';

interface INotepadFunctions {
  setNotepad: ({
    id,
    name,
    color,
    notification,
    items,
  }: ISetNotepad) => Promise<void>;
  readNotepad: (id?: string) => Promise<INotepad | null>;
  readAllNotepad: () => Promise<INotepad[] | []>;
  deleteNotepad: (id: string) => Promise<void>;
}

interface INoteFunctions {
  setNote: (
    notepadId: string,
    { id, name, notification, note }: ISetNote
  ) => Promise<void>;
  deleteNote: (notepadId: string, noteId: string) => Promise<void>;
  infosNote(): Promise<IInfosNote>;
}

export interface IUseNotepad {
  notepad: INotepadFunctions;
  note: INoteFunctions;
}
