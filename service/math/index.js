// @flow

import type { MathService } from './MathService';
import MathServiceImpl from './implementation';

export type { MathService } from './MathService';

export const produce = (): MathService => new MathServiceImpl();
