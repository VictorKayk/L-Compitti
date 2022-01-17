import { pomodoroDatabase } from '../../config/localforage';
import { IPomodoro } from '../../interfaces/pomodoro';

export async function setPomodoroService({
  id,
  type,
  start,
  end,
}: IPomodoro): Promise<void> {
  await pomodoroDatabase.setItem(id, { type, start, end });
}
