import { UpdateUserUseCase } from '@core/usecases/update-user.usecase';
import { Injectable } from '@nestjs/common';
import { UpdateUserInputDto } from '@presentation/user/dto/update-user.dto';

@Injectable()
export class UpdateUserApplication {
  constructor(private readonly _updateUser: UpdateUserUseCase) {}
  async execute(input: UpdateUserInputDto): Promise<void> {
    try {
      await this._updateUser.execute(input);
    } catch (error) {
      throw error;
    }
  }
}
