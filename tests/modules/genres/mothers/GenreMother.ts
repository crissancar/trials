import { Genre } from '../../../../src/modules/genres/models/Genre';
import { GenreIdMother } from './GenreIdMother';
import { GenreNameMother } from './GenreNameMother';
import { CreateGenreRequest } from '../../../../src/modules/genres/dtos/CreateGenreRequest';

export class GenreMother {
  static create(id: string, name: string) {
    return new Genre(id, name);
  }

  static fromRequest(request: CreateGenreRequest): Genre {
    return this.create(request.id, request.name);
  }

  static random(): Genre {
    return this.create(GenreIdMother.random(), GenreNameMother.random());
  }
}
