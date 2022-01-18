import { IUseNotepad } from '../../interfaces/hooks/useCases';
import {
  setNotepad,
  readNotepad,
  readAllNotepad,
  deleteNotepad,
  setNote,
  deleteNote,
  infosNote,
} from '../../useCases/notepad';

export function useNotepad(): IUseNotepad {
  const notepad = {
    setNotepad,
    readNotepad,
    readAllNotepad,
    deleteNotepad,
  };

  const note = {
    setNote,
    deleteNote,
    infosNote,
  };

  return { notepad, note };
}
