import { IsObject, IsString } from 'class-validator';

export class AuthUserInput {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
export class AuthRequestV1Input {
  @IsObject()
  user: AuthUserInput;
}

export class AuthRequestV1Output {
  @IsString()
  token: string;
}
