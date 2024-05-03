import { IALbumRepository } from '@core/abstracts/services/album.repository';
import { ICreateAlbumUseCase } from '@core/abstracts/usecases/create-album.usecase';
import { CreateAlbumInputDto } from '@core/dto/usecase/create-album.usecase';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CreateAlbumUseCase implements ICreateAlbumUseCase {
  constructor(private readonly _albumRepository: IALbumRepository) {}
  async execute(input: CreateAlbumInputDto): Promise<void> {
    const hasAlbum = await this._albumRepository.findByAlbum({
      nomeAluno: input.nomeAluno,
      numeroContrato: input.numeroContrato,
    });

    if (!hasAlbum) {
      throw new BadRequestException('Album ja existe');
    }

    await this._albumRepository.createAlbum(input);
  }
}
