import './polyfills/Object.values';
import './polyfills/Object.entries';

import runtimeSupportsPromisify from './utils/runtimeSupportsPromisify';
import { fileURLToPath } from 'url';

if (!runtimeSupportsPromisify) {
  require('util.promisify').shim();
}

export * from './polyfills/fetch';
export * from './polyfills/url';
