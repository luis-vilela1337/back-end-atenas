import {
  AuthInputPayloadDto,
  AuthOutputPayloadDto,
} from 'src/core/dto/auth.payload';
import {
  AuthRequestV1Input,
  AuthRequestV1Output,
} from 'src/presentation/auth/http/dto/auth.request.dto';

export class AuthAdapter {
  static requestToDomain(input: AuthRequestV1Input): AuthInputPayloadDto {
    return {
      login: input.user.username,
      password: input.user.password,
    };
  }

  static domainToRequest(input: AuthOutputPayloadDto): AuthRequestV1Output {
    return {
      token: input.token,
    };
  }
}
