import { IUseDefaultConfig } from '../interfaces/hooks';
import { useConfig } from './useCases';
import { IValue } from '../interfaces/config';

export function useDefaultConfig(): IUseDefaultConfig {
  const { getConfig, setConfig } = useConfig();

  async function setDefaultConfig(): Promise<void> {
    const geral = await getConfig('geral');
    if (!geral) {
      const geralDefaultConfig: IValue = {
        theme: 'white',
        language: 'en',
      };
      await setConfig('geral', geralDefaultConfig);
    }

    const pomodoro = await getConfig('pomodoro');
    if (!pomodoro) {
      const pomodoroDefaultConfig: IValue = {
        focus: '25',
        shortBreak: '5',
        longBreak: '15',
      };
      await setConfig('pomodoro', pomodoroDefaultConfig);
    }
  }

  return { setDefaultConfig };
}
