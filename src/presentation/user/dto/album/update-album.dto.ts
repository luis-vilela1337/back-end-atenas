import { ArrayMinSize, IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateAlbumInputDto {
  @IsString()
  numeroContrato: string;
  @IsString()
  nomeAluno: string;
  @IsString()
  @IsOptional()
  tipoAlbum?: string;
  @IsString()
  @IsOptional()
  minFotos?: string;
  @IsString()
  @IsOptional()
  maxFotos?: string;
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @ArrayMinSize(1)
  evento?: string[];
  fotos?: Array<Express.Multer.File>;
}
