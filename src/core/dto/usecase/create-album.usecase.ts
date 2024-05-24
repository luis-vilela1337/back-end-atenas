export type CreateAlbumInputDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
  fotos: Express.Multer.File[];
};

export type CreateAlbumOutputDto = void;
