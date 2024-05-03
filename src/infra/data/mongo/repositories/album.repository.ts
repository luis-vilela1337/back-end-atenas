import {
  CreateAlbumInputDto,
  FindAlbunsOutputDto,
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
    (await this._albumModel.create({ ...input })).save();
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
  findAll(input: any): Promise<FindAlbunsOutputDto> {
    throw new Error('Method not implemented.');
  }
}
