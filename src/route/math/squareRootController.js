// @flow

import express from 'express';
import { validate } from 'express-jsonschema';
import type { TrackedRequest, TrackedResponse } from '../../types';
import requestSchema from './schema/squareRoot/request';

export default [express.json(), validate({ body: requestSchema }), (
  req: TrackedRequest,
  res: TrackedResponse,
) => {
  res.status(200).json({
    success: true,
    data: {
      values: req.services.mathService.squareRoot(req.body.values),
    },
  });
}];
