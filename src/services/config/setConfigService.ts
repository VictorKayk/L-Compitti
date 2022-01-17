import { configDatabase } from '../../config/localforage';
import { ISetConfig } from '../../interfaces/config';

export async function setConfigService(
  config: string,
  values: ISetConfig
): Promise<void> {
  await configDatabase.setItem(config, values);
}
