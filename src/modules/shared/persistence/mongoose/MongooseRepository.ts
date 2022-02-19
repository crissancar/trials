import { Model } from 'mongoose';
import { MongooseClient } from './types/MongooseClient';

export abstract class MongooseRepository<T> {
  constructor(private _client: Promise<MongooseClient>) {}

  protected abstract model(): Model<T>;

  protected client(): Promise<MongooseClient> {
    return this._client;
  }

  protected async persist(id: string, data: T): Promise<void> {
    const model = await this.model();

    const document = { ...data, _id: id, id: undefined };

    await model.updateOne({ _id: id }, { $set: document }, { upsert: true });
  }
}
