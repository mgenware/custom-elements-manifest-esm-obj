const customElementManifestSchema = require('custom-elements-manifest');
const fs = require('fs').promises;

(async () => {
  await fs.mkdir('./dist', { recursive: true });
  await fs.writeFile(
    './dist/main.js',
    `export default ${JSON.stringify(customElementManifestSchema)};`,
  );
})();
