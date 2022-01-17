export interface IConfig {
  [config: string]: {
    [name: string]: [value: string];
  };
}
