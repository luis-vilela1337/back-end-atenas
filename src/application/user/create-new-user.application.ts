import { CreateNewUserUseCase } from '@core/usecases/create-new-user.usecase';
import { Injectable } from '@nestjs/common';
import { CreateNewUserInputDto } from '@presentation/user/dto/create-new-user.dto';

@Injectable()
export class CreateNewUserApplication {
  constructor(private readonly _createNewUserUseCase: CreateNewUserUseCase) {}
  async execute(input: CreateNewUserInputDto): Promise<void> {
    try {
      await this._createNewUserUseCase.execute(input);
    } catch (error) {
      throw error;
    }
  }
}
