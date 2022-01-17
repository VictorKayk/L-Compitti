import { IValue, ISetConfig, IConfig } from '../config';

export interface IUseConfig {
  getConfig: (config?: string) => Promise<IValue | null>;
  getAllConfigs: () => Promise<IConfig[] | null>;
  setConfig: (config: string, values: ISetConfig) => Promise<void>;
}
