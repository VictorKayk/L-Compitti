import { IValue } from '../../interfaces/config';

export async function getConfigService(config = ''): Promise<IValue | null> {
  const data = await localStorage.getItem(config);

  let configData: IValue | null = null;
  if (data) configData = JSON.parse(data) as IValue;

  return configData;
}
