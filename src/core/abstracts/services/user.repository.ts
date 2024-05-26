import { CreateNewUserInput } from '@core/dto/repositories/user/create-new-user.dto';
import {
  FindByUserInput,
  FindByUserOutput,
} from '@core/dto/repositories/user/find.user.dto';
import { ListAllUsersOutputDto } from '@core/dto/repositories/user/list-all.dto';
import { UpdateUserInput } from '@core/dto/repositories/user/update-user.dto';
import { DeleteUserInputDto } from '@core/dto/usecase/delete-user.usecase';

export type FindAllInput = { skip: number; limit: number; username?: string };

export abstract class IUserRepository {
  abstract createUser(input: CreateNewUserInput): Promise<void>;
  abstract updateUser(input: UpdateUserInput): Promise<void>;
  abstract deleteUser(input: DeleteUserInputDto): Promise<boolean>;
  abstract findByUser(input: FindByUserInput): Promise<FindByUserOutput>;
  abstract findAll(input: FindAllInput): Promise<ListAllUsersOutputDto>;
}
