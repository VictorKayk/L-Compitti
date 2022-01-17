import { IUseNotepad } from '../interfaces/hooks';
import {
  setNotepad,
  readNotepad,
  readAllNotepad,
  deleteNotepad,
} from '../useCases/notepad';

export function useNotepad(): IUseNotepad {
  const notepad = {
    setNotepad,
    readNotepad,
    readAllNotepad,
    deleteNotepad,
  };

  return { notepad };
}
