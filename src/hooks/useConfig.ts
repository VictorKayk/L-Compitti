import { IUseConfig } from '../interfaces/hooks';
import { getConfig } from '../useCases/config';

export function useConfig(): IUseConfig {
  return {
    getConfig,
  };
}
