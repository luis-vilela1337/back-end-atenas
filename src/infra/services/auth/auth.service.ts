import { IJwtService } from '@core/abstracts/services/jwt-crypt.service';
import { IUserRepository } from '@core/abstracts/services/user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { cpf } from 'cpf-cnpj-validator';
import { IAuthServiceProvider } from 'src/core/abstracts/services/auth.service';
import {
  AuthServiceInputDto,
  AuthServiceOutputDto,
} from 'src/core/dto/services/auth/auth.dto';

@Injectable()
export class AuthService implements IAuthServiceProvider {
  constructor(
    private _jwtService: JwtService,
    private _authService: IJwtService,
    private readonly _userRepository: IUserRepository,
  ) {}
  async validateAuth({ username, password }): Promise<{ username; password }> {
    const addaptedCpf = cpf.format(username);
    const user = await this._userRepository.findByUser({
      cpf: addaptedCpf,
      nome: null,
    });

    if (!user) {
      throw new UnauthorizedException('Usuario sem permissão');
    }

    const isPasswordCorrect = await this._authService.comparePassword({
      hashedPassword: user.senha,
      password: password,
    });

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Usuario sem permissão');
    }

    return {
      username: user.nome,
      password: password,
    };
  }
  async validateByUser({
    cpf,
    nome,
  }): Promise<{ cpf: string; nome: string; matricula: string }> {
    const user = await this._userRepository.findByUser({
      cpf: cpf,
      nome: nome,
    });

    if (!user) {
      throw new UnauthorizedException('Usuario sem permissão');
    }

    return { cpf, nome: user.nome, matricula: user.matricula };
  }

  generateToken({ username }: AuthServiceInputDto): AuthServiceOutputDto {
    const payload = {
      sub: username,
    };

    return { token: this._jwtService.sign(payload) };
  }
}
