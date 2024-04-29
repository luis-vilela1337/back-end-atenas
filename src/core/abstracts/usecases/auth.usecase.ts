import {
  AuthInputPayloadDto,
  AuthOutputPayloadDto,
} from 'src/core/dto/auth.payload';

export abstract class IAuthUseCase {
  abstract execute(payload: AuthInputPayloadDto): Promise<AuthOutputPayloadDto>;
}
