import { CreateAlbumUseCase } from '@core/usecases/create-album.usecase';
import { Injectable } from '@nestjs/common';
import { CreateAlbumInputDto } from '@presentation/user/dto/album/create-album.dto';
@Injectable()
export class CreateAlbumApplication {
  constructor(private readonly _createAlbum: CreateAlbumUseCase) {}
  async execute(
    input: CreateAlbumInputDto,
    fotos: Array<Express.Multer.File>,
  ): Promise<void> {
    try {
      return await this._createAlbum.execute({
        ...input,
        maxFotos: Number(input.maxFotos),
        minFotos: Number(input.minFotos),
        fotos,
      });
    } catch (error) {
      throw error;
    }
  }
}
