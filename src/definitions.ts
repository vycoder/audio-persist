export interface AudioPersistPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  initialize(): Promise<void>;
}
