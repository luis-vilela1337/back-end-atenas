import { IALbumRepository } from '@core/abstracts/services/album.repository';
import { DeleteAlbumInputDto } from '@core/dto/usecase/delete-album.usecase';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class DeletAlbumUseCase {
  constructor(private readonly _albumRepo: IALbumRepository) {}
  async execute(input: DeleteAlbumInputDto): Promise<void> {
    const { nomeAluno, numeroContrato } = input;
    const hasUpdated = await this._albumRepo.deleteAlbum({
      nomeAluno,
      numeroContrato,
    });
    if (!hasUpdated) {
      throw new BadRequestException('Erro quando deletar album');
    }
  }
}
