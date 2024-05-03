import { IsObject, IsString } from 'class-validator';

export class CreateAlbumInputDto {
  @IsString()
  numeroContrato: string;
  @IsString()
  nomeAluno: string;
  @IsString()
  tipoAlbum: string;
  @IsObject()
  evento: Array<Evento>;
}

export class Evento {
  @IsString()
  tipoEvento: string;
  @IsString()
  fotos: Array<string>;
}
