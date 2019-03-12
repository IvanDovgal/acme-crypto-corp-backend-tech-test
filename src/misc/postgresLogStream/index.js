// @flow

const createLogTableStatement = ({ tableName }) => `
  CREATE TABLE IF NOT EXISTS ${tableName} (
    id SERIAL,
    log JSONB
  );
`;

const createInsertStatement = ({ tableName }) => `INSERT INTO ${tableName}(log) VALUES ($1)`;

class PostgresLogStream {
  constructor({ tableName, client }) {
    this.client = client;
    this.statement = createInsertStatement({ tableName });
  }

  write(data) {
    this.client.query(this.statement, [data]);
  }
}

export const createPostgresLogStreamAsync = async ({ tableName = 'log', autoCreate = true, client }) => {
  if(autoCreate)
    await client.query(createLogTableStatement({ tableName }));
  return new PostgresLogStream({ tableName, client });
};
