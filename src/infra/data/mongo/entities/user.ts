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
  numeroContrato: string;

  @Prop()
  nomeUsuario: string;

  @Prop()
  turma: string;

  @Prop()
  telefone: string;

  @Prop()
  nomeEscola: string;

  @Prop()
  email: string;

  @Prop()
  senha: string;

  @Prop()
  isAdm: boolean;

  @Prop()
  foto: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
