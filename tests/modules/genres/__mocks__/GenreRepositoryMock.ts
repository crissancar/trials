import { GenreRepository } from '../../../../src/modules/genres/repositories/GenreRepository';
import { Genre } from '../../../../src/modules/genres/models/Genre';

export class GenreRepositoryMock implements GenreRepository {
  private mockSave = jest.fn();

  async save(genre: Genre): Promise<void> {
    this.mockSave(genre);
  }

  assertLastSavedGenreIs(expected: Genre): void {
    const mock = this.mockSave.mock;
    const lastSavedGenre = mock.calls[mock.calls.length - 1][0] as Genre;

    expect(lastSavedGenre).toBeInstanceOf(Genre);
    expect(lastSavedGenre.id).toEqual(expected.id);
  }
}
