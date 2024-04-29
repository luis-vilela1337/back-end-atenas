import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IAuthServiceProvider } from '@core/abstracts/services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _authServiceProvider: IAuthServiceProvider) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SALT,
    });
  }

  async validate(
    payload: any,
  ): Promise<{ cpf: string; nome: string; matricula: string }> {
    const user = await this._authServiceProvider.validateByUser({
      cpf: payload.cpf,
      nome: payload.nome,
    });

    if (!user) {
      throw new UnauthorizedException('Usuario sem permissão');
    }

    return user;
  }
}
