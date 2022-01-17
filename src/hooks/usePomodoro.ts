import { IUsePomodoro } from '../interfaces/hooks';

import { readPomodoro, setPomodoro } from '../useCases/pomodoro';

export function usePomodoro(): IUsePomodoro {
  return {
    readPomodoro,
    setPomodoro,
  };
}
