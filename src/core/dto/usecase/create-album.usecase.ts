export type CreateAlbumInputDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  minFotos: number;
  maxFotos: number;
  evento: string[];
  fotos: Express.Multer.File[];
};

export type CreateAlbumOutputDto = void;
