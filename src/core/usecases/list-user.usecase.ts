import { IUserRepository } from '@core/abstracts/services/user.repository';
import {
  ListUserInputDto,
  ListUserOutputDto,
} from '@core/abstracts/usecases/list-user.usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListUserUseCase {
  constructor(private readonly _userRepo: IUserRepository) {}
  async execute(input: ListUserInputDto): Promise<ListUserOutputDto> {
    return await this._userRepo.findByUser(input);
  }
}
