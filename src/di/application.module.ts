import { Module } from '@nestjs/common';
import { CoreModule } from './core.module';
import { AuthApplication } from 'src/application/auth/auth.application';
import { CreateNewUserApplication } from '@application/user/create-new-user.application';
import { ListAllUsersApplication } from '@application/user/list-all-user.application';

@Module({
  imports: [CoreModule],
  providers: [
    AuthApplication,
    CreateNewUserApplication,
    ListAllUsersApplication,
  ],
  exports: [AuthApplication, CreateNewUserApplication, ListAllUsersApplication],
})
export class ApplicationModule {}
