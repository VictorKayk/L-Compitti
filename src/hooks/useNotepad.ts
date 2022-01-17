import { IUseNotepad } from '../interfaces/hooks';
import { setNotepad, readNotepad, deleteNotepad } from '../useCases/notepad';

export function useNotepad(): IUseNotepad {
  const notepad = {
    setNotepad,
    readNotepad,
    deleteNotepad,
  };

  return { notepad };
}
