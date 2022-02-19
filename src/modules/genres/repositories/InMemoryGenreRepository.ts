import { GenreRepository } from './GenreRepository';
import { Genre } from '../models/Genre';

export class InMemoryGenreRepository implements GenreRepository {
  async save(genre: Genre): Promise<void> {}
}
