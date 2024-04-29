import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { BasicAuthGuard } from '../../guards/basic.guard';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { CurrentToken } from 'src/presentation/decorators/current.token';
import {
  AuthRequestV1Input,
  AuthRequestV1Output,
} from '../dto/auth.request.dto';
import { AuthApplication } from 'src/application/auth/auth.application';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly _authApplication: AuthApplication) {}

  @Post()
  @UseGuards(BasicAuthGuard)
  async login(
    @Request() input: AuthRequestV1Input,
  ): Promise<AuthRequestV1Output> {
    return await this._authApplication.execute(input);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async validate(@CurrentToken() token: string): Promise<{ token: string }> {
    return {
      token,
    };
  }
}
