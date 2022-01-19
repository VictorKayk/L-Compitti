import { getConfigService } from '.';
import { IConfig, IValue } from '../../interfaces/config';

export async function getAllConfigsService(): Promise<IConfig[] | []> {
  let configs: IConfig[] = [];

  const keys = Object.keys(localStorage);

  const configsPromise = keys.map(async (key) => {
    const config = await getConfigService(key);
    return { [key]: config as IValue };
  });

  configs = await Promise.all(configsPromise);
  console.log(configs);

  return configs;
}
