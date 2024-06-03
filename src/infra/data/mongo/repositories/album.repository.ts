import {
  CreateAlbumInputDto,
  FindAllAlbuns,
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
  async updateAlbum(input: CreateAlbumInputDto): Promise<any> {
    await this._albumModel.findOneAndUpdate(
      {
        $or: [
          { numeroContrato: input.numeroContrato },
          { nomeAluno: input.nomeAluno },
        ],
      },
      { ...input },
    );
  }

  async deleteAlbum(input: any): Promise<boolean> {
    const doc = await this._albumModel.findOneAndDelete({
      $and: [{ nomeUsuario: input.nomeUsuario }, { email: input.email }],
    });

    return !!doc;
  }
  async findAll({
    limit,
    skip,
    nomeUsuario = '',
  }: FindAllInputDto): Promise<FindAllAlbuns> {
    const doc = await this._albumModel.aggregate([
      {
        $match: {
          nomeAluno: { $regex: nomeUsuario, $options: 'i' },
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
      albuns: doc[0].data.map((album: FindOutputDto) => ({
        numeroContrato: album.numeroContrato,
        nomeAluno: album.nomeAluno,
        tipoAlbum: album.tipoAlbum,
        evento: album.evento,
        createdAt: album.createdAt,
        fotos: album.fotos,
      })),
      count: doc[0].metadata[0].totalCount,
    };
  }
}
