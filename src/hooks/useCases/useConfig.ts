import { IUseConfig } from '../../interfaces/hooks/useCases';
import { getConfig, setConfig, getAllConfigs } from '../../useCases/config';

export function useConfig(): IUseConfig {
  return {
    getConfig,
    getAllConfigs,
    setConfig,
  };
}
