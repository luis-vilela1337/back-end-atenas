import { ListAllUseCase } from '@core/usecases/list-all-users.usecase';
import { Injectable } from '@nestjs/common';
import { ListAllUsersOutputDto } from '@presentation/user/dto/list-all-users.dto';
import { format } from 'date-fns';
@Injectable()
export class ListAllUsersApplication {
  constructor(private readonly _listAllUseCase: ListAllUseCase) {}
  async execute({ offset, limit, username }): Promise<ListAllUsersOutputDto> {
    try {
      const resp = await this._listAllUseCase.execute({
        skip: offset,
        limit,
        username,
      });
      return {
        users: resp.users.map((el) => ({
          numeroContrato: el.numeroContrato,
          nomeUsuario: el.nomeUsuario,
          turma: el.turma,
          telefone: el.telefone,
          nomeEscola: el.nomeEscola,
          email: el.email,
          isAdm: el.isAdm,
          foto: el.foto,
          createdAt: format(el.createdAt, 'dd/MM/yyyy'),
        })),
        count: resp.count,
      };
    } catch (error) {
      throw error;
    }
  }
}
