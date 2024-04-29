import { Module } from '@nestjs/common';
import { InfraModule } from './infra.module';
import { AuthUseCase } from 'src/core/usecases/auth.usecase';
import { CreateNewUserUseCase } from '@core/usecases/create-new-user.usecase';
import { ListAllUseCase } from '@core/usecases/list-all-users.usecase';

@Module({
  imports: [InfraModule],
  providers: [AuthUseCase, CreateNewUserUseCase, ListAllUseCase],
  exports: [AuthUseCase, CreateNewUserUseCase, ListAllUseCase],
})
export class CoreModule {}
