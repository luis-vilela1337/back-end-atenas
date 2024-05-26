import { IUserRepository } from '@core/abstracts/services/user.repository';
import { Injectable } from '@nestjs/common';
import { ListAllUsersOutputDto } from '@core/dto/usecase/list-all-users.interface';

type ListAllUseCaseInput = { skip: number; limit: number; username?: string };

@Injectable()
export class ListAllUseCase {
  constructor(private readonly _userRepo: IUserRepository) {}
  async execute({
    skip,
    limit,
    username,
  }: ListAllUseCaseInput): Promise<ListAllUsersOutputDto> {
    const users = await this._userRepo.findAll({
      skip: skip,
      limit: limit,
      username,
    });
    return users;
  }
}
