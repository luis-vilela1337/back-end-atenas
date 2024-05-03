import { IsString } from 'class-validator';

export class DeleteUserInputDto {
  @IsString()
  nomeUsuario: string;
  @IsString()
  email: string;
}
