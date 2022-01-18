import { IUsePomodoro } from '../../interfaces/hooks/useCases';

import {
  readPomodoro,
  readAllPomodoros,
  setPomodoro,
} from '../../useCases/pomodoro';

export function usePomodoro(): IUsePomodoro {
  return {
    readPomodoro,
    readAllPomodoros,
    setPomodoro,
  };
}
