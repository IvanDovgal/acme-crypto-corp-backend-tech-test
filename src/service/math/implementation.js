// @flow

import type { MathService } from './MathService';

export default class MathServiceImpl implements MathService {
  divide(a: number, b: number): number {
    return a / b;
  }

  square(a: number[]): number[] {
    return a.map(n => n * n);
  }
}
