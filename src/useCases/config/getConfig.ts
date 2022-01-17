import { IConfig } from '../../interfaces/config';
import { getConfigService } from '../../services/config';

export async function getConfig(config?: string): Promise<IConfig | null> {
  const configData = await getConfigService(config);
  return configData;
}
