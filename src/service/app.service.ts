import { Injectable } from '@nestjs/common';
import { HelloRequestDto } from "../type";

@Injectable()
export class AppService {
  getHello(payload: HelloRequestDto): string {
    return `Hello ${payload.name}!`;
  }
}
