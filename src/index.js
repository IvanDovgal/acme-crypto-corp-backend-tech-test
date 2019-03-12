// @flow

import { createLogger } from 'bunyan';
import { createApp } from './app';
import { createPostgresLogStreamAsync } from './misc/postgresLogStream';

const PORT = 3006;

const startServer = async ({ port }) => {
  const { Client } = require('pg');
  const client = new Client();
  await client.connect();
  const logger = createLogger({
    name: 'app',
    streams: [
      {
        stream: await createPostgresLogStreamAsync({ client }),
      },
    ],
  });
  const app = createApp({
    logger,
  });

  app.listen(port, () => {
    logger.info({
      port,
    }, `App started on port ${port}`);
  });
};

startServer({ port: PORT }).then(() => {});
