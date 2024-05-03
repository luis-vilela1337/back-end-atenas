import { IsObject, IsString } from 'class-validator';

export class CreateAlbumInputDto {
  @IsString()
  numeroContrato: string;
  @IsString()
  nomeAluno: string;
  @IsString()
  tipoAlbum: string;
  @IsString()
  evento: string[];
  @IsString()
  fotos: string[];
}
