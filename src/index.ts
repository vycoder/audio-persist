import { registerPlugin } from '@capacitor/core';

import type { AudioPersistPlugin } from './definitions';

const AudioPersist = registerPlugin<AudioPersistPlugin>('AudioPersist', {
  web: () => import('./web').then(m => new m.AudioPersistWeb()),
});

export * from './definitions';
export { AudioPersist };
