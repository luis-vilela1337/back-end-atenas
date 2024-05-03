import { IUserRepository } from '@core/abstracts/services/user.repository';
import { IDeleteUseCase } from '@core/abstracts/usecases/delete-user.usecase';
import { DeleteUserInputDto } from '@core/dto/usecase/delete-user.usecase';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteUserUseCase implements IDeleteUseCase {
  constructor(private readonly _userRepo: IUserRepository) {}
  async execute(input: DeleteUserInputDto): Promise<void> {
    const hasUpdated = await this._userRepo.deleteUser(input);
    if (!hasUpdated) {
      throw new BadRequestException('Usuario nao foi deletado');
    }
  }
}
