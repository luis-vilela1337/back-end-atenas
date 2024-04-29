import { IAuthServiceProvider } from '@core/abstracts/services/auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy as Strategy } from 'passport-http';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _authServiceProvider: IAuthServiceProvider) {
    super();
  }

  async validate(
    username: string,
    password: string,
  ): Promise<{ username: string; password: string }> {
    const user = await this._authServiceProvider.validateAuth({
      username,
      password,
    });

    if (!user) {
      throw new UnauthorizedException('Usuario sem permissão');
    }
    return { username, password };
  }
}
