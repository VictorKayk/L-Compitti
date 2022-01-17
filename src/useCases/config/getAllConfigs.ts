import { IConfig } from '../../interfaces/config';
import { getAllConfigsService } from '../../services/config';

export async function getAllConfigs(): Promise<IConfig[] | []> {
  const configs = await getAllConfigsService();
  return configs;
}
