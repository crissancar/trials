import { WordMother } from '../../../shared/mothers/WordMother';

export class GenreNameMother {
  static create(value: string): string {
    return value;
  }

  static random(): string {
    return this.create(WordMother.random());
  }
}
