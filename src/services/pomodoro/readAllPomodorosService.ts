import { pomodoroDatabase } from '../../config/localforage';
import { IPomodoro } from '../../interfaces/pomodoro';

export async function readAllPomodorosService(): Promise<IPomodoro[] | []> {
  let pomodoros: IPomodoro[] = [];

  await pomodoroDatabase.iterate((pomodoro: IPomodoro, key) => {
    pomodoros = [...pomodoros, { ...pomodoro, id: key }];
  });

  return pomodoros;
}
