import Constants from 'expo-constants';

let ENV: any = null;

function getEnv(env = Constants.manifest.releaseChannel) {
  if (!ENV) {
    if (env === null || env === undefined || env === '') {
      ENV = require('./dev');
      return ENV.default;
    }
    if (env.indexOf('dev') !== -1) {
      ENV = require('./dev');
      return ENV.default;
    }
    if (env.indexOf('stage') !== -1) {
      ENV = require('./stage');
      return ENV.default;
    }
    if (env.indexOf('prod') !== -1) {
      ENV = require('./prod');
      return ENV.default;
    }
  } else return ENV.default;
}

export default getEnv;
