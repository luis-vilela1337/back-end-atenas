import { CreateAlbumUseCase } from '@core/usecases/create-album.usecase';
import { Injectable } from '@nestjs/common';
import { CreateAlbumInputDto } from '@presentation/user/dto/album/create-album.dto';
@Injectable()
export class CreateAlbumApplication {
  constructor(private readonly _createAlbum: CreateAlbumUseCase) {}
  async execute(input: CreateAlbumInputDto): Promise<void> {
    try {
      await this._createAlbum.execute({ ...input, fotos: [] });
    } catch (error) {
      throw error;
    }
  }
}
