import { IsNumber } from 'class-validator';

export class ListAllAlbumInputDto {
  @IsNumber()
  limit: number;
  @IsNumber()
  offset: number;
}

export class ListAllAlbumOutputDto {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
  fotos: string[];
  createdAt: string;
}
