import { UpdateAlbumUseCase } from '@core/usecases/update-album.usecase';
import { UpdateAlbumInputDto } from '@presentation/user/dto/album/update-album.dto';

export class UpdateAlbumApplication {
  constructor(private readonly _updateAlbumUseCase: UpdateAlbumUseCase) {}
  async execute(input: UpdateAlbumInputDto): Promise<void> {
    try {
      return await this._updateAlbumUseCase.execute(input);
    } catch (error) {
      throw error;
    }
  }
}
