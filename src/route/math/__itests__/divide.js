// @flow

import request from 'supertest';
import responseSchema from '../schema/devision/response';

describe('POST /user', () => {
  it('user.name should be an case-insensitive match for "john"', (done) => {
    request(APP)
      .get('/math')
      .query({ a: 100, b: 5 })
      .set('Accept', 'application/json')
      .expect(validateSchema(responseSchema))
      .end(done);
  });
});
