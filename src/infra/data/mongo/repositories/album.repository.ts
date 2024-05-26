import {
  CreateAlbumInputDto,
  FindAllInputDto,
  FindByAlbumnInputDto,
  FindOutputDto,
  IALbumRepository,
} from '@core/abstracts/services/album.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from '../entities/album';
import { Model } from 'mongoose';

export class AlbumRepository implements IALbumRepository {
  constructor(
    @InjectModel(Album.name)
    private readonly _albumModel: Model<AlbumDocument>,
  ) {}
  async createAlbum(input: CreateAlbumInputDto): Promise<void> {
    (
      await this._albumModel.create({
        ...input,
        evento: input.evento.map((el) => el),
      })
    ).save();
  }
  async findByAlbum({
    nomeAluno,
    numeroContrato,
  }: FindByAlbumnInputDto): Promise<FindOutputDto> {
    const doc = await this._albumModel.findOne({
      $and: [{ numeroContrato }, { nomeAluno }],
    });
    return doc
      ? {
          numeroContrato: doc.numeroContrato,
          nomeAluno: doc.nomeAluno,
          tipoAlbum: doc.tipoAlbum,
          fotos: doc.fotos,
          evento: doc.evento,
          createdAt: doc.createdAt,
        }
      : undefined;
  }
  updateAlbum(input: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async deleteAlbum(input: any): Promise<boolean> {
    const doc = await this._albumModel.findOneAndDelete({
      $and: [{ nomeUsuario: input.nomeUsuario }, { email: input.email }],
    });

    return !!doc;
  }
  async findAll({ limit, offset }: FindAllInputDto): Promise<FindOutputDto[]> {
    const doc = await this._albumModel
      .find({})
      .limit(limit)
      .skip((offset - 1) * limit)
      .exec();

    return doc.map((album) => ({
      numeroContrato: album.numeroContrato,
      nomeAluno: album.nomeAluno,
      tipoAlbum: album.numeroContrato,
      evento: album.evento.map((e) => e),
      fotos: album.fotos.map((e) => e),
      createdAt: album.createdAt,
    }));
  }
}
