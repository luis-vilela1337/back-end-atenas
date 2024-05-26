import { IsNumber, IsString } from 'class-validator';

export class ListAllAlbumInputDto {
  @IsNumber()
  limit: number;
  @IsNumber()
  offset: number;
  @IsString()
  nomeUsuario: string;
}

export class ListAllAlbumOutputDto {
  albuns: ListAllbumDto[];
  count: number;
}
export class ListAllbumDto {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
  fotos: string[];
  createdAt: string;
}
