import { IUseConfig } from '../interfaces/hooks';
import { getConfig, setConfig } from '../useCases/config';

export function useConfig(): IUseConfig {
  return {
    getConfig,
    setConfig,
  };
}
