import convict from 'convict';
import 'dotenv-flow/config';

const trialsConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV',
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/trials-backend-dev',
    },
  },
});

trialsConfig.loadFile([`${__dirname}/default.json`, `${__dirname}/${trialsConfig.get('env')}.json`]);

export default trialsConfig;
