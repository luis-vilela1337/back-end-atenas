import { Injectable } from '@nestjs/common';
import { IAuthUseCase } from '../abstracts/usecases/auth.usecase';
import { AuthInputPayloadDto, AuthOutputPayloadDto } from '../dto/auth.payload';

import { IUserRepository } from '@core/abstracts/services/user.repository';
import { IJwtService } from '@core/abstracts/services/jwt-crypt.service';
import { cpf } from 'cpf-cnpj-validator';

@Injectable()
class AuthUseCase implements IAuthUseCase {
  constructor(
    private readonly _authService: IJwtService,
    private readonly _userRepository: IUserRepository,
  ) {}

  async execute({ login }: AuthInputPayloadDto): Promise<AuthOutputPayloadDto> {
    const addaptedCpf = cpf.format(login);
    const user = await this._userRepository.findByUser({
      cpf: addaptedCpf,
      nome: '',
    });
    const token = this._authService.createToken({
      cpf: user.cpf,
      matricula: user.matricula,
      nome: user.nome,
    });

    return token;
  }
}

export { AuthUseCase };
