import { Genre } from '../models/Genre';

export interface GenreRepository {
  save(genre: Genre): Promise<void>;
}
