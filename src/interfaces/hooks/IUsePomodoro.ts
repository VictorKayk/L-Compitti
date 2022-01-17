import { IPomodoro, ISetPomodoro } from '../pomodoro';

export interface IUsePomodoro {
  readPomodoro: (id?: string) => Promise<IPomodoro | null>;
  setPomodoro: ({ id, type, start, end }: ISetPomodoro) => Promise<void>;
}
