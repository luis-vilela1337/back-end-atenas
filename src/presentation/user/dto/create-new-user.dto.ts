import { IsBoolean, IsString } from 'class-validator';

export class CreateNewUserInputDto {
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
  @IsString()
  senha: string;
  @IsBoolean()
  isAdm: boolean;
  foto: Express.Multer.File;
}
