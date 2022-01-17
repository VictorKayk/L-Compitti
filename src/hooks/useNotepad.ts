import { IUseNotepad } from '../interfaces/hooks';
import { setNotepad } from '../useCases/notepad';

export function useNotepad(): IUseNotepad {
  const notepad = {
    setNotepad,
  };

  return { notepad };
}
