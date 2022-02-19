import MongooseConfig from './types/MongooseConfig';
import environment from '../../../../config/environment';

export class MongooseConfigFactory {
  static createConfig(): MongooseConfig {
    return {
      url: environment.get('mongo.url'),
    };
  }
}
