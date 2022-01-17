import { IValue } from '../../interfaces/config';
import { getConfigService } from '../../services/config';

export async function getConfig(config?: string): Promise<IValue | null> {
  const configData = await getConfigService(config);
  return configData;
}
