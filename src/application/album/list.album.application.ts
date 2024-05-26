import { ListAllAlbumOutputDto } from '@core/dto/usecase/list-all-album.usecase';
import { ListAlbumUseCase } from '@core/usecases/list-album.usecase';
import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';

@Injectable()
export class ListAlbumApplication {
  constructor(private readonly _listAlbum: ListAlbumUseCase) {}
  async execute(
    nomeUsuario: string,
    numeroContrato: string,
  ): Promise<ListAllAlbumOutputDto> {
    try {
      const response = await this._listAlbum.execute({
        nomeAluno: nomeUsuario,
        numeroContrato,
      });
      return {
        ...response,
        createdAt: format(response.createdAt, 'dd/MM/yyyy'),
      };
    } catch (e) {
      throw e;
    }
  }
}
