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
    const existingAlbum = await this._albumRepository.findByAlbum({
      nomeAluno: input.nomeAluno,
      numeroContrato: input.numeroContrato,
    });
    const albumToUpdate = {
      numeroContrato: input.numeroContrato,
      nomeAluno: input.nomeAluno,
      tipoAlbum: input.tipoAlbum ? input.tipoAlbum : existingAlbum.tipoAlbum,
      evento: input.evento ? input.evento : existingAlbum.evento,
      minFotos: input.minFotos ? input.minFotos : existingAlbum.minFotos,
      maxFotos: input.maxFotos ? input.maxFotos : existingAlbum.maxFotos,
      createdAt: existingAlbum.createdAt,
    };

    if (input.fotos.length <= 0) {
      await this._albumRepository.updateAlbum(albumToUpdate);
    }

    const urlsSigned = await this._storageService.upload({
      nomeAluno: input.nomeAluno,
      contrato: input.numeroContrato,
      fotos: input.fotos,
    });
    await this._albumRepository.updateAlbum({
      maxFotos: albumToUpdate.maxFotos,
      minFotos: albumToUpdate.minFotos,
      evento: albumToUpdate.evento,
      fotos: urlsSigned,
      nomeAluno: albumToUpdate.nomeAluno,
      numeroContrato: albumToUpdate.numeroContrato,
      tipoAlbum: albumToUpdate.tipoAlbum,
    });
  }
}
