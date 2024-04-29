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
  async findAll(): Promise<Omit<ListAllUsersOutputDto, 'senha'>[]> {
    const doc = await this._userModel.find();

    return doc.map((user) => ({
      numeroContrato: user.numeroContrato,
      nomeUsuario: user.nomeUsuario,
      turma: user.turma,
      telefone: user.telefone,
      nomeEscola: user.nomeEscola,
      email: user.email,
      isAdm: user.isAdm,
      foto: user.foto,
    }));
  }
  async createUser(input: CreateNewUserInput): Promise<void> {
    (await this._userModel.create({ ...input })).save();
  }
  async findByUser({
    nomeUsuario,
    email,
  }: FindByUserInput): Promise<FindByUserOutput> {
    const doc = await this._userModel.findOne({
      $or: [{ nomeUsuario }, { email }],
    });
    return doc
      ? {
          email: doc.email,
          foto: doc.foto,
          isAdm: doc.isAdm,
          nomeEscola: doc.nomeEscola,
          nomeUsuario: doc.nomeUsuario,
          numeroContrato: doc.numeroContrato,
          telefone: doc.telefone,
          turma: doc.turma,
          senha: doc.senha,
        }
      : undefined;
  }
}
