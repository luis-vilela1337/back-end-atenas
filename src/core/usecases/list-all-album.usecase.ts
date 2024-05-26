import { IALbumRepository } from '@core/abstracts/services/album.repository';
import {
  ListAllAlbumInputDto,
  ListAllAlbumOutputDto,
} from '@core/dto/usecase/list-all-album.usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllAlbumUseCase {
  constructor(private readonly _albumRepository: IALbumRepository) {}
  async execute(input: ListAllAlbumInputDto): Promise<ListAllAlbumOutputDto> {
    return await this._albumRepository.findAll(input);
  }
}
