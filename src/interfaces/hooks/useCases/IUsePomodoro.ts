import { IInfosPomodoro, IPomodoro, ISetPomodoro } from '../../pomodoro';

export interface IUsePomodoro {
  readPomodoro: (id?: string) => Promise<IPomodoro | null>;
  readAllPomodoros: () => Promise<IPomodoro[] | []>;
  setPomodoro: ({ id, type, start, end }: ISetPomodoro) => Promise<void>;
  infosPomodoro(): Promise<IInfosPomodoro>;
}
