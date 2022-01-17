import { pomodoroDatabase } from '../../config/localforage';
import { IPomodoro } from '../../interfaces/pomodoro';

export async function readPomodoroService(id = ''): Promise<IPomodoro | null> {
  const pomodoro = (await pomodoroDatabase.getItem(id)) as IPomodoro | null;
  return pomodoro ? { ...pomodoro, id } : pomodoro;
}
