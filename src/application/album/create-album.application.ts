import { CreateAlbumUseCase } from '@core/usecases/create-album.usecase';
import { CreateAlbumInputDto } from '@presentation/user/dto/album/create-album.dto';

export class CreateAlbumApplication {
  constructor(private readonly _createAlbum: CreateAlbumUseCase) {}
  async execute(input: CreateAlbumInputDto): Promise<void> {
    try {
      await this._createAlbum.execute(input);
    } catch (error) {
      throw error;
    }
  }
}
