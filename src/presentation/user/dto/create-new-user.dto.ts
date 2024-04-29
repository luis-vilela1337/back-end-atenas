import { IsNumber, IsString } from 'class-validator';

export class CreateNewUserInputDto {
  @IsString()
  nome: string;
  @IsString()
  curso: string;
  @IsNumber()
  periodo: number;
  @IsString()
  cpf: string;
  @IsNumber()
  matricula: number;
  @IsString()
  senha: string;
}
