import { ListUserUseCase } from '@core/usecases/list-user.usecase';
import { Injectable } from '@nestjs/common';
import { ListAllUsersOutputDto } from '@presentation/user/dto/list-all-users.dto';
import { format } from 'date-fns';
@Injectable()
export class ListUserApplication {
  constructor(private readonly _listUser: ListUserUseCase) {}

  async execute({ nomeUsuario, email }): Promise<ListAllUsersOutputDto> {
    try {
      const response = await this._listUser.execute({ nomeUsuario, email });
      return {
        ...response,
        createdAt: format(response.createdAt, 'dd/MM/yyyy'),
      };
    } catch (error) {
      throw error;
    }
  }
}
