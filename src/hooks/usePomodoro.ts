import { IUsePomodoro } from '../interfaces/hooks';

import { readPomodoro } from '../useCases/pomodoro/readPomodoro';

export function usePomodoro(): IUsePomodoro {
  return {
    readPomodoro,
  };
}
