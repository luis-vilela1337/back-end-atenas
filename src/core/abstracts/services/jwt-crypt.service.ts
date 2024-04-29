import { CheckPassowordInput } from '@core/dto/services/auth/check-password.dto';
import {
  CreateTokenUserInputDto,
  CreateTokenUserOutputDto,
} from '@core/dto/services/user/create-new-user.dto';

export abstract class IJwtService {
  abstract createToken(
    input: CreateTokenUserInputDto,
  ): Promise<CreateTokenUserOutputDto>;
  abstract encrypt(password: string): Promise<string>;
  abstract comparePassword(input: CheckPassowordInput): Promise<boolean>;
}
