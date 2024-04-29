import {
  CreateNewUserInputDto,
  CreateNewUserOutputDto,
} from '@core/dto/usecase/create-new-user.usecase';

export abstract class ICreateNewUserUseCase {
  abstract execute(
    input: CreateNewUserInputDto,
  ): Promise<CreateNewUserOutputDto>;
}
