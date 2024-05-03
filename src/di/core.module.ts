import { Module } from '@nestjs/common';
import { InfraModule } from './infra.module';
import { AuthUseCase } from 'src/core/usecases/auth.usecase';
import { CreateNewUserUseCase } from '@core/usecases/create-new-user.usecase';
import { ListAllUseCase } from '@core/usecases/list-all-users.usecase';
import { UpdateUserUseCase } from '@core/usecases/update-user.usecase';
import { DeleteUserUseCase } from '@core/usecases/delete-user.usecase';
import { CreateAlbumUseCase } from '@core/usecases/create-album.usecase';
import { ListUserUseCase } from '@core/usecases/list-user.usecase';

@Module({
  imports: [InfraModule],
  providers: [
    AuthUseCase,
    CreateNewUserUseCase,
    ListAllUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    ListUserUseCase,
    CreateAlbumUseCase,
  ],
  exports: [
    AuthUseCase,
    CreateNewUserUseCase,
    ListAllUseCase,
    ListUserUseCase,
    DeleteUserUseCase,
    UpdateUserUseCase,
    CreateAlbumUseCase,
  ],
})
export class CoreModule {}
