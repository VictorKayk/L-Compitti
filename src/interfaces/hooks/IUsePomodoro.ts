import { IPomodoro } from '../pomodoro';

export interface IUsePomodoro {
  readPomodoro: (id?: string) => Promise<IPomodoro | null>;
}
