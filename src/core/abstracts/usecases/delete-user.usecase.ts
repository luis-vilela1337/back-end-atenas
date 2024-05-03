import {
  UpdateUserInputDto,
  UpdateUserOutputDto,
} from '@core/dto/usecase/update-user.usecase';

export abstract class IDeleteUseCase {
  abstract execute(input: UpdateUserInputDto): Promise<UpdateUserOutputDto>;
}
