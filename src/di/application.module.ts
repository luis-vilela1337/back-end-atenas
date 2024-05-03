import { Module } from '@nestjs/common';
import { CoreModule } from './core.module';
import { AuthApplication } from 'src/application/auth/auth.application';
import { CreateNewUserApplication } from '@application/user/create-new-user.application';
import { ListAllUsersApplication } from '@application/user/list-all-user.application';
import { UpdateUserApplication } from '@application/user/update-user.application';
import { DeleteUserApplication } from '@application/user/delete-user.application';

@Module({
  imports: [CoreModule],
  providers: [
    AuthApplication,
    CreateNewUserApplication,
    ListAllUsersApplication,
    UpdateUserApplication,
    DeleteUserApplication,
  ],
  exports: [
    AuthApplication,
    CreateNewUserApplication,
    ListAllUsersApplication,
    UpdateUserApplication,
    DeleteUserApplication,
  ],
})
export class ApplicationModule {}
