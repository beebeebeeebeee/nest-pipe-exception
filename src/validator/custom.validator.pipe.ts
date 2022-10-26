import {
  ArgumentMetadata,
  Type,
  ValidationPipe,
} from '@nestjs/common';

export class CustomValidatorPipe extends ValidationPipe {
  constructor(expectedType: Type<any>) {
    super({ whitelist: true, expectedType });
  }

  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    let result = null;
    let error = null;
    try {
      result = await super.transform(value,metadata);
    } catch (e) {
      error = e;
    }
    return { result, error };
  }
}
