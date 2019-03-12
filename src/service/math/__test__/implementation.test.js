// @flow
import MathServiceImpl from '../implementation';

describe('MathServiceImpl', () => {
  const service = new MathServiceImpl();
  it('should divide two number', () => {
    expect(service.divide(10, 2)).toBe(5);
  });

  it('should square numbers array', () => {
    expect(service.square([1, 2, 3])).toEqual([1, 4, 9]);
  });
});
