export type UpdateAlbumInputDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
  minFotos: number;
  maxFotos: number;
  fotos: Express.Multer.File[];
};

export type UpdateAlbumOutputDto = void;
