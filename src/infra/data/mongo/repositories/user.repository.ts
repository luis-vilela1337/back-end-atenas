import {
  FindAllInput,
  IUserRepository,
} from '@core/abstracts/services/user.repository';
import { CreateNewUserInput } from '@core/dto/repositories/user/create-new-user.dto';
import {
  FindByUserInput,
  FindByUserOutput,
} from '@core/dto/repositories/user/find.user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../entities/user';
import { Model } from 'mongoose';
import {
  ListAllUsersOutputDto,
  UserRepositoryDto,
} from '@core/dto/repositories/user/list-all.dto';
import { UpdateUserInput } from '@core/dto/repositories/user/update-user.dto';
import { DeleteUserInputDto } from '@core/dto/usecase/delete-user.usecase';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly _userModel: Model<UserDocument>,
  ) {}

  async findAll({
    limit,
    skip,
    username = '',
  }: FindAllInput): Promise<ListAllUsersOutputDto> {
    const doc = await this._userModel.aggregate([
      {
        $match: {
          nomeUsuario: { $regex: username, $options: 'i' },
        },
      },
      {
        $facet: {
          metadata: [{ $count: 'totalCount' }],
          data: [{ $skip: (skip - 1) * limit }, { $limit: limit }],
        },
      },
    ]);

    return {
      users: doc[0].data.map((user: UserRepositoryDto) => ({
        numeroContrato: user.numeroContrato,
        nomeUsuario: user.nomeUsuario,
        turma: user.turma,
        telefone: user.telefone,
        nomeEscola: user.nomeEscola,
        email: user.email,
        isAdm: user.isAdm,
        senha: user.senha,
        foto: 'teste',
        createdAt: user.createdAt,
      })),
      count: doc[0].metadata[0].totalCount,
    };
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
          createdAt: doc.createdAt,
        }
      : undefined;
  }

  async updateUser(input: UpdateUserInput): Promise<void> {
    await this._userModel.findOneAndUpdate(
      {
        $or: [{ nomeUsuario: input.nomeUsuario }, { email: input.email }],
      },
      { ...input },
    );
  }

  async deleteUser(input: DeleteUserInputDto): Promise<boolean> {
    const doc = await this._userModel.findOneAndDelete({
      $and: [{ nomeUsuario: input.nomeUsuario }, { email: input.email }],
    });

    return !!doc;
  }
}
