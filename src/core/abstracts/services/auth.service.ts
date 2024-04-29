import {
  AuthServiceInputDto,
  AuthServiceOutputDto,
} from '../../dto/services/auth/auth.dto';

export abstract class IAuthServiceProvider {
  abstract generateToken(input: AuthServiceInputDto): AuthServiceOutputDto;
  abstract validateAuth(input: {
    username: string;
    password: string;
  }): Promise<{ username: string; password: string }>;
  abstract validateByUser(input: {
    nomeUsuario: string;
    email: string;
  }): Promise<{
    email: string;
    nomeUsuario: string;
    base64: string;
  }>;
}
