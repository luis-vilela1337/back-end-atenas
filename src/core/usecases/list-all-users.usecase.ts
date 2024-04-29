import { IUserRepository } from '@core/abstracts/services/user.repository';
import { ListAllUsersOutputDto } from '@core/dto/usecase/list-all-users.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllUseCase {
  constructor(private readonly _userRepo: IUserRepository) {}
  async execute(): Promise<ListAllUsersOutputDto[]> {
    const users = await this._userRepo.findAll();
    return users;
  }
}
