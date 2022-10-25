import { ArgumentMetadata, ValidationPipe } from "@nestjs/common";

export class CustomValidatorPipe extends ValidationPipe{
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    try {
      return await super.transform(value, metadata);
    }catch (error){
      return error;
    }
  }
}