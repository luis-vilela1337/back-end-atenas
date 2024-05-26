import { DeletAlbumUseCase } from '@core/usecases/delete.album.usecase';
import { Injectable } from '@nestjs/common';
import { DeleteAlbumInputDto } from '@presentation/user/dto/album/delete-album.dto';

@Injectable()
export class DeleteAlbumApplication {
  constructor(private readonly _deleteAllbumUsecase: DeletAlbumUseCase) {}

  async execute(input: DeleteAlbumInputDto): Promise<void> {
    try {
      await this._deleteAllbumUsecase.execute(input);
    } catch (error) {
      throw error;
    }
  }
}
