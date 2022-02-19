import mongoose from 'mongoose';
import MongooseConfig from './types/MongooseConfig';
import { MongooseClient } from './types/MongooseClient';

export class MongooseClientFactory {
  public static async createClient(config: MongooseConfig): Promise<MongooseClient> {
    const mongooseClient = await mongoose.connect(config.url);

    return mongooseClient.connection;
  }
}
