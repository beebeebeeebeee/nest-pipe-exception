import { BadRequestException, Body, Controller, Get, Post, Res } from "@nestjs/common";
import { AppService } from "../service/app.service";
import { HelloRequestDto } from "../type";
import { Response } from "express";
import { validationError } from "../validator";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post()
  getHello(
    @Body() payload: HelloRequestDto,
    @Res({ passthrough: true }) response: Response
  ): any {
    if (payload instanceof BadRequestException) return validationError(payload, response);
    return this.appService.getHello(payload);
  }

}
