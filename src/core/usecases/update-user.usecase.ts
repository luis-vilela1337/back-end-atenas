import { IStorageService } from '@core/abstracts/services/storage.service';
import { IUserRepository } from '@core/abstracts/services/user.repository';
import { IUpdateUserUseCase } from '@core/abstracts/usecases/update-user.usecase';
import {
  UpdateUserInputDto,
  UpdateUserOutputDto,
} from '@core/dto/usecase/update-user.usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(
    private readonly _userRepo: IUserRepository,
    private readonly _storageService: IStorageService,
  ) {}
  async execute(input: UpdateUserInputDto): Promise<UpdateUserOutputDto> {
    const urlSigned = await this._storageService.uploadProfilePicture({
      nomeAluno: input.nomeUsuario,
      contrato: input.numeroContrato,
      foto: input.foto,
    });
    return await this._userRepo.updateUser({ ...input, foto: urlSigned });
  }
}
