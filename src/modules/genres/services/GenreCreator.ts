import { GenreRepository } from '../repositories/GenreRepository';
import { Genre } from '../models/Genre';
import { CreateGenreRequest } from '../dtos/CreateGenreRequest';

export class GenreCreator {
  private repository: GenreRepository;

  constructor(repository: GenreRepository) {
    this.repository = repository;
  }

  async run(request: CreateGenreRequest): Promise<void> {
    const genre = new Genre(request.id, request.name);

    return this.repository.save(genre);
  }
}
