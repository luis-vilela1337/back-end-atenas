import { Injectable } from '@nestjs/common';
import { IAuthUseCase } from '../abstracts/usecases/auth.usecase';
import { AuthInputPayloadDto, AuthOutputPayloadDto } from '../dto/auth.payload';
import { IUserRepository } from '@core/abstracts/services/user.repository';
import { IJwtService } from '@core/abstracts/services/jwt-crypt.service';

@Injectable()
export class AuthUseCase implements IAuthUseCase {
  constructor(
    private readonly _authService: IJwtService,
    private readonly _userRepository: IUserRepository,
  ) {}

  async execute({ login }: AuthInputPayloadDto): Promise<AuthOutputPayloadDto> {
    const user = await this._userRepository.findByUser({
      email: login,
      nomeUsuario: '',
    });
    const token = this._authService.createToken({
      base64: user.foto,
      email: user.email,
      nomeUsuario: user.nomeUsuario,
    });

    return token;
  }
}
