import { IPomodoro } from '../../interfaces/pomodoro';
import { readAllPomodorosService } from '../../services/pomodoro';

export async function readAllPomodoros(): Promise<IPomodoro[] | []> {
  const pomodoros = await readAllPomodorosService();
  return pomodoros;
}
