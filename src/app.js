// @flow
import type { Logger } from 'bunyan';

import express from 'express';
import createAccessLogMiddleware from './middleware/accessLog';
import createRequestIdMiddleware from './middleware/requestId';
import createErrorLogMiddleware from './middleware/errorLog';
import createRouter from './route';
import * as MathService from './service/math';

export interface AppOptions {
  logger: Logger,
  appLogger?: Logger,
  accessLogger?: Logger,
  errorLogger?: Logger,
}

export default ({
  logger,
  appLogger = logger.child({}),
  accessLogger = logger.child({}),
  errorLogger = logger.child({}),
}: AppOptions) => {
  const app = express();
  app.locals.logger = appLogger;
  app.locals.mathService = MathService.produce();
  app.use(
    createRequestIdMiddleware(),
    createAccessLogMiddleware({ logger: accessLogger }),
    createRouter(),
    createErrorLogMiddleware({ logger: errorLogger }),
  );
  return app;
};
