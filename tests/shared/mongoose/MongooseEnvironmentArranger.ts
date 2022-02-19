import { EnvironmentArranger } from '../arranger/EnvironmentArranger';
import mongoose from 'mongoose';
import { MongooseClient } from '../../../src/modules/shared/persistence/mongoose/types/MongooseClient';

type MongooseCollections = mongoose.AnyObject;

export class MongooseEnvironmentArranger extends EnvironmentArranger {
  constructor(private _client: Promise<MongooseClient>) {
    super();
  }

  public async arrange(): Promise<void> {
    await this.cleanDatabase();
  }

  protected async cleanDatabase(): Promise<void> {
    const client = await this.client();
    const collections = await this.collections();

    for (const collection in collections) {
      await client.dropCollection(collection);
    }
  }

  private async collections(): Promise<MongooseCollections> {
    return (await this._client).collections;
  }

  private async client(): Promise<MongooseClient> {
    return this._client;
  }

  public async close(): Promise<void> {
    return (await this.client()).close();
  }
}
