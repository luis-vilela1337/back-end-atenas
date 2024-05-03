import { ListUserUseCase } from '@core/usecases/list-user.usecase';
import { Injectable } from '@nestjs/common';
import { ListAllUsersOutputDto } from '@presentation/user/dto/list-all-users.dto';

@Injectable()
export class ListUserApplication {
  constructor(private readonly _listUser: ListUserUseCase) {}

  async execute({ nomeUsuario, email }): Promise<ListAllUsersOutputDto> {
    try {
      return await this._listUser.execute({ nomeUsuario, email });
    } catch (error) {
      throw error;
    }
  }
}
