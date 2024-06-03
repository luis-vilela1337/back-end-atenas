import { ArrayMinSize, IsArray, IsNumber, IsString } from 'class-validator';

export class UpdateAlbumInputDto {
  @IsString()
  numeroContrato: string;
  @IsString()
  nomeAluno: string;
  @IsString()
  tipoAlbum: string;
  @IsNumber()
  minFotos: number;
  @IsNumber()
  maxFotos: number;
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  evento: string[];
  fotos: Array<Express.Multer.File>;
}
