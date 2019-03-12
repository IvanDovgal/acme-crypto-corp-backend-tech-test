// @flow

import type { MathService } from './MathService';
import MathServiceImpl from './implementation';
import type { ContainsLogger } from '../../types';

export type { MathService } from './MathService';

export const produce = (options: ContainsLogger): MathService => new MathServiceImpl(options);
