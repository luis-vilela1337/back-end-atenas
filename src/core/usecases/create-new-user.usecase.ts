import { IJwtService } from '@core/abstracts/services/jwt-crypt.service';
import { IUserRepository } from '@core/abstracts/services/user.repository';
import { ICreateNewUserUseCase } from '@core/abstracts/usecases/create-new-user.usecase';
import { CreateNewUserInputDto } from '@core/dto/usecase/create-new-user.usecase';
import { BadRequestException, Injectable } from '@nestjs/common';
import { cpf as CpfValidator } from 'cpf-cnpj-validator';

@Injectable()
export class CreateNewUserUseCase implements ICreateNewUserUseCase {
  constructor(
    private readonly _userRepository: IUserRepository,
    private readonly _jwtService: IJwtService,
  ) {}
  async execute(input: CreateNewUserInputDto): Promise<void> {
    const { cpf, curso, matricula, nome, periodo, senha } = input;
    const addaptedCpf = CpfValidator.format(cpf);
    const isUserExist = (await this._userRepository.findByUser({ cpf, nome }))
      ? true
      : false;

    if (isUserExist) {
      throw new BadRequestException('User already exists');
    }

    const senhaEncriptada = await this._jwtService.encrypt(senha);

    await this._userRepository.createUser({
      cpf: addaptedCpf,
      curso,
      matricula,
      nome,
      senha: senhaEncriptada,
      periodo,
    });
  }
}
