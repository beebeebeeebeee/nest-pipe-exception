import { BadRequestException } from '@nestjs/common';
import { Response } from 'express';

export function validationError(
  code: string,
  payload: BadRequestException,
  request: Response,
) {
  request.status(payload.getStatus());
  return {
    code,
    data: {},
    message: `Validation Error: ${(
      payload.getResponse() as any
    ).message.join()}`,
  };
}
