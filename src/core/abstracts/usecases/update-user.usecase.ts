import {
  UpdateUserInputDto,
  UpdateUserOutputDto,
} from '@core/dto/usecase/update-user.usecase';

export abstract class IUpdateUserUseCase {
  abstract execute(input: UpdateUserInputDto): Promise<UpdateUserOutputDto>;
}
