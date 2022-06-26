import { WebPlugin } from '@capacitor/core';

import type { AudioPersistPlugin } from './definitions';

export class AudioPersistWeb extends WebPlugin implements AudioPersistPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async initialize(): Promise<void> {
    console.log('Initializing...');
    return Promise.resolve();
  }
}
