import { UuidMother } from '../../../shared/mothers/UuidMother';

export class GenreIdMother {
  static create(value: string): string {
    return value;
  }

  static random(): string {
    return this.create(UuidMother.random());
  }
}
