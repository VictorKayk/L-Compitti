import { IValue, ISetConfig } from '../config';

export interface IUseConfig {
  getConfig: (config?: string) => Promise<IValue | null>;
  setConfig: (config: string, values: ISetConfig) => Promise<void>;
}
