import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'albuns',
  timestamps: true,
})
export class Album {
  @Prop()
  id: string;

  @Prop()
  numeroContrato: string;

  @Prop()
  nomeAluno: string;

  @Prop()
  tipoAlbum: string;

  @Prop()
  evento: string[];

  @Prop()
  fotos: string[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type AlbumDocument = Album & Document;
export const AlbumSchema = SchemaFactory.createForClass(Album);
