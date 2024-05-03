import {
  CreateAlbumInputDto,
  CreateAlbumOutputDto,
} from '@core/dto/usecase/create-album.usecase';

export abstract class ICreateAlbumUseCase {
  abstract execute(input: CreateAlbumInputDto): Promise<CreateAlbumOutputDto>;
}
