// @flow
import type { Logger } from 'bunyan';

import express from 'express';
import createAccessLogMiddleware from './middleware/accessLog';
import createRequestIdMiddleware from './middleware/requestId';
import createErrorLogMiddleware from './middleware/errorLog';
import createSetupServicesMiddleware from './middleware/setupServices';
import createRouter from './route';

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
  app.use(
    createRequestIdMiddleware(),
    createSetupServicesMiddleware(),
    createAccessLogMiddleware({ logger: accessLogger }),
    createRouter(),
    createErrorLogMiddleware({ logger: errorLogger }),
  );
  return app;
};
