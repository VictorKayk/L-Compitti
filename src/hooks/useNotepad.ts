import { IUseNotepad } from '../interfaces/hooks';
import { setNotepad, readNotepad } from '../useCases/notepad';

export function useNotepad(): IUseNotepad {
  const notepad = {
    setNotepad,
    readNotepad,
  };

  return { notepad };
}
