import { IsString } from 'class-validator';

export class DeleteAlbumInputDto {
  @IsString()
  nomeAluno: string;
  @IsString()
  numeroContrato: string;
}
