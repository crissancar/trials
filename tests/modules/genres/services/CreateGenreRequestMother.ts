import { CreateGenreRequest } from '../../../../src/modules/genres/dtos/CreateGenreRequest';
import { GenreIdMother } from '../mothers/GenreIdMother';
import { GenreNameMother } from '../mothers/GenreNameMother';

export class CreateGenreRequestMother {
  static create(id: string, name: string) {
    return { id: id, name: name };
  }

  static random(): CreateGenreRequest {
    return this.create(GenreIdMother.random(), GenreNameMother.random());
  }
}
