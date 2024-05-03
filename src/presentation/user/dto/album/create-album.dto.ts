import { ArrayMinSize, IsArray, IsString } from 'class-validator';

export class CreateAlbumInputDto {
  @IsString()
  numeroContrato: string;
  @IsString()
  nomeAluno: string;
  @IsString()
  tipoAlbum: string;
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  evento: string[];
}
