import { ListAllAlbumUseCase } from '@core/usecases/list-all-album.usecase';
import { ListAllUseCase } from '@core/usecases/list-all-users.usecase';
import { Injectable } from '@nestjs/common';
import {
  ListAllAlbumInputDto,
  ListAllAlbumOutputDto,
} from '@presentation/user/dto/album/list-all-album.dto';
import { format } from 'date-fns';

@Injectable()
export class ListAllAlbumApplication {
  constructor(private readonly _listAllAlbum: ListAllAlbumUseCase) {}
  async execute(input: ListAllAlbumInputDto): Promise<ListAllAlbumOutputDto[]> {
    try {
      const response = await this._listAllAlbum.execute(input);
      return response.map((el) => ({
        ...el,
        createdAt: format(el.createdAt, 'dd/MM/yyyy'),
      }));
    } catch (e) {
      throw e;
    }
  }
}
