import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class User {
  @Prop()
  id: string;

  @Prop()
  nome: string;

  @Prop()
  senha?: string;

  @Prop()
  cpf: string;

  @Prop()
  isAdmin: boolean;

  @Prop()
  curso: string;

  @Prop()
  periodo: number;

  @Prop()
  matricula: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
