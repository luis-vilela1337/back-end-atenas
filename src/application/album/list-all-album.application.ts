import { ListAllAlbumUseCase } from '@core/usecases/list-all-album.usecase';
import { Injectable } from '@nestjs/common';
import {
  ListAllAlbumInputDto,
  ListAllAlbumOutputDto,
} from '@presentation/user/dto/album/list-all-album.dto';
import { format } from 'date-fns';

@Injectable()
export class ListAllAlbumApplication {
  constructor(private readonly _listAllAlbum: ListAllAlbumUseCase) {}
  async execute(input: ListAllAlbumInputDto): Promise<ListAllAlbumOutputDto> {
    try {
      const { albuns, count } = await this._listAllAlbum.execute({
        limit: input.limit,
        nomeUsuario: input.nomeUsuario,
        skip: input.offset,
      });

      return {
        albuns: albuns.map((album) => ({
          ...album,
          createdAt: format(album.createdAt, 'dd/MM/yyyy'),
        })),
        count,
      };
    } catch (e) {
      throw e;
    }
  }
}
