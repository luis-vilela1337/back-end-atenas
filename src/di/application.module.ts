import { Module } from '@nestjs/common';
import { CoreModule } from './core.module';
import { AuthApplication } from 'src/application/auth/auth.application';
import { CreateNewUserApplication } from '@application/user/create-new-user.application';
import { ListAllUsersApplication } from '@application/user/list-all-user.application';
import { UpdateUserApplication } from '@application/user/update-user.application';
import { DeleteUserApplication } from '@application/user/delete-user.application';
import { CreateAlbumApplication } from '@application/album/create-album.application';
import { ListUserApplication } from '@application/user/list-user.application';
import { ListAllAlbumApplication } from '@application/album/list-all-album.application';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { DeleteAlbumApplication } from '@application/album/delete-album.application';
import { ListAlbumApplication } from '@application/album/list.album.application';

@Module({
  imports: [
    CoreModule,
    MulterModule.register({
      storage: memoryStorage(),
    }),
  ],
  providers: [
    AuthApplication,
    CreateNewUserApplication,
    ListAllUsersApplication,
    UpdateUserApplication,
    DeleteUserApplication,
    CreateAlbumApplication,
    ListUserApplication,
    ListAllAlbumApplication,
    DeleteAlbumApplication,
    ListAlbumApplication,
  ],
  exports: [
    AuthApplication,
    CreateNewUserApplication,
    ListAllUsersApplication,
    UpdateUserApplication,
    DeleteUserApplication,
    CreateAlbumApplication,
    ListUserApplication,
    ListAllAlbumApplication,
    DeleteAlbumApplication,
    ListAlbumApplication,
  ],
})
export class ApplicationModule {}
