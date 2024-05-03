import { IUserRepository } from '@core/abstracts/services/user.repository';
import { IUpdateUserUseCase } from '@core/abstracts/usecases/update-user.usecase';
import {
  UpdateUserInputDto,
  UpdateUserOutputDto,
} from '@core/dto/usecase/update-user.usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private readonly _userRepo: IUserRepository) {}
  async execute(input: UpdateUserInputDto): Promise<UpdateUserOutputDto> {
    return await this._userRepo.updateUser(input);
  }
}
