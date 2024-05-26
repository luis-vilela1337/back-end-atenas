import {
  FindOutputDto,
  IALbumRepository,
} from '@core/abstracts/services/album.repository';
import { ListAllbumInput } from '@core/dto/usecase/list-all-album.usecase';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ListAlbumUseCase {
  constructor(private readonly _albumRepository: IALbumRepository) {}
  async execute(input: ListAllbumInput): Promise<FindOutputDto> {
    const { nomeAluno, numeroContrato } = input;

    const album = await this._albumRepository.findByAlbum({
      nomeAluno,
      numeroContrato,
    });

    const albumIsValid = !!album;

    if (!albumIsValid) {
      throw new BadRequestException(
        'Album inválido, verifique os dados tente novamentes',
      );
    }

    return album;
  }
}
