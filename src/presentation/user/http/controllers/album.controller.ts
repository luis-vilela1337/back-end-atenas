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
} from '@nestjs/common';
import { CreateAlbumInputDto } from '@presentation/user/dto/album/create-album.dto';
import {
  ListAllAlbumInputDto,
  ListAllAlbumOutputDto,
} from '@presentation/user/dto/album/list-all-album.dto';
import { JwtAuthGuard } from '@presentation/auth/guards/jwt.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MaxFileSizeService } from '@infrastructure/services/file-size.service';

@Controller('v1/albuns')
export class AlbumController {
  constructor(
    private readonly _createAlbum: CreateAlbumApplication,
    private readonly _listAllAlbum: ListAllAlbumApplication,
  ) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('image'))
  async createAlbum(
    @Body() input: CreateAlbumInputDto,
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(jpg|jpeg|png|webp)$/,
        })
        // .addMaxSizeValidator({
        //   maxSize: 10000,
        // })
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
    @Body() input: ListAllAlbumInputDto,
  ): Promise<ListAllAlbumOutputDto[]> {
    return await this._listAllAlbum.execute(input);
  }
}
