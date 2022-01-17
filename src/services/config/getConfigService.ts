import { configDatabase } from '../../config/localforage';
import { IConfig } from '../../interfaces/config';

export async function getConfigService(config = ''): Promise<IConfig | null> {
  const configData = (await configDatabase.getItem(config)) as IConfig | null;
  return configData;
}
