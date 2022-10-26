import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Res,
} from '@nestjs/common';
import { AppService } from '../service/app.service';
import { HelloRequestDto } from '../type';
import { Response } from 'express';
import { CustomValidatorPipe, validationError } from '../validator';
import { ValidationResult } from '../validator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(
    @Body(new CustomValidatorPipe(HelloRequestDto))
    validationResult: ValidationResult<HelloRequestDto>,
    @Res({ passthrough: true }) response: Response,
  ): any {
    const { result, error } = validationResult;
    if (error !== null) return validationError('110001', error, response);
    return this.appService.getHello(result);
  }
}
