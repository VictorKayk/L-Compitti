import { INote } from './INote';

export interface INotepad {
  id: string;
  name: string;
  color: string;
  notification: Date | null;
  notes: INote[] | [];
}
