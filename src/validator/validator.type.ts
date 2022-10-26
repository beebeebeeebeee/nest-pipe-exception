import { BadRequestException } from '@nestjs/common';
import { IsDefined } from 'class-validator';

export type ValidationResult<T> = {
  result: T | null;
  error: BadRequestException | null;
};
