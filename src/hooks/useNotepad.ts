import { IUseNotepad } from '../interfaces/hooks';
import {
  setNotepad,
  readNotepad,
  readAllNotepad,
  deleteNotepad,
  setNote,
} from '../useCases/notepad';

export function useNotepad(): IUseNotepad {
  const notepad = {
    setNotepad,
    readNotepad,
    readAllNotepad,
    deleteNotepad,
  };

  const note = {
    setNote,
  };

  return { notepad, note };
}
