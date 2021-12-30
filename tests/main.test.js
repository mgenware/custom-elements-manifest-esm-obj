import * as assert from 'assert';
import { promises as fsPromises } from 'fs';
import schema from '../dist/main.js';

it('Schema', async () => {
  const expected = JSON.parse(await fsPromises.readFile('./tests/schema.json', 'utf8'));
  assert.deepStrictEqual(schema, expected);
});
