import { readAllPomodoros } from '.';
import { isEmpty } from '../../helpers';
import { IInfosPomodoro, IPomodoro } from '../../interfaces/pomodoro';

export async function infosPomodoro(): Promise<IInfosPomodoro> {
  const pomodoros = await readAllPomodoros();

  const date = new Date();
  const today = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ).getTime();
  const tomorrow = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  ).getTime();

  const todayPomodoros = pomodoros.filter((pomodoro) => {
    if (pomodoro.end)
      return (
        pomodoro.end.getTime() > today && pomodoro.end.getTime() < tomorrow
      );
    return false;
  });

  const lastPomodoro = todayPomodoros.reduce((acc, pomodoro) => {
    if (isEmpty(acc)) return pomodoro;
    if (pomodoro.end?.getTime() > acc.end?.getTime()) return pomodoro;
    return acc;
  }, {} as IPomodoro);

  return {
    todayPomodoros: todayPomodoros.length,
    lastPomodoro,
  };
}
