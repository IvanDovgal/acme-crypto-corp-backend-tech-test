// @flow
import type { Logger } from 'bunyan';

import express, { Router } from 'express';
import { createAccessLogMiddleware } from './middleware/accessLog';
import { createRequestIdMiddleware } from './middleware/requestId';
import { createErrorLogMiddleware } from './middleware/errorLog';
import { createRouter } from './route';

export const createApp = ({ logger }: { logger: Logger }) => {
  const app = express();
  app.locals.logger = logger;
  app.use(
    createRequestIdMiddleware(),
    createAccessLogMiddleware({ logger }),
    createRouter(),
    createErrorLogMiddleware({ logger }),
  );
  return app;
};
