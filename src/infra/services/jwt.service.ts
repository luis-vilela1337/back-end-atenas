import { IJwtService } from '@core/abstracts/services/jwt-crypt.service';
import { CheckPassowordInput } from '@core/dto/services/auth/check-password.dto';
import {
  CreateTokenUserInputDto,
  CreateTokenUserOutputDto,
} from '@core/dto/services/user/create-new-user.dto';
import { Injectable } from '@nestjs/common';
import { JwtService as Jwt } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class JwtService implements IJwtService {
  constructor(private readonly _jwtService: Jwt) {}
  async comparePassword({
    hashedPassword,
    password,
  }: CheckPassowordInput): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
  async createToken({
    email,
    nomeUsuario,
  }: CreateTokenUserInputDto): Promise<CreateTokenUserOutputDto> {
    const token = await this._jwtService.signAsync({
      email,
      nomeUsuario,
    });
    return { token };
  }
  async encrypt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();

    return await bcrypt.hash(password, salt);
  }
}
