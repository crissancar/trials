import { GenreRepositoryMock } from '../__mocks__/GenreRepositoryMock';
import { GenreCreator } from '../../../../src/modules/genres/services/GenreCreator';
import { CreateGenreRequestMother } from './CreateGenreRequestMother';
import { GenreMother } from '../mothers/GenreMother';

let repository: GenreRepositoryMock;
let creator: GenreCreator;

beforeEach(() => {
  repository = new GenreRepositoryMock();
  creator = new GenreCreator(repository);
});

describe('GenreCreator', () => {
  it('should create a valid genre', async () => {
    const request = CreateGenreRequestMother.random();

    const genre = GenreMother.fromRequest(request);

    await creator.run(request);

    repository.assertLastSavedGenreIs(genre);
  });
});
