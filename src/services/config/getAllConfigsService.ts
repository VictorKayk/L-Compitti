import { configDatabase } from '../../config/localforage';
import { IConfig, IValue } from '../../interfaces/config';

export async function getAllConfigsService(): Promise<IConfig[] | []> {
  let configs: IConfig[] = [];

  await configDatabase.iterate((config: IValue, key) => {
    configs = [...configs, { [key]: config }];
  });

  return configs;
}
