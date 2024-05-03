import {
  CreateAlbumInputDto,
  FindAlbunsOutputDto,
  FindAllInputDto,
  FindAllOutputDto,
  FindByAlbumnInputDto,
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
  }: FindByAlbumnInputDto): Promise<FindAlbunsOutputDto> {
    const doc = await this._albumModel.findOne({
      $and: [{ numeroContrato }, { nomeAluno }],
    });
    return doc
      ? {
          numeroContrato: doc.numeroContrato,
          nomeAluno: doc.nomeAluno,
          tipoAlbum: doc.tipoAlbum,
          evento: doc.evento,
        }
      : undefined;
  }
  updateAlbum(input: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  deleteAlbum(input: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async findAll({ limit, skip }: FindAllInputDto): Promise<FindAllOutputDto> {
    const doc = await this._albumModel
      .find({})
      .limit(limit)
      .skip((skip - 1) * limit)
      .exec();

    return doc.map((album) => ({
      numeroContrato: album.numeroContrato,
      nomeAluno: album.nomeAluno,
      tipoAlbum: album.numeroContrato,
      evento: album.evento.map((e) => e),
      createdAt: album.createdAt,
    }));
  }
}
