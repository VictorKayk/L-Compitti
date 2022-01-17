import { IPomodoro } from '../../interfaces/pomodoro';
import { readPomodoroService } from '../../services/pomodoro';

export async function readPomodoro(id?: string): Promise<IPomodoro | null> {
  const pomodoro = await readPomodoroService(id);
  return pomodoro;
}
