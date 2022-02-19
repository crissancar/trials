import { GenreRepository } from '../../../../src/modules/genres/repositories/GenreRepository';
import container from '../../../../src/config/dependency-injection';
import { EnvironmentArranger } from '../../../shared/arranger/EnvironmentArranger';
import { GenreMother } from '../mothers/GenreMother';

const repository: GenreRepository = container.get('Genre.repositories.GenreRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Shared.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('GenreRepository', () => {
  describe('#save', () => {
    it('should save a course', async () => {
      const genre = GenreMother.random();

      await repository.save(genre);
    });
  });
});
