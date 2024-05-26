export type ListAllAlbumOutputDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
  fotos: string[];
  createdAt: string | Date;
};

export type ListAllbumInput = {
  nomeAluno: string;
  numeroContrato: string;
};
