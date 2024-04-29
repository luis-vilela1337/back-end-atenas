import { IUserRepository } from '@core/abstracts/services/user.repository';
import { CreateNewUserInput } from '@core/dto/repositories/user/create-new-user.dto';
import {
  FindByUserInput,
  FindByUserOutput,
} from '@core/dto/repositories/user/find.user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../entities/user';
import { Model } from 'mongoose';
import { ListAllUsersOutputDto } from '@core/dto/repositories/user/list-all.dto';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly _userModel: Model<UserDocument>,
  ) {}
  async findAll(): Promise<ListAllUsersOutputDto[]> {
    const doc = await this._userModel.find();

    return doc.map((user) => ({
      nome: user.nome,
      cpf: user.cpf,
      curso: user.curso,
      periodo: user.periodo,
      matricula: user.matricula,
    }));
  }
  async createUser(input: CreateNewUserInput): Promise<void> {
    (await this._userModel.create({ ...input })).save();
  }
  async findByUser({ cpf, nome }: FindByUserInput): Promise<FindByUserOutput> {
    const doc = await this._userModel.findOne({
      $or: [{ nome }, { cpf }],
    });
    return doc
      ? {
          nome: doc.nome,
          cpf: doc.cpf,
          matricula: doc.matricula,
          curso: doc.curso,
          senha: doc.senha,
        }
      : undefined;
  }
}
