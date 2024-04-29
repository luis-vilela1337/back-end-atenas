import { IAuthUseCase } from 'src/core/abstracts/usecases/auth.usecase';
import { IAuthApplication } from '../abastracts/auth.application';
import {
  AuthRequestV1Input,
  AuthRequestV1Output,
} from 'src/presentation/auth/http/dto/auth.request.dto';
import { AuthAdapter } from './auth.adapter';
import { ErrorResult } from '../error/error-result';
import { Injectable } from '@nestjs/common';
import { AuthUseCase } from '@core/usecases/auth.usecase';

@Injectable()
export class AuthApplication implements IAuthApplication {
  constructor(private readonly _authUseCase: AuthUseCase) {}

  async execute(
    applicationInput: AuthRequestV1Input,
  ): Promise<AuthRequestV1Output> {
    try {
      const input = AuthAdapter.requestToDomain(applicationInput);

      const result = await this._authUseCase.execute(input);

      return AuthAdapter.domainToRequest(result);
    } catch (error) {
      throw ErrorResult.build(error);
    }
  }
}
