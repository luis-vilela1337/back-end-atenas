import { IJwtService } from '@core/abstracts/services/jwt-crypt.service';
import { IUserRepository } from '@core/abstracts/services/user.repository';
import { ICreateNewUserUseCase } from '@core/abstracts/usecases/create-new-user.usecase';
import { CreateNewUserInputDto } from '@core/dto/usecase/create-new-user.usecase';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CreateNewUserUseCase implements ICreateNewUserUseCase {
  constructor(
    private readonly _userRepository: IUserRepository,
    private readonly _jwtService: IJwtService,
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

    await this._userRepository.createUser({
      numeroContrato,
      nomeUsuario,
      turma,
      telefone,
      nomeEscola,
      email,
      senha: senhaEncriptada,
      isAdm,
      foto,
    });
  }
}
