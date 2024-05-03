import { CreateAlbumApplication } from '@application/album/create-album.application';
import { ListAllAlbumApplication } from '@application/album/list-all-album.application';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateAlbumInputDto } from '@presentation/user/dto/album/create-album.dto';
import {
  ListAllAlbumInputDto,
  ListAllAlbumOutputDto,
} from '@presentation/user/dto/album/list-all-album.dto';

@Controller('v1/albuns')
export class AlbumController {
  constructor(
    private readonly _createAlbum: CreateAlbumApplication,
    private readonly _listAllAlbum: ListAllAlbumApplication,
  ) {}
  @Post()
  async createAlbum(@Body() input: CreateAlbumInputDto): Promise<void> {
    return await this._createAlbum.execute(input);
  }

  @Get('getAll')
  async listAllAlbum(
    @Body() input: ListAllAlbumInputDto,
  ): Promise<ListAllAlbumOutputDto[]> {
    return await this._listAllAlbum.execute(input);
  }
}
