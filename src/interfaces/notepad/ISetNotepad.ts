import { INote } from './INote';

export interface ISetNotepad {
  id?: string;
  name?: string;
  color?: string;
  notification?: Date | null;
  notes?: INote[] | [];
}
