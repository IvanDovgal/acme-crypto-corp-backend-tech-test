// @flow
import { createLogger } from 'bunyan';
import MathServiceImpl from '../implementation';

describe('MathServiceImpl', () => {
  const service = new MathServiceImpl({ logger: createLogger({ name: 'test' }) });
  it('should divide two number', () => {
    expect(service.divide(10, 2)).toBe(5);
  });

  it('should calc square root of numbers array', () => {
    expect(service.squareRoot([1, 4, 9])).toEqual([1, 2, 3]);
  });
});
