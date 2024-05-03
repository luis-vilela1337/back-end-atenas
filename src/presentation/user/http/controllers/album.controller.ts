import { CreateAlbumApplication } from '@application/album/create-album.application';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateAlbumInputDto } from '@presentation/user/dto/album/create-album.dto';

@Controller()
export class AlbumController {
  constructor(private readonly _createAlbum: CreateAlbumApplication) {}
  @Post()
  async createAlbum(@Body() input: CreateAlbumInputDto): Promise<void> {
    return await this._createAlbum.execute(input);
  }
}
