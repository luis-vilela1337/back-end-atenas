import { IsBoolean, IsString } from 'class-validator';

export class UpdateUserInputDto {
  @IsString()
  numeroContrato: string;
  @IsString()
  nomeUsuario: string;
  @IsString()
  turma: string;
  @IsString()
  telefone: string;
  @IsString()
  nomeEscola: string;
  @IsString()
  email: string;
  @IsBoolean()
  isAdm: boolean;
  foto: Express.Multer.File;
}
