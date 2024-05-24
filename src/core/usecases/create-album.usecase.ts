import { IALbumRepository } from '@core/abstracts/services/album.repository';
import { IStorageService } from '@core/abstracts/services/storage.service';
import { ICreateAlbumUseCase } from '@core/abstracts/usecases/create-album.usecase';
import { CreateAlbumInputDto } from '@core/dto/usecase/create-album.usecase';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CreateAlbumUseCase implements ICreateAlbumUseCase {
  constructor(
    private readonly _albumRepository: IALbumRepository,
    private readonly _storageService: IStorageService,
  ) {}
  async execute(input: CreateAlbumInputDto): Promise<void> {
    const hasAlbum = await this._albumRepository.findByAlbum({
      nomeAluno: input.nomeAluno,
      numeroContrato: input.numeroContrato,
    });

    if (hasAlbum) {
      throw new BadRequestException('Album ja existe');
    }
    const urlsSigned = await this._storageService.upload({
      nomeAluno: input.nomeAluno,
      contrato: input.numeroContrato,
      fotos: input.fotos,
    });
    await this._albumRepository.createAlbum({
      evento: input.evento,
      fotos: urlsSigned,
      nomeAluno: input.nomeAluno,
      numeroContrato: input.numeroContrato,
      tipoAlbum: input.tipoAlbum,
    });
  }
}
