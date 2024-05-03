import { IALbumRepository } from '@core/abstracts/services/album.repository';
import { ListAllAlbumOutputDto } from '@core/dto/usecase/list-all-album.usecase';
import { Injectable } from '@nestjs/common';
import { ListAllAlbumInputDto } from '@presentation/user/dto/album/list-all-album.dto';
@Injectable()
export class ListAllAlbumUseCase {
  constructor(private readonly _albumRepository: IALbumRepository) {}
  async execute(input: ListAllAlbumInputDto): Promise<ListAllAlbumOutputDto[]> {
    return await this._albumRepository.findAll(input);
  }
}
