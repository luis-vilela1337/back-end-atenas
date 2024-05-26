import { ListAlbumUseCase } from '@core/usecases/list-album.usecase';
import { Injectable } from '@nestjs/common';
import { ListAllbumDto } from '@presentation/user/dto/album/list-all-album.dto';
import { format } from 'date-fns';

@Injectable()
export class ListAlbumApplication {
  constructor(private readonly _listAlbum: ListAlbumUseCase) {}
  async execute(
    nomeUsuario: string,
    numeroContrato: string,
  ): Promise<ListAllbumDto> {
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
