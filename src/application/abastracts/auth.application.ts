import {
  AuthRequestV1Input,
  AuthRequestV1Output,
} from 'src/presentation/auth/http/dto/auth.request.dto';

export abstract class IAuthApplication {
  abstract execute(input: AuthRequestV1Input): Promise<AuthRequestV1Output>;
}
