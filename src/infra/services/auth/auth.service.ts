import { IJwtService } from '@core/abstracts/services/jwt-crypt.service';
import { IUserRepository } from '@core/abstracts/services/user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
    const email = username;
    const user = await this._userRepository.findByUser({
      email,
      nomeUsuario: null,
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
      username: user.nomeUsuario,
      password: password,
    };
  }
  async validateByUser({
    email,
    nomeUsuario,
  }): Promise<{ email: string; nomeUsuario: string; base64: string }> {
    const user = await this._userRepository.findByUser({
      email,
      nomeUsuario,
    });

    if (!user) {
      throw new UnauthorizedException('Usuario sem permissão');
    }

    return {
      email: user.email,
      nomeUsuario: user.nomeUsuario,
      base64: user.foto,
    };
  }

  generateToken({ username }: AuthServiceInputDto): AuthServiceOutputDto {
    const payload = {
      sub: username,
    };

    return { token: this._jwtService.sign(payload) };
  }
}
