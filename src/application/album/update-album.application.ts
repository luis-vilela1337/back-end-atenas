import { UpdateAlbumUseCase } from '@core/usecases/update-album.usecase';
import { Injectable } from '@nestjs/common';
import { UpdateAlbumInputDto } from '@presentation/user/dto/album/update-album.dto';

@Injectable()
export class UpdateAlbumApplication {
  constructor(private readonly _updateAlbumUseCase: UpdateAlbumUseCase) {}
  async execute(input: UpdateAlbumInputDto): Promise<void> {
    try {
      return await this._updateAlbumUseCase.execute({
        ...input,
        maxFotos: Number(input.maxFotos),
        minFotos: Number(input.minFotos),
      });
    } catch (error) {
      throw error;
    }
  }
}
