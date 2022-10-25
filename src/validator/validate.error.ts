import { BadRequestException } from "@nestjs/common";
import { Response } from "express";

export function validationError(payload: BadRequestException, request: Response) {
  request.status(payload.getStatus())
  return {
    code: '110001',
    data: {},
    message: `Validation Error: ${(payload.getResponse() as any).message.join()}`
  }
}