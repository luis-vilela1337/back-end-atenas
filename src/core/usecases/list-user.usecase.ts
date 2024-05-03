import { IALbumRepository } from '@core/abstracts/services/album.repository';
import { IUserRepository } from '@core/abstracts/services/user.repository';
import {
  ListUserInputDto,
  ListUserOutputDto,
} from '@core/abstracts/usecases/list-user.usecase';

export class ListUserUseCase {
  constructor(private readonly _userRepo: IUserRepository) {}
  async execute(input: ListUserInputDto): Promise<ListUserOutputDto> {
    return await this._userRepo.findByUser(input);
  }
}
