import { ListAllUseCase } from '@core/usecases/list-all-users.usecase';
import { Injectable } from '@nestjs/common';
import { ListAllUsersOutputDto } from '@presentation/user/dto/list-all-users.dto';

@Injectable()
export class ListAllUsersApplication {
  constructor(private readonly _listAllUseCase: ListAllUseCase) {}
  async execute(): Promise<ListAllUsersOutputDto[]> {
    try {
      const resp = await this._listAllUseCase.execute();
      return resp.map((el) => ({
        nome: el.nome,
        curso: el.curso,
        cpf: el.cpf,
        matricula: el.matricula,
      }));
    } catch (error) {
      throw error;
    }
  }
}
