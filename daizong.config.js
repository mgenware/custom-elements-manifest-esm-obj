export default {
  build: {
    run: ['#clean', '#gen', '#t'],
    envGroups: ['production'],
  },

  // Deletes compiled files, auto triggered by `#dev` or `#build`.
  clean: {
    run: {
      del: ['dist'],
    },
  },

  // Runs tests when you already have `#dev` running.
  t: 'mocha --parallel tests/**/*.test.js',

  gen: {
    run: [
      'node gen.cjs',
      'copyfiles -f main.d.ts dist',
      // Copy the official schema file to `tests/` for testing later.
      'copyfiles -f node_modules/custom-elements-manifest/schema.json tests',
    ],
    parallel: true,
  },

  _: {
    envGroups: {
      production: {
        NODE_ENV: 'production',
      },
      development: {
        NODE_ENV: 'development',
      },
    },
  },
};
