import { ISetConfig } from '../../interfaces/config';
import { getConfig } from '.';
import { setConfigService } from '../../services/config';

export async function setConfig(
  config: string,
  values: ISetConfig
): Promise<void> {
  const data = await getConfig(config);

  const newValues: ISetConfig = {
    ...data,
    ...values,
  };

  await setConfigService(config, newValues);
}
