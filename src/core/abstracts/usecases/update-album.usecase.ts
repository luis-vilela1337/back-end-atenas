import {
  UpdateAlbumInputDto,
  UpdateAlbumOutputDto,
} from '@core/dto/usecase/update-album.usecase';

export abstract class IUpdateAlbumUseCase {
  abstract execute(input: UpdateAlbumInputDto): Promise<UpdateAlbumOutputDto>;
}
