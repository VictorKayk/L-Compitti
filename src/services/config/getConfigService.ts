import { configDatabase } from '../../config/localforage';
import { IValue } from '../../interfaces/config';

export async function getConfigService(config = ''): Promise<IValue | null> {
  const configData = (await configDatabase.getItem(config)) as IValue | null;
  return configData;
}
