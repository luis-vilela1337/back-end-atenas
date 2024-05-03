import { DeleteUserUseCase } from '@core/usecases/delete-user.usecase';
import { Injectable } from '@nestjs/common';
import { DeleteUserInputDto } from '@presentation/user/dto/delete-user.dto';
@Injectable()
export class DeleteUserApplication {
  constructor(private readonly _deleteUser: DeleteUserUseCase) {}
  async execute(input: DeleteUserInputDto): Promise<void> {
    try {
      await this._deleteUser.execute(input);
    } catch (error) {
      throw error;
    }
  }
}
