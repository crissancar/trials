import { MongooseRepository } from '../../../shared/persistence/mongoose/MongooseRepository';
import { GenreRepository } from '../../repositories/GenreRepository';
import { Genre } from '../../models/Genre';
import { MongooseGenreModel } from './MongooseGenreModel';
import { Model } from 'mongoose';

export class MongooseGenreRepository extends MongooseRepository<Genre> implements GenreRepository {
  async save(genre: Genre): Promise<void> {
    await this.persist(genre.id.valueOf(), genre);
  }

  protected model(): Model<Genre> {
    return MongooseGenreModel;
  }
}
