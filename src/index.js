// @flow

import { createLogger } from 'bunyan';
import { Client } from 'pg';
import createApp from './app';
import createPostgresLogStreamAsync from './misc/postgresLogStream';


const PORT = process.env.PORT || 3000;

const startServer = async ({ port }) => {
  const client = new Client();
  await client.connect();
  const logger = createLogger({
    name: 'app',
    streams: [
      {
        stream: process.stdout,
      },
      {
        stream: await createPostgresLogStreamAsync({ client }),
      },
    ],
  });
  const app = createApp({
    logger,
    accessLogger: logger.child({
      streams: [
        {
          level: 'info',
          path: 'access.log',
        },
      ],
    }),
    errorLogger: logger.child({
      streams: [
        {
          level: 'error',
          path: 'error.log',
        },
      ],
    }),
  });

  app.listen(port, () => {
    logger.info({
      port,
    }, `App started on port ${port}`);
  });
};

startServer({ port: PORT }).then(() => {});
