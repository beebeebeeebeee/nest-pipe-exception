import { IsDefined, IsString } from "class-validator";

export class HelloRequestDto{

  @IsDefined()
  @IsString()
  name: string;

}