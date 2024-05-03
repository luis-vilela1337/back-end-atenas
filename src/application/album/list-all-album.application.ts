import { ListAllAlbumUseCase } from '@core/usecases/list-all-album.usecase';
import { ListAllUseCase } from '@core/usecases/list-all-users.usecase';
import { Injectable } from '@nestjs/common';
import {
  ListAllAlbumInputDto,
  ListAllAlbumOutputDto,
} from '@presentation/user/dto/album/list-all-album.dto';

@Injectable()
export class ListAllAlbumApplication {
  constructor(private readonly _listAllAlbum: ListAllAlbumUseCase) {}
  async execute(input: ListAllAlbumInputDto): Promise<ListAllAlbumOutputDto[]> {
    try {
      return await this._listAllAlbum.execute(input);
    } catch (e) {
      throw e;
    }
  }
}
