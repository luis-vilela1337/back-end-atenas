import { CreateAlbumApplication } from '@application/album/create-album.application';
import { ListAllAlbumApplication } from '@application/album/list-all-album.application';
import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  ParseFilePipeBuilder,
  HttpStatus,
  Param,
  Patch,
} from '@nestjs/common';
import { CreateAlbumInputDto } from '@presentation/user/dto/album/create-album.dto';
import { ListAllAlbumOutputDto } from '@presentation/user/dto/album/list-all-album.dto';
import { JwtAuthGuard } from '@presentation/auth/guards/jwt.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MaxFileSizeService } from '@infrastructure/services/file-size.service';

import { ListAlbumApplication } from '@application/album/list.album.application';
import { DeleteAlbumInputDto } from '@presentation/user/dto/album/delete-album.dto';
import { DeleteAlbumApplication } from '@application/album/delete-album.application';

@Controller('v1/albuns')
export class AlbumController {
  constructor(
    private readonly _createAlbum: CreateAlbumApplication,
    private readonly _listAllAlbum: ListAllAlbumApplication,
    private readonly _listAlbum: ListAlbumApplication,
    private readonly _deleteAlbum: DeleteAlbumApplication,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('image'))
  async createAlbum(
    @Body() input: CreateAlbumInputDto,
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(jpg|jpeg|png|webp)$/,
        })
        .addValidator(
          new MaxFileSizeService({
            maxSize: 10000,
          }),
        )
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    image: Array<Express.Multer.File>,
  ): Promise<void> {
    return await this._createAlbum.execute(input, image);
  }

  @Get('getAll')
  @UseGuards(JwtAuthGuard)
  async listAllAlbum(
    @Param('offset') offset: number,
    @Param('limit') limit: number,
  ): Promise<ListAllAlbumOutputDto[]> {
    return await this._listAllAlbum.execute({ limit, offset });
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async listAlbum(
    @Param('nomeAluno') nomeAluno: string,
    @Param('numeroContrato') numeroContrato: string,
  ) {
    return await this._listAlbum.execute(nomeAluno, numeroContrato);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async deleteAlbum(@Body() input: DeleteAlbumInputDto): Promise<void> {
    return await this._deleteAlbum.execute(input);
  }
}
