import { IJwtService } from '@core/abstracts/services/jwt-crypt.service';
import { IStorageService } from '@core/abstracts/services/storage.service';
import { IUserRepository } from '@core/abstracts/services/user.repository';
import { ICreateNewUserUseCase } from '@core/abstracts/usecases/create-new-user.usecase';
import { CreateNewUserInputDto } from '@core/dto/usecase/create-new-user.usecase';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CreateNewUserUseCase implements ICreateNewUserUseCase {
  constructor(
    private readonly _userRepository: IUserRepository,
    private readonly _jwtService: IJwtService,
    private readonly _storageService: IStorageService,
  ) {}
  async execute(input: CreateNewUserInputDto): Promise<void> {
    const {
      numeroContrato,
      nomeUsuario,
      turma,
      telefone,
      nomeEscola,
      email,
      senha,
      isAdm,
      foto,
    } = input;

    const isUserExist = (await this._userRepository.findByUser({
      email,
      nomeUsuario,
    }))
      ? true
      : false;

    if (isUserExist) {
      throw new BadRequestException('O usuario já está cadastrado');
    }

    const senhaEncriptada = await this._jwtService.encrypt(senha);

    const urlSigned = await this._storageService.uploadProfilePicture({
      nomeAluno: input.nomeUsuario,
      contrato: input.numeroContrato,
      foto,
    });

    await this._userRepository.createUser({
      numeroContrato,
      nomeUsuario,
      turma,
      telefone,
      nomeEscola,
      email,
      senha: senhaEncriptada,
      isAdm,
      foto: urlSigned,
    });
  }
}
