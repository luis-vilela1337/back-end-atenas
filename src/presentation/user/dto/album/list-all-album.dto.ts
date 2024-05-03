import { IsNumber } from 'class-validator';

export class ListAllAlbumInputDto {
  @IsNumber()
  limit: number;
  @IsNumber()
  skip: number;
}

export class ListAllAlbumOutputDto {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
  createdAt: string;
}
