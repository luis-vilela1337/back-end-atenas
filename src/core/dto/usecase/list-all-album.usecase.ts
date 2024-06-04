export type ListAllAlbumInputDto = {
  nomeUsuario: string;
  skip: number;
  limit: number;
};
export type ListAllAlbumOutputDto = {
  albuns: ListAlbumDto[];
  count: number;
};

export type ListAllbumInput = {
  nomeAluno: string;
  numeroContrato: string;
};
export type ListAlbumDto = {
  numeroContrato: string;
  nomeAluno: string;
  tipoAlbum: string;
  evento: string[];
  fotos: string[];
  maxFotos: number;
  minFotos: number;
  createdAt: Date;
};
