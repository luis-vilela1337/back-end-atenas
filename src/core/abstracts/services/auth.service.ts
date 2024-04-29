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
  abstract validateByUser(input: { nome: string; cpf: string }): Promise<{
    nome: string;
    cpf: string;
    matricula: string;
  }>;
}
