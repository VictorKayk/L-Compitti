import { IConfig } from '../config';

export interface IUseConfig {
  getConfig: (config?: string) => Promise<IConfig | null>;
}
