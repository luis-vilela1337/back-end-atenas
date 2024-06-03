import { IALbumRepository } from '@core/abstracts/services/album.repository';
import { IStorageService } from '@core/abstracts/services/storage.service';
import { IUpdateAlbumUseCase } from '@core/abstracts/usecases/update-album.usecase';
import { UpdateAlbumInputDto } from '@core/dto/usecase/update-album.usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateAlbumUseCase implements IUpdateAlbumUseCase {
  constructor(
    private readonly _albumRepository: IALbumRepository,
    private readonly _storageService: IStorageService,
  ) {}
  async execute(input: UpdateAlbumInputDto): Promise<void> {
    const urlsSigned = await this._storageService.upload({
      nomeAluno: input.nomeAluno,
      contrato: input.numeroContrato,
      fotos: input.fotos,
    });
    await this._albumRepository.updateAlbum({
      maxFotos: input.maxFotos,
      minFotos: input.minFotos,
      evento: input.evento,
      fotos: urlsSigned,
      nomeAluno: input.nomeAluno,
      numeroContrato: input.numeroContrato,
      tipoAlbum: input.tipoAlbum,
    });
  }
}
