# jest-sentry-environment

Adds Sentry performance monitoring to your jest test suites to find your slowest tests.

![Sentry Example](/docs/example.png)


## Installation

In your jest configuration file, e.g. `jest.config.js` you'll need to add the following:

```javascript
{
  testEnvironment: 'jest-sentry-environment/jsdom', // or `jest-sentry-environment/node` for node environment
  testEnvironmentOptions: {
    sentryConfig: {
      // `init` will be passed to `Sentry.init()`
      init: {
        dsn: '<your DSN here>'
        environment: !!process.env.CI ? 'ci' : 'local',
        tracesSampleRate: 1.0,
      },

      transactionOptions: {
        // `tags` will be used for the test suite transaction
        tags: {
          branch: process.env.GITHUB_REF,
          commit: process.env.GITHUB_SHA,
        },
      },
    },
  },
}
```

You can either import the jsdom or node environments. You can also customize the base environment by specifying your own `testEnvironment`.

```json
testEnvironment: './path/to/env.js',
```

In `./path/to/env.js`:

```javascript
const {createEnvironment} = require('jest-sentry-environment');

return createEnvironment({
  baseEnvironment: require('jest-environment-node'),
});
```


