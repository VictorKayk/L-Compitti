import { ISetConfig } from '../../interfaces/config';

export async function setConfigService(
  config: string,
  values: ISetConfig
): Promise<void> {
  await localStorage.setItem(config, JSON.stringify(values));
}
