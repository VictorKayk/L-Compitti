import { v4 as uuid } from 'uuid';
import { ISetPomodoro } from '../../interfaces/pomodoro';
import { setPomodoroService } from '../../services/pomodoro';
import { readPomodoro } from './readPomodoro';

export async function setPomodoro({
  id,
  type,
  start,
  end,
}: ISetPomodoro): Promise<void> {
  const pomodoro = await readPomodoro(id);

  await setPomodoroService({
    id: pomodoro?.id || uuid(),
    type: type || pomodoro?.type || 'focus',
    start: start || pomodoro?.start || new Date(),
    end: end || pomodoro?.end || null,
  });
}
