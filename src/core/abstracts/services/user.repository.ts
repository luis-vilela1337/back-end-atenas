import { CreateNewUserInput } from '@core/dto/repositories/user/create-new-user.dto';
import {
  FindByUserInput,
  FindByUserOutput,
} from '@core/dto/repositories/user/find.user.dto';
import { ListAllUsersOutputDto } from '@core/dto/repositories/user/list-all.dto';

export abstract class IUserRepository {
  abstract createUser(input: CreateNewUserInput): Promise<void>;
  abstract findByUser(input: FindByUserInput): Promise<FindByUserOutput>;
  abstract findAll({
    skip,
    limit,
  }): Promise<Omit<ListAllUsersOutputDto, 'senha'>[]>;
}
