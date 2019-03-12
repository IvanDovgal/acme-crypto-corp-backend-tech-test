// @flow

import type { Logger } from 'bunyan';
import type { MathService } from './MathService';

export default class MathServiceImpl implements MathService {
  logger: Logger;

  constructor({ logger }: { logger: Logger }) {
    this.logger = logger;
  }

  divide(a: number, b: number): number {
    return a / b;
  }

  square(a: number[]): number[] {
    return a.map(n => n * n);
  }
}
